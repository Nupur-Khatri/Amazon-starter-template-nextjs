import React from 'react'
import Header from '../components/Header'

function Orders() {
    const {data: session} = useSession();
  return (
    <div>
        <Header />
        <main className='max-w-screen-lg mx-auto p-10'>
            <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your Orders</h1>
            
        </main>
    </div>
  )
}

export default Orders