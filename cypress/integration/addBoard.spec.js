/// <reference types='cypress'/>

import { board } from "../page_objects/Board.js";
import { loginPage } from "../page_objects/login.js";


describe ("Add board testovi", () => {

    beforeEach ('Visit login', ()=> {
        cy.visit ('/login');
    loginPage.login ("lola@gmail.com", "lola123");
    loginPage.loginBtn.should('not.be.visible');
    });


   it('Create board', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards',

        }).as('createBoardIntercept');

        cy.wait('@createBoardIntercept').then((intercept) => {
            expect(intercept.response.statusCode).eq(201)
            expect(intercept.response.body).to.have.property('id');

            boardId = intercept.response.body.id;

        });
            
   it ('Create board', ()=> {
       
    cy.visit ('/my-organizations');

    board.boardTitle.type('Dragana123');
    board.nextBtn.click ();
    board.scrumBtn.click ();
    board.finishBtn.click ();
    board.boardTitle.should ('have.text', 'Dragana123')
});

});
});