

const TShirtPreview = ({ img }) => {
  return (
    <div className="flex justify-center items-center w-full sm:w-2/3 md:w-full lg:w-full mx-auto p-4 h-[300px] sm:h-[400px] md:h-[500px]">
  <img
    src={img ? URL.createObjectURL(img) : '/assets/6163.jpg'}
    alt="T-shirt Preview"
    className="object-contain w-full h-full"
  />
</div>

  );
};

export default TShirtPreview;
