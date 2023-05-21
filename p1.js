var imgs = [];
imgs.push('dice1.png');
imgs.push('dice2.png');
imgs.push('dice3.png');
imgs.push('dice4.png');
imgs.push('dice5.png');
imgs.push('dice6.png');


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
            document.querySelector("h2").innerHTML = ("Player1 WINS!");
        }
        else{
            document.querySelector("h2").innerHTML = ("Player2 WINS!");
        }
    },1000);
}

