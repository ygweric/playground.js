/**
 *  write your TS code heere
 */
const main = async () => {
  console.log("write your TS code heere");
  let a = 1;
  let b = 3;
  let c = a + b;
  if (a > b) {
    console.log("a > b");
  } else {
    console.log("a < b");
  }
  console.log(`c: ${c}`);
};

describe("Iam a Jest entery Point", () => {
  beforeAll(async () => {});
  it("I am a Jest test case", async () => {
    await main();
    expect(1).toBe(1);
  });

  afterAll(async () => {});
});
