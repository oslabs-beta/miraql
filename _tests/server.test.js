const request = require("supertest");

// Make sure to run npm run dev before running test
// npm run dev is hosted on 8080
const server = "http://localhost:8080";

describe("Route integration", () => {
  // make sure the GET is working at http://localhost:8080/
  describe("/", () => {
    describe("GET", () => {
      it("responds with http 200 status and text/html content type", () => {
        return request(server)
          .get("/")
          .expect("Content-Type", /text\/html/)
          .expect(200);
      });
    });
  });
});
