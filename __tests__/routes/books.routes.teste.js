const request = require("supertest");
const app = require("../../index");

jest.setTimeout(10000);

describe("Books Test", () => {
  it("Verificando o get all", async () => {
    const res = await request(app).get("/books");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando o get por ISBM", async () => {
    const res = await request(app).get("/books/978-0553103540");

    expect(res.statusCode).toEqual(200);
  });
});
