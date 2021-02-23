// Soal 1
console.log('---SOAL 1---');
console.log('---Release 0---');

class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get legs() {
    return this._legs;
  }
  set legs(legs) {
    this._legs = legs;
  }
  get cold_blooded() {
    return this._cold_blooded;
  }
  set cold_blooded(cold_blooded) {
    this._cold_blooded = cold_blooded;
  }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);
sheep.legs = 3;
console.log(sheep.legs);


console.log('---Release 2---');
class Frog extends Animal {
  constructor(name) {
    super(name);
    this._cold_blooded = false;
  }
  jump() {
    console.log('hop hop');
  }
}

class Ape extends Animal {
  constructor(name) {
    super(name)
    this._legs = 2;
    this._cold_blooded = false;
  }
  yell() {
    console.log('Auooo');
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
 
var kodok = new Frog("buduk")
kodok.jump()
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

// Soal 2
console.log('---SOAL 2---');
class Clock {
  constructor(template) {
    this.template = template;
  };
  
  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  };

  stop() {
    clearInterval(timer);
  };

  start() {
    var timer;
    timer = setInterval(this.render.bind(this.template), 1000);
  };
}


var clock = new Clock({template: 'h:m:s'});
console.log()
clock.start();  
