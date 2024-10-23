import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <footer className='w-full p-[30px]'>
        <section className='p-[20px]'>
          <h1 className='text-xl pb-[20px]'><FontAwesomeIcon icon={faCartShopping} />E-Cart</h1>
          <p>a user-friendly online platform for customers to browse and purchase a wide range of products, from clothing and electronics to home goods and accessories. It features organized categories, product descriptions, and customer reviews to enhance the shopping experience.</p>
        </section>
        <section  className='p-[20px] flex flex-col items-center justify-start'> 
          <h1 className='text-xl pb-[35px]'>Links</h1>
         <Link to={'/'}> <p className='pt-[20px]'>Home</p></Link>
         <Link to={'/cart'}> <p  >Cart</p></Link>
          <Link to={'/wishlist'}><p>WishList</p></Link>
        </section>
        <section  className='p-[20px] flex flex-col items-center justify-start'> 
          <h1 className='text-xl pb-[35px]'>Guides</h1>
          <p>React Redux</p>
          <p className='py-[20px]'>Tailwind CSS</p>
          <p>Material UI</p>
        </section>
        <section  className='p-[20px]  '>
        <h1 className='text-xl pb-[35px] pl-[10px] '>Contact Us</h1>
          <div>
            <input type="text" className='px-[40px] py-[10px]  mb-[10px]' />
            <button className='text-white bg-black py-[9px] px-[16px]'>Subscribe</button>
          </div>
          <div className='flex justify-around items-center pt-[25px]'>
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </section>
     </footer>
    </>
  )
}

export default Footer