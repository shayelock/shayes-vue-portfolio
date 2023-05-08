<script>
</script>

<template>
    <div class="body">
<div class="tradie-landing">
    
    <img src="../assets/images/tradieapp/tradielogo.png">
    <h1>Brief:</h1>
    <p>FindATradie is needing a platform designed to revolutionize the way clients connect with tradespeople. By creating a seamless and efficient experience, we bridge the gap between clients seeking professional services and tradespeople showcasing their skills. It needs a user-friendly and accessible platform simplifies the process of finding and hiring the right tradie, ensuring client satisfaction and empowering businesses to thrive. Clients should be able to browse businesses, view trades, request quotes, track job progress, and leave reviews, while businesses can sign up, describe their services, showcase their expertise with before and after photos, provide quotes for potential clients, and manage their jobs. 
</p>
<h1>Design Process</h1>
<h3>The milestones considered in this project are meant to give a gauge of progress to the client. Showcasing the extent of work in completing the project.</h3>
<p>1. Creating the documentation for client
The documentation will contain research on the subject, a competitor analysis of companies, primary and secondary target audience along with  personas, a simple site map, user journeys of the personas and a style tile.</p>
<p>2. Design the wireframes w/user testing
The involves the design of low fidelity wireframes with user testing documented along with high fidelity wireframes with feedback and user testing. The documentation of these will be added to the documents given to the client.</p>
<p>3.  Code the Front End
Create the layout and style of the website using Vue Frameworks (HTML,CSS & Javascript). While debugging along the way.</p>
<p>4.  Code the Back End
Create the information populated on the website using Mongoose, Express etc. While debugging along the way.</p>
</div>

<div class="target">

<div class="h1-flex">
    <h1>Target Audience</h1>

    <div class="target-text">
    <div class="text">
    <h3>Demographics</h3>
    <p>Age range: 25 - 75</p>
     <p>Gender: All</p>
    <p>Location: Local/NZ</p>
    </div>
    <div class="text">
    <h3>Key Psychographics</h3>
    <p> Age range: 25 - 75</p>
    <p>Gender: All</p>
    <p>Location: Local/NZ</p>
    </div>
    <div class="text">
    <h3>Pain points</h3>
    <p>
    They need extra help with their home maintenance. </p>
    <p>They do not have the skills required to do it them selves.</p>
    <p>They are time poor.</p>
    </div>
</div>
</div>

</div>

<div class="h1-banner">
    <h1>User Journey</h1>
</div>

<div class="user-flex">
<div class="user">
<h2>Scenario:</h2>
<p>Susan is looking to find a tradie to help her build a deck.</p>
</div>
<div class="user">
    <h2>Expectations</h2>
    <p>To find a tradie for a reasonable price to build her deck on the weekend with ease and reliable</p>
</div>
</div>

<div class="persona-flex">
    <div>
    <img src="../assets/images/tradieapp/susan1.png">
</div>
<div class="persona">
   <h3> Name: Susan</h3>
<h3>Occupation: House Wife</h3>
<h3>Age: 43</h3>
<h3>Marital status: Married</h3>
<h3>Location: Christchurch</h3>
<h3>Interest:</h3>

<p>Susan likes to garden on the weekends, 
cooking for her family and looking after 
herself at the gym.</p>


<h3>Goals:</h3>
<p>Looking to hire someone to help build a 
deck at her home as its beyond her skill 
level and her husband works a corporate 
job so its easier to pay someone to do 
the job. </p>
</div>
</div>

<div class="userflow">
    <img src="../assets/images/tradieapp/userflow1.jpg">
    <img src="../assets/images/tradieapp/userflow2.jpg">
    <img src="../assets/images/tradieapp/userflow3.jpg">
    <img src="../assets/images/tradieapp/userflow4.jpg">
</div>

<div class="tradie-sitemap">
    <div class="h1-sitemap">
    <h1> Site Map</h1>
    </div>
    <div>
        <img src="../assets/images/tradieapp/tradie-sitemap.jpg">
    </div>
</div>

<div class="tradie-lofi">
    <div class="h1-lofi">
    <h1>Lo-Fi Wireframes </h1>
    </div>
    <img src="../assets/images/tradieapp/tradie-lofi.jpg">
    </div>

    <div class="tradie-results">
        <div class="h1-banner">
    <h1>Results </h1>
    </div>
        <p>After using testing was conducted the changes we made to our user flow with the tradie and user 
account being separate to create less confusion between the two sign in accounts. Changes were 
made to where the display of the 'how to tradies' display is placed on the tradie sign up page.</p>
<img src="../assets/images/tradieapp/tradie-results.jpg">
    </div>

  <div class="tradie-hifi">
    <div class="h1-banner">
    <h1>Hi-Fi Wireframes</h1>
    </div>
    <img src="../assets/images/tradieapp/tradie-hifi.jpg">
  </div>

