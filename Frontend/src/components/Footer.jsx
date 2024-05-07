import React from 'react';

function Footer() {
  return (
    <footer className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Company Name</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan vehicula leo.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Links</h3>
          <ul className="mt-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Shop</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2">123 Street Name, City, Country</p>
          <p>+1234567890</p>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
