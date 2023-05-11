<script setup>


</script>

<template>
  
  <div class="landing-section">
    <h1>SHAYE LOCK-CULLIMORE</h1>
    <h2>
      Welcome to my portfolio website! As a UX/UI designer, I'm passionate about
      creating user-centered experiences that are not only functional but also
      visually appealing.
    </h2>
    <h3>Check out my work</h3>


    <img src="../assets/images/homepage/arrow.svg" />


  </div>

  <div class="project-section">
    <h1>PROJECTS</h1>

    <div class="project-group">

 <div class="project-flex-2">
  <div class="project">
    <div class="project-image">
<img src="../assets/images/homepage/hornbycover.png">
</div>
<div class="project-text">
<h2>Hornby Dental Website Redesign</h2>
<p class="paragraph">Student Website Redesign / Figma / Photoshop</p>
</div>
<div class="view-more">
<router-link to='/Hornbydental'><h3 class="button">View more</h3></router-link>
</div>
</div>



  <div class="project">
    <div class="project-image">
<img src="../assets/images/homepage/tourismcover.png">
</div>
<div class="project-text">
<h2>Tourism NZ Filtering System</h2>
<p>Student Project / Filtering system / JavaScript/ HTML / CSS</p>
</div>
<div class="view-more">
  <router-link to='/Tourism'><h3 class="button">View more</h3></router-link>
</div>
</div>

</div>

<div class="project-flex-2">
<div class="project">
  <div class="project-image">
<img src="../assets/images/homepage/tradieappcover.jpg">
</div>
<div class="project-text">
<h2>Tradie Market Website and App</h2>
<p class="paragraph">Student Group Project /JavaScript / UI / UX / CSS / VUE </p>
</div>
<div class="view-more">
<router-link to='/Tradie'><h3 class="button">View more</h3></router-link>
</div>
</div>


  <div class="project">
    <div class="project-image">
<img src="../assets/images/homepage/covereco.png">
</div>
<div class="project-text">
<h2>Eco Website Redesign</h2>
<p>Student Project / JavaScript / UI / UX / CSS / HTML </p>
</div>
<div class="view-more">
<router-link to='/Eco'><h3 class="button">View more</h3></router-link>
</div>
</div>

 </div>
 </div>
</div>


</template>

<style scoped>

.landing-section {
  color: white;
  text-align: center;
  padding: 5%;
  background-image: url(../assets/images/homepage/background.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.project-flex-2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
h1 {
 font-size: 36px;
  font-family:Arial, Helvetica, sans-serif;
  margin: 2%;
  line-height: 1.2;
}
h2 {
    font-size: 26px;
  font-family:Arial, Helvetica, sans-serif;
  margin: 2%;
  line-height: 1.2;
}
h3 {
    font-size: 20px;
    margin: 2%;
  font-family:Arial, Helvetica, sans-serif;
  line-height: 1.2;
}
p {
    font-size: 16px;
  font-family:Arial, Helvetica, sans-serif;
  margin: 2%;
  line-height: 1.6;
}
.landing-section img {
  height: 4em;
}

.icon {
  height: 3em;
  color: white;
}
.landing-section h1 {
  padding-top: 15%;
  font-size: 46px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.landing-section h2 {
  padding: 3%;
  font-weight: lighter;
  font-family: Arial, Helvetica, sans-serif;
}
.landing-section h3 {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
}
.project-section img {
height: 20em;
width: 26em;
}
.project-section h1 {
  margin: 0;
  padding: 3%;
}
.project-image {
  text-align: center;
}
.project-flex {
  gap: 1em;
}
.project-text p {
  margin: 1%;
}
.project-text h2 {
  margin: 1%;
}
.project-text {
  padding: 1%;
}
.project-section {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
  background-color: rgb(240, 242, 243);
}
.project-section h1 {
  padding-top: 2%;
  text-align: center;
  font-weight: bold;
  font-size: 46px;
}
.project {
  padding: 2%;
  width: 26em;
}
.project-group {
  padding-bottom: 5%;
}
.button {
  background-color: #2c3e50;
  border: none;
  text-align: center;
  color: white;
  padding: 8px 20px;
  text-decoration: none;
  display: inline-block;
  font-weight: lighter;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1%;
  margin-top: 0%;
  margin-bottom: 0%;
}
@media (max-width: 768px) {
  .project img {
    height: 13em;
    width: 18em;
  }
  .project {
    height: 0%;
    width: 17em;
  }
}



@media (max-width: 768px) {
  .project img {
    height: 13em;
    width: 18em;
  }
  .project {
    height: 0%;
    width: 18em;
  }
  .landing-section h1 {
    font-size: 36px;
  }
  .landing-section h2 {
    font-size: 20px;
  }
  .landing-section h3 {
    font-size: 20px;
  }
  .project-section h1 {
    font-size: 36px;
  }
}

@media (max-width: 425px)  {
  .project-section {
    padding-top: 3%;
  }
  .project-section img {
    height: 13em;
    width: 18em;
  }
  .project-text p {
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .project-text h2 {
    font-size: 20px;
  }
  .view-more {
padding: 1%;
  }
.project-flex-2 {
  flex-direction: column;
  align-items: center;
}
}
@media (max-width: 320px) {
  .project-section img {
    height: 12em;
    width: 15em;
  }
  .project {
    width: 15em;
  }
  p {
    font-size: 12px;
  }
  h2 {
    font-size: 18px;
  }
}

</style>
