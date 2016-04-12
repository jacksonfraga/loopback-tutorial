module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/stats', server.loopback.status());
  
  router.get('/', function(req, res) {
    res.redirect('/index.htm')
  }); 
  
  router.get('/home', function(req, res) {
     res.sendFile('index.html');
  });  
  server.use(router);
};
