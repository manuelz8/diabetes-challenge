const btnToggleSidebar = document.querySelector('.toggle-sidebar')
const sidebar = document.querySelector('.sidebar')
const listAccordions = document.querySelectorAll('[target-accordion]')

listAccordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const queryTargetAccordion = accordion.getAttribute('target-accordion')
        const targetAccordion = document.querySelector(queryTargetAccordion)
        const stateTargetAccordion = targetAccordion.getAttribute('toggle-accordion')
        const toggleState = !(stateTargetAccordion === 'true')
        targetAccordion.setAttribute('toggle-accordion', toggleState)
        const sidebarIsClose = sidebar.classList.contains('sidebar--close')
        if (sidebarIsClose) sidebar.classList.toggle('sidebar--close')
    })
})

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