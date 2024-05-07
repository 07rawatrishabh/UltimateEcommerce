import React, { useState } from 'react';

function Customer() {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    city: ''
  });

  const [customerId, setCustomerId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate unique customer ID (For demonstration, you can use a UUID library)
    const generatedId = generateUniqueId();
    setCustomerId(generatedId);
    // Here you can send the customer details to your backend or manage it as required
    console.log("Customer Details:", customerDetails);
    console.log("Customer ID:", generatedId);
    // Resetting form fields
    setCustomerDetails({
      name: '',
      email: '',
      mobileNumber: '',
      city: ''
    });
  };

  const generateUniqueId = () => {
    // This is a placeholder function, replace with your own logic to generate unique IDs
    // For demonstration, I'm using a simple incrementing number
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded  px-8 pt-10  pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={customerDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={customerDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobileNumber"
            type="tel"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={customerDetails.mobileNumber}
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
            value={customerDetails.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Customer
          </button>
        </div>
      </form>
      {customerId && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Customer ID:</strong>
          <span className="block sm:inline ml-2">{customerId}</span>
        </div>
      )}
    </div>
  );
}

export default Customer;
