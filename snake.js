class Snake {
  constructor() {
    this.len = 1;
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xDir = 0;
    this.yDir = 0;
  }

  changeLen(len) {
    this.body.shift();
  }

  eat(pos) {
    const eaten = collidePointPointVector(this.body[0], pos, 1);

    if (eaten) {
      this.grow();
      return true;
    }
    return false;

    // let x = this.body[this.body.length - 1].x;
    // let y = this.body[this.body.length - 1].y;
    // if (pos.x === x && pos.y === y) {
    //   print("GG FOOD");
    //   this.grow();
    //   return true;
    // }
    // return false;
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }

  endGame() {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xDir;
    head.y += this.yDir;
    this.body.push(head);

    // this.body[0].x += this.xDir;
    // this.body[0].y += this.yDir;
    // for (let i = 1; i < this.body.length; i++) {
    //   this.body[i].x = this.body[--i].x;
    //   this.body[i].y = this.body[--i].y;
    // }
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}
