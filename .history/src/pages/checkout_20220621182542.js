import React from 'react'
import Header from '../components/Header';
import CheckoutProduct from '../components/CheckoutProduct';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className='bg-gray-100'>
      <Header/>

      <main className="lg:flex max-w-screen-lg mx-auto">
         {/* Left Hand Section */}
        <div className='flex-grow m-5 shadow-sm '>
          <Image src="https://links.papareact.com/ikj"
            width={700}
            height={250}
            objectFit="contain"
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pb-4'>
            {items.length === 0 
            ? "Your Amazon Basket is empty."
            : "Shopping Basket" }
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct 
              key={i}
              id={item.id} 
              title={item.title} 
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
            />
          ))}
          </div>
        </div>
          

         {/* Right Hand Section */}
         <div>
          {items.length > 0 && (
            <>
              <h2>Subtotal
              ({items.length} items): 
              <span>
              <Currency quantity={price} currency="INR" />
              </span>
              </h2>
            </>
          )}
         </div>
      </main>
    </div>
  );
}

export default Checkout;