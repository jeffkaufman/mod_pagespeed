/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: morlovich@google.com (Maksim Orlovich)

#include "net/instaweb/rewriter/public/csp.h"

#include <iostream>
#include <memory>

#include "pagespeed/kernel/base/basictypes.h"
#include "pagespeed/kernel/base/gtest.h"
#include "pagespeed/kernel/base/string.h"
#include "pagespeed/kernel/base/string_util.h"

namespace net_instaweb {

// Help gTest printing.

::std::ostream& operator<<(::std::ostream& os, const CspSourceExpression& expr) {
  return os << expr.DebugString();
}

::std::ostream& operator<<(::std::ostream& os,
                           const CspSourceExpression::UrlData& url_data) {
  return os << url_data.DebugString();
}

namespace {

TEST(CspParseSourceTest, Quoted) {
  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kSelf),
      CspSourceExpression::Parse("'self' "));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kSelf),
      CspSourceExpression::Parse("   'sElf' "));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kStrictDynamic),
      CspSourceExpression::Parse("  \t 'strict-dynamic' "));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("  \t 'strictly-unknown' "));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnsafeInline),
      CspSourceExpression::Parse("'unsafe-inline'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnsafeEval),
      CspSourceExpression::Parse("'unsafe-eval'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("'unsafe-eviiiiiil'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnsafeHashedAttributes),
      CspSourceExpression::Parse("'unsafe-hashed-attribUtes'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kHashOrNonce),
      CspSourceExpression::Parse("'nonce-qwertyu12345'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kHashOrNonce),
      CspSourceExpression::Parse("'sha256-qwertyu12345='"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kHashOrNonce),
      CspSourceExpression::Parse("'sha256-qwertyu12345/=='"));


  // Some base64 errors.
  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("'sha256-'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("'sha256-qwertyu12345========'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("'sha256-qwertyu1.2345'"));


  // Not a valid hashing algorithm.
  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("'sha1-qwertyu12345'"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("''"));
}

TEST(CspParseSourceTest, NonQuoted) {
  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("   "));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kSchemeSource,
                          CspSourceExpression::UrlData("https", "", "", "")),
      CspSourceExpression::Parse(" https:"));

  EXPECT_EQ(
      CspSourceExpression(
            CspSourceExpression::kSchemeSource,
            CspSourceExpression::UrlData("weird-scheme+-1.0", "", "", "")),
      CspSourceExpression::Parse("weird-scheme+-1.0:"));

  EXPECT_EQ(
      CspSourceExpression(
            CspSourceExpression::kHostSource,
            CspSourceExpression::UrlData("", "*.example.com", "", "")),
      CspSourceExpression::Parse("*.example.com"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("*example.com"));

  // w/o a colon this is a hostname, not a scheme.
  EXPECT_EQ(
      CspSourceExpression(
          CspSourceExpression::kHostSource,
          CspSourceExpression::UrlData("", "http", "", "")),
      CspSourceExpression::Parse("http"));

  EXPECT_EQ(
      CspSourceExpression(
            CspSourceExpression::kHostSource,
            CspSourceExpression::UrlData("http", "www.example.com", "",
                                         "/dir", true)),
      CspSourceExpression::Parse("http://www.example.com/dir"));

  EXPECT_EQ(
      CspSourceExpression(
            CspSourceExpression::kHostSource,
            CspSourceExpression::UrlData("http", "www.example.com", "",
                                         "/dir", false)),
      CspSourceExpression::Parse("http://www.example.com/dir/"));


  EXPECT_EQ(
      CspSourceExpression(
            CspSourceExpression::kHostSource,
            CspSourceExpression::UrlData("http", "www.example.com", "",
                                         "/dir/file.js", true)),
      CspSourceExpression::Parse("http://www.example.com/dir/file.js"));

  EXPECT_EQ(
      CspSourceExpression(
            CspSourceExpression::kHostSource,
            CspSourceExpression::UrlData("", "www.example.com", "",
                                         "/dir/file.js", true)),
      CspSourceExpression::Parse("www.example.com/dir/file.js"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kHostSource,
                          CspSourceExpression::UrlData("", "*", "", "")),
      CspSourceExpression::Parse("*"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("http:!/example.com"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("http://"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("http:/"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("http:/example.com"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("?example.com/dir/file.js"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("http:///dir/file.js"));

  EXPECT_EQ(
      CspSourceExpression(
          CspSourceExpression::kHostSource,
          CspSourceExpression::UrlData("https", "*", "*", "/foo.js", true)),
      CspSourceExpression::Parse("https://*:*/foo.js"));

  // Test for no port after :. Note that this needs an explicit scheme, since
  // www.example.com: would be a valid scheme-source!
  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("http://www.example.com:"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("www.example.com:/foo"));

  EXPECT_EQ(
      CspSourceExpression(
          CspSourceExpression::kHostSource,
          CspSourceExpression::UrlData("https", "*", "443", "/foo.js", true)),
      CspSourceExpression::Parse("https://*:443/foo.js"));

  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kUnknown),
      CspSourceExpression::Parse("https://*:443?foo.js"));

  // Case normalization.
  EXPECT_EQ(
      CspSourceExpression(
          CspSourceExpression::kHostSource,
          CspSourceExpression::UrlData("https", "www.example.com", "", "")),
      CspSourceExpression::Parse(" HttPs://www.EXAMPLE.com"));
}

class CspMatchSourceTest : public ::testing::Test {
 protected:
  void CheckMatch(bool expectation,
                  StringPiece expression,
                  StringPiece origin,
                  StringPiece url) {
    GoogleUrl origin_gurl(origin);
    GoogleUrl url_gurl(url);
    ASSERT_TRUE(origin_gurl.IsAnyValid());
    ASSERT_TRUE(url_gurl.IsAnyValid());

    CspSourceExpression expr(CspSourceExpression::Parse(expression));
    EXPECT_EQ(expectation, expr.Matches(origin_gurl, url_gurl))
        << "Expression:" << expression << " Origin:" << origin
        << " Url:" << url;
  }
};

TEST_F(CspMatchSourceTest, Basic) {
  CheckMatch(false, "'unsafe-inline'", "http://www.example.org",
             "http://www.example.org/foo.js");
  CheckMatch(true, "'self'", "http://www.example.org",
             "http://www.example.org/foo.js");
  CheckMatch(false, "'self'", "http://www.example.org",
             "http://www.example.com/foo.js");
  CheckMatch(true, "*.example.org", "http://www.modpagespeed.com/",
             "http://www.example.org/foo.js");
  CheckMatch(true, "*", "http://www.modpagespeed.com/",
             "http://www.example.org/foo.js");
  CheckMatch(false, "www.example.org/bar.js", "http://www.modpagespeed.com/",
             "http://www.example.org/foo.js");
}

TEST_F(CspMatchSourceTest, Universal) {
  // Any urls on a "network scheme" are OK with *
  CheckMatch(true, "*", "gopher://origin", "http://www.example.com");
  CheckMatch(true, "*", "gopher://origin", "https://www.example.com");
  CheckMatch(true, "*", "gopher://origin", "ftp://www.example.com");

  // Oddly, as spec'd, this doesn't include ws: and wss:
  CheckMatch(false, "*", "gopher://origin", "ws://www.example.com");
  CheckMatch(false, "*", "gopher://origin", "wss://www.example.com");

  // Other schemes have to match origin to be permitted.
  CheckMatch(true, "*", "gopher://origin", "gopher://www.example.com");
  CheckMatch(false, "*", "gopher://origin", "weirder://www.example.com");
}

TEST_F(CspMatchSourceTest, Self) {
  CheckMatch(false, "'self'", "http://www.example.org/a.html",
             "http://www.example.com/b.js");
  CheckMatch(true, "'self'", "http://www.example.com/a.html",
             "http://www.example.com/b.js");
  CheckMatch(true, "'self'", "gopher://www.example.com:123/a.html",
             "gopher://www.example.com:123/b.js");

  // Can upgrade from http to https, but not hop to arbitrary
  // unrelated port.
  CheckMatch(true, "'self'", "http://www.example.com/a.html",
             "https://www.example.com/b.js");
  CheckMatch(false, "'self'", "https://www.example.com/a.html",
             "http://www.example.com/b.js");
  CheckMatch(true, "'self'", "http://www.example.com/a.html",
             "https://www.example.com:443/b.js");
  CheckMatch(false, "'self'", "http://www.example.com/a.html",
             "https://www.example.com:10443/b.js");
  CheckMatch(true, "'self'", "http://www.example.com:10443/a.html",
             "https://www.example.com:10443/b.js");
}

TEST_F(CspMatchSourceTest, Scheme) {
  CheckMatch(true, "alpha:", "gopher://whatever", "alpha://example.com");
  CheckMatch(false, "alpha:", "gopher://whatever", "beta://example.com");

  // Protocol upgrade/switch special rules.
  CheckMatch(true, "http:", "gopher://whatever", "https://example.com");
  CheckMatch(false, "http:", "gopher://whatever", "ftp://example.com");

  CheckMatch(false, "https:", "gopher://whatever", "http://example.com");
  CheckMatch(false, "https:", "gopher://whatever", "ftp://example.com");
}

TEST_F(CspMatchSourceTest, Schemeless) {
  // If there is no scheme in the CSP expression, one from origin matters.
  CheckMatch(true, "www.example.com", "http://whatever",
             "http://www.example.com/foo.js");
  CheckMatch(false, "www.example.com", "http://whatever",
             "http://other.example.com/foo.js");
  CheckMatch(true, "www.example.com", "gopher://whatever",
             "gopher://www.example.com/foo.js");
  CheckMatch(false, "www.example.com", "alpha://whatever",
             "beta://www.example.com/foo.js");

  // Upgrades and some switches are OK, too.
  CheckMatch(true, "www.example.com", "http://whatever",
             "https://www.example.com/foo.js");
  CheckMatch(false, "www.example.com", "https://whatever",
             "ftp://www.example.com/foo.js");
  CheckMatch(false, "www.example.com", "https://whatever",
             "http://www.example.com/foo.js");
}

TEST_F(CspMatchSourceTest, Host) {
  CheckMatch(true, "http://www.example.com", "http://whatever",
             "http://www.example.com/foo.js");
  CheckMatch(true, "http://www.exAmple.com", "http://whatever",
             "http://www.example.com/foo.js");
  CheckMatch(false, "http://www.example.com", "http://whatever",
             "http://static.example.com/foo.js");
  CheckMatch(true, "http://*.exAmple.com", "http://whatever",
             "http://www.example.com/foo.js");
  CheckMatch(false, "http://*.exAmple.com", "http://whatever",
             "http://example.com/foo.js");
  CheckMatch(true, "http://*", "http://whatever",
             "http://example.com/foo.js");
}

TEST_F(CspMatchSourceTest, Port) {
  CheckMatch(true, "http://www.example.com:123", "http://whatever",
             "http://www.example.com:123/foo.js");
  CheckMatch(true, "http://www.example.com:80", "http://whatever",
             "http://www.example.com/foo.js");
  CheckMatch(false, "http://www.example.com:123", "http://whatever",
             "http://www.example.com:999/foo.js");

  // No port doesn't mean anything goes --- it means only default is OK.
  CheckMatch(false, "www.example.com", "http://whatever",
             "http://www.example.com:999/foo.js");
  CheckMatch(true, "www.example.com", "http://whatever",
             "http://www.example.com:80/foo.js");
  CheckMatch(false, "www.example.com", "http://whatever",
             "http://www.example.com:443/foo.js");
  CheckMatch(true, "www.example.com", "http://whatever",
             "https://www.example.com:443/foo.js");

  // With explicit ports, upgrading to 443 is OK...
  CheckMatch(true, "www.example.com:80", "http://whatever",
             "https://www.example.com:443/foo.js");

  // * really does match anything, though.
  CheckMatch(true, "http://www.example.com:*", "http://whatever",
             "http://www.example.com:123/foo.js");
  CheckMatch(true, "http://www.example.com:*", "http://whatever",
             "http://www.example.com/foo.js");
  CheckMatch(true, "http://www.example.com:*", "http://whatever",
             "http://www.example.com:999/foo.js");
}

TEST_F(CspMatchSourceTest, Path) {
  // Note that the trailing / distinguishes between path and file
  // expressions.
  CheckMatch(true, "www.example.com/css/", "http://whatever",
             "http://www.example.com/css/pretty.css");
  CheckMatch(false, "www.example.com/css", "http://whatever",
             "http://www.example.com/css/pretty.css");
  CheckMatch(true, "www.example.com/a/b/c/", "http://whatever",
             "http://www.example.com/a/b/c/d/e/f/pretty.css");
  CheckMatch(false, "www.example.com/css/pretty.css", "http://whatever",
             "http://www.example.com/css/ugly.css");

  // %-escapes are also supported.
  CheckMatch(true, "www.example.com/%63ss/", "http://whatever",
             "http://www.example.com/c%73s/pretty.css");

  // Paths are case sensitive.
  CheckMatch(false, "www.example.com/CSS/", "http://whatever",
             "http://www.example.com/css/pretty.css");

  // Making sure we always get consistent canonicalization rules.
  // notably here %2f is / --- which GURL knows not to unescape, but simpler
  // GoogleUrl::UnescapeIgnorePlus wouldn't.
  CheckMatch(true, "www.example.com/cs%2f/", "http://whatever",
             "http://www.example.com/cs%2f/pretty.css");
}

TEST_F(CspMatchSourceTest, CaseSensitivity) {
  // Scheme is case-insensitive, so is host.
  CheckMatch(true, "HTTP:", "gopher://whatever", "http://www.example.com");
  CheckMatch(true, "http:", "gopher://whatever", "HTTP://www.example.com");
  CheckMatch(true, "HTTP://WWW.EXAMPLE.COM", "gopher://whatever",
             "http://www.example.com");
  CheckMatch(true, "http://www.example.com", "gopher://whatever",
             "HTTP://WWW.EXAMPLE.COM");

  // Paths are case-sensitive, though.
  CheckMatch(false, "http://www.example.com/a.js", "gopher://whatever",
             "http://www.example.com/A.JS");


  // Make sure the logic about default ports works correctly with
  // weird case, too.
  CheckMatch(true, "'self'", "http://www.example.com",
             "HTTP://www.example.com:80/something");
}

TEST(CspParseSourceListTest, None) {
  // Special keyword "none", semantically equivalent to an empty
  // expressions list.
  std::unique_ptr<CspSourceList> n1(CspSourceList::Parse(" 'None'  "));
  std::unique_ptr<CspSourceList> n2(CspSourceList::Parse("'none'"));
  ASSERT_TRUE(n1 != nullptr);
  ASSERT_TRUE(n2 != nullptr);
  EXPECT_TRUE(n1->expressions().empty());
  EXPECT_TRUE(n2->expressions().empty());
}

TEST(CspParseSourceListTest, Flags) {
  {
    std::unique_ptr<CspSourceList> l1(CspSourceList::Parse("'unsafe-eval'"));
    EXPECT_FALSE(l1->saw_unsafe_inline());
    EXPECT_TRUE(l1->saw_unsafe_eval());
    EXPECT_FALSE(l1->saw_strict_dynamic());
    EXPECT_FALSE(l1->saw_unsafe_hashed_attributes());
  }

  {
    std::unique_ptr<CspSourceList> l2(CspSourceList::Parse("'unsafe-inline'"));
    EXPECT_TRUE(l2->saw_unsafe_inline());
    EXPECT_FALSE(l2->saw_unsafe_eval());
    EXPECT_FALSE(l2->saw_strict_dynamic());
    EXPECT_FALSE(l2->saw_unsafe_hashed_attributes());
  }

  {
    std::unique_ptr<CspSourceList> l3(
        CspSourceList::Parse("'unsafe-hashed-attributes'"));
    EXPECT_FALSE(l3->saw_unsafe_inline());
    EXPECT_FALSE(l3->saw_unsafe_eval());
    EXPECT_FALSE(l3->saw_strict_dynamic());
    EXPECT_TRUE(l3->saw_unsafe_hashed_attributes());
  }

  {
    std::unique_ptr<CspSourceList> l4(
        CspSourceList::Parse("'strict-dynamic'"));
    EXPECT_FALSE(l4->saw_unsafe_inline());
    EXPECT_FALSE(l4->saw_unsafe_eval());
    EXPECT_TRUE(l4->saw_strict_dynamic());
    EXPECT_FALSE(l4->saw_unsafe_hashed_attributes());
  }
}

TEST(CspParseTest, Empty) {
  std::unique_ptr<CspPolicy> policy(CspPolicy::Parse("   "));
  EXPECT_EQ(policy, nullptr);
}

TEST(CspParseTest, Basic) {
  std::unique_ptr<CspPolicy> policy(CspPolicy::Parse(
      "default-src *; script-src https: 'unsafe-inline' 'unsafe-eval'"));
  ASSERT_TRUE(policy != nullptr);
  ASSERT_TRUE(policy->SourceListFor(CspDirective::kDefaultSrc) != nullptr);
  const CspSourceList* default_list =
      policy->SourceListFor(CspDirective::kDefaultSrc);
  const std::vector<CspSourceExpression>& default_src =
      default_list->expressions();
  ASSERT_EQ(1, default_src.size());
  EXPECT_EQ(CspSourceExpression::kHostSource, default_src[0].kind());
  EXPECT_EQ(CspSourceExpression::UrlData("", "*", "", ""),
            default_src[0].url_data());
  EXPECT_FALSE(default_list->saw_unsafe_inline());
  EXPECT_FALSE(default_list->saw_unsafe_eval());
  EXPECT_FALSE(default_list->saw_strict_dynamic());
  EXPECT_FALSE(default_list->saw_unsafe_hashed_attributes());


  ASSERT_TRUE(policy->SourceListFor(CspDirective::kScriptSrc) != nullptr);
  const CspSourceList* source_list =
      policy->SourceListFor(CspDirective::kScriptSrc);
  const std::vector<CspSourceExpression>& script_src =
      source_list->expressions();
  ASSERT_EQ(1, script_src.size());
  EXPECT_EQ(
      CspSourceExpression(CspSourceExpression::kSchemeSource,
                          CspSourceExpression::UrlData("https", "", "", "")),
      script_src[0]);
  EXPECT_TRUE(source_list->saw_unsafe_inline());
  EXPECT_TRUE(source_list->saw_unsafe_eval());
  EXPECT_FALSE(source_list->saw_strict_dynamic());
  EXPECT_FALSE(source_list->saw_unsafe_hashed_attributes());
}

TEST(CspParseTest, Repeated) {
  // Repeating within same policy doesn't do anything.
  std::unique_ptr<CspPolicy> policy(CspPolicy::Parse(
      "script-src 'unsafe-inline' 'unsafe-eval'; script-src 'strict-dynamic'"));
  ASSERT_TRUE(policy != nullptr);
  const CspSourceList* source_list =
      policy->SourceListFor(CspDirective::kScriptSrc);
  ASSERT_TRUE(source_list != nullptr);
  const std::vector<CspSourceExpression>& script_src =
      source_list->expressions();
  ASSERT_EQ(0, script_src.size());
  EXPECT_TRUE(source_list->saw_unsafe_inline());
  EXPECT_TRUE(source_list->saw_unsafe_eval());
  EXPECT_FALSE(source_list->saw_strict_dynamic());
  EXPECT_FALSE(source_list->saw_unsafe_hashed_attributes());
}

}  // namespace

}  // namespace net_instaweb
