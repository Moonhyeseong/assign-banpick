describe('create game', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('[data-cy=makeGameBtn]').click();
    cy.contains('방 만들기').should('exist');

    cy.get('[data-cy=roomNameInput]').type('cypress test');
    cy.get('[data-cy=blueTeamNameInput]').type('blue');
    cy.get('[data-cy=redTeamNameInput]').type('red');
    cy.get('[data-cy=modeBtn]').click();
    cy.get('[data-cy=startBtn]').click();

    cy.get('[data-cy=playerNameInput]').type('player1');
    cy.get('[data-cy=sideBtn]').click();
    cy.get('[data-cy=joinBtn]').click();

    cy.contains('Ready').should('exist');
    cy.window().then(win => {
      // cy.url().should('include', win.sessionStorage.getItem('GAEM_ID'));
      cy.log(win.sessionStorage.getItem('GAEM_ID'));
    });
    cy.get('[data-cy=readyBtn]').click();
  });
});
