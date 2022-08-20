const star = document.getElementsByClassName("fa")
const ratingDOM = document.getElementById('current-rating')
currentRating = 0

// add mouseover listener to every star in dom
for (let i = 0; i < star.length; i++) {
  star[i].addEventListener('mouseover', () => {
    addRating(i + 1)
  })
  document.getElementById('main').addEventListener('mouseleave', () => {
    removeRating()
  })
  star[i].addEventListener('click', () => {
    selectRating(i + 1)
  })
}

const addRating = (index) => {
  // add rating upto the hovers star 
  for (let i = 0; i < index; i++) {
    star[i].classList.remove('fa-star-o')
    star[i].classList.add('fa-star')
  }

  // check if next stars is rated true then run a remove rating from all next stars
  if (star[index]?.classList.contains('fa-star')) {
    for (let i = index; i < star.length; i++) {
      star[i].classList.remove('fa-star')
      star[i].classList.add('fa-star-o')
    }
  }
}

const removeRating = () => {
  for (let i = 0; i < currentRating; i++) {
    star[i].classList.add('fa-star')
    star[i].classList.remove('fa-star-o')
  }
  // check if next stars is rated true then run a remove rating from all next stars
  if (star[currentRating]?.classList.contains('fa-star')) {
    for (let i = currentRating; i < star.length; i++) {
      star[i].classList.remove('fa-star')
      star[i].classList.add('fa-star-o')
    }
  }
}

const selectRating = (index) => {
  currentRating = index
  ratingDOM.innerHTML = currentRating
}