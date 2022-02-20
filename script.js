class SCROLL{
    constructor(set) {
       if(typeof set.element == 'string') {
           this.el = document.querySelector(set.element);
       }else if (set.element instanceof HTMLElement) {
           this.el = set.element
       }
       this.el.style.position = 'fixed';
       this.top = set.range;
       this.el.style.top = this.top + 'px';

       window.addEventListener('scroll', () => this.scroll())
    }

    scroll() {
        if(this.top - scrollY > 0) {
            this.el.style.top = this.top - scrollY + 'px';
        }else {
            this.el.style.top = 0;
        }
    }
}



let scroll = new SCROLL({
    element: '.header__nav',
    range: 100

});

let scroll2 = new SCROLL({
    element:'.header__nav2',
    range: 400
})
console.log(scroll);

//Домашка

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let content = document.querySelector ('.header__content');
 

content.addEventListener('mouseover', () => {
       content.style.left = `${random(0, 80)}%`;
        content.style.top = `${random(0, 80)}%`;
    });


    



