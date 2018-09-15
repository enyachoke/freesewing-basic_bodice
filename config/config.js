export default {
  name: "bodice",
  measurements: ['bustCircumference'
    , 'waistCircumference', 'neckCircumference','armscyeHeight',
    'backLength','backWidth','abdomenHeight','hipHeight','waistHeight','bustHeight',
    'backShoulderHeight','frontShoulderHeight','shoulderLength','hipCircumference'],
  options: {
    // Constants
    foo: 4,
    bar: 8,

    // Percentages
    bustEase: { val: 5, min: -4, max: 20 },
    backNeckDrop: { val: 15, min: -4, max: 20 },
    backNeckBend: { val: 10, min: 10, max: 100 },
    shoulderEase: { val: 50, min: 0, max: 100 },
    armHoleEase: { val: 30, min: 0, max: 100 },
    BackWidthEase: { val: 30, min: 0, max: 100 },
    WaistEase: { val: 30, min: 0, max: 100 },
    AbdomenEase: { val: 30, min: 0, max: 100 },
    HipEase: { val: 30, min: 0, max: 100 }
  }
};
