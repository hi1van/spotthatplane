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

  const handleClear = () => {
    setImage(null);
    setImageURL(null);
    setResult(null);
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
        <div className='column is-narrow'>
          <div className='panel-padding'>
            <div className='panel'>
              <h2 className='subheading'>Allow me to classify your picture of a plane.</h2>
              <p className='page-text' style={{ "marginTop": "15px" }}>
                Note: only the following aircraft types are supported by the model <br />
                Airbus A220, Airbus A320, Airbus A330, 
                Airbus A340, Airbus A350, Airbus A380, Concorde.
              </p>
              <p className='page-text' style={{ "marginTop": "15px" }}>Upload your photo below:</p>
            </div>
          </div>
        </div>
      </div>

      <div className='columns'>
        <div className='column' style={{display: 'flex'}}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="file-input" className="button" style={{ "marginRight": "15px" }}>
              Choose Image
            </label>
            <input id="file-input" type="file" onChange={handleImageChange} style={{ display: 'none' }}/>
            <button className="button" type="submit" style={{ "marginRight": "15px" }}>Analyse Image</button>
          </form>
          {image && <button className='button' onClick={handleClear}>Clear</button>}
          {loading && <div id="loading-indicator" class="spinner"></div>}
        </div>
      </div>

      <div className="columns">
        <div className='column is-narrow'>
          {imageURL && <img src={imageURL} style={{ "maxWidth": "40vw", "height": "auto" }}/>}
        </div>
        <div className='column is-narrow'>
          <div className='panel-padding'>
            <div className='panel'>
              {result && (
                <h2 className='subheading'>
                  Result: {result[0].label} with {Math.round(result[0].confidences[0].confidence * 100)}% confidence
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
