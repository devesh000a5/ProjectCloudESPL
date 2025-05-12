
const CustomText = ({ register }) => {
  return (
    <div>
      <label className="block text-gray-700">Custom Text</label>
      <textarea
        {...register('customText', { required: true })}
        rows="3"
        className="border p-2 w-full mt-1"
        maxLength="100"
        placeholder="Enter custom text here..."
      />
    </div>
  );
};

export default CustomText;
