const btnToggleSidebar = document.querySelector('.toggle-sidebar')
const sidebar = document.querySelector('.sidebar')
const listAccordions = document.querySelectorAll('[target-accordion]')

$(document).ready(function() {
    $('.toggle-sidebar').click(function() {
      $(this).parent().parent().find('.faq-item-answer').slideToggle();
    });
  });
  

btnToggleSidebar.addEventListener('click', function () {
    let delay = 0
    listAccordions.forEach((accordion) => {
        const queryTargetAccordion = accordion.getAttribute('target-accordion')
        const targetAccordion = document.querySelector(queryTargetAccordion)
        const stateTargetAccordion = targetAccordion.getAttribute('toggle-accordion')
        const accordionIsOpen = stateTargetAccordion === 'true'
        if (accordionIsOpen) {
            targetAccordion.setAttribute('false')
        }
    })
    setTimeout(() => {
        sidebar.classList.toggle('sidebar--close')
    }, delay)
})