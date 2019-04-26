import searchBarSubMenuConfig from './fixtures/config.js';

describe('primoExploreCustomSearchBarSubMenu component', () => {
  // sets up angular-mock instance and can inject constants, factories, etc.
  beforeEach(module('primoExploreCustomSearchBarSubMenu', ($provide) => {
    $provide.constant('customSearchBarSubMenuConfig', searchBarSubMenuConfig);
  }));

  // create a compiled instance of a component as a jqLite object
  let $element, element;
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    const $compile = _$compile_;
    const $scope = _$rootScope_.$new();

    $element = $compile(`<custom-search-bar-sub-menu />`)($scope);
    element = $element[0];
    $scope.$digest();
  }));

  describe('buttons', () => {
    let $buttons;
    beforeEach(() => {
      $buttons = $element.find('button');
    });

    it('has two buttons');

    it('each button has the appropriate description');
  });

  describe('icons', () => {
    it('has two prm-icons');
    it('prm-icon directives have appropriate svg-icon-set');
    it('prm-icon directives gave appropriate icon-definition');
  });

  describe('tooltip', () => {

  });

  describe('background-color', () => {

  });
});
