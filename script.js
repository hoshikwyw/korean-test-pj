//--------------------- font-family pretendard

(function (d) {
  var config = {
      kitId: "arc5dbt",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

//--------------------- toggle sidebar

function toggleNavbar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transitionDelay = "0.1s";
  sidebar.style.transform =
    sidebar.style.transform === "translateX(0px)"
      ? "translateX(-1000000px)"
      : "translateX(0px)";
}

//--------------------- header slide show

let slideHeader = document.querySelectorAll(".slides");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let dots = document.querySelectorAll(".dot");

var counter = 0;
// next btn function
next.addEventListener("click", slideNext);

function slideNext() {
  slideHeader[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideHeader.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideHeader[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}
// prev btn function
prev.addEventListener("click", slidePrev);

function slidePrev() {
  slideHeader[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideHeader.length - 1;
  } else {
    counter--;
  }
  slideHeader[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}
// autoplay function
function autoPlay() {
  deletInterval = setInterval(timer, 5000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoPlay();

// dots btn function
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}
function switchSlide(currentSlide) {
  currentSlide.classList.add("active");
  var slideId = currentSlide.getAttribute("attr");
  if (slideId > counter) {
    slideHeader[counter].style.animation = "next1 0.2s ease-in forwards";
    counter = slideId;
    slideHeader[counter].style.animation = "next2 0.2s ease-in forwards";
  }
  else if ( slideId == counter) {
    return;
  }
  else {
    slideHeader[counter].style.animation = "prev1 0.2s ease-in forwards";
    counter = slideId;
    slideHeader[counter].style.animation = "prev2 0.2s ease-in forwards";
  }
}

//--------------------- pj number counting up
let valueDisplays = document.querySelectorAll(".pj-number");
let interval = 20;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let increment = 200;
  let durationMultiplier = 0.01;
  let duration = Math.floor(
    (interval / (endValue / increment)) * durationMultiplier
  );
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + "건";
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
