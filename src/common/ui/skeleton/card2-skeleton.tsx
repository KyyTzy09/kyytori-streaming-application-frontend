import React from 'react'

export default function Card2Skeleton() {
  return (
    <div className='w-full h-80 flex flex-col overflow-y-auto gap-5'>
      {[1, 2, 3, 4, 5, 6, ].map((item) => {
        return (
            <div key={item} className='flex items-center justify-between w-full h-40 gap-2 p-2'>
                <div className='w-32 max-w-[25%] h-40 bg-gray-500 animate-pulse'>
                </div>
                <div className='flex flex-col items-start justify-start w-[75%] h-full overflow-hidden gap-2'>
                    <div className='w-28 h-5 bg-gray-500 animate-pulse'>
                    </div>
                    <div className='w-full h-10 bg-gray-500 animate-pulse'>
                    </div>
                    <div className='w-full grid grid-cols-3 gap-2 overflow-y-auto'>
                        {[1,2,3].map((item) => {
                            return (
                                <div key={item} className='flex py-1 px-2 h-8 bg-gray-500 animate-pulse'>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}
