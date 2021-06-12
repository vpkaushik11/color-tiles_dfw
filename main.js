const main = document.querySelectorAll('#main');
console.log(main);
const peace = document.querySelector('table.play');
//console.log(peace);
const btn = document.querySelector('button.rst');


/* let blank = main[Math.floor(Math.random()*24)];
let blank2 = main[Math.floor(Math.random()*24)];
console.log(blank);
console.log(blank2);
// swapping func
if (blank!==blank2){
    let temp;
    temp = blank.textContent;
    blank.textContent=blank2.textContent;
    blank2.textContent=temp;
    console.log(blank.textContent);
    console.log(blank2.textContent);
}
*/
let i = Math.floor(Math.random()*24);
let j = Math.floor(Math.random()*24);
// this step make one random cell blank
btn.onclick = function(){
    main[i].classList.add('blank');
//swap text content of 2 cell
};

function swap (){
    console.log(main[i]);
    console.log(main[j]);
    let temp = main[i].textContent;
    main[i].textContent=main[j].textContent;
    main[j].textContent=temp;
    main[i].classList.remove('blank');
    main[j].classList.add('blank');
    let t = i;
    i = j;
    j = t; 
}
main[i].onclick = swap;


const troy = document.querySelector('.try');
/*let b = 10;
while(b > 0){
    main[i+1].onclick = function(){
        j = i+1;
        main[j].classList.add('blank');
        main[i].classList.remove('blank');
        let temp = main[i].textContent;
        main[i].textContent = main[j].textContent;
        main[j].textContent = temp;
        let t = i;
        i=j;
        j=t;
        b--;

    }
}
*/