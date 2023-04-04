import { linkList, linkAdd, linkContact } from './modules/navegation.js';
import { addBook, removeBook, displayBooks } from './modules/crud.js';

// Add date & time
const date = new Date();
const timeDate = document.querySelector('#date');
timeDate.innerHTML = date.toString();