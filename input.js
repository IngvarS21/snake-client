let connection; 

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  
  if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      console.log("Up is pressed.");
      connection.write("Move: up");
    }
    if (key === 's') {
      console.log("Down is pressed.");
      connection.write("Move: down");
    }
    if (key === 'a') {
      console.log("Left is pressed.")
      connection.write("Move: left");
    }
    if (key === 'd') {
      console.log("Right is pressed.")
      connection.write("Move: right");
    }
  };
  



module.exports = {setupInput};