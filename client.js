const net = require("net");

const connect = function (connection) {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: "50541"
  });
  
  conn.on("data", (data) => {
    console.log(`you ded cuz you idled`);
  });

  conn.on("connect", (connect) => {
    console.log(`Successfully connected to game server`)
  });

  conn.on("connect", (connect) => {
    conn.write("Name: ONX")
  });

  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 3000);
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};