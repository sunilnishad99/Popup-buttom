const popupContainer = document.querySelector('.popup-container')
const popup = document.querySelector('.popup-container')
const button = document.querySelector('button')
const closeIcon = document.querySelector('.close-icon')
// const overlay = document.querySelector('.overlay')


button.addEventListener('click',() =>{
    popupContainer.classList.add('popup-open')
    popupContainer.classList.add('popup-open')
})

closeIcon.addEventListener('click',() =>{
    popupContainer.classList.remove('popup-open')
    popupContainer.classList.remove('popup-open')
})

popup.addEventListener('click',(e)=>{
    e.stopPropagation()
})

popupContainer.addEventListener('click',() =>{
    popupContainer.classList.remove('popup-open')
    popupContainer.classList.remove('popup-open')
})