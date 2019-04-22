describe('searchbar-submenu', () => {
  before(() => {
    cy.visit('/search?vid=NYU');
  })

  describe('submenu', () => {
    it('exists')

    it('is visible')

    describe('has the correct menu items', () => {
      const submenuItems = [
        {
          label: "Provide Feedback",
          link: "https://nyu.qualtrics.com/jfe/form/SV_blQ3OFOew9vl6Pb?Source=NYU",
        },
        {
          label: "Library Hours",
          link: "https://guides.nyu.edu/library-hours",
        }
      ]

      it(`has ${submenuItems.length} buttons`)

      submenuItems.forEach(({ label, link }, idx) => {
        it(`has ${label} with link to ${link}`)
      })
    })
  })
})