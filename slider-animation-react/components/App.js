import React, { Component } from 'react';
import './App.css';
import img1 from '../img/s1.png';
import img2 from '../img/s1a.png';
import img3 from '../img/s2.png';
import img4 from '../img/s2a.png';
import img5 from '../img/s3.png';
import img6 from '../img/s3a.png';





const alternateText = ['Anna Baugart','Marek Feliksiak', 'Arek Pawłowicz' ];
const alternateJob = ['Front-End Developer', 'Back-End Developer', 'Full-Stact Developer'];


const imagesGrey = [img2,img4,img6];
const imagesColor = [img1,img3,img5];

let counter=0;

class App extends Component {

state = {
  
  image: imagesGrey[0],
  imageColor: imagesColor[0],
  alt: alternateText[0],
  altJob: alternateJob[0],
 
}


changeSlide = () =>
{counter++;
  if(counter===3)
  {
    counter=0;
  }
 this.setState({
   image: imagesGrey[counter],
   imageColor: imagesColor[counter],
   alt: alternateText[counter],
   altJob: alternateJob[counter],
 })
  
}

componentDidMount(){

setInterval(this.changeSlide,4000);
}

  render() {
    return (
      <div className="App">
      <div className="slide" style={{backgroundImage: `url(${this.state.image})`}}>
      <h1 className = 'slide_title'>{this.state.alt}</h1>
      <h2 className = 'slide_subtitle'>{this.state.altJob}</h2>
      <img className ='slide_img' src={this.state.imageColor} alt={this.state.alternateText}/>
      

       </div>
       
       
      </div>
    );
  }
}

export default App;
