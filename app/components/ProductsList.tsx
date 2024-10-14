"use client"
import React from 'react'
import { books } from '@/data'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Book = {
  title: string
  author: string
  price: number
  inStock: boolean
  image: string
}
function ProductsList() {
  const [left, setLeft] = useState(true)
  console.log(books)
  return (
    <div className='flex flex-col gap-8'>
      {
        books.map((book, index) => (
          
          <Product key={index} book={book} left={index}  />
        ))
      }
    </div>
  )
}

export default ProductsList

const Product =({book,left}:{book:Book,left:number})=>{
  
  return(<>
 
    <div >
      <Link href={`/post/${book.title.toLowerCase().replace(/\s+/g,"-")}`}>
      
      {
        
        left%2 ===0?(
          <div className='w-full min-h-96 flex reverse items-center justify-between '>
            <div className='w-1/2 overflow-hidden rounded-xl'>
                <Image src={book.image} alt={book.title} width={300} height={300} className='w-full '/>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-8 px-8'>
              <h1 className='text-4xl font-semibold text-slate-900 dark:text-slate-100'>{book.title}</h1>
              <h1 className='text-2xl text-slate-600'>{book.author}</h1>
              <div className='flex  gap-8 items-center'>
                <h1 className='text-5xl text-orange-500'>${book.price}</h1>
                <h1 className='text-xl text-slate-600'>{book.inStock ? "In Stock" : "Out of Stock"}</h1>
              </div>
            </div>
    
          </div>
    
          ):(
            <div className='w-full min-h-96 flex reverse items-center justify-between '>
          
              <div className='w-1/2 h-full flex flex-col justify-center items-center gap-8 px-8'>
                <h1 className='text-4xl font-semibold text-slate-900 dark:text-slate-200'>{book.title}</h1>
                <h1 className='text-2xl text-slate-600'>{book.author}</h1>
                <div className='flex  gap-8 items-center'>
                  <h1 className='text-5xl text-orange-500'>${book.price}</h1>
                  <h1 className='text-xl text-slate-600'>{book.inStock ? "In Stock" : "Out of Stock"}</h1>
                </div>
              </div>
              <div className='w-1/2 overflow-hidden rounded-xl'>
                <Image src={book.image} alt={book.title} width={300} height={300} className='w-full '/>
              </div>
    
          </div>
        )
      }
      </Link>
    </div>
    
  </>)
}