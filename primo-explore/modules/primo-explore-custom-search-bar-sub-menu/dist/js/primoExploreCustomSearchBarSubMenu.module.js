"use strict";

angular.module('primoExploreCustomSearchBarSubMenu', []).controller('customSearchBarSubMenuController', ['customSearchBarSubMenuConfig', function (customSearchBarSubMenuConfig) {
  var ctrl = this;

  ctrl.$onInit = function () {
    ctrl.items = customSearchBarSubMenuConfig.items;
    ctrl.backgroundColor = customSearchBarSubMenuConfig.backgroundColor;
  };

  ctrl.clickLink = function (link) {
    window.open(link, '_blank');
  };
}]).component('customSearchBarSubMenu', {
  controller: 'customSearchBarSubMenuController',
  template: "\n    <div class=\"layout-align-end-center layout-row flex search-bar-sub-menu\" style=\"background-color:{{ $ctrl.backgroundColor }};\">\n      <ul>\n        <li ng-repeat=\"item in $ctrl.items\">\n        <button\n          aria-label=\"{{ $ctrl.item.description }}\"\n          ng-click=\"$ctrl.clickLink(item.link)\" class=\"button-with-icon zero-margin md-button md-small\"\n          type=\"button\">\n          <md-tooltip md-direction=\"bottom\" md-delay=\"500\">\n            {{ item.description }}\n          </md-tooltip>\n          <prm-icon style=\"z-index:1\" icon-type=\"svg\" svg-icon-set=\"{{item.icon.set}}\" icon-definition=\"{{item.icon.icon}}\"></prm-icon>\n          <span class=\"search-bar-sub-menu-item\" ng-class=\"(item.show_xs) ? '' : 'hide-xs'\">{{ item.name }}</span>\n        </button>\n        </li>\n      </ul>\n    </div>"
});