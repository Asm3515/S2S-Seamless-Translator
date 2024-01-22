import React, { useState } from 'react';
import "./Section.css"

const Section = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <section id='main-app'>
        <div className='main-app-page'>
          
            <img className='Seamless-Picture' src="https://miro.medium.com/v2/resize:fit:1400/1*9T8MUW2WW7wTMmPObVMoNQ.jpeg" alt="META_SEAMLESSV2M4" />
          
          <hr />
          <label className='youtube-input'>
            Youtube Link : <input name="youtube-link" />
          </label>
          <hr />
          <div
            className='file-drop-zone'
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <label>
              Drop file here or click to upload
              <input
                type="file"
                name="myRadio"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </label>
            {selectedFile && (
              <p>Selected file: {selectedFile.name}</p>
            )}
          </div>
          <hr />
        <div className='output-video'>
            <p>Please wait until output is produced</p>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
