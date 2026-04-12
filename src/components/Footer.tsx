import React from 'react'
import {  brands, categories, contact, footerLinks, paymentMethods, socialMedia } from '../constant/Footer'
import { BiLogoPlayStore } from 'react-icons/bi'
import { FaAppStoreIos } from 'react-icons/fa'
import Image from 'next/image'
import { Logo } from '../image'

const Footer = () => {
  return (
    <div className='py-10'>
      <div>
        <div className='grid grid-cols-6  bg-black text-white py-10'>

          <div className='col-span-1'>
            <h1 className='text-2xl '>Brand</h1>
            <ul className='space-y-1 mt-3'>
              {brands.map((item)=>(
              <li key={item.id}>
                    <a href="#">{item.name}</a>
              </li>
            ))}
            </ul>
          </div>

          <div className='col-span-1'>
            <h1 className='text-2xl '>Category</h1>
           <ul>
             {categories.map((item)=>(
              <li key={item.id}>
                <a href="#">{item.name}</a>
              </li>
            ))}
           </ul>
          </div>


          <div className='col-span-4'>
           <div className='grid grid-cols-4'>
             {footerLinks.map((item)=>(
             <div key={item.id} >
              <h3>{item.title}</h3>
              <ul>
                {item.links.map((item, idx)=>(
<li key={idx}>{item}</li>
                ))}
              </ul>
             </div>
            ))}
           </div>
          </div>
       
        </div>

<div className='grid grid-cols-4 bg-black text-white py-5 border-b border-gray-200 items-center'>
 
 <div className='py-4 text-xl '>
  <h3>download our apps</h3>
 <div className='flex  gap-5 items-center mt-3'>
   <a href=""><BiLogoPlayStore size={25} /></a>
  <a href=""><FaAppStoreIos size={25} /></a>
 </div>
 </div>

 <div>

  <h3>follow us</h3>
 <ul className='flex items-center mt-3 gap-5'>
   {socialMedia.map((item)=>(
    <li key={item.id}>
      <a href="#"><item.icon size={25}/></a>
    </li>
  ))}
 </ul>
 </div>
 <div>
  <h3>need help? call now</h3>

<div className='mt-3' >
      {contact.phoneNumbers.map((item)=>(
      <span  key={item}>{item}</span>
    ))}
</div>
 
 </div>
 <div  className='flex items-center'>
  <Image src={Logo} alt="logo" height={10} width={100}/>
  <h1 className='text-2xl font-bold'>store</h1>
 </div>

</div>


<div className='flex justify-between items-center h-full bg-black text-white py-5'>
  <p>Copyright  {new Date().getFullYear()} &copy; Temptics</p>

  <div className='flex gap-6 p-2 px-8'>
  {paymentMethods.map((item) => (
    <div key={item.id} className='flex items-center px-8 py-1 rounded-lg bg-gray-200'>
      <Image
        src={item.logo}
        alt={item.name}
        height={40}
        width={40}
        className='object-cover'
      />
    </div>
  ))}
</div>
</div>

      </div>
    </div>
  )
}

export default Footer
