import {expect} from "chai"; //Assertion Library
import jsdom from "jsdom";
import fs from "fs"; //FileSystem

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, function(err, window) { //this is callback function that must use done()
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done(); //when use callback function
      window.close(); //For Memory
    });
  });
});
