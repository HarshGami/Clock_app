let alarmtimer=true;
let b=0;
let Aaudio= new Audio('./Alarm.mp3');

function alarmSet(){
    if(alarmtimer==true){
        let ah = document.getElementById('alarmhour').value;
        let am = document.getElementById('alarmminute').value;
        if (ah >= 0 && ah < 24 && am >= 0 && am < 60) {
            alarmtimer=false;
            timeleft();
        }
        else{
            alert("Please Enter Valid Time.");
            document.getElementById('alarmhour').value=0;
            document.getElementById('alarmminute').value=0;
        }
    }
}

function timeleft(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let ah = document.getElementById('alarmhour').value;
    let am = document.getElementById('alarmminute').value;

    let lh=ah-h;
    let lm=am-m;
    if(h>ah){
        lh=24+lh;
    }
    if(m>am){
        lh-=1;
        lm=60+lm;
        if(h==ah){
            lh=24+lh;
        }
    }

    if(lh==0 && lm==0){
        Aaudio.play();
        alarmtimer=true;
        document.getElementById('alarmhour').value=0;
        document.getElementById('alarmminute').value=0;
        document.getElementById('alarmtimeleft').innerHTML='0 hour 0 minute.';
        clearTimeout(b);
    }
    else{
        document.getElementById('alarmtimeleft').innerHTML=`${lh} hour ${lm} minute.`;
        b = setTimeout("timeleft()",1000);
    }
}

function alarmClear(){
    Aaudio.load();
    if(alarmtimer==false){
        if(confirm("Alarm will be Stop.")==true){
            alarmtimer=true;
            document.getElementById('alarmhour').value=0;
            document.getElementById('alarmminute').value=0;
            document.getElementById('alarmtimeleft').innerHTML='0 hour 0 minute.';
            clearTimeout(b);
        }
    }
}