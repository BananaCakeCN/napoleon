const sleep = ms => new Promise(res => setTimeout(res, ms));
var dir = [true, true, 0];
async function ads(){
    while (true){
        if(dir[2] == 3){
            document.getElementById('ads').remove();
            break;
        }
        if(dir[2] == 0){
            if(!dir[0] && parseInt(document.getElementById('ads').style.left.substring(0, document.getElementById('ads').style.left.length - 2)) < 0){
                dir[0] = true;
            }else if(dir[0] && parseInt(document.getElementById('ads').style.left.substring(0, document.getElementById('ads').style.left.length - 2)) > window.innerWidth - 200){
                dir[0] = false;
            }
            if(!dir[1] && parseInt(document.getElementById('ads').style.top.substring(0, document.getElementById('ads').style.top.length - 2)) < 0){
                dir[1] = true;
            }else if(dir[1] && parseInt(document.getElementById('ads').style.top.substring(0, document.getElementById('ads').style.top.length - 2)) > window.innerHeight - 275.5){
                dir[1] = false;
            }
            document.getElementById('ads').style.left = parseInt(document.getElementById('ads').style.left.substring(0, document.getElementById('ads').style.left.length - 2)) + (dir[0] ? 10 : -10) + 'px';
            document.getElementById('ads').style.top = parseInt(document.getElementById('ads').style.top.substring(0, document.getElementById('ads').style.top.length - 2)) + (dir[1] ? 10 : -10) + 'px';
        }
        await sleep(50);
    }
}
ads();
document.getElementById('ads').onmouseover = function(){
    dir[2] = 1;
}
document.getElementById('ads').onmouseout = function(){
    dir[2] = 0;
}
document.getElementById('close').onclick = function(){
    dir[2] = 3;
}