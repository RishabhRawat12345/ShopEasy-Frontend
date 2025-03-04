import React from 'react';

const Front = () => {
  return (
    <div className='h-full w-full flex flex-col md:flex-row justify-between items-center p-4'>
      {/* Left Section */}
      <div className="left flex flex-col justify-center items-center text-center h-full w-full md:w-1/2 space-y-2">
        <p className='text-black text-xl font-bold'>NEW ARRIVALS ONLY</p>
        <h1 className='text-black text-3xl font-bold'>New 👋</h1>
        <h1 className='text-black text-3xl font-bold'>Collection</h1>
        <h1 className='text-black text-3xl font-bold'>For Everyone</h1>
        <button className='rounded-full text-white bg-red-500 mt-5 w-36 h-10'>Latest Collections</button>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-1/2 mt-5 md:mt-0">
        <img 
          src="https://img.freepik.com/free-photo/young-woman-standing-with-shopping-bags-street_23-2147823593.jpg?ga=GA1.1.1958398441.1735524025&semt=ais_hybrid" 
          alt="Shopping woman"
          className="w-full h-auto md:h-full object-cover" />
      </div>
    </div>
  );
}

export default Front;
