import React, { useState, useEffect } from 'react';

interface PercentageResult {
  widthPercentage: string;
  heightPercentage: string;
}

const PercentageCalculator: React.FC = () => {
  const [pixelWidth, setPixelWidth] = useState<number>(0);
  const [pixelHeight, setPixelHeight] = useState<number>(0);
  const [result, setResult] = useState<PercentageResult>({ widthPercentage: '0%', heightPercentage: '0%' });

  const screenWidth = 4.114285714285715; // Constant screen width
  const screenHeight = 8.662857142857144; // Constant screen height

  useEffect(() => {
    const calculatePercentage = (pixelWidth: number, pixelHeight: number, screenWidth: number, screenHeight: number): PercentageResult => {
      const widthPercentage = (pixelWidth / screenWidth) * 100;
      const heightPercentage = (pixelHeight / screenHeight) * 100;

      return {
        widthPercentage: widthPercentage.toFixed(2) + '%',
        heightPercentage: heightPercentage.toFixed(2) + '%'
      };
    };

    setResult(calculatePercentage(pixelWidth, pixelHeight, screenWidth, screenHeight));
  }, [pixelWidth, pixelHeight]);

  return (
    <div className='w-[100vw] h-[100vh] '>
  <div className='flex justify-center   gap-4'>
      <div className="box bg-blue-500/80 my-[10%] p-4 rounded-lg text-white">
      <h1 className='mx-[5em] mb-3'>Percentage Calculator</h1>
      <div>
        <label>
          Width in pixels:
          <input
            type="number"
            value={pixelWidth}
            className='p-2 mb-2 rounded-md text-black'
            onChange={(e) => setPixelWidth(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Height in pixels:
          <input
            type="number"
            value={pixelHeight}
            className='p-2 rounded-lg text-black'
            onChange={(e) => setPixelHeight(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <p className='text-orange-600'>Width Percentage: {result.widthPercentage}</p>
        <p className='text-yellow-600'>Height Percentage: {result.heightPercentage}</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default PercentageCalculator;
