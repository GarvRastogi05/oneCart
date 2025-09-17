import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Lists() {
  let [list ,setList] = useState([])
  let {serverUrl} = useContext(authDataContext)


  const fetchList = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list" )
      setList(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
    
  }

  const removeList = async (id) => {

    try {
      let result = await axios.post(`${serverUrl}/api/product/remove/${id}`,{},{withCredentials:true})

      if(result.data){
        fetchList()
      }
      else{
        console.log("Failed to remove Product")
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
   fetchList()
  },[])
  return (
<div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
  <Nav />
  <div className="flex">
    {/* Sidebar fixed width */}
    <Sidebar />

    {/* Product list shifted to the right */}
    <div className="flex-1 min-h-[100vh] mt-[70px] px-6 lg:ml-[320px] md:ml-[230px] flex flex-col gap-8 overflow-x-hidden py-12">
      <h1 className="text-2xl md:text-4xl mb-5">All Listed Products</h1>

      {list?.length > 0 ? (
        list.map((item, index) => (
          <div
            key={index}
            className="w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center gap-5 p-4"
          >
            <img
              src={item.image1}
              className="w-[120px] h-[90%] rounded-lg object-cover"
              alt=""
            />
            <div className="flex flex-col flex-1 gap-1">
              <div className="text-[#bef0f3] text-lg md:text-xl">{item.name}</div>
              <div className="text-[#bef3da] text-sm md:text-base">
                {item.category}
              </div>
              <div className="text-[#bef3da] text-sm md:text-base">
                ₹{item.price}
              </div>
            </div>
            <button
              onClick={() => removeList(item._id)}
              className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-red-300 hover:text-black"
            >
              X
            </button>
          </div>
        ))
      ) : (
        <div className="text-white text-lg">No products available.</div>
      )}
    </div>
  </div>
</div>
  )}

export default Lists
