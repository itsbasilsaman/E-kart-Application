import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart,faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

  const [show,setShow] = useState(false)
  const wishListArray = useSelector((state)=>state.Wishlist)
  const cartArray = useSelector((state)=>state.cartItem)
  
  

  const showBar = ()=> {
    setShow(!show)
  }
  return (
    <>
     <header className='w-full   pt-[20px] md:pt-[0px] h-[70px]  md:flex  justify-between items-center text-white px-[32px]'>
      <div className='flex items-center w-full'>
      <FontAwesomeIcon icon={faCartShopping} className='text-2xl' />
       <Link to={'/'}> <h1 className='px-[20px] sm:text-2xl text-lg '>E-Kart</h1></Link>
        <button onClick={showBar} className='border border-white px-[15px] py-[6px] rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
      </div>
    { show && <div className='px-[20px] button-section md:hidden    flex  md:w-[300px]'>
       <Link to={'/wishlist'}> <button className='bg-white text-blue-900 font-semibold px-[10px] py-[9px] hover:bg-blue-800   hover:text-white flex items-center   '><FontAwesomeIcon icon={faHeart} /> Wishlist <span className='border border-blue-800    px-[6px] rounded py-[3px]  hover:text-white  hover:border-white  ml-[6px]'>{wishListArray?.length}</span></button></Link>
      <Link to={'/cart'}>  <button className='bg-white text-blue-900 font-semibold px-[10px] py-[9px] ml-[10px]  hover:bg-blue-800   hover:text-white  flex items-center '> <FontAwesomeIcon icon={faCartShopping}   /> Cart <span className=' border border-blue-800   ml-[6px]   px-[6px] rounded py-[3px]  hover:text-white  hover:border-white'>{cartArray?.length}</span> </button></Link>
      </div>}

      <div className='px-[20px] button-section hidden    md:flex  '>
       <Link to={'/wishlist'}> <button className='bg-white text-blue-900 font-semibold px-[10px] py-[9px] hover:bg-blue-800   hover:text-white flex items-center   '><FontAwesomeIcon icon={faHeart} /> Wishlist <span className='border border-blue-800    px-[6px] rounded py-[3px]  hover:text-white  hover:border-white  ml-[6px]'>{wishListArray?.length}</span></button></Link>
       <Link to={'/cart'}> <button className='bg-white text-blue-900 font-semibold px-[10px] py-[9px] ml-[10px]  hover:bg-blue-800   hover:text-white  flex items-center '> <FontAwesomeIcon icon={faCartShopping}   /> Cart <span className=' border border-blue-800   ml-[6px]   px-[6px] rounded py-[3px]  hover:text-white  hover:border-white'>{cartArray?.length}</span> </button></Link>
      </div>
     </header>
    </>
  )
}

export default Header