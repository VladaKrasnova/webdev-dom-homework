import { addButton, textInputElement, nameInputElement } from './utils.js';
import { addComment } from './render.js';

export const bindEvents = () => {
  addButton.addEventListener('click', addComment);

  textInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      addComment();
    }
  });

  nameInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      addComment();
    }
  });
};