import {BaseElement} from './BaseElement';

export class BasePage extends BaseElement{
    constructor(pageTitle) {
        super();
        
        this.pageTitle = pageTitle;

        /** Every common for pages components can be placed in here: Footer, Sidebar */
    }
    
}