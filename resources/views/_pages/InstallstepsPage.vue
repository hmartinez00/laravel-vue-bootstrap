<template>
    <div class="container mx-auto">
      <h1>Install Steps</h1>
  
      <h2>Vue3 js on Laravel - Install Process</h2>
      <ol>
        <li>
          <p>Install Laravel</p>
          <p>composer create-project laravel/laravel vue3-laravel</p>
        </li>
        <li>
          <p>Install Vue3</p>
          <p>npm install vue@latest vue-loader@latest </p>
        </li>
        <li>
          <p>Install ui</p>
          <p>composer require laravel/ui</p>
        </li>
        <li>
          <p>Install bootstrap</p>
          <p>php artisan ui bootstrap</p>
        </li>
        <li>
          <p></p>
          <p>npm install && npm run dev</p>
        </li>
        <li>
          <p></p>
          <p>npm i @vitejs/plugin-vue</p>
        </li>
        <li>
          <p>modify the file vite-config.js</p>
        </li>
        <li>
          <p>create file resources\views\layouts\app.vue</p>
        </li>
        <li>
          <p>modify app.js</p>
        </li>
        <li>
          <p>Install Router</p>
          <p>npm install vue-router</p>
        </li>
        <li>
          <p>create pages</p>
        </li>
        <li>
          <p>create resources\js\router\index.js </p>
        </li>
        <li>
          <p>start server</p>
          <p>npm run dev &</p>
          <p>php artisan serve</p>
        </li>
      </ol>
    </div>
  
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
    .container {
      margin: 2rem 4rem;
    }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  
    ol {
      margin-top: 1rem;
      list-style-type: decimal;
    }
  
    li {
      margin-top: 0.5rem;
    }
  
    .code {
      background-color: #333;
      border: 1px solid #555;
      border-radius: 4px;
      padding: 1rem;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.9rem;
      color: aliceblue;
      overflow-x: auto;
    }
  
  
  </style>
  