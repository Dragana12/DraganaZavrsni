/// <reference types='cypress'/>

import { loginPage } from "../page_objects/login.js";


describe ("Login testovi", () => {

    beforeEach ('Visit login', ()=> {
        cy.visit ('/')
    });

    it ( 'Login sa pogrešnim mejlom', () => {
        loginPage.login ("lolagmail.com", "lola123");
        loginPage.badEmail.should ('have.text', 'The email field must be a valid email');
    
    });

    it ( 'Login sa pogrešnim passwordom', () => {
        loginPage.login ("lola@gmail.com", "lol");
        loginPage.wrongPassMessage.should ('have.text', 'The password field must be at least 5 characters');
        loginPage.loginBtn.should ('be.visible');
    

    });

    it ( 'Login sa nepopunjenim email poljem', () => {
        loginPage.login (" ", " ");
        loginPage.email.should ('not.contain.text');
        loginPage.email.should ('be.empty')
        loginPage.loginBtn.should ('be.visible');
    });

    it ( 'Validan login', () => {
        loginPage.login ("lola@gmail.com", "lola123");
    
    });


});
