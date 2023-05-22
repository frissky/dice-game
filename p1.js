var imgs = [];
imgs.push('dice1.png');
imgs.push('dice2.png');
imgs.push('dice3.png');
imgs.push('dice4.png');
imgs.push('dice5.png');
imgs.push('dice6.png');
let p1,p2;
function editnames(){
    p1 = prompt("Please Enter the Name of p1: ");
   if(p1 != null){
    document.querySelector(".p1").innerHTML = p1;
   }
    p2 = prompt("Please Enter the Name of p2: ");
   if(p2 != null){
    document.querySelector(".p2").innerHTML = p2;
   }
}

function diceroll(){
    setTimeout(function() {
        var res = Math.floor(Math.random() * 6) + 1;
        var ans = Math.floor(Math.random() * 6) + 1;
        console.log(ans);
        console.log(res);
        document.querySelector(".dice1").setAttribute("src",imgs[res-1]);
        document.querySelector(".dice2").setAttribute("src", imgs[ans -1]);
        if (res === ans) {
            document.querySelector("h2").innerHTML = "Draw!";
        }
        else if (res > ans) {            
            document.querySelector("h2").innerHTML = (p1 + " WINS!");
        }
        else{
            document.querySelector("h2").innerHTML = (p2 +  " WINS!");
        }
    },1000);
}

