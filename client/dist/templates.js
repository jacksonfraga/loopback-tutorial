(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/categorias.html",
    "<div class=\"section\" id=\"categorias\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in categorias\">{{item.name}}</li>\n" +
    "    </ul>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/produtos.html",
    "<div class=\"section\" id=\"produtos\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in produtos\">{{item.name}}</li>\n" +
    "    </ul>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user_menu.html",
    "<div>\n" +
    "  <div class=\"user-data\" ng-show=\"user.data\">\n" +
    "    <div>\n" +
    "      Welcome, {{user.data.username}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"login\" ng-show=\"!user.data\">\n" +
    "    <a href=\"/auth/facebook\">\n" +
    "      <img src=\"//i.stack.imgur.com/LKMP7.png\">\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();
