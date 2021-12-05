const { json } = require("express");
const supertest = require("supertest");
const app = require("../index");
// This agent refers to PORT where program is runninng.

// var server = supertest.agent("http://localhost:3001");

// UNIT test begin

describe("Post order",function(){

  // #1 should return home page
  it("Connect to db",function(done) {
    // calling home page api
    this.timeout(7000);
    supertest(app)
    .get("/connection_status")
    .expect(200)
    .end(function(err, res){
      if (err) done(err);
      else done();
    });
  });
  it("should create an order",function(done) {
    // calling home page api
    this.timeout(3000);
    supertest(app)
    .post("/order")
    .send(
        { 
            customerInfo: {
                meno: "Meno Priezvisko",
                email: "test@mail.com",
                mesto: "Nove mesto",
                ulica: "Prievozska",
                psc: "15341",
                cislo: "123"
            },
            orderItems: [
                {id: 1, count: 3},
                {id: 2, count: 40}
            ]
        })
    .expect(201)
    .end(function(err, res){
      if (err) done(err);
      else done();
    });
  });
});

describe('Another order', function () {
  it("should be denied with the same email",function(done) {
    // calling home page api
    this.timeout(3000);
    supertest(app)
    .post("/order")
    .send(
        { 
            customerInfo: {
                meno: "Inemeno Priezvisko",
                email: "test@mail.com",
                mesto: "Stare mesto",
                ulica: "Dunajska",
                psc: "14351",
                cislo: "321"
            },
            orderItems: [
                {id: 1, count: 1},
                {id: 3, count: 13}
            ]
        })
    .expect(400)
    .end(function(err, res){
      if (err) done(err);
      else done();
    });
  });
  it("should remove user and his order",function(done) {
    // calling home page api
    this.timeout(3000);
    supertest(app)
    .post("/remove_user")
    .send(
        { 
          email: "email@mail.com"
        })
    .expect(200)
    .end(function(err, res){
      if (err) done (err);
      else  done();
    });
  });
});