import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ImageUpload from './components/ImageUpload';
import CustomText from './components/CustomText';
import TShirtPreview from './components/TShirtPreview';

const App = () => {
  const { register, handleSubmit } = useForm();
  const [img, setImg] = useState(null);
  const [theme, setTheme] = useState(0); 

 
  const themes = [
    {
      background: 'bg-gray-100',
      text: 'text-blue-700',
      button: 'bg-blue-500 text-white',
      input: 'border p-2 w-full mt-1',
    },
    {
      background: 'bg-yellow-400',
      text: 'text-red-700',
      button: 'bg-red-500 text-white',
      input: 'border p-2 w-full mt-1',
    },
    {
      background: 'bg-green-400',
      text: 'text-green-700',
      button: 'bg-green-500 text-white',
      input: 'border p-2 w-full mt-1',
    },
  ];

  
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.altKey && e.key === 'q') {
        setTheme((prev) => (prev + 1) % 3); 
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress); 
    };
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='max-w-full flex flex-col items-center gap-8 justify-start min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/assets/Background.png')` }}>
      <h1 className={`${themes[theme].text} text-2xl font-bold mb-4 mt-12`}>
        T-Shirt Customization
      </h1>

      <div className={`${themes[theme].background} bg-white flex justify-center items-center`}>

        <div className="w-full max-w-sm m-5 h-[470px]  bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-xl font-semibold text-center mb-3">T-Shirt Preview</h2>

          <div className="w-full h-72 rounded-md flex items-center justify-center overflow-hidden border border-gray-300">
            <TShirtPreview img={img} />
          </div>

          <div className="">
            <ImageUpload setImg={setImg} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-4 m-5 border rounded-lg shadow-lg bg-white w-[380px]  max-w-full"
        >
          <div>
            <label className={`${themes[theme].text} block`}>Height (cm)</label>
            <input
              {...register('height', { required: true })}
              type="number"
              defaultValue={180}
              className={`${themes[theme].input}`}
            />
          </div>
          <div>
            <label className={`${themes[theme].text} block`}>Weight (kg)</label>
            <input
              {...register('weight', { required: true })}
              type="number"
              defaultValue={80}
              className={`${themes[theme].input}`}
            />
          </div>
          <div>
            <label className={`${themes[theme].text} block`}>Build</label>
            <select
              {...register('build', { required: true })}
              defaultValue="athletic"
              className={`${themes[theme].input}`}
            >
              <option value="lean">Lean</option>
              <option value="reg">Regular</option>
              <option value="athletic">Athletic</option>
              <option value="big">Big</option>
            </select>
          </div>
          <CustomText register={register} />
          <button
            type="submit"
            className={`${themes[theme].button} w-full p-2 mt-4`}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full overflow-hidden py-6 group">
        <div className="flex w-max animate-marquee group-hover:pause gap-4">
          
          {[...Array(11)].map((_, i) => (
            <img
              key={`set1-${i}`}
              src={`/assets/tshirt${i + 1}th.jpg`}
              alt={`T-shirt ${i + 1}`}
              className="h-[28rem] w-60 object-cover"
            />
          ))}

        
          {[...Array(11)].map((_, i) => (
            <img
              key={`set2-${i}`}
              src={`/assets/tshirt${i + 1}th.jpg`}
              alt={`T-shirt ${i + 1}`}
              className="h-[28rem] w-60 object-cover"
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default App;
