export class CounterController {
    constructor(host, intialCount) {
        this._counter = 0;
        intialCount && this.setCounter(intialCount);
        this.host = host;
        this.host.addController(this);
    }
    get counter() {
        return this._counter;
    }
    setCounter(value) {
        this._counter = value;
        this.host.requestUpdate();
    }
    increment() {
        this.setCounter(this._counter + 1);
    }
    decrement() {
        this.setCounter(this._counter - 1);
    }
    hostConnected() {
        console.log('connected');
    }
    hostDisconnected() { }
}
//# sourceMappingURL=CounterController.js.map