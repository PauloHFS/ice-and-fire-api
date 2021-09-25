const request = require("supertest");
let app;

jest.setTimeout(30000);

describe("Books Test", () => {
  beforeEach(() => {
    app = require("../../index");
  });

  afterEach(() => {
    app.close();
  });

  it("Verificando o get all", async () => {
    const res = await request(app).get("/books");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando o get por ISBM", async () => {
    const res = await request(app).get("/books/978-0553103540");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando falha no get por ISBM", async () => {
    const res = await request(app).get("/books/9999");

    expect(res.statusCode).toEqual(404);
  });
});

describe("Characters tests", () => {
  beforeEach(() => {
    app = require("../../index");
  });

  afterEach(() => {
    app.close();
  });

  it("Verificando o get all", async () => {
    const res = await request(app).get("/characters");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando get by id", async () => {
    const res = await request(app).get("/characters/614dd799d6caa6caba5be0ac");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando falha no get by id", async () => {
    const res = await request(app).get("/characters/123");

    expect(res.statusCode).toEqual(500);
  });

  it("Verificando books do get by id", async () => {
    const res = await request(app).get(
      "/characters/614dd799d6caa6caba5be0ac/books"
    );

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando falha do books do get by id", async () => {
    const res = await request(app).get("/characters/123/books");

    expect(res.statusCode).toEqual(500);
  });
});

describe("PovCharacters Tests", () => {
  beforeEach(() => {
    app = require("../../index");
  });

  afterEach(() => {
    app.close();
  });

  it("Verificando o get all", async () => {
    const res = await request(app).get("/pov");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando get by id", async () => {
    const res = await request(app).get("/pov/614d2d0d44a411427eb1d50c");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando falha no get by id", async () => {
    const res = await request(app).get("/pov/123");

    expect(res.statusCode).toEqual(500);
  });

  it("Verificando books do get by id", async () => {
    const res = await request(app).get("/pov/614d2d0d44a411427eb1d50c/books");

    expect(res.statusCode).toEqual(200);
  });

  it("Verificando falha do books do get by id", async () => {
    const res = await request(app).get("/pov/123/books");

    expect(res.statusCode).toEqual(500);
  });
});
