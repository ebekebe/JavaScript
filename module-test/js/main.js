let test_location = new Location(35.689, 139.692);
test_location.get().then(console.log);

let test_tide = new Tide(test_location)
test_tide.get().then(console.log);

   