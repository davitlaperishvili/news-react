import React from 'react'

export default function PageTitle(props: {title: string}) {
  return (
    <h1 className='page_title'>{props.title}</h1>
  )
}
