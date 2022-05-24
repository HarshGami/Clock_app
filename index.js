setInterval(() => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let hr = 30 * h + m / 2;
  let mr = 6 * m;
  let sr = 6 * s;

  hour.style.transform = `rotate(${hr}deg)`;
  minute.style.transform = `rotate(${mr}deg)`;
  second.style.transform = `rotate(${sr}deg)`;

  document.getElementById("dtime").innerText = d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  });
}, 1000);

function Home() {
  document.getElementById("Home").style.display = "block";
  document.getElementById("worldclock").style.display = "none";
  document.getElementById("alarm").style.display = "none";
  document.getElementById("stopwatch").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("h").style.color = "white";
  document.getElementById("w").style.color = "black";
  document.getElementById("a").style.color = "black";
  document.getElementById("s").style.color = "black";
  document.getElementById("t").style.color = "black";
}

function WorldClock() {
  document.getElementById("Home").style.display = "none";
  document.getElementById("worldclock").style.display = "block";
  document.getElementById("alarm").style.display = "none";
  document.getElementById("stopwatch").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("h").style.color = "black";
  document.getElementById("w").style.color = "white";
  document.getElementById("a").style.color = "black";
  document.getElementById("s").style.color = "black";
  document.getElementById("t").style.color = "black";
}

function Alarm() {
  document.getElementById("Home").style.display = "none";
  document.getElementById("worldclock").style.display = "none";
  document.getElementById("alarm").style.display = "block";
  document.getElementById("stopwatch").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("h").style.color = "black";
  document.getElementById("w").style.color = "black";
  document.getElementById("a").style.color = "white";
  document.getElementById("s").style.color = "black";
  document.getElementById("t").style.color = "black";
}

function StopWatch() {
  document.getElementById("Home").style.display = "none";
  document.getElementById("worldclock").style.display = "none";
  document.getElementById("alarm").style.display = "none";
  document.getElementById("stopwatch").style.display = "block";
  document.getElementById("timer").style.display = "none";
  document.getElementById("h").style.color = "black";
  document.getElementById("w").style.color = "black";
  document.getElementById("a").style.color = "black";
  document.getElementById("s").style.color = "white";
  document.getElementById("t").style.color = "black";
}

function Timer() {
  document.getElementById("Home").style.display = "none";
  document.getElementById("worldclock").style.display = "none";
  document.getElementById("alarm").style.display = "none";
  document.getElementById("stopwatch").style.display = "none";
  document.getElementById("timer").style.display = "block";
  document.getElementById("h").style.color = "black";
  document.getElementById("w").style.color = "black";
  document.getElementById("a").style.color = "black";
  document.getElementById("s").style.color = "black";
  document.getElementById("t").style.color = "white";
}

