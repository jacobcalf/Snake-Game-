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
    GAME_SPEED = 999999;//freeze the snake
    menu_back.play();
    document.getElementById('gameCanvas').className = "hide";
    document.getElementById('name').className = "show";
    document.getElementById('btnstart').className = "menubutton";
    document.getElementById('btnleaderboard').className = "menubutton";
    document.getElementById('btndiff').className = "menubutton";
    document.getElementById('btnmenu').className = "hide";
    document.getElementById('diffmenu').className = "hide";
    document.getElementById('score').className = "hide";
    document.getElementById('contain').className = "hide";


}

function leaderboardfunc(){
    document.getElementById('name').className = "hide";
    document.getElementById('btnstart').className = "hide";
    document.getElementById('btnleaderboard').className = "hide";
    document.getElementById('btndiff').className = "hide";
    document.getElementById('btnmenu').className = "menubutton";
    document.getElementById('contain').className = "show";
}

function diffmenufunc(){
    menu_select.play();
    document.getElementById('diffmenu').className = "switch-field";
    document.getElementById('name').className = "hide";
    document.getElementById('btnstart').className = "hide";
    document.getElementById('btnleaderboard').className = "hide";
    document.getElementById('btndiff').className = "hide";
    document.getElementById('btnmenu').className = "menubutton";
}




function diffunc(){
    var ele = document.getElementsByName('difswitch');

    if (ele[0].checked){
        //easy
        GAME_SPEED = 100;
    }
    else if (ele[1].checked){
        //medium
        GAME_SPEED = 50;
    }
    else if (ele[2].checked){
        //hard
        GAME_SPEED = 25;
    }
}
