const { json } = require("express");
const supertest = require("supertest");
const app = require("../index");
// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3001");

// UNIT test begin

describe("Post order",function(){

  // #1 should return home page

  it("should create an order",function(done) {
    // calling home page api
    supertest(app)
    .post("/order")
    .send(
        { 
            customerInfo: {
                name: "Meno Priezvisko",
                email: "email@mail.com",
                mesto: "Nove mesto",
                ulica: "Prievozska",
                psc: "15341",
                cislo: "123"
            },
            orderInfo: [
                {id: 1, count: 3},
                {id: 2, count: 40}
            ]
        })
    .expect(200)
    .end(function(err, res){
      if (err) done(err);
      done();
    });
  });

  it("Denied another order with same email",function(done) {
    // calling home page api
    supertest(app)
    .post("/order")
    .send(
        { 
            customerInfo: {
                name: "Inemeno Priezvisko",
                email: "email@mail.com",
                mesto: "Stare mesto",
                ulica: "Dunajska",
                psc: "14351",
                cislo: "321"
            },
            orderInfo: [
                {id: 1, count: 1},
                {id: 3, count: 13}
            ]
        })
    .expect(400)
    .end(function(err, res){
      if (err) done(err);
      done();
    });
  });

});