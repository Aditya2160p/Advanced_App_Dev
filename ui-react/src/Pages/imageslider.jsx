import React, { useEffect, useRef } from 'react';
import job1Image from '../assets/images/google-logo-9834.png';
import job2Image from '../assets/images/flipkart-logo-39907.png';
import job3Image from '../assets/images/picture-logo-42725.png';
import job4Image from '../assets/images/oracle.png';
import job6Image from '../assets/images/sam.png';
import job7Image from '../assets/images/cat.png';
import job8Image from '../assets/images/capg.png';
import job9Image from '../assets/images/acc.png';

const ImageSlider = () => {
  const images = [job1Image, job2Image,job3Image,job4Image,job6Image,job7Image,job8Image,job9Image];
  const sliderRef = useRef(null);
  const imageWidth = 70; // Adjust the width of each image
  const moveSpeed = 0.3; // Adjust the speed of the animation
  const moveInterval = 3000; // Adjust the interval (in milliseconds) between each move

  useEffect(() => {
    const slider = sliderRef.current;
    let position = 0;
    let animationId;

    const duplicatedImages = [...images, images[0]];

    const moveSlider = () => {
      position -= moveSpeed;
      slider.style.transform = `translateX(${position}px)`;

      if (position <= -duplicatedImages.length * imageWidth) {
        position = 0;
        slider.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(moveSlider);
    };

    const startAnimation = () => {
      cancelAnimationFrame(animationId);
      moveSlider();
    };

    const stopAnimation = () => {
      cancelAnimationFrame(animationId);
    };

    startAnimation();

    return stopAnimation;
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={sliderRef} className="flex">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="w-60 h-30 rounded-md mr-4" />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
