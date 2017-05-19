import {BaseElement} from '../BaseElement';

export class Image extends BaseElement {

    constructor(filename) {
        super();

        this.filename = filename;
        // let _filename = this.filename;
    }

    getHTMLContent() {
        return`
            <img src="${this.filename}" style="width: 100%;">
        `;
    }

    /**
     * GETTERS / SETTERS
     */    
    get filename(){
        return this._filename;
    }
    
    set filename(value){
        this._filename = value;
        
    }
}