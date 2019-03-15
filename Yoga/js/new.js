class Options {
  constructor(heigth, width, bg, fontSize, textAlign) {
    this.heigth = heigth;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  create() {
    let div = document.createElement('div');
    div.classList.add('new');
    div.style.cssText = `width: ${this.width}px;
    height: ${this.heigth}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
    text-align: ${this.textAlign};`
    return div;
  }
}
let block = new Options(100, 100, '#007', 20, 'center'),
    main = document.querySelector('.main');
main.appendChild(block.create());
let hey = document.querySelector('.new');
console.log(hey);