'use strict';
import { commentLoading, commentsListElements } from './utils.js';
import { bindEvents } from './eventListeners.js';
import { fetchGetRender} from './api.js';

commentsListElements.classList.remove('hidden');
commentLoading.classList.add('hidden');

fetchGetRender();
bindEvents();
console.log('It works!');