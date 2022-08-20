// generate random color and return red, blue, green in rgb as an array "randomColorRGBA" and shade for oddElement
const randomColorGenerator = () => {
  let randomColorRGBA = []
  // generate number between 0.8 and 0.9
  let shade = (Math.random() * (0.8 - 0.9)) + 0.8
  for (let i = 0; i < 3; i++) {
    randomColorRGBA.push(Math.floor(Math.random() * 255))
  }
  return {randomColorRGBA, shade}
}

const handleCorrectClick = (e) => {
  e.preventDefault()
  e.stopPropagation()
  count += 1
  generateCanvas()
}

const handleWrongClick = () => {
  count = 4
  alert("Wrong Answer")
  generateCanvas(true)
}

const assignOddColor = (shade) => {
  // change alpha back to 1 from last oldElement
  if(oddItemEle) {
    oddItemEle.style = `--alpha: ${1}`
  }
  const listItemEle = document.getElementsByTagName('li')
  const totalItems = count * count
  // generate random number between 0 and total item we have and assign randomly generated alpha to that element
  const randomItem = Math.floor(Math.random() * totalItems)
  listItemEle[randomItem].style = `--alpha: ${shade}`
  oddItemEle = listItemEle[randomItem]
  oddItemEle.addEventListener(('click'), handleCorrectClick)
}

// generate new list item and add it as a child of ul
const setListChilds = () => {
  const newElement = document.createElement('li')
  newElement.setAttribute('id', 'list-item')
  mainEle.appendChild(newElement)
}

const generateCanvas = (isFirst = false) => {
  // if first time generating or reseting canvas then delete every child from mainEle and add new list items
  // else add element after the current visible elements
  if(isFirst) {
    mainEle.innerHTML = '';
    [...Array(count * count)].forEach(() => {
      setListChilds()
    })
  } else {
    for (let i = ((count-1)*(count-1)); i < (count*count); i++) {
      setListChilds()
    }
  }
  const {randomColorRGBA, shade} = randomColorGenerator()
  assignOddColor(shade)
  // assign count and rbba value as variable
  mainEle.style = `--count: ${count}; --red: ${randomColorRGBA[0]}; --blue: ${randomColorRGBA[1]}; --green: ${randomColorRGBA[2]}; --alpha: ${1}`;
}

const mainEle = document.getElementById('main');
let count = 4;
let oddItemEle;

generateCanvas(true)

mainEle.addEventListener('click', handleWrongClick)
