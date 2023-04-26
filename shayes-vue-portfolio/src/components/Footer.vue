<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="footer-flex">

   <div class="contact">
    <h1>Contact me</h1>
    <h2>Phone: 0212590630</h2>
    <h2>Email: shaye.lock-cullimore@hotmail.com</h2>
   </div>

   <div class="socials">
    <h1>Follow me</h1>

    <div class="icons-flex">
        <a href="https://www.behance.net/shayelock-cullimore">
     <img src="../assets/images/behance-square-outlined.svg">
    </a>

    <a href="https://www.linkedin.com/in/shaye-lock-cullimore-25657317b/">
     <img src="../assets/images/linkedin-logo-fill.svg">
     </a>

    </div>
   </div>


    </div>
      </template>
      
      <style scoped>
      .footer-flex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: rgb(16, 16, 16);
        color: white;
        padding: 2em;
        gap: 15%;
      }
      .footer-flex h1 {
        font-size: 16px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
      }
      .footer-flex h2 {
        font-size: 12px;
        font-weight: lighter;
        font-family: Arial, Helvetica, sans-serif;

      }
      .contact {
        display: flex;
        flex-direction: column;
      }
      .socials {
     display: flex;
     flex-direction: column;
      }
      .socials img {
        width: 2em;
      }

  .icons-flex {
    display: flex;
    flex-direction: row;
    gap: 2%;
  }

      </style>
      