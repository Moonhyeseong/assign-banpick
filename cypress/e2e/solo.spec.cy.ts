describe('solo mode', () => {
  beforeEach(() => {
    cy.wait(500);
  });

  it('start solo game', () => {
    cy.visit('/');
    cy.get('[data-cy=soloGameBtn]').click();

    cy.get('[data-cy=timerOnBtn]').click();
    cy.get('[data-cy=startBtn]').click();

    describe('1st ban phase', () => {
      it('1st ban phase selecting', () => {
        cy.get('[data-cy=phaseInfo]').should('have.text', '1st BAN PHASE');

        cy.get('[data-cy=TeemoCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=AsheCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=GarenCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=GnarCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=GalioCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=NamiCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);
      });
    });

    describe('1st pick phase', () => {
      it('1st pick phase selecting', () => {
        cy.get('[data-cy=phaseInfo]').should('have.text', '1st PICK PHASE');

        cy.get('[data-cy=LeonaCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Leona').should('exist');
        cy.wait(500);

        cy.get('[data-cy=RyzeCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Ryze').should('exist');
        cy.wait(500);

        cy.get('[data-cy=LuluCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Lulu').should('exist');
        cy.wait(500);

        cy.get('[data-cy=RivenCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Riven').should('exist');
        cy.wait(500);

        cy.get('[data-cy=MaokaiCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Maokai').should('exist');
        cy.wait(500);

        cy.get('[data-cy=ViCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Vi').should('exist');
        cy.wait(500);
      });
    });

    describe('2nd ban phase', () => {
      it('2nd ban phase selecting', () => {
        cy.get('[data-cy=phaseInfo]').should('have.text', '2nd BAN PHASE');

        cy.get('[data-cy=BrandCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=VarusCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=RenektonCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);

        cy.get('[data-cy=JayceCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.wait(500);
      });
    });

    describe('2nd pick phase', () => {
      it('2nd pick phase selecting', () => {
        cy.get('[data-cy=phaseInfo]').should('have.text', '2nd PICK PHASE');

        cy.get('[data-cy=ZedCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Zed').should('exist');
        cy.wait(500);

        cy.get('[data-cy=KarmaCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Karma').should('exist');
        cy.wait(500);

        cy.get('[data-cy=JaxCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Jax').should('exist');
        cy.wait(500);

        cy.get('[data-cy=OlafCard]').click();
        cy.get('[data-cy=selectChampion]').click();
        cy.contains('Olaf').should('exist');
        cy.wait(500);
      });
    });
  });
});

export {};
