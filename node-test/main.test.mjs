describe("@esm-bundle/crocks", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });

  it("can load transformed deep packages without dying", function() {
    return import("../esm/helpers/compose.js");
  });
});
