import React, { useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCartItem } from '../Redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const [total,setTotal] = useState(0)

  const cartArray = useSelector((state)=>state.cartItem)
  
  const navigate = useNavigate()



  const findTotal = () => {
   if(cartArray.length > 0){
    setTotal(cartArray?.map((items)=>items.price).reduce((n1,n2)=>n1+n2 ) )
   }
  }

  useEffect(()=> {
    findTotal()
  },[cartArray])
  

  const dispatch = useDispatch()


  const handleCheckout = ()=> {
     dispatch(emptyCart())
     navigate('/')
  }

  
  

  return (
    <> 
      <div className='pt-32'>
          <h1 className='text-center text-2xl mt-[50px] font-bold'></h1>

        { cartArray?.length > 0 ? <div className='md:grid grid-cols-[2fr_1fr] my-10'>
            <div className='p-3'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='border border-blue-400 p-3 bg-blue-900 text-white'>#</th>
                    <th className='border border-blue-400 p-3 bg-blue-900 text-white'>Title</th>
                    <th className='border border-blue-400 p-3 bg-blue-900 text-white'>Image</th>
                    <th className='border border-blue-400 p-3 bg-blue-900 text-white'>Price</th>
                    <th className='border border-blue-400 p-3 bg-blue-900 text-white'>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {cartArray?.map((item)=> (
                     <tr>
                     <td className='border border-blue-400 p-3'>{item.id}</td>
                     <td className='border border-blue-400 p-3'>{item.title}</td>
                     <td className='border border-blue-400 p-3'><img src={item.image} alt=" no image" style={{width:'150px', height:'150px',objectFit:'cover',objectPosition:'top'}} /></td>
                     <td className='border border-blue-400 p-3'>{item.price}</td>
                     <td className='border border-blue-400 p-3'> <button className='bg-blue-900 p-3 text-white rounded' onClick={()=>dispatch(removeCartItem(item.id))}><FontAwesomeIcon icon={faTrash} /></button> </td>
                   </tr>
                 ))}
                </tbody>
              </table>
            </div>
            <div className='pt-5 px-10'>
                <div className='p-5 shadow-lg'>
                  <h1 className='text-center text-3xl'>Cart Summery</h1>
                  <p className='mt-4  text-xl'>Total number of products :  {cartArray.length}</p>
                  <p className='mt-2  text-xl'>GrandTotal : {total} </p>
                  <button className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600' onClick={handleCheckout}>CheckOut</button>
                </div>
            </div>
            <div></div>
          </div>
          :
          <div className='w-full h-full flex justify-center items-center flex-col p-[40px]'>
        <img src="https://tse4.mm.bing.net/th?id=OIP.MDIMbpYs7nc3L0zlz-SwJQHaGY&pid=Api&P=0&h=180" alt="" className='w-[400px] h-[300px]' />
        <p className='text-blue-900 text-3xl py-4'>Your Cart is Empty</p>
        <button className='bg-blue-900 text-white p-3 rounded mt-3' onClick={()=>navigate('/')}><FontAwesomeIcon icon={faBackward}  />  Back Home</button>
          </div>}
      </div>
    </>
  )
}

export default Cart