describe("@esm-bundle/crocks", () => {
  it("can load the ESM bundle", () => {
    return import("/base/index.js");
  });

  it("can load transformed deep packages without dying", function() {
    return import("/base/helpers/compose.js");
  });
});
