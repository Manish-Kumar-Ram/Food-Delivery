import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Recipe = () => {
  const [outputText, setOutputText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const API_KEY = "AIzaSyDuNs9E9hOSgdjsls4he848bU_mXY-aRcU"; // Replace with your actual API key
  const genAI = new GoogleGenerativeAI(API_KEY);

  const runAI = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      const response = await result.response;
      const text = response.text();
      setOutputText(text);
    } catch (error) {
      console.error("Error running AI:", error);
      setOutputText('Error occurred. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      runAI();
    } else {
      alert("Please enter a prompt before submitting.");
    }
  };

  return (
    <div className="container">
      <h1>Ask AI About Your Recipe</h1>
      <div className="main">
      <div className="textarea">
          <textarea
            id="input"
            cols="50"
            rows="20"
            placeholder="Ask with AI"
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button id="Button" onClick={handleSubmit}>
          Submit
        </button>
        {outputText.length > 0 ? (
  <div className="output">
    <div className="output-text">
      <h2>{outputText}</h2>
      <h3>{outputText}</h3>
      <p>{outputText} <strong>Emphasized text.</strong></p>
      <p>For more information, visit <a href="#">this link</a>.</p>
    </div>
  </div>
) : (
  <p>Loading...</p>
)}
        </div>
      </div>
    
  );
};

export default Recipe;
