import _ from "lodash";

class StubAPI {
    constructor() {
        this.events = [];
    }

    find(id) {
        let index = _.findIndex(
            this.events,
            event => `${event.phone}${event.cell}` === id
        );
        if (index !== -1) {
            return this.events[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.events, event => event.phone === k);
        return elements;
    }

    initialize(events) {
        this.events = events;
    }

    getAll() {
        return this.events;
    }

    update(key, email, phone) {
        let index = _.findIndex(this.events, event => event.phone === key);
        if (index !== -1) {
            this.events[index].phone = phone;
            this.events[index].email = email;
            return true;
        }
        return false;
    }
}

export default new StubAPI();