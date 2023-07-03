import profilimage from '../../asset/images/set-social-people-media-profile-member_24877-53571 1.png';
import usericon from '../../asset/icon/user-profile_icon.svg';
import dashedrectangle from '../../asset/images/Rectangle 579.png'
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';


export default function ProfilePage() {
  return (
  <div>
    <div className='flex flex-row'>
      <div className='flex flex-col w-12 m-4 mt-6'><img src={profilimage} alt="" />
      <br />
      <div className='w-16 h-16 z-10  rounded-md bg-white  mr-1 shadow-[11px_20px_10px_-15px_rgba(0,0,0,0.3)] mt-5  '>
        <img src={usericon} alt="" className='w-9 h-9 relative top-2 right-2 '/></div>
      
      </div> 
      <div className=' flex flex-col w-4/5 rounded-md  shadow-[0px_0px_50px_-15px_rgba(0,0,0,0.3)] mt-5  '>
        <div><p className='text-lg mr-4 mb-8'>پروفایل</p></div>
        <form action="" className='mr-6'>
          <div className='grid grid-cols-2'>
          <label htmlFor="" className='text-sm'>نام خوانوادگی <span className='text-red-500'>*</span></label>
          <label htmlFor="" className='text-sm'>مدرک تحصیلی</label>
          </div>
          <div className='grid grid-cols-2'>
          <input type="text" className='bg-stone-200 rounded-md w-2/3'/>
          <input type="text" className='bg-stone-200 rounded-md w-2/3 h-9' />
          </div>
          <br />
          <div className='grid grid-cols-2'>
          <label htmlFor="" className='text-sm'> شماره موبایل <span className='text-red-500'>*</span></label>
          <label htmlFor="" className='text-sm'> ایمیل<span className='text-red-500'>*</span></label>
          </div>
          
          <div className='grid grid-cols-2'>
          <input type="text" className='bg-stone-200  rounded-md w-2/3'/>
          <input type="text" placeholder='info@example.com' className=' bg-stone-200 rounded-md w-2/3 h-9' />
          </div>
          <br />
          <br />
          <div >
          <img src={dashedrectangle} className='w-5/6' alt="" />
            <div className='  '>
            <p  className=' relative -top-10  right-3 inline'>رزومه من </p>
            <input type="button" value="دانلود" style={{ backgroundColor : '00C408' ,}} className=' h-7 text-white font-thin relative text-xs  text -top-10 float-left ml-36 w-16 rounded-sm bg-lime-500 inline ' />
            <input type="button" value="اعمال تغییرات"  className=' relative -top-10  border-2 border-black rounded-md h-7 float-left font-thin ml-2 text-xs  inline w-28 ' />
      
            </div>
          </div>
          
          <img src={dashedrectangle} className='w-5/6' alt="" />
          <div className='  '>
            <p  className=' relative -top-10  right-3 ml-16 inline'>نتیجه خودشناسی</p>
            <input type="button" value="نتیجه تست دیسک"  className=' relative -top-10 h-7 ml-6   text-xs  inline  border-2 rounded-md border-black w-36 ' />
            <input type="button" value="نتیجه تست هالند" className=' relative -top-10 h-7    text-xs border-2 border-black rounded-md inline w-36 ' />
            </div>
            <Button className="inline font-light rounded-md w-5/6 px-8 shadow-lg">
            <Link to="/profile">
              ثبت
            </Link>
          </Button>
          
        </form>
      </div>
</div>
    
  </div>) ;
}
