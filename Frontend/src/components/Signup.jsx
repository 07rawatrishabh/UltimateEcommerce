import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Signup() {
    

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  const handleCross=()=>{
    document.getElementById('my_modal_4').hideModal();
  }
  return (
    <>
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box ">
        <form  onSubmit={handleSubmit(onSubmit)}  method="dialog" className='w-screen-3xl'>
        {/* if there is a button in form, it will close the modal */}
        <Link onClick={()=>{document.getElementById('my_modal_4').hideModal()}}  to={'/Home'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
       
          <h3 className="font-bold text-3xl text-blue-600">Signup</h3>

        <div className=' px-5 m-4 space-y-2 text-xl text-blue-600'>
            <span>Name :  </span>
            <input type="name" 
            placeholder='Enter your Email'  
            className='w-60 px-3 py-1 border rounded-md outline-none'
            {...register("name", { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
        </div>


        <div className=' px-5 m-4 space-y-2 text-xl text-blue-600'>
            <span>Email :  </span>
            <input type="email" 
            placeholder='Enter your Email'  
            className='w-60 px-3 py-1 border rounded-md outline-none'
            {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
        </div>

        <div className='px-5 m-4 space-y-2 text-xl text-blue-600'>
            <span>Password : </span>
           
            <input type="password"
             placeholder='Enter your Password'  
             className='w-60 px-3 py-1 border rounded-md outline-none'
             {...register("password", { required: true })}
             />
             <br />
             {errors.password && <span  className='text-sm text-red-500 '>This field is required</span>}
        </div>
        
        <div className='pb-2'>
            <button className='bg-blue-600 text-white rounded-md  px-3 py-1 hover:bg-blue-800 duration-200'>Signup</button>
            <br />
            <p>
              Already have an Account? 
              <Link to={'/LoginPage'} className='underline text-blue-500 cursor pointer'>Login</Link>
            </p>
        </div>
        
        </form>
    </div>
 </dialog>
    </>
  )
}

export default Signup