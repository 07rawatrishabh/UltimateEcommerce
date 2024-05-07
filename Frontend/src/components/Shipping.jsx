import React, { useState } from 'react';

function Shipping() {
  const [shippingDetails, setShippingDetails] = useState({
    address: '',
    city: '',
    pincode: '',
    purchaseOrderId: '',
    customerId: ''
  });

  const [shippingId, setShippingId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate unique shipping ID (For demonstration, you can use a UUID library)
    const generatedId = generateUniqueId();
    setShippingId(generatedId);
    // Here you can send the shipping details to your backend or manage it as required
    console.log("Shipping Details:", shippingDetails);
    console.log("Shipping ID:", generatedId);
    // Resetting form fields
    setShippingDetails({
      address: '',
      city: '',
      pincode: '',
      purchaseOrderId: '',
      customerId: ''
    });
  };

  const generateUniqueId = () => {
    // This is a placeholder function, replace with your own logic to generate unique IDs
    // For demonstration, I'm using a simple incrementing number
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            placeholder="Enter Address"
            value={shippingDetails.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            name="city"
            placeholder="Enter City"
            value={shippingDetails.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
            Pincode
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pincode"
            type="text"
            name="pincode"
            placeholder="Enter Pincode"
            value={shippingDetails.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purchaseOrderId">
            Purchase Order ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="purchaseOrderId"
            type="text"
            name="purchaseOrderId"
            placeholder="Enter Purchase Order ID"
            value={shippingDetails.purchaseOrderId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerId">
            Customer ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customerId"
            type="text"
            name="customerId"
            placeholder="Enter Customer ID"
            value={shippingDetails.customerId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Shipping Details
          </button>
        </div>
      </form>
      {shippingId && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Shipping ID:</strong>
          <span className="block sm:inline ml-2">{shippingId}</span>
        </div>
      )}
    </div>
  );
}

export default Shipping;
