import { setAppHeight, createChild } from "./utils.js";

(() => {
  setAppHeight();
  window.addEventListener('resize', setAppHeight);

  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')

  


})();
