<script setup>
</script>

<template>
    <div class="intro-flex">
        <div class="image">
        <img src="../assets/images/about/profile edit.png">
        </div>

        <div class="about">
            <h1>A Little bit about me</h1>
           <p>Shaye is a talented and passionate student pursuing a degree in web and graphic design with a strong focus on user experience (UX) design. With a natural flair for creativity and a keen eye for aesthetics, Shaye has always been fascinated by the intersection of design and technology.
            They are proficient in various design software, including Adobe Creative Suite, Figma, and in HTML, CSS, and JavaScript, which allows them to bring their designs to life on the web.
            Apart from these technical skills, Shaye is an excellent communicator and collaborator. They thrive in team environments and enjoy working with diverse groups of people to bring innovative ideas to life. </p>
        </div>
</div>

<div class="experience-flex">


    <div class="Education">
        <h2>EDUCATION</h2>

        <div class="type-flex">
        <h3>Diploma in Web and Graphic Design</h3>
        <h4>Yoobee</h4>
        </div>


        <div class="type-flex">
        <h3>Diploma in Web and UX Design</h3>
        <h4>Yoobee</h4>
        </div>
        
        <div class="type-flex">
        <h3>Digital Marketing Micro-credential</h3>
        <h4>Yoobee</h4>
        </div>

    </div>

    <div class="Experience">
        <h2>WORK HISTORY</h2>

        <div class="type-flex">
        <h3>Ballantynes / Barista</h3>
        <h4>Current</h4>
        </div>

        <div class="type-flex">
        <h3>Job Title</h3>
        <h4>Job description</h4>
        </div>

    </div>
    
</div>
</template>
<style>
.intro-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 8%;
    padding-left: 8%;
    padding-top: 10%;
    padding-bottom: 5%;
}
.image img {
    height:  17em;
    width: 17em;
    border-radius: 90%;
}
.about {
    padding-right: 8%;
    padding-left: 8%;
}
.about h1 {
    font-weight: lighter;
  font-size: 36px;
  font-family:Arial, Helvetica, sans-serif;
  color:  #2c3e50;
}
.about p {
    font-weight: lighter;
  font-size: 18px;
  font-family:Arial, Helvetica, sans-serif;
  color:  #2c3e50;
}
.experience-flex {
    display: flex;
    flex-direction: row;
    gap: 20%;
    padding-left: 8%;
    padding-bottom: 5%;
}
.experience-flex h2 {
    font-weight: lighter;
  font-size: 26px;
  font-family:Arial, Helvetica, sans-serif;
  color: rgb(16, 16, 16);
}
.experience-flex h3 {
    font-weight: lighter;
  font-size: 20px;
  font-family:Arial, Helvetica, sans-serif;
  color: rgb(16, 16, 16);
  margin-top: 3%;
}
.experience-flex h4 {
    font-weight: lighter;
  font-size: 20px;
  font-family:Arial, Helvetica, sans-serif;
  color: #616161;
  margin-top: 3%;
}
.type-flex {
    display: flex;
    flex-direction: row;
    gap: 2em;
}
@media (max-width: 768px) {
    .intro-flex {
        flex-direction: column;
        align-items: center;
        padding: 0;
        padding-top: 5em;
    }
    .experience-flex {
        flex-direction: column;
    }
    .experience-flex h2 {
        font-size: 20px;
        margin: 0;
        margin-bottom: 1em;
        margin-top: 1em;
    }
    .experience-flex h3 {
        font-size: 16px;
        margin: 0;
  
    }
.experience-flex h4 {
    font-size: 16px;
    margin: 0;
}
.type-flex {
    flex-direction: column;
    gap: 0;
    margin-bottom: 0.5em;
}

.image img {
    height: 12em;
    width: 12em;
}
.about h1 {
    font-size: 26px;
}
.about p {
    font-size: 16px;
}
}

</style>