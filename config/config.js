export default {
  name: "bodice",
  measurements: ["chestCircumference", "wristCircumference"],
  options: {
    // Constants
    foo: 4,
    bar: 8,

    // Percentages
    chestEase: { val: 8, min: -4, max: 20 },
    cuffEase: { val: 20, min: 0, max: 200 }
  }
};
