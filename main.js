let cell = document.querySelectorAll('.main');

const btn = document.querySelector('button');

let hex=["red","green","blue","orange","violet","yellow"]; //colors
let hexCount1 = [0,0,0,0,0,0]; // to prevent the colors from repeating
let hexCount2 =[0,0,0,0,0,0];
let arr3 = [[0,0,0],[0,0,0],[0,0,0]]; // 

let arr5 = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];

// functions
//colouring the small grid
btn.onclick = function setColour(){
    arr3 =[[0,0,0],[0,0,0],[0,0,0]];
    hexCount1=[0,0,0,0,0,0];
    for(let k =0; k<9; k++){
        for(let i=0;i<3;i++)
            for(let j=0;j<3;j++){    
                let rnd=Math.floor(Math.random()*6);
                if((arr3[i][j]==0)&&(hexCount1[rnd]<4)){
                    document.getElementById("blah"+i+j).style.backgroundColor=hex[rnd];
                    arr3[i][j]++;
                    hexCount1[rnd]++;
                }
            }
    SetColour(); 
    } 
}
// colouring the big one
function SetColour(){
    arr6 =[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    hexCount2=[0,0,0,0,0,0];
    for(let k =0; k<25; k++){
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){    
                let rnd=Math.floor(Math.random()*6);
                if((arr6[i][j]==0)&&(hexCount2[rnd]<4)){
                    if (i===4&&j===4){
                        continue;
                    }
                    document.getElementById("main"+i+j).style.backgroundColor=hex[rnd];
                    arr6[i][j]++;
                    hexCount2[rnd]++;
                }
            }
        }
    }
}
// swap function
function swap(x1,x2){
    let x = document.getElementById(x1).textContent;
    document.getElementById(x1).textContent = document.getElementById(x2).textContent;
    document.getElementById(x2).textContent = x;
    let y = document.getElementById(x1).className;
    document.getElementById(x1).className = document.getElementById(x2).className;
    document.getElementById(x2).className = y;
    let z = document.getElementById(x1).style.backgroundColor;
    document.getElementById(x1).style.backgroundColor = document.getElementById(x2).style.backgroundColor;
    document.getElementById(x2).style.backgroundColor = z;
}

// selection of cells 
function clickyboy (i,j){
    let bae = document.getElementById("main"+i+j)
    let c = bae.className;
    console.log(bae);
    console.log(c);
    if( c != "blank"){
        if (i>0) {
           if ( document.getElementById("main"+(i-1)+j).className=="blank") {
              swap("main"+i+j,"main"+(i-1)+j);
            }
        }
        if (i<4) {
            if ( document.getElementById("main"+(i+1)+j).className=="blank") {
              swap("main"+i+j,"main"+(i+1)+j);
            }
        }
        if (j<4) {
          if ( document.getElementById("main"+i+(j+1)).className=="blank") {
            swap("main"+i+j,"main"+i+(j+1));
            }
        }
        if (j>0) {
            if ( document.getElementById("main"+i+(j-1)).className=="blank") {
                swap("main"+i+j,"main"+i+(j-1));
            }
        }
    }   
}
