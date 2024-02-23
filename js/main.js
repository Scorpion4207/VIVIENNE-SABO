
(() => {
    // ==================================Бургер============================
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav-link')
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1000) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    document.addEventListener('click', modalInit)
    function modalInit(e) {
        const modalOpen = e.target.closest('.button-download')
        const modalClose = e.target.closest('.modal__cancel')
        const modal = e.target.classList.contains('modal')
        const buttonClose = e.target.closest('.form__button')
        if (!modalClose && !modalOpen && !modal && !buttonClose) return
        if (!document.body.classList.contains('body--modal-opened') && e.target.closest('.about__img-button')) {
            document.body.classList.add('body--modal-opened')
        } else if (e.target && e.target.closest('.modal__cancel') || e.target.closest('.form__button') || e.target.classList.contains('modal') && document.body.classList.contains('body--modal-opened')) {
            document.body.classList.remove('body--modal-opened')
        }
    }
    document.addEventListener('keydown', modalClose)
    function modalClose(e) {
        if (e.code === 'Escape' && document.body.classList.contains('body--modal-opened')) {
            document.body.classList.remove('body--modal-opened')
        }
    }
})()