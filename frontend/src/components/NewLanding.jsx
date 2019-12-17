// import React, { Component } from "react";

// import "./NewLanding.scss";
// import Typewriter from "typewriter-effect/dist/core";

// export default class NewLanding extends Component {
//   componentDidMount() {
//     console.log("starting");
//     var app = document.getElementById("app");

//     var typewriter = new Typewriter(app, {
//       loop: false,
//       cursor: ""
//     });

//     typewriter
//       .typeString("Do you want to learn how to code?")
//       .pauseFor(2500)
//       .deleteChars(12)
//       .typeString("React")
//       .pauseFor(2500)
//       .deleteChars(5)
//       .typeString("OR EVEN NODE???")
//       .pauseFor(2500)
//       .deleteAll()

//       .typeString("Welcome to BananaFish")

//       .start();
//   }

//   typeStuff = () => {};
//   render() {
//     return (
//       <div class="text">
//         <h1 id="app"></h1>
//         <br></br>
//         Here at BananaFish we are dedicated to helping our users get a career in tech that being said, I need a career
//         in tech
//         {/* <nav>
//   <a href="#maincode">Maincode</a>
//   <a href="#whatis">What is #Maincode?</a>
//   <a href="#participate">How to participate?</a>
//   <a href="#happening">What's happening?</a>
//   <a href="#costs">Costs and price?</a>
//   <a href="#sponsorus">Sponsor us</a>
// </nav>
// <button class="toggle-nav entypo-menu"></button> */}
//         <div class="wrapper">
//           <section id="maincode">
//             <article>
//               <h1>Maincode</h1>
//               <p>
//                 Welcome to #Maincode! You're web-dev? A web-designer? From around Frankfurt? Awesome, you found the
//                 right spot to make your dreams come true.
//               </p>
//               <p>Already excited and intersted to hear more? Nice, go on and scroll down.</p>
//             </article>
//           </section>
//           <section id="whatis">
//             <article>
//               <h1>What is #Maincode?</h1>
//               <p>
//                 First of all it is for developers and designers around Frankfurt. It's a hackday with different topics
//                 each time. <a href="https://kevingimbel.com">Kevin</a>, <a href="http://timpietrusky.com">Tim</a> and{" "}
//                 <a href="http://myxotod.de">Max</a> invented this event to share experience and have a nice time
//                 together with other internet geeks.
//               </p>
//               <p>
//                 The event takes place at different locations each time. Even more excited to take part? Scroll down.
//               </p>
//             </article>
//           </section>
//           <section id="participate">
//             <article>
//               <h1>How to participate?</h1>
//               <p>
//                 We'll let you know on this website and you can sign up for a newsletter which will keep you informed.
//               </p>
//             </article>
//           </section>
//           <section id="happening">
//             <article>
//               <h1>What's happening?</h1>
//               <p>
//                 Each hackday has it own topic. You can sign up with your friends or alone and build small teams at the
//                 location. After a quick introduction of the staff you're ready to go to design and program a nice app
//                 about the given topic. You or your team has 24 hours to get the app running or at least a prototype of
//                 it.
//               </p>
//               <p>If the time is over, everyone can choose freely to present his app.</p>
//             </article>
//           </section>
//           <section id="costs">
//             <article>
//               <h1>Costs and price?</h1>
//               <p>
//                 To let #Maincode grow, each hackday will cost a view coins but will provide you with other cool geeks, a
//                 cool location and at least some equipment to get started.
//               </p>
//               <p>
//                 If we are able to get some sponsors or money, we will defenitely give out prices to the best app after
//                 24 hours.
//               </p>
//             </article>
//           </section>
//           <section id="sponsorus">
//             <article>
//               <h1>Sponsor us</h1>
//               <p>
//                 You got some items or money to provide the winners? Perfect! Sponsor our #Maincode events and make our
//                 devs and designers happy :)
//               </p>
//               <p>
//                 Just drop a line to <a href="mailto:#">sponsor@maincode.io</a>.
//               </p>
//             </article>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }
