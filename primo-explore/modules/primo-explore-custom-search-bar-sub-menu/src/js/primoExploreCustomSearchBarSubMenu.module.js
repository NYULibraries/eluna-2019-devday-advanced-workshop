angular
  .module('primoExploreCustomSearchBarSubMenu', [])
  .controller('customSearchBarSubMenuController', ['customSearchBarSubMenuConfig', function (customSearchBarSubMenuConfig) {
    const ctrl = this;

    ctrl.$onInit = function() {
      ctrl.items = customSearchBarSubMenuConfig.items;
      ctrl.backgroundColor = customSearchBarSubMenuConfig.backgroundColor;
    };

    ctrl.clickLink = function (link) {
      window.open(link, '_blank');
    };
  }])
  .component('customSearchBarSubMenu', {
    controller: 'customSearchBarSubMenuController',
    template: /*html*/`
    <div class="layout-align-end-center layout-row flex search-bar-sub-menu" style="background-color:{{ $ctrl.backgroundColor }};">
      <ul>
        <li ng-repeat="item in $ctrl.items">
        <button
          aria-label="{{ $ctrl.item.description }}"
          ng-click="$ctrl.clickLink(item.link)" class="button-with-icon zero-margin md-button md-small"
          type="button">
          <md-tooltip md-direction="bottom" md-delay="500">
            {{ item.description }}
          </md-tooltip>
          <prm-icon style="z-index:1" icon-type="svg" svg-icon-set="{{item.icon.set}}" icon-definition="{{item.icon.icon}}"></prm-icon>
          <span class="search-bar-sub-menu-item" ng-class="(item.show_xs) ? '' : 'hide-xs'">{{ item.name }}</span>
        </button>
        </li>
      </ul>
    </div>`,
  });