<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
  <div class="nav-flex">
    <router-link to="/"><h1>Shaye Lock-Cullimore</h1></router-link>

    <div class="nav-links">
    <router-link to="/about"><h2>About</h2></router-link>
    <router-link to="/"><h2>Projects</h2></router-link>
    </div>


  </div>

</template>

<style scoped>

  .nav-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
     position: fixed;
     top: 0;
     right: 0;
     left: 0;
     z-index: 1;
     gap: 5%;
    background-color: rgb(16, 16, 16);
    font-family:inherit;
    padding-left: 5%;
    padding-right: 5%;
    height: 4em;

  }
  .nav-flex h1 {
    font-weight: bold;
    font-size: 20px;
    color: white;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

.nav-flex svg {
    color: white;
    height: 1.5em;
    width: 1.5em;
}
.nav-flex h1 {
    font-size: 16px;
  }

a {
  font-size: 12px;
  font-weight: lighter;
  text-decoration: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  width: 20em;
}
a:hover {
  color: rgb(169, 169, 169);
}

.nav-links {
  display: flex;
  flex-direction: row;
  text-align: end;
  width: 15em;
}

@media (max-width: 425px) {
  .nav-links {
    width: 8em;
  }
  a {
    width: 10em;
  }
  .nav-flex h1 {
    font-weight: bold;
    font-size: 8px;
  }

  .nav-flex h2 {
    font-size: 10px;
  }
  .nav-flex {
    gap: 0%;
    width: 100%;
    position: relative;
    justify-content: space-around;
    padding: 0;
  }
}



@media (max-width: 320px) {
  .nav-flex h1 {
    font-weight: bold;
    font-size: 10px;
  }

  .nav-flex h2 {
    font-size: 10px;
  }
  .nav-flex svg {
    height: 1em;
    width: 1em;
  }
  .menu-wrapper {
    width: 30px;
  }
  .nav-flex {
    justify-content: space-evenly;
  }
}
</style>

