function showPopup() {
    let toast = document.querySelector('.toast');
    toast.classList.add('show');
  }
  window.onload = function() {
    setTimeout(showPopup, 5000); 
};


(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()