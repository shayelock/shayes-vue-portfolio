<script>
</script>

<template>
    <div class="body">
<div class="tradie-landing">
    <img src="../assets/images/tradieapp/Find a Tradie.png">
    <h1>Brief:</h1>
    <p>FindATradie is needing a platform designed to revolutionize the way clients connect with tradespeople. By creating a seamless and efficient experience, we bridge the gap between clients seeking professional services and tradespeople showcasing their skills. It needs a user-friendly and accessible platform simplifies the process of finding and hiring the right tradie, ensuring client satisfaction and empowering businesses to thrive. Clients should be able to browse businesses, view trades, request quotes, track job progress, and leave reviews, while businesses can sign up, describe their services, showcase their expertise with before and after photos, provide quotes for potential clients, and manage their jobs. 
</p>
<h1>Design process</h1>
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
<div class="user-journey">
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

<div class="user-flex">
    <img src="../assets/images/tradieapp/susan 1.png">
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
.tradie-landing img {
    width: 15em;
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
    margin: 3%;

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
}
.target-text {
    display: flex;
    flex-direction: row;
    padding: 2%;
}
.text {
    padding-top: 0%;
    padding-right: 3%;
    padding-left: 3%;
    padding-bottom: 3%;
    width: 15em;
}
.h1-flex {
align-content: center;
}
.h1-flex h1 {
    padding-left: 3%;
}
.user-journey {
    background-color: #f87b06;
    color: white;
   padding: 1%;


}
@media (max-width: 768px)  {
    .target {
        flex-direction: column;
    }
    .text {
        padding: 2%;
        width: 12em;
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
}
</style>