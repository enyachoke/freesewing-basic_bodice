import freesewing from "freesewing";
function offSetY(point, distance) {
  let newpoint = point.y + distance;
  return newpoint;
}

function offSetX(point, distance) {
  let newpoint = point.x + distance;
  return newpoint;
}
function cmTomm(cm) {
  return cm * 10;
}
var ref = {
  draft: function(part) {
    let armhole_depth = 210;
    let bust = 880;
    let nape_to_waist = 400;
    let waist_to_hip = 206;
    let neck_size = 370;
    let shoulder = 122.5;
    let back_width = 344;
    let dart = 70;
    let chest = 324;
    // prettier-ignore
    let { store, sa, Point, points, Path, paths, Snippet, snippets, options, measurements, final, paperless, macro } = part.shorthand();
    let armhole_depth_ease = armhole_depth + cmTomm(0.5);
    let half_bust_ease = bust / 2 + cmTomm(5);
    let half_back_width_ease = back_width / 2 + cmTomm(0.5);
    // Do your work here :)
    points.p0 = new Point(0, 0);
    points.p1 = new Point(0, cmTomm(1.5));
    points.p2 = new Point(points.p1.x, armhole_depth_ease);
    points.p3 = new Point(half_bust_ease, points.p2.y);
    points.p4 = new Point(points.p3.x, points.p2.y - armhole_depth_ease);
    points.p5 = new Point(points.p1.x, points.p1.y + nape_to_waist);
    points.p6 = new Point(half_bust_ease, points.p5.y);
    points.p7 = new Point(points.p5.x, points.p5.y + waist_to_hip);
    points.p8 = new Point(half_bust_ease, points.p7.y);
    points.p9 = new Point(
      points.p0.x + (neck_size / 5 - cmTomm(0.2)),
      points.p0.y
    );
    points.Cp1 = new Point(points.p1.x, points.p1.y);
    points.Cp2 = new Point(points.p1.y + 50, points.p9.x - 50);
    points.p10 = new Point(
      points.p1.x,
      points.p1.y + (armhole_depth / 5 - cmTomm(0.7))
    );
    points.ph1 = new Point(points.p10.x + half_bust_ease / 2, points.p10.y);
    points.p14 = new Point(points.p2.x + half_back_width_ease, points.p2.y);
    points.p15 = new Point(points.p14.x, points.p10.y);
    //points.ph2 = new Point(points.p15.x + cmTomm(1.73), points.p15.y)

    let intersections1 = freesewing.utils.beamIntersectsCircle(
      points.p9,
      cmTomm(13.25),
      points.p10,
      points.p15
    );

    points.p11 = intersections1[1];

    let intersections2 = freesewing.utils.beamIntersectsCircle(
      points.p9,
      cmTomm(13.25 / 2),
      points.p9,
      points.p11
    );
    points.p12 = intersections2[1];
    points.ph3 = new Point(points.p12.x, points.p12.y + cmTomm(5));

    points.p13 = points.ph3.shift(155, 10);

    let intersections3 = freesewing.utils.beamIntersectsCircle(
      points.p15,
      points.p15.dist(points.p14) / 2,
      points.p15,
      points.p14
    );
    points.p16 = intersections3[0];

    let intersections4 = freesewing.utils.beamIntersectsCircle(
      points.p12,
      5,
      points.p9,
      points.p11
    );

    points.p17 = new Point(
      points.p2.x + points.p2.dist(points.p14) / 2,
      points.p2.y
    );
    points.ph4 = intersections4[0];
    points.ph5 = intersections4[1];

    points.p18 = new Point(
      points.p5.x + points.p2.dist(points.p14) / 2,
      points.p5.y
    );
    points.p19 = new Point(
      points.p7.x + points.p2.dist(points.p14) / 2,
      points.p7.y
    );

    //Front

    points.p20 = new Point(
      points.p4.x - (neck_size / 5 - cmTomm(0.7)),
      points.p4.y
    );
    points.p21 = new Point(
      points.p4.x,
      points.p4.y + (neck_size / 5 - cmTomm(0.2))
    );
    points.Cp3 = new Point(points.p20.x, points.p20.y);
    points.Cp4 = new Point(points.p20.y + 420, points.p21.x - 420);
    points.p22 = new Point(points.p3.x - (chest / 2 + dart / 2), points.p3.y);
    points.p23 = new Point(
      points.p3.x - points.p3.dist(points.p22) / 2,
      points.p3.y
    );
    points.p24 = new Point(
      points.p6.x - points.p3.dist(points.p22) / 2,
      points.p6.y
    );
    points.p25 = new Point(
      points.p8.x - points.p3.dist(points.p22) / 2,
      points.p8.y
    );
    points.p26 = new Point(points.p23.x, points.p23.y + cmTomm(2.5));
    points.p27 = new Point(points.p20.x - dart, points.p20.y);
    points.p28 = new Point(points.p11.x, points.p11.y + cmTomm(1.5));
    points.p29 = new Point(points.p28.x + cmTomm(10), points.p28.y);
    let intersections5 = freesewing.utils.beamIntersectsCircle(
      points.p27,
      shoulder,
      points.p28,
      points.p29
    );
    points.p30 = intersections5[0];
    points.p31 = new Point(
      points.p22.x,
      points.p22.y - points.p3.dist(points.p21) / 3
    );
    points.p32 = new Point(
      points.p22.x - points.p22.dist(points.p14) / 2,
      points.p22.y
    );
    points.p33 = new Point(points.p32.x, points.p5.y);
    points.p34 = new Point(points.p33.x, points.p7.y);

    points.Cp5 = new Point(points.p11.y + 130, points.p16.x - 90);
    points.Cp6 = new Point(points.p16.y + 50, points.p32.x - 40);
    points.Cp7 = new Point(points.p32.y + 80, points.p31.x - 70);
    points.Cp8 = new Point(points.p31.y + 120, points.p30.x - 120);

    paths.constructionLine = new Path()
      .move(points.p0)
      .line(points.p1)
      .line(points.p2)
      .line(points.p3)
      .line(points.p4)
      .line(points.p0)
      .move(points.p2)
      .line(points.p5)
      .line(points.p6)
      .line(points.p3)
      .move(points.p5)
      .line(points.p7)
      .line(points.p8)
      .line(points.p6)
      .move(points.p10)
      .line(points.ph1)
      .move(points.p14)
      .line(points.p15);

    paths.bodiceBack = new Path()
      .move(points.p1)
      .curve(points.Cp1, points.Cp2, points.p9)
      //.line(points.ph2)
      // .move(points.p9)
      .line(points.p11)
      .move(points.p12)
      .line(points.p13)
      .line(points.ph4)
      .move(points.p13)
      .line(points.ph5)
      .move(points.p17)
      .line(points.p18)
      .line(points.p19)
      .move(points.p20)
      .curve(points.Cp3, points.Cp4, points.p21)
      .move(points.p23)
      .line(points.p24)
      .line(points.p25)
      .move(points.p20)
      .line(points.p26)
      .line(points.p27)
      .move(points.p28)
      .line(points.p29)
      .move(points.p22)
      .line(points.p31)
      .move(points.p32)
      .line(points.p33)
      .line(points.p34)
      .move(points.p30)
      .line(points.p27)
      .move(points.p11)
      .curve(points.p11, points.Cp5, points.p16)
      .curve(points.p16, points.Cp6, points.p32)
      .curve(points.p32, points.Cp7, points.p31)
      .curve(points.p31, points.Cp8, points.p30);

      console.log('Distance',points.p0.dist(points.p5))

    // Final?
    if (final) {
    }

    // Paperless?
    if (paperless) {
    }

    return part;
  }
};

export default ref;
