var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

app.get("/test/:name", function (req, res) {
    var data = "Welcome " + req.params.name;
    res.status(200).send(data);
  });
}

module.exports = appRouter;