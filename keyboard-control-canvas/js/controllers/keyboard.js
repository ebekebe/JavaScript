window.onload = function() {
  const MOVE_SPEED = 4;

  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  let square = {
    x: 0,
    y: 0,
    height: 20,
    width: 20
  };

  function draw() {
    context.rect(square.x, square.y, square.width, square.height);
    context.fillStyle = 'white';
    context.fill();
  }

  function move(e) {
    switch (e.keyCode){
      case 40:
        square.y += MOVE_SPEED;
        break;
      case 38:
        square.y -= MOVE_SPEED;
        break;
      case 39:
        square.x += MOVE_SPEED;
        break;
      case 37:
        square.x -= MOVE_SPEED;
        break;
    }

    // This line seems useless to me but removing it makes behaviour strange
    canvas.width = canvas.width;
    draw();
  }

  draw();

  // Handlers
  document.onkeydown = move;
};
