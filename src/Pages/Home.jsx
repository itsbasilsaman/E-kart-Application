import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishListItem } from '../Redux/slices/wishListSlice'
import { addItemToCart } from '../Redux/slices/cartSlice'

function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  
  return (
    <main className='px-[40px] mt-[50px] mb-[30px] md:grid grid-cols-4'> 
      { data?.length > 0 &&
      data?.map((item)=>(
        <div className='  px-[20px] py-[30px]'>
        <div className='w-full h-[360px] flex justify-center items-center'>
          <img src={item?.image} alt="" className='w-[80%] h-[80%] rounded'   />
        </div>
        <p className='px-[10px] pt-[10px]'>{item?.title.slice(0,25)}</p>
        <p className=' text-[18px] text-blue-900 font-bold p-[10px]'> $ {item.price}</p>
        <div className='flex justify-between px-[15px] text-[21px]'>
       <button onClick={()=>dispatch(addWishListItem(item))}> <FontAwesomeIcon icon={faHeart} className='border border-red-900 p-[12px] rounded text-red-800' /></button>
       <button onClick={()=>dispatch(addItemToCart(item))}> <FontAwesomeIcon icon={faCartShopping}  className='border border-blue-900 p-[12px] rounded text-blue-900'  /> </button>
        </div>
      </div>
      ))}
        
    </main>
  )
}

export default Home