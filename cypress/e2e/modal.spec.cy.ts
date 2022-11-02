describe('modal', () => {
  it('create game', () => {
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

    cy.contains('1 : 1').should('exist');
    cy.contains('player1').should('exist');
    cy.contains('Ready').should('exist');

    cy.wait(500);
    cy.get('[data-cy=readyBtn]').click();
  });
});

export {};
