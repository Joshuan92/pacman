class Pacman{
    constructor(stage){
        this.mouth = 'open';
        this.tilePositionX = 0;
        this.tilePositionY = 0;
        this.stage = stage;
    }


    render (){
        this.pacboy = document.createElement('div');
        this.pacboy.className = "entity entity--pac pacboy-active-light";
    }

    mount(parent){
        this.render();
        parent.appendChild(this.pacboy);
        this.move();
    }


    alternateMouth(){
       
        if (this.pacboy.style.backgroundPositionX !== '100%'){
        
            this.pacboy.style.backgroundPositionX = '100%';
            
          } else {
            this.pacboy.style.backgroundPositionX = '0%';
          }
    } 

    move(){
        const pacboy = document.querySelector('.pacboy-active-light');
        
        //saves the x-position of pacman on the screen
        this.xpos = pacboy.offsetLeft;
        //saves the y-position of pacman on the screen
        this.ypos = pacboy.offsetTop;

        document.addEventListener('keydown', (event) =>{
            console.log(this.tilePositionX);
            console.log(this.tilePositionY);
            console.log(this.stage.tilesWidth);
            console.log(this.stage.tilesHeight);
            
            if (this.stage.withinBorders(this.tilePositionX + 1, this.tilePositionY + 1)){
                console.log("within borders") 
            } else {
                console.log("not within borders");
            }
            
            if(event.key === 'ArrowRight'){
            
                this.tilePositionX += 1;
                pacboy.style.left = `${this.tilePositionX * 85}px`;
                pacboy.style.backgroundPositionY = '0%';
                this.alternateMouth();
            }
            
            if(event.key === 'ArrowLeft'){
                this.tilePositionX -= 1;
                pacboy.style.left = `${this.tilePositionX  * 85}px`;
                pacboy.style.backgroundPositionY = '33.333%';
                this.alternateMouth();
            }

            if(event.key === 'ArrowUp'){
                this.tilePositionY -= 1;
                pacboy.style.top = `${this.tilePositionY * 85}px`;
                pacboy.style.backgroundPositionY = '100%';
                this.alternateMouth();
            }

            if(event.key === 'ArrowDown'){
                this.tilePositionY += 1;
                pacboy.style.top = `${this.tilePositionY * 85}px`;
                pacboy.style.backgroundPositionY = '66.6666%';
                this.alternateMouth();
            }


        });
    }

}