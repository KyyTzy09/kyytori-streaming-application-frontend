import CommentHeader from '@/features/comment/components/comment-header'
import React from 'react'

export default function CommentPage() {
  return (
    <div className='w-full flex flex-col min-h-screen p-5'>
        <CommentHeader komentarLength={0}/>
    </div>
  )
}
