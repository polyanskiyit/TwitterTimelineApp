const req = require("supertest");
var app = require('./server.js').app;

it("should return code 200", function (done) {
    req(app)
        .post("/getTwitts", {
            screen_name: "nodejs"
        })
        .expect(200)
        .end(done); 
        done();
});

it("NotFound with status 404", function (done) {
    req(app)
        .get("/error")
        .expect(404)
        .expect("NotFound")
        .end(done);
});