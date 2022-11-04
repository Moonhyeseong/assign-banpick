describe('lobby room list', () => {
  it('is room exist', () => {
    cy.visit('/');

    cy.window().then(win => {
      const pageProps = win.__NEXT_DATA__.props.pageProps.gameData;

      if (pageProps.length === 0) {
        cy.get('[data-cy=EmptyList]').should('exist');
      } else {
        cy.get('[data-cy=room]').each(($el, index) => {
          cy.wrap($el).should('contain.text', pageProps[index].title);
        });
      }
    });
  });
});

export {};