<div class="tradie-responsive">
    <div class="h1-banner">
    <h1>Responsive</h1>
    </div>
    <img src="../assets/images/tradieapp/tradieresponsive.jpg">

    <div class="link">
<router-link to='/'><p>View more projects</p></router-link>
</div>
  </div>
</div>


</template>

<style scoped>

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
.body {
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 8%;
    margin: 0;
}
.tradie-landing {
    padding: 3%;
}
.tradie-landing img {
    width: 20em;
}
.target p {
margin-top: 0;
margin-bottom: 0;
}
.target {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f5f5f5;
    align-items: center;
    margin-right: 3%;
    margin-left: 3%;
    padding-left: 1%;
    padding-right: 1%;

}
.target-flex {
    display: flex;
    flex-direction: column;
}
.image-flex {
    display: flex;
    flex-direction: row;
}
.image-flex img {
    width: 12em;
    padding: 3%;
}
.target-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.text {
width: 17em;
}
.h1-flex {
align-content: center;
width: 100%;
padding: 3%;
}
.h1-flex h1 {
 text-align: center;
}
.h1-banner {
    background-color: #f87b06;
    color: white;
    padding: 1%;
   margin-top: 3%;

}
.user-flex {
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    margin: 3%;
    padding: 3%;
}
.persona-flex {
    display: flex;
    flex-direction: row;
}
.persona-flex img {
    width: 20em;
}
.userflow img {
    width: 13em;
    padding: 1%;
}
.userflow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.persona {
    padding: 3%;
}
.persona h3 {
margin: 2%;
}
.tradie-sitemap img {
    width: 45em;
}
.tradie-sitemap {
    text-align: center;
}
.h1-sitemap {
    background-color: #f5f5f5;
   padding: 1%;
   margin: 3%;
}
.tradie-lofi img {
    width: 45em;
    text-align: center;
}
.h1-lofi {
    background-color: #f5f5f5;
   padding: 1%;
   margin: 3%;
}
.tradie-lofi {
    text-align: center;
}
.tradie-results  {
    text-align: center;
}
.tradie-results p {
    padding: 1%;
    text-align: left;
}

.tradie-results img {
    width: 45em;
    padding: 3%;
}
.tradie-hifi img {
    width: 45em;
    padding: 3%;
}
.tradie-responsive img {
    width: 45em;
    padding: 3%;
}
.tradie-responsive {
    text-align: center;
}
.tradie-responsive h2 {
text-decoration: underline;
color:  black;
}
.tradie-hifi {
    text-align: center;
}
.link {
    text-align: center;
    padding: 3%;
}
.link p {
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
@media (max-width: 768px)  {
    .target {
        flex-direction: column;
    }
    .text {
        padding: 2%;
        width: 12em;
    }
    .userflow img {
    width: 10em;

}
.tradie-lofi img {
    width: 30em;
}
.tradie-results img {
    width: 30em;
}
.tradie-hifi img {
    width: 30em;
}
.tradie-responsive img {
    width: 30em;
}
}
@media (max-width: 425px) {
    .target-text {
        flex-direction: column;
    }
    .image-flex {
        flex-direction: column;
        gap: 2em;
    }
   .text {
    padding-left: 5%;
   }
   .h1-flex h1 {
 font-size: 26px;
}
.tradie-landing {
    padding-top: 4em;
}
.tradie-landing img {
    width: 15em;
}
.tradie-landing p {
    padding-top:  1em;
}
.tradie-landing h1 {
    padding-top: 1em;
}
.text {
    width: 18em;
}
.persona-flex {
    flex-direction: column;
}
.userflow {
    flex-direction: column;
    align-items: center;
}
.user-flex {
    flex-direction: column;
}
.persona-flex img {
width: 15em;
}
.persona-flex {
    align-items: center;
}
.userflow img {
    width:  15em;
    padding-bottom: 5%;
}
h1 {
font-size: 26px;
}
h2 {
    font-size: 20px;
}
h3 {
    font-size: 16px;
}
.tradie-lofi img {
    width: 17em;
}
.tradie-results img {
    width: 17em;
}
.tradie-sitemap img {
    width: 17em;
}
.tradie-hifi img{
width: 17em;
}
.tradie-responsive img {
    width: 17em;
}

}
@media (max-width: 325px)  {
    p {
        font-size: 14px;
    }
    h3 {
        font-size: 14px;
    }
    .text {
        width: 14.5em;
    }
}
</style>