const myFunc = require("./myFunctions");

test("adds 1 +2 to 3", () => {
  expect(myFunc.sum(1, 6)).toBe(7);
});

test("the data is peanut butter", async () => {
  expect.assertions(1);
  await expect(myFunc.fetchData(1)).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  await expect(myFunc.fetchData(0)).rejects.toMatch("error");
});
