/* eslint-disable no-undef */
/* eslint-disable quotes */
describe('Statistics App', ()=>{
    beforeEach(()=> {
        cy.viewport(1280, 720);
        cy.visit('http://localhost:3000');
    });
    it('front page can be opened', ()=>{
        cy.contains('World of Warships Stats');
        cy.contains('Top Tip:');
    }),
    it('Input can be typed and clicked',async()=>{
        await cy.get('input').type('TheDarkCalling');
        cy.contains('TheDarkCalling').click();
    });
    it('Data can be found and displayed',()=>{
        cy.get('input').type('TheDarkCalling');
        cy.contains('TheDarkCalling').click();
        cy.contains('Pick A Stat!');
        cy.contains('Wins').click();
    });
});