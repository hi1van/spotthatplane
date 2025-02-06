import { Client } from '@gradio/client';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  // handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const objectURL = URL.createObjectURL(file);
    setImageURL(objectURL);

  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      console.error("File submitted is not an image");
      return;
    }

    setLoading(true);
    const client = await Client.connect("ivanczhuang/SpotThatPlane");

    try {
      console.log("Sending image to Hugging Face API for analysis");
      // send the image to Hugging Face API
      const result = await client.predict("/predict", {img: image});
      console.log("Result", result.data);

      // set the result to display it
      setResult(result.data);
    } catch (error) {
      console.error('Error sending image:', error);
      setResult('Error analysing the image.');
    }

    setLoading(false);
  };


  return (
    <div className="App">
      <div className="columns">
        <div className='column is-narrow'>
          <img id="logo" src="/logo.png" alt="logo"/>
        </div>
        <div className='column'>
          <h1 className='title'>Spot that Plane</h1>
        </div>
      </div>

      <div className='columns'>
        <div className='column'>
          <div className='panel-padding'>
            <div className='panel'>
              <h2>Allow me to classify your picture of a plane.</h2>
              <p>Upload your photo below</p>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleImageChange} />
          <button className="button" type="submit">Analyse Image</button>
        </form>
        {imageURL && <img src={imageURL}/>}
        {loading && <p>Loading...</p>}
        {result && (
          <div>
            <h2>Result: {result[0].label}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
