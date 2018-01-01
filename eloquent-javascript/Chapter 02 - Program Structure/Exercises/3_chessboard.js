let size = 8;
let board = '';

for (let row = 0; row < size; row++) {
  size = row % 2 === 0 ? 8 : 9;
  for (let col = row % 2; col < size; col++) {
    board += col % 2 ? '[#]' : '[ ]';
  }
  board += '\n';
}

console.log(board);
