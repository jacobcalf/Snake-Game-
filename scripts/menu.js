function startfunc(){
    document.getElementById('gameCanvas').className = "show";
    document.getElementById('name').className = "hide";
    document.getElementById('btnstart').className = "hide";
    document.getElementById('btnleaderboard').className = "hide";
    document.getElementById('btndiff').className = "hide";
    document.getElementById('btnmenu').className = "menubutton";
    document.getElementById('score').className = "show";


    restart();
}

function returnfunc(){
    document.getElementById('gameCanvas').className = "hide";
    document.getElementById('name').className = "show";
    document.getElementById('btnstart').className = "menubutton";
    document.getElementById('btnleaderboard').className = "menubutton";
    document.getElementById('btndiff').className = "menubutton";
    document.getElementById('btnmenu').className = "hide";
    document.getElementById('diffmenu').className = "hide";
    document.getElementById('score').className = "hide";


}

function diffmenufunc(){

document.getElementById('diffmenu').className = "switch-field";


    document.getElementById('name').className = "hide";
    document.getElementById('btnstart').className = "hide";
    document.getElementById('btnleaderboard').className = "hide";
    document.getElementById('btndiff').className = "hide";
    document.getElementById('btnmenu').className = "menubutton";
}

var diff = 100;

function diffunc(){
    var ele = document.getElementsByName('difswitch');

    if (ele[0].checked){
        GAME_SPEED = 100;
    }
    else if (ele[1].checked){
        GAME_SPEED = 50;
    }
    else if (ele[2].checked){
        GAME_SPEED = 25;
    }


}