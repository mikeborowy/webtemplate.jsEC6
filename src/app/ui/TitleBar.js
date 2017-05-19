import {BaseElement} from '../BaseElement';
import {componentHandler} from 'material-design-lite';

export class TitleBar extends BaseElement {

    constructor(title) {
        super();

        this.title = title;
        let _title = this.title;

        this.id = "TitleBar";
        let _links = [];
        // let _links = this.links;
    }

    //enables material-design-lite javascript
    enableJS(){
        componentHandler.upgradeElement();
    }
    
    /**
     *
     * @param (name: string, ahref: string)
     */
    addLink(title, href) {

        if(!this.links)
            this.links = [];

        this.links.push({title, href});
        
        // this.destoyer();
    }

    removeLink(linktitle) {
        this
            .links
            .find((link, i) => {

                if (link.title === linktitle) {
                    this
                        .links
                        .splice(i, 1);
                    this.destoyer();
                }
            });
    }

    getHTMLContent() {

        let linkHTML = '';
        for (let l of this.links) {
            linkHTML += `<a class="mdl-navigation__link">${l.title}</a>\n`;
        }

        return `
            <div id="${this.id}">
                <!-- Always shows a header, even in smaller screens. -->
                <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">${this.title}</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        ${linkHTML}
                    </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${this.title}</span>
                    <nav class="mdl-navigation">
                        ${linkHTML}
                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content"><!-- Your content goes here --></div>
                </main>
                </div>
            </div>
        `;
    }

    /**
     * GETTERS / SETTERS
     */
    get title() {
        return this._title;
    }

    set title(string) {
        this._title = string;
        this.destoyer();
    }

    get links() {
        return this._links;
    }
    set links(array) {

        this._links = array;
        this.destoyer();
    }
 }