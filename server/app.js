var express = require("express");
var cors = require('cors');
var jwt = require('jsonwebtoken');
var app = express();

app.use(cors());


app.get("/", function (req, res) {
      let email = "test.user@gmx.de";
      let pw = "testpq123";
      let secrete = "testsecrute123";
      // create a token
      var token = jwt.sign(
            { id: "userID" },
            secrete, {
                  expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
});

//TODO middleware for validation
app.use("/auth", function (req, res, next) {
      /*
      let secrete = "testsecrute123";
      var token = req.headers["authorization"];
      jwt.verify(token, secrete, function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            res.status(200).send(decoded);
      });
     debugger;
     if(false){
      next(); // request auth auslösen
     }
     */

});

app.get("/auth", function (req, res) {
      res.status(200).send({ result: "erfolgreich Auhtefiziert" });
});

app.listen(8080);