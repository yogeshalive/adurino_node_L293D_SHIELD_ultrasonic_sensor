const { Board, Motor, Proximity, Pin } = require("johnny-five");

const board = new Board();

const configs = Motor.SHIELD_CONFIGS.ADAFRUIT_V1;

board.on("ready", function () {
  const motor1 = new Motor(configs.M1);
  const motor2 = new Motor(configs.M2);
  const motor3 = new Motor(configs.M3);
  const motor4 = new Motor(configs.M4);
  motor1.reverse(100);
  motor2.start(255);

  const proximity = new Proximity({
    controller: "HCSR04",
    pin: "A0",
  });

  proximity.on("change", () => {
    const { centimeters, inches } = proximity;
    console.log("Proximity: ");
    console.log("  cm  : ", centimeters);
    console.log("  in  : ", inches);
    console.log("-----------------");
  });
});

// node.addEventListener('keydown', function (event) {
//   const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
//   switch (key) {
//     case "ArrowLeft":
//       console.log('left arrow pressed')
//       break;
//     case "ArrowRight":
//       console.log('Right arrow pressed')
//       break;
//     case "ArrowUp":
//       console.log('up arrow pressed')
//       break;
//     case "ArrowDown":
//       console.log('Down arrow pressed')
//       break;
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
