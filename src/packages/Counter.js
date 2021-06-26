import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CounterController } from './CounterController';
let Counter = class Counter extends LitElement {
    constructor(name) {
        super();
        this.counter = new CounterController(this, 0);
        this.name = name;
    }
    onClick() {
        console.log('clicked');
    }
    render() {
        var _a;
        return html `
      <div>
        <p>Hello, ${this.name}!</p>
        <button @click=${this.onClick}>click!</button>
        <button @click=${() => { var _a; return (_a = this.counter) === null || _a === void 0 ? void 0 : _a.increment(); }}>+1</button>
        <button @click=${() => { var _a; return (_a = this.counter) === null || _a === void 0 ? void 0 : _a.decrement(); }}>-1</button>
        <p>count: ${(_a = this.counter) === null || _a === void 0 ? void 0 : _a.counter}</p>
      </div>
    `;
    }
};
__decorate([
    property()
], Counter.prototype, "name", void 0);
Counter = __decorate([
    customElement('counter-component')
], Counter);
export { Counter };
//# sourceMappingURL=Counter.js.map