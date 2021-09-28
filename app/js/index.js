const faq = document.querySelector('.faq__block');
const faqItems = document.querySelectorAll('.faq__item');
const faqQs = document.querySelectorAll('.faq__question');


faqQs.forEach((item, index) => {
    item.addEventListener('click', e => {
        clearActiveItems(index)
        faqItems[index].classList.toggle('active')      
    } )
})

const clearActiveItems = selectedIndex => {
    faqQs.forEach((item, index) => {
        if (selectedIndex !== index) {
            faqItems[index].classList.remove('active') 
        }      
    })
  }