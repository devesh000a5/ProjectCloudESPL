import { useState } from 'react';

const ImageUpload = ({ setImg }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImg(file); 
    }
  };

  return (
    <div className="border-dashed border-2 mt-2 p-3 relative text-center bg-gray-100">
      <input
        type="file"
        onChange={handleImageUpload}
        className="cursor-pointer"
        accept="image/*"
      />
      {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-full max-w-xs" />}
      <p>Drag or Upload your image</p>
    </div>
  );
};

export default ImageUpload;
