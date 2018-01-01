window.onload = function() {

    // get the canvas and context and store in variables
    let canvas = document.getElementById('sky');
    let ctx = canvas.getContext('2d');

    // set canvas dimensions to window height and width
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // generate the snowflakes and apply attributes
    let maxSnowflakes = 100;
    let snowflakes = [];

    // create finite snowflake objects with random attributes
    for (let i = 0; i < maxSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        radius: Math.random() * 5 + 2,
        density: Math.random() + 1
      });
    }

    // draw flakes onto canvas
    function drawFlakes() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = 'white';
      ctx.beginPath();

      // For each flake move to random point on screen
      for (let i = 0; i < maxSnowflakes; i++) {
        let snowflake = snowflakes[i];
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, Math.PI * 2, true);
      }

      ctx.fill();
      moveFlakes();
    }

    // animate the flakes
    let angle = 0;

    function moveFlakes() {
      angle += 0.01;
      for (let i = 0; i < maxSnowflakes; i++) {
        // store current flake
        var snowflake = snowflakes[i];

        // update X and Y coordinates of each snowflake
        snowflake.y += Math.pow(snowflake.density, 2) + 1;
        snowflake.x += Math.sin(angle) * 2;

        // if the snowflake reaches the bottom, send a new one to the top
        if (snowflake.y > HEIGHT) {
          snowflakes[i] = {
            x: Math.random() * WIDTH,
            y: 0,
            radius: snowflake.radius,
            density: snowflake.density
          };
        }
      }
    }

    setInterval(drawFlakes, 25);
  };
