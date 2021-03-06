//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static('./dist/myapp'));
app.use(express.static(path.join(__dirname, 'dist','my-app')));
// res.sendFile(path.join(__dirname,'dist','app_name','index.html'));
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'dist','my-app','/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(8080);