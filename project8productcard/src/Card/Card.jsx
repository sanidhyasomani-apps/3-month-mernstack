function Card({ image,title="car", description,price }) {
  return (
    
      <div className="w-80 h-115 bg-white rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <img
          src={image}
          alt="Car"
          className="w-full h-52 object-cover hover:scale-150 transition duration-300"
        />

        <div className="p-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
          <h1 className="text-3xl font-bold text-blue-600">{price}</h1>

          <button className="mt-3 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      
    </div>
  );
}

export default Card;