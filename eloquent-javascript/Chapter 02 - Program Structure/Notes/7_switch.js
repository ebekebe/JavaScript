let cap = s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
// A switch statement is functionally identical to a large chain of else ifs
// but looks considerably neater and more readable

let digidestined = 'kOSHIro';
let msg = cap(digidestined) + " has ";

switch (cap(digidestined)) {  
  case 'Koshiro':
    msg += 'Tentomon';
    break;
  case 'Yamato':
    msg += 'Gabumon';
    break;
  case 'Taichi':
    msg += 'Agumon';
    break;
  case 'Sora':
    msg += 'Piyomon';
    break;
  case 'Mimi':
    msg += 'Palmon';
    break;
  case 'Jou':
    msg += 'Gomamon';
    break;
  case 'Takeru':
    msg += 'Patamon';
    break;
  case 'Hikari':
    msg += 'Tailmon';
    break;
  default:
    msg = 'Who\'s that?';
    break;
}

console.log(msg);