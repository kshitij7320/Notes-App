import { useState } from 'react';

const App = () => {

const [title, setTitle] = useState("");
const [details, setDetails] = useState("");
const [task, setTask] = useState([])

const submitHandler = (e)=>{
  e.preventDefault()
  const copyTask=[...task];
  copyTask.push({title,details})

  setTask(copyTask);
  setTitle("")
  setDetails("");

}

const deleteNote = (idx)=>{
  const copyTask = [...task]
  copyTask.splice(idx,1)
  setTask(copyTask)
}


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex items-start p-10 gap-4 flex-col lg:w-1/2'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className='px-5 py-2 font-medium outline-none w-full border-2 rounded' type="text" placeholder='Enter Notes Heading' />
          <textarea value={details} onChange={(e)=>{setDetails(e.target.value)}} className='px-5 h-32 py-2 font-medium w-full outline-none border-2  rounded' placeholder='Enter Details' name="" id=""></textarea>
          <button className='bg-white active:scale-95 w-full outline-none font-medium text-black px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map((elem,idx)=>{
            return <div key={idx} className='h-52 flex justify-between flex-col items-start relative w-40 rounded-xl text-black pt-9 pb-4 px-5 py-4 bg-white'>
             <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{deleteNote(idx)}} className='w-full bg-red-400 cursor-pointer active:scale-95 rounded-full text-white py-1 text-xs'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
