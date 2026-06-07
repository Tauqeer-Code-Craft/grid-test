import React from 'react'

function Another() {
  return (
    <section className="bg-zinc-200/60 min-h-screen p-8">
        <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-12 gap-4 auto-rows-[220px]">
                <div className='p-6 bg-white rounded-3xl col-span-8 row-span-1' >
                    <h1>1st</h1>
                </div>
                <div className='p-6 bg-white rounded-3xl col-span-4 row-span-2' >
                    <h1>2nd</h1>
                </div>
                
                {/* Middle row */}
                <div className='p-6 bg-white rounded-3xl col-span-4 row-span-2' >
                    <h1>3rd</h1>
                </div>
                <div className='p-6 flex justify-center items-center rounded-3xl col-span-4 row-span-1' >
                    <div className="w-60 h-60 border-amber-50  bg-white rounded-full">

                    </div>
                </div>
                <div className='p-6 bg-white rounded-3xl col-span-4 row-span-1' >
                    <h1>4th</h1>
                </div>
                {/* 3rd Row */}
                <div className='p-6 bg-white rounded-3xl col-span-4 row-span-1' >
                    <h1>5th</h1>
                </div>
                
                

            </div>
        </div>
    </section>
  )
}

export default Another