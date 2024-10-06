import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your styles

const images = [
  'https://lh3.googleusercontent.com/p/AF1QipNvL9rE7ke0JUhQk2F6bhsXulxUeMO6O5RW1x_8=s680-w680-h510', // Image 1
  'https://lh3.googleusercontent.com/p/AF1QipPuIi72r-ekxOmKjgpJcita_PIbFG9A2flbFCFc=s680-w680-h510', // Image 2
  'https://via.placeholder.com/800x400/7fff7f', // Image 3
  'https://via.placeholder.com/800x400/ffff7f', // Image 4
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Slider;
