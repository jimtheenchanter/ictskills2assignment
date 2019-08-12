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
                coordinates: {
                    latitude: "54.8646",
                    longitude: "-7.3136"
                    },
                login: {
                    uuid: "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
                    username: "bluefrog786",
                    password: "ingrid",
                    salt: "GtRFz4NE",
                    md5: "5c581c5748fc8c35bd7f16eac9efbb55",
                    sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
                    sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
                },
                dob: {
                    date: "1975-11-12T06:34:44Z",
                    age: 42
                }, registered: {
                    date: "2015-11-04T22:09:36Z",
                    age: 2
                },
            },
            {
                id: 2,
                bridename: "Steffi",
                groomname: "Brian",
                venue: "Dromquinna Manor",
                date: "2018-08-09",
                month: "august",
                mobile: "+3538695485914",
                email: "katieandivan@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple3.jpg",
                coordinates: {
                    latitude: "51.871379",
                    longitude: "-9.643672"
                }
            },
            {
                id: 3,
                bridename: "Naile",
                groomname: "James",
                venue: "Hay Barn",
                date: "2018-08-17",
                mobile: "+3538695485915",
                email: "katieandivan@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple2.jpg",
                coordinates: {
                    latitude: "53.264203",
                    longitude: "-7.518304"
                }
            },
            {
                id: 4,
                bridename: "Aoibheann",
                groomname: "Jimmy",
                venue: "Fallon and Byrne",
                date: "2018-08-23",
                mobile: "+3538695485916",
                email: "katieandivan@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple2.jpg",
                coordinates: {
                    latitude: "53.322786",
                    longitude: "-6.264836"
                }
            },
            {
                id: 5,
                bridename: "Clare",
                groomname: "Matt",
                venue: "Ashley Park House",
                date: "2018-08-24",
                mobile: "+3538695485917",
                email: "katieandivan@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564740843/happycouple1.jpg",
                coordinates: {
                    latitude: "52.925765",
                    longitude: "-8.180390"
                }
            },
            {
                id: 6,
                bridename: "Roisin",
                groomname: "Colm",
                venue: "Airfield Estate",
                date: "2018-08-31",
                mobile: "+3538695485918",
                email: "katieandivan@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1564741195/happycouple3.jpg",
                coordinates: {
                    latitude: "53.288011",
                    longitude: "-6.235703"
                }
            },
            {
                id: 7,
                bridename: "Michelle",
                groomname: "Scott",
                venue: "Ballintaggart House",
                date: "2018-09-07",
                mobile: "+3538695485919",
                email: "katieandivan@hotmail.org",
                picture: "https://res.cloudinary.com/jimtheenchanter/image/upload/v1557750847/account-settings.png",
                coordinates: {
                    latitude: "52.130647",
                    longitude: "-10.248281"
                }
            }



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