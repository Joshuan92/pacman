let xpos;

document.addEventListener('DOMContentLoaded', () => {
  const pacboy = document.querySelector('.pacboy-active-light');

  //saves the x-position of pacman on the screen
  xpos = pacboy.offsetLeft;
  
  document.addEventListener('keydown', (event) =>{
    
      if(event.key === 'ArrowRight'){
        console.log(pacboy.style.left);
        pacboy.style.left = `${xpos + 85}px`;
        xpos += 85;

    }
});


  // open and close the pacman
  document.addEventListener('keydown', (event) =>{
    if(event.key === 'ArrowDown'){
      
      if (pacboy.style.backgroundPositionX !== '100%'){
        
        pacboy.style.backgroundPositionX = '100%';
        
      }
      else{
        pacboy.style.backgroundPositionX = '0%';
        

      }
    }
    
  });
  
});
