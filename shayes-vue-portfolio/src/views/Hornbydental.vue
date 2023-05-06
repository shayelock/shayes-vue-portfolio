
<script>
</script>
<template>
   <div class="body">
    <div class="hornby-landing">

        <div class="landing-flex">
         <div>
        <img src="../assets/images/hornbydental/hornbydental logo.png">
       </div>

       <div class="text">
        <h1> Website Redesign Case Study</h1>
<h2> Brief:</h2>
<p>Hornby Dental Center is looking to re-design their website and update the overall branding  and to add a booking system to the website</p>
<h2>Pain Points:</h2>
<p>The current website is hard to navigate and requires the user to leave the website to create a booking. The website branding is outdated for the target audience it is looking to reach.</p>

<h2>Project Goals:</h2>
<p>Our team has taken up the task of redesigning the website for Honrby Dental Centre. Our main aim is to create a user-friendly and visually appealing website that is easy to navigate and provides users with the information they need to make an informed decision about their dental care. Our redesign will focus on enhancing the overall user experience to help navigation of the website and to update the branding of the website. </p>
<h3>- Improve usability of the website</h3>
<h3>- Update the branding of the website</h3>
<h3>- Create a booking system</h3>
    </div>
</div>
</div>

<div class="competitor">
<h1>Competitor Analysis</h1>
<div class="competitor-flex">
    <div class="competitor-image">
        <img src="../assets/images/hornbydental/lumino.png">
    </div>
    <div class="text">
    <h2>Lumino</h2>
    <div class="snw-flex">
        <div class="strengths">
    <h3>Strengths:</h3>
    <p>- Branding stands out and is recognizable</p>
    <p>- Layout of information is user friendly</p>
    <p>- Use of colour blocks and information</p>
    <p>- Booking easily accessible </p>
</div>
<div class="weaknesses">
    <h3>Weaknesses:</h3>
    <p>- The website is a main hub of multiple dentists</p>
</div>
</div>
</div>
</div>

<div class="competitor-flex">
    <div class="competitor-image">
        <img src="../assets/images/hornbydental/sydenham.png">
    </div>
    <div class="text">
    <h2>Sydenham</h2>
    <div class="snw-flex">
        <div class="strengths">
    <h3>Strengths:</h3>
    <p>- Branding colour pallete works well</p>
    <p>- Layout of information is easy to read</p>
    <p>- Colour blocks keeps it engaging</p>

</div>
<div class="weaknesses">
    <h3>Weaknesses:</h3>
    <p>- Quality of images could be better</p>
</div>
</div>
</div>
</div>
</div>

<div class="personas">
    <h1>Persona's</h1>

    <div class="persona-section">
        <div>
    <img class="jonah" src="../assets/images/hornbydental/Jonah.png">
      </div>

    <div class="persona-text">
        <h3>Name: Issac & Jonah</h3>
        <h3>Age: 34 & 9months</h3>
        <h3>Gender: Male</h3>
        <h3>Location: Christchurch</h3>
        <h3>Profession: Builder</h3>
        <br>
       <p> Jonah has recently become a dad who loves spending time with his son Issac. He works full-time as a builder and has recently purchased a house in Hornby. He is on the look out to find his new family doctors, dentist and kindergarten for his family.</p>
     <h3>Motivation</h3>
     <p>Family, Lifestyle, Accessibility</p>
    </div>
</div>
</div>

<div class="sitemap">
    <h1>Site Map</h1>
    <div class="site-image">
    <img src="../assets/images/hornbydental/Sitemap.png">
</div>
</div>

<div class="wireframes">
    <h1>Wireframes</h1>
    <img src="../assets/images/hornbydental/wireframes.png">
</div>

<div class="branding">
    <h1>Logo Redesign</h1>

<div class="branding-img-flex">
<div class="current-logo">
    <h3>Current Branding</h3>
    <img src="../assets/images/hornbydental/oldlogo.png">
    </div>

    <div class="redesign-logo">
    <h3>Redesign</h3>
    <img src="../assets/images/hornbydental/newlogo.png">
</div>
</div>

</div>


<div class="style-tile">
    <img src="../assets/images/hornbydental/Styletile.png">
</div>
</div>

<div class="before-after-section">
<h1>User Testing Changes</h1>
<div class="hornby-nav">
<img src="../assets/images/hornbydental/Navigation Bar 1.png">
<img src="../assets/images/hornbydental/Navigation.jpg">
<img src="../assets/images/hornbydental/Footer.jpg">
<img src="../assets/images/hornbydental/Footer 2.png">


</div>
<h1> Hi-Fi Wireframes</h1>
<div class="before-after">
<div>
<img src="../assets/images/hornbydental/beforeafter1.png">
</div>

<div>
<img src="../assets/images/hornbydental/beforeafter2.png">
</div>


<router-link to='/'><h2>View more projects</h2></router-link>
</div>
</div>
</template>

