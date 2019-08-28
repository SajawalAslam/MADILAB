import React, { Component } from "react";
import data from "./data";
import Axios from "axios";
import Nav from "./nav";
import Services from "./services";
import Cta from "./cta";
import About from "./about";
import Doctorteam from "./doctorteam";
import Testimonial from "./testimonial";
import Cta2 from "./cta2";
import Contact from "./contact";
import Footer from "./footer";


class App extends Component {
    state={
      data:data
    }

   render(){
     return(
       <div>
         <Nav/>
         <Services/>
         <Cta/>
         <About/>
         <Doctorteam/>
         <Testimonial/>
         <Cta2/>
         <Contact/>
         <Footer/>
          
         
       </div>
     )
   }
}

export default App;
// class {
//   var
//   functions
// }
