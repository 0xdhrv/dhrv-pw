const Print10Sketch = (W, H) => (p) => {
  let x = 0
  let y = 0
  let space = 20

  p.setup = () => {
    p.createCanvas(W, H)
  }

  p.draw = () => {
    p.noiseSeed(53)
    p.stroke(255)
    if (p.random(1) < 0.5) {
      // noStroke();
      // fill(255);
      // rect(x, y, space, space);
      p.strokeWeight(2)
      p.stroke(p.noise(x, y) * 255)
      p.line(x, y, x + space, y + space)
      p.triangle(x - space, y - space, x, y, x + space, y + space)
    } else {
      // noStroke();
      // fill(0);
      // rect(x, y, space, space);
      p.strokeWeight(2)
      p.stroke(p.noise(x, y) * 255)
      p.line(x, y + space, x + space, y)
      p.triangle(x - space, y - space, x, y, x + space, y + space)
    }
    x = x + space
    if (x > W) {
      x = 0
      y = y + space
    }
  }
}

export default Print10Sketch
