export default {
  name: "bodice",
  measurements: ['bustCircumference'
    , 'waistCircumference', 'neckCircumference', 'armscyeHeight',
    'backLength', 'backWidth', 'abdomenHeight', 'hipHeight', 'waistHeight', 'bustHeight',
    'backShoulderHeight', 'frontShoulderHeight', 'shoulderLength', 'hipCircumference'],
  options: {
    bustEase: { val: 80, min: 0, max: 200 },
    waistEase: { val: 60, min: 0, max: 200 },
    backWidthEase: { val: 16, min: 0, max: 200 },
    abdomenEase: { val: 40, min: 0, max: 200 },
    hipEase: { val: 40, min: 0, max: 200 }
  }
};
