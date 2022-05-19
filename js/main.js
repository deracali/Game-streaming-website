// Day to night
let day_night = document.getElementById("day_night");
let day_night2 = document.getElementById("day_night2");

day_night2.style.display = "none";

day_night.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--color-1",
    "rgb(184,184,184,.5)"
  );
  document.documentElement.style.setProperty("--color-2", "#000");
  document.documentElement.style.setProperty("--color-3", "#fff");
  document.documentElement.style.setProperty("--color-4", "rgb(0,0,0,.5)");
  document.documentElement.style.setProperty("--color-5", "#663da6");

  day_night.style.display = "none";
  day_night2.style.display = "unset";
});

day_night2.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-1", "#262b3f");
  document.documentElement.style.setProperty("--color-2", "#fff");
  document.documentElement.style.setProperty("--color-3", "#1e2337");
  document.documentElement.style.setProperty(
    "--color-4",
    "rgb(255,255,255,.5)"
  );
  document.documentElement.style.setProperty("--color-5", "greenyellow");

  day_night2.style.display = "none";
  day_night.style.display = "unset";
});

// Battery navigator
let active_battery = document.getElementById("active_battery");
let battery_icon = document.getElementById("battery_icon");
let battery_level = document.getElementById("battery_level");
// let audio = new Audio('');

navigator.getBattery().then((battery) => {
  const battery_level_change = () => {
    battery_level.innerText = battery.level * 100 + "%";
  };
  setInterval(battery_level_change, 1000);
  battery_level_change();

  battery_icon.value = battery.charging;

  battery.addEventListener("chargingchange", () => {
    switch (battery.charging) {
      case true:
        console.log("true");
        battery_icon.classList.remove("bi-battery-half");
        battery_icon.classList.add("bi-battery-charging");
        active_battery.classList.add("active_battery");
        battery_icon.style.color = "#fff";
        // Audio.play();
        break;
      case false:
        battery_icon.classList.add("bi-battery-half");
        battery_icon.classList.remove("bi-battery-charging");
        active_battery.classList.remove("active_battery");
        battery_icon.style.color = "unset";
        break;
    }
  });
});

let wifi = document.getElementById("wifi");
const wifi_change = () => {
  if (navigator.onLine) {
    wifi.style.color = "var(--color-5)";
  } else {
    wifi.style.color = "#fff";
  }
};

setInterval(wifi_change, 100);
wifi_change();

// 2nd Page Javascript
let img_change = document.getElementById("img_change");

// const change_img
