(() => {
  
    // ==================================Модалка с загрузкой============================

    const uploadBtn = document.querySelector('.upload-btn');
    const fileInput = document.getElementById('file-input');
    const progressModal = document.querySelector('.progress-modal');
    const modal = document.querySelector('.modal');
    const progressBar = document.querySelector('.progress');
    
    uploadBtn.addEventListener('click', () => {
      fileInput.click(); 
    });
    
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      modal.classList.add('hidden');
      if (file) {
        showProgressModal();
    
        let progress = 0;
        const interval = setInterval(() => {
            progressModal.classList.remove('hidden');
          progress += 5;
          progressBar.style.width = `${progress}%`;
    
          if (progress === 100) {
            clearInterval(interval);
            progressModal.classList.add('hidden');

            setTimeout(() => {
              window.location.href = "photo_ready.html";
            }, 0); 
          }
        }, 150);
      }
    });
    
    
    function showProgressModal() {
      progressModal.classList.remove('hidden');
    }
    
})()