class EventEmitter {
    
    constructor() {
        // 监听的事件
        this.events = {}
    }

    on(event, fn) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(fn);
    }

    emit(event, ...args) {
        if (!this.events[event]) {
            throw new Error('event not register');
        }
        for (const cb of this.events[event]) {
            cb(...args);
        }
    }
}

module.exports = EventEmitter;