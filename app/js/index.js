const faq = document.querySelector('.faq__block');
const faqItems = document.querySelectorAll('.faq__item');
const faqQs = document.querySelectorAll('.faq__question');

console.log(faqItems);
// faq.addEventListener ('click', e => {
//     console.log('Clicked');
// })

faqQs.forEach((item, index) => {
    item.addEventListener('click', e => {
        faqItems[index].classList.toggle('active')
    } )
})

