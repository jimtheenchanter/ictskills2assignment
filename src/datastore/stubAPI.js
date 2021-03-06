import _ from "lodash";

class StubAPI {
    constructor() {
        this.events = [
            {
                id: 1,
                bridename: "Katie",
                groomname: "Ivan",
                venue: "Angler's Rest",
                date: "2018-08-04",
                mobile: "+3538695485912",
                email: "katieandivan@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564740843/happycouple1.jpg",
                latitude: "54.8646",
                longitude: "-7.3136",
                firstdance: "https://www.youtube.com/watch?v=MmyDosjjP5U",
                starttime:  "21:30",
                finishtime: "02:00"
            },
            {
                id: 2,
                bridename: "Steffi",
                groomname: "Brian",
                venue: "Dromquinna Manor",
                date: "2018-08-09",
                mobile: "+3538695485914",
                email: "ksteffibrian@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1565949158/happycouple8.jpg",
                latitude: "51.871379",
                longitude: "-9.643672",
                firstdance: "https://www.youtube.com/watch?v=MmyDosjjP5U",
                starttime:  "21:30",
                finishtime: "02:00"

            },

            {
                id: 3,
                bridename: "Naile",
                groomname: "James",
                venue: "Family Barn",
                date: "2018-08-17",
                mobile: "+3538695485914",
                email: "nailjames@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple3.jpg",
                latitude: "53.270350",
                longitude: "-7.430745",
                firstdance: "https://www.youtube.com/watch?v=MmyDosjjP5U",
                starttime:  "21:30",
                finishtime: "02:00"

            },
            {
                id: 4,
                bridename: "Aoibheann",
                groomname: "Jimmy",
                venue: "Fallon & Byrne",
                date: "2018-08-23",
                mobile: "+3538695485914",
                email: "aoibheannJimmy@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1565949158/happycouple10.jpg",
                latitude: "52.925765",
                longitude: "-8.180390",
                firstdance: "https://www.youtube.com/watch?v=MmyDosjjP5U",
                starttime:  "21:30",
                finishtime: "02:00"

            }
            // {
            //     id: 3,
            //     bridename: "Naile",
            //     groomname: "James",
            //     venue: "Hay Barn",
            //     date: "2018-08-17",
            //     mobile: "+3538695485915",
            //     email: "katieandivan@hotmail.org",
            //     picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple2.jpg",
            //     coordinates: {
            //         latitude: "53.270350",
            //         longitude: "-7.430745"
            //     }
            // },
            // {
            //     id: 4,
            //     bridename: "Aoibheann",
            //     groomname: "Jimmy",
            //     venue: "Fallon and Byrne",
            //     date: "2018-08-23",
            //     mobile: "+3538695485916",
            //     email: "katieandivan@hotmail.org",
            //     picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple2.jpg",
            //     coordinates: {
            //         latitude: "53.322786",
            //         longitude: "-6.264836"
            //     }
            // }
            // ,
            // {
            //     id: 5,
            //     bridename: "Clare",
            //     groomname: "Matt",
            //     venue: "Ashley Park House",
            //     date: "2018-08-24",
            //     mobile: "+3538695485917",
            //     email: "katieandivan@hotmail.org",
            //     picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564740843/happycouple1.jpg",
            //     coordinates: {
            //         latitude: "52.925765",
            //         longitude: "-8.180390"
            //     }
            // },
            // {
            //     id: 6,
            //     bridename: "Roisin",
            //     groomname: "Colm",
            //     venue: "Airfield Estate",
            //     date: "2018-08-31",
            //     mobile: "+3538695485918",
            //     email: "katieandivan@hotmail.org",
            //     picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple3.jpg",
            //     coordinates: {
            //         latitude: "53.288011",
            //         longitude: "-6.235703"
            //     }
            // },
            // {
            //     id: 7,
            //     bridename: "Michelle",
            //     groomname: "Scott",
            //     venue: "Ballintaggart House",
            //     date: "2018-09-07",
            //     mobile: "+3538695485919",
            //     email: "katieandivan@hotmail.org",
            //     picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1557750847/account-settings.png",
            //     coordinates: {
            //         latitude: "52.130647",
            //         longitude: "-10.248281"
            //     }
            // }
            ];
    }

    find(id) {
        let index = _.findIndex(
            this.events,
            event => `${event.mobile}${event.date}` === id
        );
        if (index !== -1) {
            return this.events[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.events, event => event.mobile === k);
        return elements;
    }

    initialize(events) {
        this.events = events;
    }

    getAll() {
        return this.events;
    }

    add(bridename, groomname, venue, date, mobile, email, picture,  latitude, longitude, firstdance, starttime, finishtime) {
        let id = 1;
        let last = _.last(this.events);
        if (last) {
            id = last.id + 1;
        }
        let len = this.events.length;
        let newLen = this.events.push({
            id,
            bridename,
            groomname,
            venue,
            date,
            mobile,
            email,
            picture,
            latitude,
            longitude,
            firstdance,
            starttime,
            finishtime
        });
        return newLen > len;
    }

    update(key, email, mobile) {
        let index = _.findIndex(this.events, event => event.mobile === key);
        if (index !== -1) {
            this.events[index].mobile = mobile;
            this.events[index].email = email;
            return true;
        }
        return false;
    }
}

export default new StubAPI();