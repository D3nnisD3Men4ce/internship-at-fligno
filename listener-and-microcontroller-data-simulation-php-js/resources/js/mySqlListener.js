const mysql = require('mysql');
const MySQLEvents = require('@rodrigogs/mysql-events');


const program = async () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jkpb5299',
  });

  const instance = new MySQLEvents(connection, {
    startAtEnd: true,
  });

  await instance.start();

  // var actionType;
  
  (function action() {
    instance.addTrigger({
      name: 'plantmockdata.plantdata',
      expression: 'plantmockdata.*',
      statement: MySQLEvents.STATEMENTS.ALL,
      onEvent: (event) => { // You will receive the events here
        console.log(event)
        // actionType = event.type;
      },
  })})();
  
  instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
  instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);

};

program()
  .then(() => console.log('Waiting for database events...'))
  .catch(console.error);

