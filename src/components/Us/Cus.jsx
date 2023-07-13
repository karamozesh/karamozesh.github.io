import Button from '../../components/UI/Button'
import { Link } from 'react-router-dom';

export default function Cus (){
    return(
        <div >
            <div className='mr-28 w-[100%] mt-24 rounded-md h-[750px]'>
                <div className='content-center items-center flex flex-row w-[80%] rounded-md  bg-slate-300 h-12'><p className=" mr-5 ">تماس با ما</p></div>
                <p className=" text-sm">هرگونه نظر، پیشنهاد، انتقاد یا مشکلات مشاهده‌شده در سامانه را از طریق این فرم با تیم پشتیبانی در میان بگذارید :)</p>
                <form action="" className="mt-8">
                <div className=' w-[60%] grid grid-cols-2 '>
                <label htmlFor="" className='text-sm font-normal'>نام <span className='text-red-500'>*</span></label>
                 <label htmlFor="" className='text-sm font-normal'>نام خانوادگی <span className='text-red-500'>*</span></label>
                </div>
                <div className='w-[60%] grid grid-cols-2 '>
                <input type="text" className='bg-stone-200 ml-4 rounded-md shadow-lg '/>
                <input type="text" className='bg-stone-200 rounded-md h-9 shadow-lg ' />
            </div>
            <br />
                <div className='w-[60%] grid grid-cols-1 '>
                <label htmlFor="" className='text-sm'> پست الکترونیک<span className='text-red-500'>*</span></label>
                </div>
          
          <div className='w-[80%] grid grid-cols-1  '>
         
          <input type="text" placeholder='info@example.com' className=' bg-stone-200 rounded-md  h-9 shadow-lg ' />
          <br /> 
          </div>
          <div className='w-[60%] grid grid-cols-1 '>
                <label htmlFor="" className='text-sm'>پیام <span className='text-red-500'>*</span></label>
                </div>
                <div className='w-[80%] grid grid-cols-1  '>
          <textarea name="" id="" cols="30" rows="10"className=' bg-stone-200 rounded-md  h-36 shadow-lg '></textarea>

         <br /> 
         </div>
         <div className=' w-4/5 flex justify-end '>
            <Button className='end-0  w-24  rounded '>ارسال
                <Link to=''></Link>
            </Button></div>

        
                </form>
         
            </div>

            
        </div>
    )
}

