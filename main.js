let cell = document.querySelectorAll('.main');
//console.log(peace);
const btn = document.querySelector('button');


btn.onclick = function(){
    let num = Math.floor(Math.random()*24);
    cell[num].classList.add('blank')
    for (let i = 0; i < cell.length; i++) {
            if(i==num+1||i==num-1||i==num+5||i==num-5){
            cell[i].onclick = function(){
                let temp  = cell[num].textContent;
                cell[num].textContent = cell[i].textContent;
                cell[i].textContent = temp;

                cell[num].classList.remove('blank');
                cell[i].classList.add('blank');
            } num = i;
        }
    }
}
