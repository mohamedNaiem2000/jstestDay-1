const chai = require('chai');
const expect = chai.expect;

const { capitalizeText , createArray } = require('../mochaLab');


// test cases:
//test that the function takes a string it will return a string
//test that the function takes a string and return it after capitalize it
//test if the function takes number it will throw type error says parameter should be string

describe('Here we test capitalize text function',()=>{
    it("it should return a string",()=>{
        expect(capitalizeText("mohamed")).to.be.a("string")
    })

    it("it should be capitalized",()=>{
        expect(capitalizeText("mohamed")).to.be.equal("MOHAMED")
    })

    it('test if the function takes number it will throw type error says parameter should be string',()=>{
        expect(function () {
            expect(function () {
              capitalizeText(12);
            }).to.throw(TypeError, "para must be string");
          });
        });
})



describe('createArray function', () => {
    it('Should return value of type array', () => {
      expect(createArray(3)).to.be.an('array');
    });

    it('Should have array of length 2 when passing 2 as a parameter', () => {
      expect(createArray(2)).to.have.lengthOf(2).to.include(1);
    });

    it("Should have array of length 3 and doesn't include 3 when passed as a parameter", () => {
      const arr = createArray(3);
      expect(arr).to.be.lengthOf(3);
      expect(arr).to.not.include(3);
    });
  });





