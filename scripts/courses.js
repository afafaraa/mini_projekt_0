const dialogBgn = document.getElementById("dialogBgn");
const dialogItm = document.getElementById("dialogItm");
const dialogAdv = document.getElementById("dialogAdv");
const formBgn = document.getElementById("formBgn");
const formItm = document.getElementById("formItm");
const formAdv = document.getElementById("formAdv");
let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

//1 - beginner
//expressTest1 - intermediate
//3 - advanced
// localStorage.clear();
// console.log(localStorage);
let votesBgn = 0;
let votesItm = 0;
let votesAdv = 0;

for(let key in localStorage){
    if(localStorage.getItem(key)==="1"){
        votesBgn+=1;
    }
    else if(localStorage.getItem(key)==="expressTest1"){
        votesItm+=1;
    }
    else if(localStorage.getItem(key)==="3"){
        votesAdv+=1;
    }
}

document.getElementById("counterBgn").innerHTML = votesBgn;
document.getElementById("counterItm").innerHTML = votesItm;
document.getElementById("counterAdv").innerHTML = votesAdv;

document.getElementById("btnOpnBgn").onclick = function (){
    dialogBgn.show();
    document.getElementById("btnVoteBgn").onclick = function (){
        let newEmail = document.getElementById("iptBgn").value;
        if(!newEmail.match(regx)){
            alert("Incorrect email");
        }
        else{
            let temp = localStorage.getItem(newEmail);
            if(temp!="1"){
                localStorage.setItem(newEmail,1);
                dialogBgn.close();
                votesBgn+=1;
                document.getElementById("counterBgn").innerHTML = votesBgn;
            }
            else{
                alert("You've already voted for this course");
            }
        }
        console.log(localStorage);
    }
    document.getElementById("btnCancelBgn").onclick = function (){
        dialogBgn.close();
    }
    formBgn.reset();
}

document.getElementById("btnOpnItm").onclick = function (){
    dialogItm.show();
    document.getElementById("btnVoteItm").onclick = function (){
        let newEmail = document.getElementById("iptItm").value;
        if(!newEmail.match(regx)){
            alert("Incorrect email");
        }
        else{
            let temp = localStorage.getItem(newEmail);
            if(temp!="expressTest1"){
                localStorage.setItem(newEmail,2);
                dialogItm.close();
                votesItm+=1;
                document.getElementById("counterItm").innerHTML = votesItm;
            }
            else{
                alert("You've already voted for this course");
            }
        }
        console.log(localStorage);
    }
    document.getElementById("btnCancelItm").onclick = function (){
        dialogItm.close();
    }
    formItm.reset();
}

document.getElementById("btnOpnAdv").onclick = function (){
    dialogAdv.show();
    document.getElementById("btnVoteAdv").onclick = function (){
        let newEmail = document.getElementById("iptAdv").value;
        if(!newEmail.match(regx)){
            alert("Incorrect email");
        }
        else{
            let temp = localStorage.getItem(newEmail);
            if(temp!="3"){
                localStorage.setItem(newEmail,3);
                dialogAdv.close();
                votesAdv+=1;
                document.getElementById("counterAdv").innerHTML = votesAdv;
            }
            else{
                alert("You've already voted for this course");
            }
        }
        console.log(localStorage);
    }
    document.getElementById("btnCancelAdv").onclick = function (){
        dialogAdv.close();
    }
    formAdv.reset();
}

