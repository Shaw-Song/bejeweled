const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = [[' ',' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ',' ']]；

    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    Screen.addCommand('up', 'move cursor up', this.cursor.up);
    Screen.addCommand('down', 'move cursor down', this.cursor.down);
    Screen.addCommand('left', 'move cursor left', this.cursor.left);
    Screen.addCommand('right', 'move cursor right', this.cursor.right);
    Screen.addCommand('s', 'select a gem', this.cursor.select);
    Screen.addCommand('enter', 'execute swaps', this.cursor.swap);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkForMatches(grid) {

    // Fill this

  }

}

module.exports = Bejeweled;
