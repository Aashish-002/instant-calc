import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface PercentageResult {
  widthPercentage: string;
  heightPercentage: string;
}

const PercentageCalculator: React.FC = () => {
  const [pixelWidth, setPixelWidth] = useState<number>(0);
  const [pixelHeight, setPixelHeight] = useState<number>(0);
  const [result, setResult] = useState<PercentageResult>({ widthPercentage: '0%', heightPercentage: '0%' });

  const screenWidth = 411.42857142857144; // Constant screen width
  const screenHeight = 866.2857142857143; // Constant screen height

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
  <div className='flex justify-center my-[10%]  gap-4'>
      <div className="box bg-white/30 p-4 rounded-lg text-white">
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
        <p className='text-red-600'>Width Percentage: {result.widthPercentage}</p>
        <p className='text-green-600'>Height Percentage: {result.heightPercentage}</p>
      </div>
      <Link href="/calc" target="_blank" className='white
      '> GoTo </Link>
      </div>
          </div>
  );
};

export default PercentageCalculator;
