const net = require("net");

// establishes a connection with the game server
const connect = function (connection) {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: "50541"
  });
  
  conn.on("data", (data) => {
    console.log(`you ded cuz you idled`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();