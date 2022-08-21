const sliderValueEle = document.getElementById("slider-value")
const circleEle = document.getElementById("circle")

const handleChange = (e) => {
  sliderValueEle.innerHTML = e.target.value;
  circleEle.style = `--percentage:${e.target.value}`;
}

document.getElementById("slider").addEventListener("change", handleChange);
