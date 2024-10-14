'use client'

import { useRouter } from 'next/router'
import React,{} from 'react'


function post() {
  const router = useRouter()
  console.log(router.query.slug)
  return (
    <div>
      {router.query.slug}
    </div>
  )
}

export default post
