function showLoginMessage() {
    var message = document.querySelector('.success-message');
    
    message.classList.add('success-message-show');

    setTimeout(function() {
        message.classList.remove('success-message-show');
    }, 1000); 
  }