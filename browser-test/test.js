describe("@esm-bundle/crocks", () => {
  it("can load the ESM bundle", () => {
    return import("/base/esm/index.js");
  });

  it("can load transformed deep packages without dying", function() {
    return import("/base/esm/helpers/compose.js");
  });

  it("can load the System.register bundle", () => {
    return System.import("/base/system/index.js");
  });

  it("can load deep packages using System.js", () => {
    return System.import("/base/system/helpers/compose.js");
  });
});
