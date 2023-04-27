<script setup>
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import CommunityIcon from "../components/icons/IconCommunity.vue";
import SupportIcon from "../components/icons/IconSupport.vue";
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

    <div class="project-flex">
      <div class="project">
        <img src="../assets/images/homepage/hornbycover.png" />
        <div class="project-text">
          <h2>Tourism NZ Filtering System</h2>
          <p class="paragraph">
            Student Project / Filtering system / HTML / CSS / JAVASCRIPT
          </p>
        </div>
        <router-link to="/Hornbydental"
          ><h3 class="button">View more</h3></router-link
        >
      </div>

      <div class="project">
        <img src="../assets/images/homepage/background.png" />
        <div class="project-text">
          <h2>Hornby Dental Website</h2>
          <p>Student Website Redesign / Figma / Photoshop</p>
        </div>
        <h3 class="button">View more</h3>
      </div>

      <div class="project">
        <img
          src="../assets/images/gabriel-silverio-u3WmDyKGsrY-unsplash1.png"
        />
        <div class="project-text">
          <h2>Tourism Filtering System</h2>
          <p class="paragraph">
            Lorem ipsumlor sit amet consectetu dolor sit amet consectetu dolor!
          </p>
        </div>
        <h3 class="button">View more</h3>
      </div>

      <div class="project">
        <img
          src="../assets/images/gabriel-silverio-u3WmDyKGsrY-unsplash1.png"
        />
        <div class="project-text">
          <h2>Hornby Dental Website Redesign</h2>
          <p>
            Lorem ipsumlor sit amet consectetu dolor sit amet consectetu dolor!
          </p>
        </div>
        <h3 class="button">View more</h3>
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
  width: 30em;
}
.project-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 3%;
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
  object-fit: contain;
}
.button {
  background-color: #2c3e50;
  border: none;
  text-align: center;
  color: white;
  padding: 5px 20px;
  text-decoration: none;
  display: inline-block;
  font-weight: lighter;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1%;
  margin-top: 0%;
  margin-bottom: 0%;
}

@media (max-width: 600px) {
  .project-section img {
    height: 18em;
    width: 18em;
  }
  .project {
    height: 0%;
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
</style>
