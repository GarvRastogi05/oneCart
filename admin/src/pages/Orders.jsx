import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'
import { SiEbox } from "react-icons/si";

function Orders() {

  let [orders,setOrders] = useState([])
  let {serverUrl} = useContext(authDataContext)

    const fetchAllOrders =async () => {
    try {
      const result = await axios.post(serverUrl + '/api/order/list' , {} ,{withCredentials:true})
      setOrders(result.data.reverse())
      
    } catch (error) {
      console.log(error)
    }
    
  }
   const statusHandler = async (e , orderId) => {
         try {
          const result = await axios.post(serverUrl + '/api/order/status' , {orderId,status:e.target.value},{withCredentials:true})
          if(result.data){
            await fetchAllOrders()
          }
         } catch (error) {
          console.log(error)
          
         }
  }
// Orders page (e.g. Orders.jsx)
useEffect(() => {
  fetchAllOrders();
}, []);

return (
  <div className="min-h-screen w-full bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
    <Nav />

    {/* Sidebar is fixed, so main gets left padding equal to sidebar width */}
    <Sidebar />

    <main className="min-h-[calc(100vh-70px)] pt-[70px] pb-12 px-6 md:pl-[250px] lg:pl-[310px]">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">All Orders List</h1>

        <div className="flex flex-col gap-6">
          {orders.map((order, index) => (
            <article
              key={index}
              className="w-full bg-slate-600 rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-start lg:items-center"
            >
              <SiEbox className="w-[60px] h-[60px] text-black p-1 rounded-lg bg-white" />

              <div className="flex-1">
                <div className="flex flex-col gap-1 text-[#56dbfc] text-[16px]">
                  {order.items.map((it, i) => (
                    <p key={i}>
                      {it.name.toUpperCase()} * {it.quantity} <span>{it.size}</span>
                      {i !== order.items.length - 1 && ','}
                    </p>
                  ))}
                </div>

                <div className="text-[15px] text-green-100 mt-2">
                  <p>{order.address.firstName + ' ' + order.address.lastName}</p>
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city}, {order.address.state}, {order.address.country},{' '}
                    {order.address.pinCode}
                  </p>
                  <p>{order.address.phone}</p>
                </div>
              </div>

              <div className="text-[15px] text-green-100">
                <p>Items : {order.items.length}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                <p className="text-[20px] text-white">₹ {order.amount}</p>
              </div>

              <select
                value={order.status}
                onChange={(e) => statusHandler(e, order._id)}
                className="px-2 py-2 bg-slate-500 rounded-lg border border-[#96eef3]"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </article>
          ))}
        </div>
      </div>
    </main>
  </div>
);
}


export default Orders
