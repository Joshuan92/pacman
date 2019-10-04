class Pacman{
    constructor(){
        this.xpos = 0;
        this.ypos = 0;
        this.mouth = 'open';
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

    move(){
        const pacboy = document.querySelector('.pacboy-active-light');
        
        //saves the x-position of pacman on the screen
        this.xpos = pacboy.offsetLeft;
        //saves the y-position of pacman on the screen
        this.ypos = pacboy.offsetTop;

        document.addEventListener('keydown', (event) =>{
            
            if(event.key === 'ArrowRight'){
            pacboy.style.left = `${this.xpos + 85}px`;
            this.xpos += 85;
            }
            
            if(event.key === 'ArrowLeft'){
            pacboy.style.left = `${this.xpos - 85}px`;
            this.xpos -= 85;
            }

            if(event.key === 'ArrowUp'){
            pacboy.style.top = `${this.ypos - 85}px`;
            this.ypos -= 85;
            }
        });
    }

}