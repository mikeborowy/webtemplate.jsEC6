import $ from 'jquery';

export class BaseElement{
    constructor(){
        this.element = null;
        let _target = null;
    }

    addTo(target){

        this.create();
        target.append(this.element);
        this._target = target;
    }

    destoyer() {

        if (this._target) {
            $(this.element).remove();
            this.addTo(this._target);
        }
    }

    getTarget(){
        return this._target;
    }

    create(){
        let htmlContent = this.getHTMLContent();
        this.element = $(htmlContent);
    }

    getHTMLContent(){
       throw 'Please override getHTMLContent() in BaseElement';
    }
}