import React, { useState } from 'react';

function Product() {
  const [purchaseOrder, setPurchaseOrder] = useState({
    productName: '',
    quantity: '',
    pricing: '',
    mrp: '',
    customerId: ''
  });

  const [purchaseOrderId, setPurchaseOrderId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaseOrder(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate unique purchase order ID (For demonstration, you can use a UUID library)
    const generatedId = generateUniqueId();
    setPurchaseOrderId(generatedId);
    // Here you can send the purchase order details to your backend or manage it as required
    console.log("Purchase Order Details:", purchaseOrder);
    console.log("Purchase Order ID:", generatedId);
    // Resetting form fields
    setPurchaseOrder({
      productName: '',
      quantity: '',
      pricing: '',
      mrp: '',
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productName"
            type="text"
            name="productName"
            placeholder="Enter Product Name"
            value={purchaseOrder.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            type="number"
            name="quantity"
            placeholder="Enter Quantity"
            value={purchaseOrder.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pricing">
            Pricing
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pricing"
            type="number"
            name="pricing"
            placeholder="Enter Pricing"
            value={purchaseOrder.pricing}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mrp">
            MRP
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mrp"
            type="number"
            name="mrp"
            placeholder="Enter MRP"
            value={purchaseOrder.mrp}
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
            value={purchaseOrder.customerId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Purchase Order
          </button>
        </div>
      </form>
      {purchaseOrderId && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Purchase Order ID:</strong>
          <span className="block sm:inline ml-2">{purchaseOrderId}</span>
        </div>
      )}
    </div>
  );
}

export default Product;
