import React from 'react';
import list from '../../public/list.json'
import Card from './Card';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
     

      <main className="container mx-auto py-8">
        <section className="text-center">
          <h2 className="text-4xl font-semibold">Welcome to My Website</h2>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan vehicula leo.</p>
          <a href="#" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg">Shop Now</a>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Replace this with your featured products */}
            {
            list.map((item)=>(
              <Card key={item.id} item={item}/>
            ))
          }
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default Home;
