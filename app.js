const panels = document.querySelectorAll('.panel');

// function to add "open" as class
function toggleOpen() {
    console.log('hello');
   this.classList.toggle('open');  
}

// function to add "open-active" as a class
function toggleActive(e) {
    console.log(e.propertyName); 
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active'); 
    }
}

// on each of the panels, listen for click

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); 
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); 
