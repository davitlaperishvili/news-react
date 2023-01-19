import { useRouter } from 'next/router'
import React from 'react'

export default function PostInside() {
  const router = useRouter();
  console.log(router)
  return (
    <div>Post!</div>
  )
}
