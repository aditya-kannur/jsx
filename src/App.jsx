import React from 'react';
import './App.css';
import elephant from './images/elephant.jpeg';

export default function App() {
  const imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant
      },
      {
        id: 2,
        img: elephant
      },
      {
        id: 3,
        img: elephant
      },
      {
        id: 4,
        img: elephant
      }
    ];
    return data;
  };

  const images = imageData();

  return (
    <>
    <p><strong>This is from Function Component</strong></p>
    <div className="image-container">
      {images.map((ele, ind) => (
        <img src={ele.img} alt="elephant-images" key={ele.id} />
      ))}
      
    </div></>

  );
}
