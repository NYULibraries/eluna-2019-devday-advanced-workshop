import searchBarSubMenuConfig from './fixtures/config.js';

describe('primoExploreCustomSearchBarSubMenu Controller', () => {
  // sets up angular-mock instance and can inject constants, factories, etc.
  beforeEach(module('primoExploreCustomSearchBarSubMenu', ($provide) => {
    $provide.constant('customSearchBarSubMenuConfig', searchBarSubMenuConfig);
  }));

  // gain access to a particular controller instance attached to a component
  let controller;
  beforeEach(inject(function (_$componentController_) {
    const $componentController = _$componentController_;

    controller = $componentController(
      'customSearchBarSubMenu',
    );
  }));

  describe('$onInit', () => {
    beforeEach(() => {
      controller.$onInit();
    });

    it('assigns configuration items to controller.items');

    it('assigns configuration backgroundColor to the controller.backgroundColor');
  });

  describe('clickLink', () => {
    beforeEach(() => {
      // ?
      spyOn(window, 'open').and.stub();
    });

    it('opens the link in a new window');
  });
});