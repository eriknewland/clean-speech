import censorInput from './lib/index.js';

censorInput({
  textareaSelector: '#text-area',
  censoredWords: ['badword1', 'badword2', 'badword3'],
});