class Tide extends API {
    constructor(location) {
        super('http://www.worldtides.info/api?', 'a8a3a0eb-5808-484c-b903-bca2c3af814f');
        this.location = location;

        this.get = () => this
            .makeRequest(`heights&lat=${this.location.latitude}&lon=${this.location.longitude}`)
            .then(r => {
                
                return {
                    // 2d array of waves in the form of [time, height]
                    heights: r.heights.map(predict => [convertUnixTime(predict.dt), predict.height]),
                    responder: {
                        latitude: r.responseLat,
                        longitude: r.responseLon
                    },
                    nearest_gauge: distanceBetween(location, new Location(r.responseLat, r.responseLon))
                }
            });
    }
}