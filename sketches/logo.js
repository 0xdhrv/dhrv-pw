const LogoSketch = (W, H) => (p) => {
  let phase = 0
  let zoff = 0

  p.setup = () => {
    p.createCanvas(W, H)
  }

  p.draw = () => {
    p.background(0)
    p.noFill()
    p.strokeWeight(4)
    p.stroke(255)
    p.rect(40, 40, 400, 400)
    p.stroke(128)
    p.translate(440, 240)
    p.beginShape()
    let noiseMax = 10
    for (let a = p.HALF_PI; a <= p.HALF_PI + p.PI; a += p.radians(1)) {
      let xoff = p.map(p.cos(a + phase), -1, 1, 0, noiseMax)
      let yoff = p.map(p.sin(a + phase), -1, 1, 0, noiseMax)
      let r = p.map(p.noise(xoff, yoff, zoff), 0, 1, 180, 220)
      if (a >= p.HALF_PI && a <= p.HALF_PI + p.radians(1)) {
        let x = 200 * p.cos(a)
        let y = 200 * p.sin(a)
        p.vertex(x, y)
      } else if (
        a >= p.HALF_PI + p.PI - p.radians(1) &&
        a <= p.HALF_PI + p.PI
      ) {
        let x = 200 * p.cos(a)
        let y = 200 * p.sin(a)
        p.vertex(x, y)
      } else {
        let x = r * p.cos(a)
        let y = r * p.sin(a)
        p.vertex(x, y)
      }
    }
    p.endShape()
    phase += 0.001
    zoff += 0.003
  }
}

export default LogoSketch
