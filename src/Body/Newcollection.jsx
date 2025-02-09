import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Newcollection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://full-stackproject-7kyr.onrender.com/api/products/getdetail');
      setProducts(response.data.data || []);
    } catch (err) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-red-500 font-semibold">Error: {error}</div>;

  return (
    <div className="p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-green-600 mb-6">New Collection</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product, index) => (
          <li key={index} className="flex flex-col items-center bg-white p-4 md:p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-60 md:w-64 lg:w-72 h-auto">
            <img
              src={product.imageUrl}
              alt={product.name || 'Product Image'}
              className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover mb-3 rounded-lg border-2 border-gray-200"
            />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 text-center">{product.name || 'Unnamed Product'}</h2>
            <p className="text-md md:text-lg text-gray-600">Price: Rs {product.price || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newcollection;
