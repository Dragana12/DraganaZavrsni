/// <reference types='cypress'/>

class AddBoard {


    get addBoard(){
        return cy.get('[class="vs-c-my-organization__board vs-c-my-organization__board-new"]');
    }

    get boardTitle(){
        return cy.get('input');
    }

    get nextBtn(){
        return cy.get('[name="next_btn"]');
    }
    get scrumBtn (){
        return cy.get('[value="scrum_board"]');
    }

    get finishBtn (){
        return cy.get('[class="el-button vs-c-button-focus el-button--success el-button--large"]')
    }

    get confgBtn() {
        return cy.get ('[href="/boards/7081/settings"}');
    }

    get delBoard () {
        return cy.get ('[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]');
    }
    
    addBoard (title) {
        this.addBoard.click();
        this.boardTitle.type (title);
        this.nextBtn.click ({multiple:true, force:true});
        this.scrumBtn.click();
        this.finishBtn.click();
    }

    deleteBoard (title) {
        this.confgBtn.click();
        this.boardTitle.find (title);
        this.delBoard.click ();
    }
    
}
export const board = new AddBoard();
