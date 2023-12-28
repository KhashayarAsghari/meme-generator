
import './App.css';
import React from 'react';
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import memesData from "./memes";
import ImageContainer from './Components/ImageContainer';



function App() {
  
  const [memeImage, setMemeImage] = React.useState("")
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    
    setMemeImage(memesArray[randomNumber].url);
  }



  return (
    <div className="App">
      <Header />
      <InputForm onClickFunction={getMemeImage}/>
      <ImageContainer imgSrc={memeImage}/>
    </div>
  );
}

export default App;
