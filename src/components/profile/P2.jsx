import Button from "../UI/Button";
export default function p2 (){
    return ( 
        <div >
 <div id='p2' className=' h-auto pb-20 rounded-md flex w-full shadow-[0px_0px_10px_5px_rgba(0,0,0,0.15)] mt-5  '> 
      <div><p className='pb-8 text-lg mr-4 mt-3'>نتیجه درخواست</p >
      <p className=' font-normal text-xs mr-6 mt-3'>در این بخش می‌توانید وضعیت درخواست‌های مشاوره خود را در زمینه مورد نظر مشاهده کنید.</p><br />
            <Button className=' bg-indigo-300 w-32 rounded-sm mr-6 font-light text-xs inline '>همه درخواست ها</Button>
      <Button className=' bg-indigo-300 w-32 rounded-sm mr-6 font-light text-xs inline'> فیلتر</Button>

      <a href="" className=' text-lime-600 mr-8 font-light text-xs'>درخواست جدید</a>
      
      
      </div>
      <div className=" border-0.5 border-black-500 mr-8">
    
      </div>


      </div>
       
        </div>
    );
}