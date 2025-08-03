import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

export default function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-6 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div> 
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quod ipsam quia explicabo eaque, porro eligendi eveniet quis magnam voluptatum voluptate consequatur ad temporibus, officia nulla? Voluptatum a nisi dolores.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quod ipsam quia explicabo eaque, porro eligendi eveniet quis magnam voluptatum voluptate consequatur ad temporibus, officia nulla? Voluptatum a nisi dolores.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et molestiae tempore, porro maxime recusandae nihil molestias modi exercitationem reiciendis quam non numquam aliquid dicta id itaque impedit natus eius.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corporis aspernatur soluta atque corrupti, reiciendis possimus perspiciatis sed illo, veritatis omnis dolorem, fugit dolorum quo voluptatibus! Perspiciatis deserunt iste facere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corporis aspernatur soluta atque corrupti, reiciendis possimus perspiciatis sed illo, veritatis omnis dolorem, fugit dolorum quo voluptatibus! Perspiciatis deserunt iste facere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corporis aspernatur soluta atque corrupti, reiciendis possimus perspiciatis sed illo, veritatis omnis dolorem, fugit dolorum quo voluptatibus! Perspiciatis deserunt iste facere.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}
