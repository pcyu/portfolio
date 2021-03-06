const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use( '/', express.static(__dirname + '/public') );
app.use( '/node_modules', express.static(__dirname + '/node_modules') );
app.use( '/src', express.static(__dirname + '/src') );

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
