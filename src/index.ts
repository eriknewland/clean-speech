interface CensorInputConfig {
  textareaSelector: string;
  censoredWords?: string[];
  toastMessage?: string;
  toastStyle?: Partial<CSSStyleDeclaration>;
  toastDuration?: number;
  fadeDuration?: number;
}

function censorInput(config: CensorInputConfig): void {
  function showToast(message: string, toastStyle?: Partial<CSSStyleDeclaration>): void {
    const toast = document.createElement('div');
    toast.textContent = message;
    Object.assign(toast.style, {
      opacity: '1',
      transition: `opacity ${config.fadeDuration ?? 500}ms ease-in-out`,
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
    }, toastStyle);

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, config.fadeDuration || 500);
    }, config.toastDuration || 3000);
  }

  function censorWords(textarea: HTMLTextAreaElement, censoredWords: string[]): void {
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

  function setupCensorship(): void {
    const textarea = document.querySelector(config.textareaSelector) as HTMLTextAreaElement;
    const censoredWords = config.censoredWords || [];

    textarea.addEventListener('input', () => {
      censorWords(textarea, censoredWords);
    });
  }

  document.addEventListener('DOMContentLoaded', setupCensorship);
}

export default censorInput;