import {BaseElement} from '../BaseElement';
import {componentHandler} from 'material-design-lite';

export class Table extends BaseElement {

constructor(headers, data) {
    super();

    this.headers = headers;
    this.data = data;

    console.log(data);

    this.id = "DataTable";
    // this.enableJS();
}

getHTMLContent() {

    let headerHTML = ``;
    for (let h of this.headers) {
        headerHTML += `<th class="mdl-data-table__cell--non-numeric">${h}</th>`;
    }

    let rowsHTML = ``;
    for (let row of this.data) {

        rowsHTML += `<tr>`;

        for (let prop of this.headers) {

            let cell = row[prop.toLowerCase()];
            rowsHTML += `<td class="mdl-data-table__cell--non-numeric">${cell}</td>`;
        }
        rowsHTML += `</tr>`;
    }

    return `
            <div id=${this.id}>
                <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                      <tr>
                       ${headerHTML}
                      </tr>
                    </thead>
                    <tbody>
                      ${rowsHTML}
                    </tbody>
                </table>
            </div>
        `;
}

//enables material-design-lite javascript
enableJS() {
    componentHandler.upgradeElement();
}

/**
     * GETTERS / SETTERS
     */

}

