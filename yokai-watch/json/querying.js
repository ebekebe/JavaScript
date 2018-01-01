let yokai = require('./wibble-wobble/eu/yokai.json');

let format = str => JSON.stringify(str, null, 2);
let print = str => console.log(format(str));

// find(property, value) on yokai list and return an array of matches
let find = (prop, arg) => yokai.filter(element => element[prop] === arg);

// example use
let siro = find("name", "Siro");
let s_rank_yokai = find("rank", "S");
let brave_yokai = find("tribe", "Brave");
