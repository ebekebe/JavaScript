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

// returns the geographical distance between two points
const toRadians = n => n * Math.PI / 180;
function distanceBetween(location_1, location_2) {
    let R = 6371e3; // metres
    let lat1Rad = toRadians(location_1.latitude);
    let lat2Rad = toRadians(location_2.latitude);
    let changeInRad = toRadians(location_2.latitude - location_1.latitude);
    let changeInDistance = toRadians(location_2.longitude - location_1.longitude);
    
    let a = Math.sin(changeInRad / 2) * Math.sin(changeInRad / 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) *
            Math.sin(changeInDistance / 2) * Math.sin(changeInDistance / 2);
            
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    let distance = R * c;
    
    return distance;
}