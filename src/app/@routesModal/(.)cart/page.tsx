'use client';
import CartItem from '@/app/(routes)/cart/components/cart-item';
import Summary from '@/app/(routes)/cart/components/summary';
import CloseModal from '@/components/close-modal';
import useCart from '@/hooks/use-cart';
import { FC } from 'react';

const Page = () => {
  const cart = useCart();
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className=" flex items-center h-full max-w-2xl mx-auto overflow-y-scroll">
        <div className="relative bg-white w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <div className="mt-12">
              <div className="h-96 overflow-y-scroll">
                {cart.items.length === 0 && (
                  <p className="text-neutral-500">No items added to cart.</p>
                )}
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              </div>
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
