<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
<div class="nav-flex">
    <router-link to='/'><h1>Shaye Lock-Cullimore</h1></router-link>

    <div class="subheading">
    
        <div class="container" id="app">
  <div class="menu-wrapper"  @click="openMenu = !openMenu"  :class="{active : openMenu}">
    <div class="menu-bar one"></div>
    <div class="menu-bar two"></div>
  </div>
</div>
</div>
</div>


<div class="box"     :class="{hide:!openMenu}" >
    <router-link to='/about'><h2>About</h2></router-link>
    <hr>
   <router-link to='/'><h2>Projects</h2></router-link> 
   </div>


  </template>
  
  <style scoped>
  .box {
    background-color: rgb(16, 16, 16);
    position: fixed;
    top: 4em;
    right: 0;
    width: 15em;
    padding-top: 1%;



  }
  .box h2 {
    padding-left: 5%;
  }
.box hr {
  margin: 5%;
}
.hide {
  display: none;
}

  .nav-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
     width: 100%;
     position: fixed;
     z-index: 1;
     gap: 5%;
    background-color: rgb(16, 16, 16);
    font-family:inherit;
    padding-left: 5%;
    height: 4em;

  }
  .nav-flex h1 {
    font-weight: bold;
    font-size: 20px;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
  }
.nav-flex svg {
    color: white;
    height: 1.5em;
    width: 1.5em;
}
  .subheading {
    display: flex;
    flex-direction: row;
    gap: 4em;
    font-size: 12px;
    padding-right: 10%;

  }
  a {
    font-size: 12px;
    font-weight: lighter;
    text-decoration: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    width: 20em;
  }

  body {
  background: #333;
  box-sizing: border-box;
}
.container {
  padding: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-wrapper {
  width: 40px;
  height: auto;
  cursor: pointer;
  position: relative;
}

.menu-bar {
  position: absolute;
  width: 100%;
  height: 3px;
  background: #fff;
  left: 0%;
}



.one {
  top: 0px;
  animation-delay: 0.1s;
  transition: all 0.3s;
}

.two {
  top: 8px;
  transition: all 0.3s;
}


@keyframes slideOut {
  0% {
    width: 100%;
    left: 0%;
    right: auto;
  }
  
  50% {
    width: 0%;
    left: 0%;
    right: auto;
  }
  51% {
    width: 0%;
    right: 0%;
    left: auto;
  }

  100% {
    width: 100%;
    right: 0%;
    left: auto;
  }
}




/**/

.menu-wrapper:hover .menu-bar.active {
  animation:none;
}
.active .one{
  top: 50%;
  left: 0%;
  transform: rotate(45deg);
}
.active .two{
  top: 50%;
  left: 0%;
  transform: rotate(-45deg);
}

@media (max-width: 320px) {
.nav-flex h1 {
    font-weight: bold;
    font-size: 12px;
  }
  .nav-flex svg {
    height: 1em;
    width: 1em;
}
.menu-wrapper {
  width: 30px;
}
}

  </style>

  <script>
export default{
    data(){
        return{
        openMenu: false
    }}}

</script>
  