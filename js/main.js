
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

    // ==================================Модалка 1============================

    document.addEventListener('click', modalInit)
    function modalInit(e) {
        const modalOpen = e.target.closest('.button-upload-photo')
        const modal = e.target.classList.contains('modal')
        if (!modalOpen && !modal) return
        if (!document.body.classList.contains('body--modal-opened') && e.target.closest('.button-upload-photo')) {
            document.body.classList.add('body--modal-opened')
        } else if (e.target && e.target.classList.contains('modal') && document.body.classList.contains('body--modal-opened')) {
            document.body.classList.remove('body--modal-opened')
        }
    }
    document.addEventListener('keydown', modalClose)
    function modalClose(e) {
        if (e.code === 'Escape' && document.body.classList.contains('body--modal-opened')) {
            document.body.classList.remove('body--modal-opened')
        }
    }

    const uploadBtn = document.querySelector('.upload-btn');
    const fileInput = document.getElementById('file-input');
    const progressModal = document.querySelector('.progress-modal');
    const modal = document.querySelector('.modal');
    const progressBar = document.querySelector('.progress');
    
    uploadBtn.addEventListener('click', () => {
      fileInput.click();
      modal.classList.add('hidden');
    });
    
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
    
      if (file) {
        showProgressModal();
    
        let progress = 0;
        const interval = setInterval(() => {
            progressModal.classList.remove('hidden');
          progress += 20;
          progressBar.style.width = `${progress}%`;
    
          if (progress === 100) {
            clearInterval(interval);
            progressModal.classList.add('hidden');

            setTimeout(() => {
              window.location.href = "photo_ready.html";
            }, 2000); // Через 2 секунды переход на другую страницу
          }
        }, 1000); // Промежуток между обновлениями прогресс-бара в миллисекундах
      }
    });
    
    
    function showProgressModal() {
      progressModal.classList.remove('hidden');
    }
    




    // document.addEventListener('click', modalViewing)
    // function modalViewing(e) {
    //     const modalOpen = e.target.closest('.button-viewing')
    //     const modal = e.target.classList.contains('modal')
    //     if (!modalOpen && !modal) return
    //     if (!document.body.classList.contains('body--modal-opened') && e.target.closest('.button-viewing')) {
    //         document.body.classList.add('body--modal-opened')
    //     } else if (e.target && e.target.classList.contains('modal') && document.body.classList.contains('body--modal-opened')) {
    //         document.body.classList.remove('body--modal-opened')
    //     }
    // }
    // document.addEventListener('keydown', modalClose)
    // function modalClose(e) {
    //     if (e.code === 'Escape' && document.body.classList.contains('body--modal-opened')) {
    //         document.body.classList.remove('body--modal-opened')
    //     }
    // }


})()