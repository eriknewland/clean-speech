"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function censorInput(config) {
    function showToast(message, toastStyle) {
        var _a;
        var toast = document.createElement('div');
        toast.textContent = message;
        Object.assign(toast.style, {
            opacity: '1',
            transition: "opacity ".concat((_a = config.fadeDuration) !== null && _a !== void 0 ? _a : 500, "ms ease-in-out"),
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
        setTimeout(function () {
            toast.style.opacity = '0';
            setTimeout(function () {
                toast.remove();
            }, config.fadeDuration || 500);
        }, config.toastDuration || 3000);
    }
    function censorWords(textarea, censoredWords) {
        var words = textarea.value.split(' ');
        var censored = false;
        for (var i = 0; i < words.length; i++) {
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
        var textarea = document.querySelector(config.textareaSelector);
        var censoredWords = config.censoredWords || [];
        textarea.addEventListener('input', function () {
            censorWords(textarea, censoredWords);
        });
    }
    document.addEventListener('DOMContentLoaded', setupCensorship);
}
exports.default = censorInput;
