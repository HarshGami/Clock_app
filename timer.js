let stoptime = true;
let audio= new Audio('./Alarm2.mp3');
let c=0;

function TimerStart() {
  if(stoptime == true){
    let th = document.getElementById("timerhour").value;
    let tm = document.getElementById("timerminute").value;
    let ts = document.getElementById("timersecond").value;

    if (th >= 0 && th < 24 && tm >= 0 && tm < 60 && ts >= 0  && ts < 60) {
      stoptime = false;
      document.getElementById("stimerhour").value=th;
      document.getElementById("stimerminute").value=tm;
      document.getElementById("stimersecond").value=ts;

      document.getElementById("main").style.display = "none";
      document.getElementById("secondary").style.display = "block";

      document.getElementById('timercountdown').innerHTML=`${th} : ${tm} : ${ts}`;      
      countdown();
    }
    else{
      alert("Please Enter Valid Time.");
      document.getElementById("timerhour").value=0;
      document.getElementById("timerminute").value=0;
      document.getElementById("timersecond").value=0;
    }
  }
}

function countdown() {
  if(stoptime==false){
    if (document.getElementById("timersecond").value > 0) {
      document.getElementById("timersecond").value -= 1;
    } 
    else {
      if (document.getElementById("timerminute").value > 0 ) {
        document.getElementById("timerminute").value -= 1;
        document.getElementById("timersecond").value = 59; 
      } 
      else {
        if(document.getElementById("timerhour").value > 0){
          document.getElementById("timerhour").value -= 1;
          document.getElementById("timerminute").value = 59;
          document.getElementById("timersecond").value = 59;
        }
      }
    }

    if(document.getElementById("timercountdown").innerHTML=='0 : 0 : 0'){
      clearTimeout(c);
      audio.play();
      stoptime=true;
      document.getElementById("main").style.display = "block";
      document.getElementById("secondary").style.display = "none";
    }
    else{
      document.getElementById("timercountdown").innerHTML = `${
        document.getElementById("timerhour").value
      } : ${document.getElementById("timerminute").value} : ${
        document.getElementById("timersecond").value
      }`;
      c = setTimeout("countdown()", 1000);
    } 
  }
}

function TimerStop() {
  audio.load();
  if (stoptime == false) {
    if(confirm("Timer will be Reset.")==true){
      clearTimeout(c);
      stoptime = true;
      document.getElementById("timercountdown").innerHTML='0 : 0 : 0';
      
      document.getElementById("timerhour").value=0;
      document.getElementById("timerminute").value=0;
      document.getElementById("timersecond").value=0;

      document.getElementById("main").style.display = "block";
      document.getElementById("secondary").style.display = "none";
    }
  }
}