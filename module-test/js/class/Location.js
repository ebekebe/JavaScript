// Takes co-ordinates and returns custom address object
class Location extends API {
    constructor(latitude = 53.4001, longitude = -2.9940) {
        super('https://maps.googleapis.com/maps/api/geocode/json?', 'AIzaSyATjbhOhyP4Hk1e5sfMhLOPYyT3FCdB0IY');
        this.latitude = latitude;
        this.longitude = longitude;
        
        this.get = () => this
            .makeRequest(`latlng=${this.latitude},${this.longitude}`)
            .then(parseResults);

        let parseResults = response => {
            let address = response.results[0];

            return {
                address: address.formatted_address,
                names: address.address_components.map(c => c.short_name)
            }
        }
    }
}