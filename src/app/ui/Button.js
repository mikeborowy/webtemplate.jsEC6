import {BaseElement} from '../BaseElement';
import {componentHandler} from 'material-design-lite';


export class Button extends BaseElement {

    constructor(title) {
        super();

        let _style = '';

        this.title = title;
        let _title = this.title;

        // this.enableJS();
    }

    getHTMLContent() {
        return`
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style="${this.style}">
                ${this.title}
            </button>
        `;
    }

    //enables material-design-lite javascript
    enableJS(){
        componentHandler.upgradeElement();
    }

    /** 
     * GETTERS / SETTERS
     */
    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

     get style(){
        return this._style;
    }

    set style(string){
        this._style = string;
    }
}