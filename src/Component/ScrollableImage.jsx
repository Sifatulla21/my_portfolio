import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import scrollimg from '../assets/scrollable.png'
import scrollimg2 from '../assets/scrollable2.png'
import scrollimg3 from '../assets/scrollable3.png'

const ScrollableImage = () => {
  const [hovered, setHovered] = useState([false, false, false]);

  const handleCardHover = (index, isHovered) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = isHovered;
    setHovered(updatedHovered);
  };

  const scrollAnimation = useSpring({
    transform: `translateY(${hovered[0] ? '-80%' : '0%'})`,
    config: { duration: 2000 },
  });

  const scrollAnimation2 = useSpring({
    transform: `translateY(${hovered[1] ? '-80%' : '0%'})`,
    config: { duration: 2000 },
  });

  const scrollAnimation3 = useSpring({
    transform: `translateY(${hovered[2] ? '-80%' : '0%'})`,
    config: { duration: 2000 },
  });

  return (
    <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Card 1 */}
      <div
        className="relative w-[500px] h-[500px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(0, true)}
        onMouseLeave={() => handleCardHover(0, false)}
      >
        <h2 className="text-lg font-semibold mb-2">Card 1</h2>
        <div className="h-64 overflow-hidden">
          <animated.img
            src={scrollimg}
            alt="Image"
            className="w-full"
            style={scrollAnimation}
          />
        </div>
        <div className="mt-[130px] mt-4 flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Button 1
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Button 2
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Button 3
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="relative w-[500px] h-[500px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(1, true)}
        onMouseLeave={() => handleCardHover(1, false)}
      >
        <h2 className="text-lg font-semibold mb-2">Card 2</h2>
        <div className="h-64 overflow-hidden">
          <animated.img
            src={scrollimg2}
            alt="Image"
            className="w-full"
            style={scrollAnimation2}
          />
        </div>
        <div className="mt-[130px] mt-4 flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Button 1
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Button 2
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Button 3
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="relative w-[500px] h-[500px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(2, true)}
        onMouseLeave={() => handleCardHover(2, false)}
      >
        <h2 className="text-lg font-semibold mb-2">Card 3</h2>
        <div className="h-64 overflow-hidden">
          <animated.img
            src={scrollimg3}
            alt="Image"
            className="w-full"
            style={scrollAnimation3}
          />
        </div>
        <div className="mt-[130px] flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Button 1
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Button 2
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Button 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableImage;
