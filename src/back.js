import freesewing from "freesewing";

var back = {
  draft: function (part) {
    // prettier-ignore
    let { store, sa, Point, points, Path, paths, Snippet, snippets, options, measurements, final, paperless, utils, macro } = part.shorthand();

    // Do your work here :)
    let bustEase = options.bustEase * 100;
    let waistEase = options.waistEase * 100;
    let backWidthEase = options.backWidthEase * 100;
    let abdomenEase = options.abdomenEase * 100;
    let hipEase = options.hipEase * 100;
    


    let bustCircumference = measurements.bustCircumference + bustEase;
    let neckCircumference = measurements.neckCircumference;
    let waistCircumference = measurements.waistCircumference + waistEase;
    let hipCircumference = measurements.hipCircumference;
    let backLength = measurements.backLength;
    let backWidth = measurements.backWidth + backWidthEase;
    let bustHeight = measurements.bustHeight;
    let waistHeight = measurements.waistHeight;

    let abdomenHeight = measurements.abdomenHeight + abdomenEase;
    let hipHeight = measurements.hipHeight + hipEase;

    let armscyeHeight = measurements.armscyeHeight;
    let frontShoulderHeight = measurements.frontShoulderHeight;
    let backShoulderHeight = measurements.backShoulderHeight;
    let bustDart = 43;
    let shoulderLength = measurements.shoulderLength;
    let armscyeWidth = bustCircumference / 8 - (bustCircumference / 51);
    let bustSpan = bustCircumference / 5;
    let aFifthNeck = neckCircumference / 5
    let neckWidth = aFifthNeck - (neckCircumference / 35.5);
    let neckHeight = aFifthNeck;
    let neckLengthBack = aFifthNeck - (neckCircumference / 71);
    let neckDepth = aFifthNeck + (neckCircumference / 71)

    let halfBustCircumference = bustCircumference / 2;
    let halfbackWidth = backWidth / 2;
    points.p1 = new Point(0, 0);

    points.p1a = points.p1.shift(90, armscyeHeight / 40.8);
    points.p2 = points.p1.shift(180, halfBustCircumference);
    points.p3 = points.p2.shift(-90, armscyeHeight);
    points.p4 = points.p2.shift(-90, backLength);
    points.p5 = points.p4.shift(-90, abdomenHeight);
    points.p6 = points.p4.shift(-90, hipHeight);
    points.p7 = points.p1.shift(180, halfbackWidth);
    points.p8 = points.p7.shift(180, armscyeWidth);
    points.p9 = points.p8.shift(-90, armscyeHeight);
    points.p10 = points.p7.shift(-90, armscyeHeight);
    points.p11 = points.p10.shift(180, points.p9.dist(points.p10) / 2);
    points.p11_temp = points.p11.shift(90, armscyeHeight);
    points.p12 = points.p1.shift(-90, armscyeHeight);
    points.p13 = points.p1.shift(-90, backLength);
    points.p14 = points.p13.shift(-90, abdomenHeight);
    points.p15 = points.p13.shift(-90, hipHeight);
    points.p16 = points.p11.shift(-90, points.p12.dist(points.p13));
    points.p17 = points.p16.shift(-90, abdomenHeight);
    points.p18 = points.p16.shift(-90, hipHeight);
    points.p19 = points.p4.shift(360, bustSpan / 2);
    points.p20 = points.p19.shift(90, waistHeight - bustHeight);
    points.p21 = points.p2.shift(360, neckWidth);

    //Refcator this
    points.p21_temp = points.p21.shift(90, 10);
    points.p22 = utils.beamIntersectsCircle(
      points.p20,
      bustHeight - neckLengthBack,
      points.p21_temp,
      points.p21
    )[1];
    points.p22a = points.p22.shift(180, points.p2.dist(points.p21));
    points.p22b = points.p22a.shift(-90, neckDepth);
    points.p23 = points.p8.shift(-90, frontShoulderHeight);
    points.p24 = points.p23.shift(360, points.p8.dist(points.p11_temp));
    points.p25 = points.p7.shift(-90, backShoulderHeight);
    points.p26 = points.p25.shift(180, points.p7.dist(points.p11_temp));
    points.p27 = points.p1.shift(180, neckWidth);

    let shoulderRaise = armscyeHeight / 8.16;
    points.p28 = points.p27.shift(90, shoulderRaise);
    points.p29 = utils.beamIntersectsCircle(
      points.p28,
      shoulderLength + 20,
      points.p25,
      points.p26
    )[0];
    points.p30 = points.p28.shift(-90, armscyeHeight / 2.914);
    points.p31 = points.p30.shift(180, armscyeHeight / 6.8);


    points.p32_temp = points.p28.shiftTowards(points.p29, shoulderLength / 2.87);
    points.p32 = points.p32_temp.shift(90, armscyeHeight / 34);
    points.p33_temp = points.p28.shiftTowards(points.p29, shoulderLength / 5.75);
    points.p33 = points.p33_temp.shift(90, armscyeHeight / 34);

    points.p34 = utils.circlesIntersect(
      points.p20,
      bustHeight - neckLengthBack,
      points.p22,
      bustDart
    )[1]

    points.p35 = utils.lineIntersectsCircle(
      points.p34,
      shoulderLength,
      points.p23,
      points.p24,
    )[0]

    let p31Offset = points.p1.dist(points.p27) + points.p30.dist(points.p31);
    points.p36 = points.p15.shift(180, p31Offset);
    points.p37 = points.p14.shift(180, p31Offset);

    let dartPosition = (hipHeight - abdomenHeight);

    points.p38 = points.p37.shift(-90, dartPosition);

    points.p39 = points.p13.shift(180, p31Offset);
    points.p39a = points.p12.shift(180, p31Offset);

    let backDartTop = (backLength - armscyeHeight) / 9.2;

    points.p39b = points.p39a.shift(-90, backDartTop);

    points.p46 = points.p6.shift(360, bustSpan / 2);
    points.p47 = points.p5.shift(360, bustSpan / 2);


    points.p48 = points.p47.shift(-90, dartPosition);

    let a = (points.p4.dist(points.p13) - waistCircumference / 2) / 6;
    let b = (hipCircumference / 2 - points.p6.dist(points.p15)) / 2;

    points.p40 = utils.lineIntersectsCircle(
      points.p39,
      a,
      points.p16,
      points.p13,
      'y'
    )[0]

    points.p41 = utils.lineIntersectsCircle(
      points.p39,
      a,
      points.p16,
      points.p13,
      'y'
    )[1]

    points.p42 = utils.lineIntersectsCircle(
      points.p16,
      a,
      points.p19,
      points.p39,
      'y'
    )[0]

    points.p43 = utils.lineIntersectsCircle(
      points.p16,
      a,
      points.p19,
      points.p39,
      'y'
    )[1]

    points.p44 = utils.lineIntersectsCircle(
      points.p19,
      a,
      points.p4,
      points.p16,
      'y'
    )[0]

    points.p45 = utils.lineIntersectsCircle(
      points.p19,
      a,
      points.p4,
      points.p16,
      'y'
    )[1]

    points.p49 = utils.lineIntersectsCircle(
      points.p18,
      a,
      points.p46,
      points.p36,
      'y'
    )[0]

    points.p50 = utils.lineIntersectsCircle(
      points.p18,
      a,
      points.p46,
      points.p36,
      'y'
    )[1]

    points.p51 = points.p9.shift(90, points.p9.dist(points.p8) / 4);
    points.p52 = points.p10.shift(90, points.p10.dist(points.p7) / 2);

    paths.frame = new Path()
      .move(points.p22b)
      .line(points.p3)
      .line(points.p4)
      .line(points.p5)
      .line(points.p6)
      .line(points.p15)
      .line(points.p1)


    points.p22bCP = points.p22b.shiftFractionTowards(points.p23, 0.3);
    points.p22CP = points.p22;
    points.p35CP = points.p35;
    points.p51CP = points.p51.shiftFractionTowards(points.p34, 0.1);
    points.p11CP = points.p11.shiftFractionTowards(points.p9, 0.9);
    points.p52CP = points.p52.shiftFractionTowards(points.p10, 0.5);
    paths.frontzneck = new Path()
      .move(points.p22b)
      .curve(points.p22bCP, points.p22CP, points.p22)
      .line(points.p20)
      .line(points.p34)
      .line(points.p35)
      .curve(points.p35CP, points.p51CP, points.p51)
      .curve(points.p51, points.p11CP, points.p11)
      .curve(points.p11.shiftFractionTowards(points.p10, 0.8), points.p52CP, points.p52)
      .curve(points.p52.shiftFractionTowards(points.p25, 0.5), points.p29, points.p29)
      .line(points.p32)
      .line(points.p31)
      .line(points.p33)
      .line(points.p28)
      .curve(points.p28.shiftFractionTowards(points.p27, 0.6), points.p1a, points.p1a);

    paths.backDart = new Path()
      .move(points.p39b)
      .line(points.p40)
      .line(points.p38)
      .line(points.p41)
      .line(points.p39b)

    paths.sideDart = new Path()
      .move(points.p11)
      .line(points.p42)
      .line(points.p17)
      .line(points.p43)
      .line(points.p11)

    paths.lowerSideDart = new Path()
      .move(points.p49)
      .line(points.p17)
      .move(points.p50)
      .line(points.p17)

    paths.frontDart = new Path()
      .move(points.p20)
      .line(points.p44)
      .line(points.p48)
      .line(points.p45)
      .line(points.p20)


    // Final?
    if (final) {
    }

    // Paperless?
    if (paperless) {
    }

    return part;
  }
};

export default back;
