const btn = document.querySelector('button.rst');

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
    move++;
}

// selection of cells 
function clickyboy (i,j){
    if(move==0)
      start();
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
    moves();
    setTimeout(check,250);  
}

let counter,move=0;
let a=[0,0,0];
let Timer;
let b=["","",""];

//no of moves made functions
function moves(){
    document.getElementById("moves").innerHTML="No. of moves made: "+move;
  }
//timer
function start() {
      Timer = setInterval(function(){
          a[2]+= 1;
          if(a[2]==60){
              a[1]++;
              a[2]-=60;
          }
          if(a[1]==60){
              a[0]++;
              a[1]-=60;
          }
          for(let i=0;i<3;i++){
              if((a[i]/10)<1){
                  b[i]="0"+a[i];
              }
              else{
                  b[i]=a[i];
              }
          }
           document.getElementById("timer").innerText = "Time Elapsed: "+b[0]+":"+b[1]+":"+b[2];
      }, 1000) ;
  
}

  function resetTimer() {
      a=[0,0,0];
      document.getElementById("timer").innerText = "Time Elapsed: 00:00:00";
      clearInterval(Timer);
}

//score function
function scores(){
    let points= 1000 - (((a[0]*60*60)+(a[1]*60)+(a[2]))*0.50)+(move*0.25);
    return points;
}
function check(){
    counter=0;
    for(let i=1;i<=3;i++){
        for(j=1;j<=3;j++){
            let x=i-1;
            let y=j-1;
            if(document.getElementById("blah"+x+y).style.backgroundColor==document.getElementById("main"+i+j).style.backgroundColor)
                counter++;
        }
        if(counter==9){
            let s = scores();
            console.log(s);
            alert("You Won\nScore: "+s+" points\nThe higher the score, the better you have played");
            resetTimer();
        }
    }
}
