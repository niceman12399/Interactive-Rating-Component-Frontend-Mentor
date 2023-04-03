const submitBtn = document.querySelector('#finalBtn')
const container1 = document.querySelector('.outer-container-1')
const container2 = document.querySelector('.outer-container-2')
const rating = document.querySelector('#rating')
const ratingBtn = document.querySelectorAll('.ratingBtn')
const ratingSpan = document.querySelector('span')

let selectedRating = false
ratingBtn.forEach((element) => {
  element.addEventListener('click', () => {
    ratingSpan.innerHTML = element.innerHTML
    selectedRating = true 
  })
})

container2.style.display = 'none'
submitBtn.addEventListener('click', () => {
  if(selectedRating === true){ 
    container1.style.display = 'none'
    container2.style.display = ''
  } 
  else{
    alert('Please select a rating before submitting.')
  }
})