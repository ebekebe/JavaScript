// Holds api root and key, responsible for making request
class API {
    constructor(base, key) {
        this.base = base;
        this.key = key;

        this.buildURI = partial => 
            `${this.base}${partial}&key=${this.key}`;

        this.makeRequest = request => $.ajax({
            url: this.buildURI(request),
            dataType: 'json',
            method: 'GET'
        });
    }
}

// Takes co-ordinates and returns address components as an array
class Location extends API {
    constructor(latitude = 53.4001, longitude = -2.9940) {
        super('https://maps.googleapis.com/maps/api/geocode/json?', 'key');
        this.latitude = latitude;
        this.longitude = longitude;
        
        this.get = () => this
            .makeRequest(`latlng=${this.latitude},${this.longitude}`)
            .then(parseResults);

        let parseResults = function(response) {
            let address = response.results[0];
            return address.address_components.map(component => component.short_name);
        }
    }
}

class Tide extends API {
    constructor(location) {
        super('http://www.worldtides.info/api?', 'key');
        this.location = location;

        this.get = () => this
            .makeRequest(`heights&lat=${this.location.latitude}&lon=${this.location.longitude}`)
            .then(parseResults)

        let parseResults = function(response) {
            let heights = response.heights.map(prediction => [convertUnixTime(prediction.dt), prediction.height]);                        
            
            return {
                heights: heights,
                station: response.station,
                response_location: {
                    latitude: response.responseLat,
                    longitude: response.responseLon
                }
            }
        }
    }
}

// returns an ISO date object given a unix timestamp
const convertUnixTime = unix_time => {
    let date = new Date(unix_time * 1000);

    let d = {
        date: date,
        day: date.getDay(),
        hour: (() => {
            let h = date.getHours();
            return h < 10 ? `0${h}` : h;
        })(),
        minute: (function(){
            let m = date.getMinutes();
            return m === 0 ? "00" : m;
        })(),
        second: date.getSeconds()
    };

    return `${d.day}:${d.hour}:${d.minute}`;
};
