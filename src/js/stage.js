class Stage {
  constructor (tilesWidth, tilesHeight) {
    this.tilesWidth = tilesWidth;
    this.tilesHeight = tilesHeight;
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
    if (x > this.tilesWidth || x < 0 || y < 0 || y > this.tilesHeight) {
      return false;
    } else {
      return true;
    }
  }
} 