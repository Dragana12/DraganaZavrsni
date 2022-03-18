/// <reference types='cypress'/>

import { board } from "../page_objects/Board.js";
import { loginPage } from "../page_objects/login.js";


describe ("Delete board", () => {

    it('Delete', ()=> {
        cy.visit ('/login');
    loginPage.login ("lola@gmail.com", "lola123");
    cy.intercept({
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
      }).as('loginRequest');

    });

      it ('Delete board', ()=>{
        cy.visit ('/boards')
          board.boardTitle.find ('Dragana123');
          board.delBoard.click ();
          board.boardTitle.should ('be.disabled');


      });

});
