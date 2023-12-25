(function () {

    // БУРГЕР

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        console.log()

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-modal')) {
            document.body.classList.add('body--opened-modal')
        } else {
            document.body.classList.remove('body--opened-modal')
        }
    }

    // МОДАЛКА

    const btn = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')

    const openModal = () => {
        modal.classList.add('body--opened-modal')
    }

    const closeModal = () => {
        modal.classList.remove('body--opened-modal')
    }

    btn.addEventListener('click', openModal)

    modal.addEventListener('click', event => {
        const target = event.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
            closeModal()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('body--opened-modal')) {
            closeModal()
        }
    })

    // ТАБЫ

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }


    //АККАРДЕОН

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('.accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
                accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
            else {
                accordionContent.style.maxHeight = null;
            }
        })
    })

})()