<style scoped>
.body {
    padding-right: 5%;
    padding-left: 5%;

}
.hornby-landing {
    padding-top: 6em;
}
 h1 {
 font-size: 36px;
  font-family:Arial, Helvetica, sans-serif;
  margin: 2%;
}
h2 {
    font-size: 26px;
  font-family:Arial, Helvetica, sans-serif;
  margin: 2%;
}
h3 {
    font-size: 20px;
    margin: 2%;
  font-family:Arial, Helvetica, sans-serif;
}
p {
    font-size: 16px;
  font-family:Arial, Helvetica, sans-serif;
  margin: 2%;
}
.hornby-landing img {
    width: 25em;
    padding-left: 5%;
}

.text {
  padding-right: 3%;
  padding-left: 3%;
}
.competitor-flex img {
    height: 15em;
    width: 25em;

} 
.competitor-flex {
    display: flex;
    flex-direction: row;
}

.competitor h1 {
    background-color: #18628d;
    padding: 1%;
    color: white;
    margin-bottom: 1em;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
}
.snw-flex{
    display: flex;
    flex-direction: row;
    gap: 1%;
}
.strengths {
    width: 25em;
}
.weaknesses {
    width: 25em;
}

.persona-section img {
    height: 20em;
}
.persona-section {
    display: flex;
    flex-direction: row;
    padding-bottom: 2%;
}
.persona-text h3 {
  padding-left: 2%;
  padding-bottom: 1%;
  margin: 0;
}
.personas h1 {
    background-color: #18628d;
    padding: 1%;
    color: white;
margin-top: 1em;
margin-right: 0;
margin-left: 0;
}
.persona-text {
padding-top: 3%;
width: 70%;
}
.sitemap img {
height: 25em;
}
.sitemap h1 {
    background-color: #18628d;
    padding: 1%;
    color: white;
    margin: 0;
}
.site-image {
    padding: 5%;
    align-items: center;
    
}

.wireframes img {
    height: 20em;
    padding: 2%;
}
.wireframes h1 {
    margin: 0;
}
.branding {
    display: flex;
    flex-direction: column;
}
.branding-img-flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5%;
    padding: 3%;
}
.branding h1 {
    margin: 0;
    background-color: #18628d;
    padding: 1%;
    color: white;
    width: 100%;
}
.branding h3 {
    margin-left: 0;
}
.branding img {
width: 30em
}

.sitemap {
    text-align: center;
}
.wireframes {
    text-align: center;
}
.jonah {
    padding-top: 2em;
}
.style-tile {
  text-align: center;
}
.style-tile img {
    width: 45em;
}
.before-after {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.before-after img {
    width: 45em;
}
.before-after h2 {
    text-decoration: underline;
   color:  black;
}
.before-after-section {
text-align: center;
}
.hornby-nav img {
    width: 35em;
}
.hornby-nav {
    display: flex;
    flex-direction: column;
     align-items: center;
    gap: 1em;
}
@media (max-width: 1024px) {

.snw-flex {
    flex-direction: column;
}

.sitemap img {
    height: 14em;
}
.wireframes img {
    height: 14em;
}
.branding img {
width: 18em
}
.hornby-landing {
    padding-top: 7em;
}
}

@media (max-width: 768px) {

    h1 {
 font-size: 26px;
}
h2 {
    font-size: 20px;
  font-family:Arial, Helvetica, sans-serif;
}
h3 {
    font-size: 18px;
}
p {
    font-size: 14px;
}

.snw-flex {
    flex-direction: column;
    height: auto;
}
.competitor-image {
text-align: center;
}
.competitor-flex img {
    height: 15em;
    width: 20em;
}


.text h1 {
    margin: 0;
}
.persona-section {
    flex-direction: column;
}
.sitemap img {
height: 10em;
}
.wireframes img {
height: 8em;
}
.branding {
    align-items: center;
}
.branding-img-flex {
    flex-direction: column;
}
.style-tile img {
    width: 20em;
}
.before-after img {
    width: 20em;
}
.personas {
    flex-direction: column;
}
.competitor-flex {
flex-direction: column;
align-items: center;
gap: 0;
}
.strengths {
    width: 20em;
}
.weaknesses {
    width: 20em;
}
  }

  @media (max-width: 425px) {
    .landing-flex {
    flex-direction: column;
    align-items: center;
    padding-top: 1%;
}
.hornby-landing {
    padding-top: 5em;
}
.hornby-landing img {
    width: 15em;
    padding: 5%;
}
  }
  @media (max-width: 320px) {
    .wireframes img {
height: 4em;
}
.sitemap img {
height: 6em;
}
.branding img {
width: 10em
}
.competitor-flex img {
    height: 10em;
    width: 15em;
}

.persona-section img {
    height: 15em;
}
.personas {
    align-items: center;
}
.style-tile img {
    width: 10em;
}
  }

  
</style>