// Rover object goes here:
let rover = {
    direction: 'N', // Default direction 
    x:0,  // initial x position
    y:0,  // initial y position
    travelLog: []
};
// ======================
function turnLeft(rover) {
    console.log('turnLeft was called!');
    // Determine new direction basd on current direction
    switch (rover.direction){
        case 'N':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
    console.log(`Rover is now facing: ${rover.direction}`);
  }
  
  function turnRight(rover) {
    console.log('turnRight was called!');
    // Determine new direction basd on current direction
    switch (rover.direction){
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
    console.log(`Rover is now facing: ${rover.direction}`);
  }
  
  function moveForward(rover) {
    console.log('moveForward was called');
    // log current position before moving
    rover.travelLog.push({x: rover.x, y: rover.y});

    // check for boundaries before updating position
    let nextX = rover.x;
    let nextY = rover.y;

    // Update rover position based on its current direction
    switch (rover.direction){
        case 'N':   // Moving North decreases y-coordinate
            nextY -= 1;
            break;
        case 'S':   // Moving South decreases y-coordinate
            nextY += 1;
            break;
        case 'E':   // Moving East increases x-coordinate
            nextX += 1;
            break;
        case 'W':   // Moving North decreases x-coordinate
            nextX -= 1;
            break;
    }

    // check if position is within grid boundaries (0<=x, 9<=y)
    if (nextX >= 0 && nextX <= 9 && nextY >= 0 && nextY <= 9) {
        rover.x = nextX;
        rover.y = nextY;
        console.log(`Rover's new position is: (${rover.x}, ${rover.y})`);
      } else {
        console.log(`Warning: Rover cannot move outside the grid! Position remains: (${rover.x}, ${rover.y})`);
      }

    // console.log(`Rover is now facing: ${rover.direction}`);
    //console.log(`Rover's new position is: (${rover.x}, ${rover.y})`)
  }

  // Function to move the rover backward based on its current direction
function moveBackward(rover) {
    console.log('moveBackward was called!');
  
    // Store the rover's current position in the travelLog before moving
    rover.travelLog.push({ x: rover.x, y: rover.y });
  
    // Check for boundaries before updating position
    let nextX = rover.x;
    let nextY = rover.y;
  
    switch (rover.direction) {
      case 'N': // Moving backward when facing North increases y-coordinate
        nextY += 1;
        break;
      case 'S': // Moving backward when facing South decreases y-coordinate
        nextY -= 1;
        break;
      case 'E': // Moving backward when facing East decreases x-coordinate
        nextX -= 1;
        break;
      case 'W': // Moving backward when facing West increases x-coordinate
        nextX += 1;
        break;
    }
  
    // Check if the next position is within the grid boundaries (0 <= x, y <= 9)
    if (nextX >= 0 && nextX <= 9 && nextY >= 0 && nextY <= 9) {
      rover.x = nextX;
      rover.y = nextY;
      console.log(`Rover's new position is: (${rover.x}, ${rover.y})`);
    } else {
      console.log(`Warning: Rover cannot move outside the grid! Position remains: (${rover.x}, ${rover.y})`);
    }
  }

  // function for calling commands
  function receiveCommand(commands){
    // llop each character in command string
    for(let i=0; i<commands.length; i++) {
        const command = commands[i];
        switch (command) {
            case 'f':
                moveForward(rover);
                break;
            case 'b':
                moveBackward(rover);
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
            default:
                console.log(`Invalid command: ${command} ignored`);
                break; // Ignore invalid commands
        }
    }
  }

  // Test the functions
  console.log(`Initial direction: ${rover.direction}`);
  turnLeft(rover);
  turnLeft(rover);
  turnRight(rover);
  turnRight(rover);
  moveForward(rover);

  // Test command functions
const commandString = 'rffbrfflfrff';
console.log(`Initial position: (${rover.x}, ${rover.y}) and facing: ${rover.direction}`);
receiveCommand(commandString);

// test commands with invalid commands
// const commandString = 'ffzzy';
// console.log(`Initial position: (${rover.x}, ${rover.y}) and facing: ${rover.direction}`);
// processCommands(commandString);
// console.log(`Final position: (${rover.x}, ${rover.y}) and facing: ${rover.direction}`);

  // Print final position and direction
  console.log(`Final position: (${rover.x}, ${rover.y}) and facing: ${rover.direction}`);

  //print trave log to see where rover has been
  console.log("Rover's travel log:");
  console.log(rover.travelLog);
