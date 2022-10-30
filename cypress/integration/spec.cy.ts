describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.contains('생성된 게임이 없습니다.').should('exist');
  });
});
