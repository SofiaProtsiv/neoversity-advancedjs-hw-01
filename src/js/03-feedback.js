"use strict";

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

let formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 250));

function initializeForm() {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  input.value = formData.email || '';
  textArea.value = formData.message || '';
}

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onInput(event) {
  formData[event.target.name] = event.target.value;
  saveFormData();
};

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.message || !formData.email) return;

  console.log(formData)
  
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
};

initializeForm();
