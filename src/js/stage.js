class Stage {
  constructor (tilesWidth, tilesHeight) {
    this.tilesWidth = tilesWidth;
    this.tilesHeight = tilesHeight;
    this.entArr = [];
  }

  colisionDetection(x, y) {
    
  }

  render () {
    this.arena = document.createElement('div');
    this.arena.classList = "stage";
    this.arena.style.width = `${this.tilesWidth * 85}px`;
    this.arena.style.height = `${this.tilesHeight * 85}px`;
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.arena);
  }

  withinBorders (x,y) {
    if (x >= this.tilesWidth || y >= this.tilesHeight) {
      return false;
    }
    if (x < 0 || y < 0) {
      return false;
    }
    return true;
  }
} 