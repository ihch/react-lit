import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './Counter.js';
let LitStart = class LitStart extends LitElement {
    render() {
        return html `
      <counter-component name="hito"></counter-component>
    `;
    }
};
LitStart = __decorate([
    customElement('lit-start')
], LitStart);
export { LitStart };
//# sourceMappingURL=LitStart.js.map
