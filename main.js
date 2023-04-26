function censorInput(config) {
  function showToast(message, toastStyle) {
    const toast = document.createElement('div');
    toast.textContent = message;
    Object.assign(toast.style, {
      opacity: '1',
      transition: `opacity ${`${config.fadeDuration / 1000}s` || '0.5s'} ease-in-out`,
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'rgba(255, 59, 48, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: '1000',
      maxWidth: '300px',
      textAlign: 'center',
    }, toastStyle,);

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, config.fadeDuration || 500);
    }, config.toastDuration || 3000);
  }

  function censorWords(textarea, censoredWords) {
    const words = textarea.value.split(' ');
    let censored = false;

    for (let i = 0; i < words.length; i++) {
      if (censoredWords.includes(words[i])) {
        words[i] = '';
        censored = true;
      }
    }

    if (censored) {
      textarea.value = words.join(' ');
      showToast(config.toastMessage || 'Please use nicer language!', config.toastStyle);
    }
  }

  function setupCensorship() {
    const textarea = document.querySelector(config.textareaSelector);
    const censoredWords = config.censoredWords || [];

    textarea.addEventListener('input', () => {
      censorWords(textarea, censoredWords);
    });
  }

  document.addEventListener('DOMContentLoaded', setupCensorship);
}


// example:

censorInput({
  textareaSelector: '#text-area',
  censoredWords: ['badword1', 'badword2', 'badword3'],
  toastMessage: 'Please use nicer language!',
  // toastStyle: {
  //   position: 'fixed',
  //   bottom: '20px',
  //   right: '20px',
  //   backgroundColor: 'purple',
  //   color: 'white',
  //   padding: '10px',
  //   borderRadius: '5px',
  //   zIndex: '1000',
  //   maxWidth: '300px',
  //   textAlign: 'center',
  // },
  toastDuration: 3000,
  fadeDuration: 500,
});