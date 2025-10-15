import React from 'react'

const CreateTask = () => {
  return (
    <div>
            <form className='flex w-full mt-10 p-5 flex-wrap bg-neutral-800 items-start justify-around'>
                <div className='w-1/2'>
                    <div>
                    <h3>Task Title</h3>
                <input className='border-1 w-[80%] p-2 rounded-md' type="text" placeholder='make a ui design' />
                </div>
                    <div className='mt-3'>
                    <h3>Date</h3>
                <input className='border-1 w-[80%] p-2 rounded-md' type="date" name="" id="" />
                </div>
                <div className='mt-3'>
                    <h3>Asign to</h3>
                <input className='border-1 w-[80%] p-2 rounded-md' type="text" placeholder='employee name' />
                </div>
                <div className='mt-3'>
                    <h3>Category</h3>
                <input className='border-1 w-[80%] p-2 rounded-md' type="text"placeholder='design, dev,etc' />
                </div>
                </div>
                <div className='w-1/2'>
                    <h3>Description</h3>
                <textarea className='flex border-1 rounded-md items-end w-[80%]' cols='10' rows='8'></textarea>
                 <button className=' bg-emerald-500 w-[80%] h-10 mt-2 rounded-md'>Create Task</button>
                 
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask