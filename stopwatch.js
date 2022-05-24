let stopwatchtimer=true;
let swh=swm=sws=a=0;

function stopwatchStart(){
    if(stopwatchtimer==true){
        stopwatchtimer=false;
        document.getElementById('swstart').innerHTML='Resume';
        stopwatchcountdown();
    }
}

function stopwatchcountdown(){
    if(sws<59){
        sws+=1;
    }
    else if(sws==59){
        sws=00;
        swm+=1;
    }

    if(swm==59 && 
    sws==59){
        swh+=1;
        swm=sws=0;
    }
    document.getElementById('stopwatchhour').innerHTML=swh;
    document.getElementById('stopwatchminute').innerHTML=swm;
    document.getElementById('stopwatchsecond').innerHTML=sws;

    a = setTimeout("stopwatchcountdown()", 1000);
}

function stopwatchStop(){
    if(stopwatchtimer==false){
        clearTimeout(a);
        stopwatchtimer=true;
    }
}

function stopwatchReset(){
    clearTimeout(a);
    document.getElementById('swstart').innerHTML='Start';
    stopwatchtimer=true;
    swh=swm=sws=0;
    document.getElementById('stopwatchhour').innerHTML=swh;
    document.getElementById('stopwatchminute').innerHTML=swm;
    document.getElementById('stopwatchsecond').innerHTML=sws;
}