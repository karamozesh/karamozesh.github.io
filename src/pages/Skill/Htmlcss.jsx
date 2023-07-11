import React from 'react'
import SkillSection from './UI/SkiilSection'
import SkillRoad from './UI/SkillRoad'
import bg from '../../asset/images/bg.png'
import road from '../../asset/images/2 10.png'
import bg2 from '../../asset/images/bg2.png'
import bg3 from '../../asset/images/Group 444.png'
import bg4 from '../../asset/images/Teleportation-pana 3.png'
import bg5 from '../../asset/images/Teleportation-pana 2.png'
import bg6 from '../../asset/images/Group 445.png'
import bg7 from '../../asset/images/Group 446.png'
import bg8 from '../../asset/images/Group 447.png'
import Button from '../../components/UI/Button'


function Htmlcss() {
  
  return (

        <section className="  mx-auto flex flex-col  ">

              <h1 className="inline-block p-10 ">
                    HTML و CSS  </h1>
       

              <SkillSection explain={'هر وبسایت دو بخش دارد . یک بخش از وبسایت قسمتی ست که کاربر مشاهده میکند و با آن کار میکند که frontend نام دارد . بخش دیگر قسمتی ست که کاربر چیزی از آن را مشاهده نمیکند و شامل تمام کار هایی ست که در پشت صحنه ی وبسایت انجام می شود مثل برقراری ارتباط با دیتا بیس و ... backend  نامیده می شود .'}></SkillSection>


                <section className="flex gap-5 justify-center mx-auto h-[70vh] mt-8 w-full bg-hero-pattern1 bg-cover">
                            
            
                <SkillRoad title={'پروژه های تمرینی'}></SkillRoad>
                <SkillRoad title={'نقشه راه'}></SkillRoad>
                <SkillRoad title={'منابع یادگیری'}></SkillRoad>

                <SkillRoad title={'اهمیت یادگیری و کاربرد ها'}></SkillRoad>
                <SkillRoad title={'CSS'}></SkillRoad>
                <SkillRoad title={'HTML'}></SkillRoad>


              
               </section>

               <section className='container mx-auto '>
                <h1 className="inline-block py-8 mr-8 ">
                کاربرد HTML در دنیای برنامه نویسی چیست؟
                </h1>
                <p className='px-5'>
                برای برنامه نویس frontend  شدن و طراحی یک صفحه ی وب ،  در اولین قدم باید html  را یاد بگیرید . 
html یک زبان نشانه گذاری است نه یک زبان برنامه نویسی . یک زبان برای توصیف صفحات وب است که توسط مرورگرها به نمایش در خواهد آمد. Html مجموعه ای از تگ ها می باشد که توسط آنها اجزای اصلی صفحه را میسازید.

                      <br />
                      <br />
                      <br />
                      <img src={bg6} alt="" className='-ml-4 w-32 float-left'/>
                      <h1 className="inline-block py-8  mr-8">
                      اهمیت یادگیری و کاربردها:
                      </h1>
                      <br />
                      <br />
                      <br />
                      برای برنامه نویس frontend شدن و طراحی یک صفحه ی وب ، در اولین قدم باید html 
را یاد بگیرید . 
 htmlیک زبان نشانه گذاری است نه یک زبان برنامه نویسی . یک زبان برای توصیف 
صفحات وب است که توسط مرورگرها به نمایش در خواهد آمد. Htmlمجموعه ای از تگ 
ها می باشد که توسط آنها اجزای اصلی صفحه را میسازید. 
قدم دوم بعد از یادگیری html ، یادگیری Css است . <br />
Css یک زبان برای توصیف عناصر html است . در واقع با استفاده از css شما میتوانید 
به وبسایت خود رنگ و طرح دهید ، اندازه ی هرکدام را مشخص کنید و ... . و در نهایت آن 
را به صورت دلخواهتان دربیاورید. <br />
برای درک بهتر کار html و css ، تصور کنید یک ساختمان میخواهیم بسازیم )در واقعیت 
وبسایت( . html اسکلت و بدنه آن را تشکیل میدهد و css نمای آن را میسازد . 
در مورد css باید گفت با اینکه یادگیر ی این زبان نیز ساده است اما رسیدن به تسلط در آن 
، به تمر ین و تکرار زیادی نیاز دارد . این زبان به صورت کار رو ی نشانه ها و اعمال ویژگی به 
آنها کار میکند . به این ترتیب که در داخل اسناد html بر روی تگ ها به کمک ویژگی های 
class و همچنین id نشانه هایی قرار داده شده و سپس این نشانه ها در بخش css به کار 
گرفته شده و بر روی آنها ویژگی هایی همچون عرض ، ارتفاع ، رنگ و ... اعمال می شود . <br />
در حقیقت بدون زبان css هیچ اندازه ، رنگ ، افکت و تحرکی داخل صفحات وب وجود 
ندارد و ما فقط شاهد نوشته ها و چارچوب های نامتوازن در صفحات وب خواهیم بود . 
پس تمام ی این رنگ ها ، چینش ها ، حرکات و در کل زیبا یی ها توسط زبان css انجام می
شود 
                     </p>


               </section>

               <section className='container mx-auto -mb-32  '>
               <img src={bg2} alt="" className='w-36 float-left mr-8'/>

                <h1 className="inline-block py-8 mr-8 ">
منابع یادگیری  Html              </h1>
                <p className='px-5'>
                                
                    <br />
                <a className=' text-emerald-400' href="https://html.com/">سایت اصلی html</a>
                    <br />
                <a className=' text-emerald-400' href="https://www.w3schools.com/html/">W3schools</a>
                    <br />
                <a className=' text-emerald-400' href="https://www.learn-html.org/">learn-html</a>
                   <br />
                <a className=' text-emerald-400' href="https://www.youtube.com/watch?v=qz0aGYrrlhU">HTML Tutorial for Beginners: HTML Crash Course( Programming with Mosh) 
(آموزش html  از صفر ، زبان انگلیسی
</a>
                   <br />
                <a className=' text-emerald-400' href="https://www.youtube.com/watch?v=6zcBBDcR5-M">دوره آموزش HTML مقدماتی تا پیشرفته صفر تا صدneonlearn))(زبان فارسی)</a>
                   <br />
                   
                </p>
                <br />
                <h1 className="inline-block py-8 mr-8 ">
منابع یادگیری  Css               </h1>
                <p className='px-5'>
                                
                    <br />
                <a className=' text-emerald-400' href="https://web.dev/learn/css/">web.dev</a>
                    <br />
                <a className=' text-emerald-400' href="https://www.w3schools.com/css/">W3schools</a>
                    <br />
                <a className=' text-emerald-400' href="https://www.tutorialspoint.com/css/index.htm">tutorialspoint</a>
                   <br />

                   <a className=' text-emerald-400' href="https://learnhtmlcss.online/">learnhtmlcss</a>
                   <br />
       
                <a className=' text-emerald-400' href="https://www.youtube.com/watch?v=OXGznpKZ_sA   ">( آموزش css به زبان انگلیسی از مبتدی تا پیشرفته)( freeCodeCamp.org)</a>
                   <br />
                   <a className=' text-emerald-400' href="https://www.youtube.com/watch?v=cwRbD-8MjE8">(دوره آموزش css مقدماتی تا پیشرفته)( neonlearn)</a>
                   <br />
                </p>
<br /><br /><br />
        

                
<img src={bg3} alt="" className='w-[47%] float-left '/>
                <h1 className="inline py-8 mr-12 "> نقشه راه</h1>
               <section className='mx-auto w-[96%] flex justify-center'>
                

                <img src={road} alt="" className='w-[94%] mr-8'/>
                
               </section>
               <section  className='mx-auto w-[96%] '>
                <img src={bg4} alt="" className='inline w-14  float-left'/>
                <img src={bg5} alt="" className='inline w-16 mr-10 float-right'/>
                </section>
           
                
<br /> <br /><br /><br /> <br /> <br /> <br /> <br /> <br />
                <h1 className="inline-block py-8 mr-12">پروژه هایی برای تمرین html , css :</h1>
                <p className='px-5'>
                1. صفحه‌ی گرامیداشت<br />
ساده‌ترین وبسایتی که به عنوان یک مبتدی می‌توانید بسازید، صفحه‌ی گرامیداشت شخصی است که او را در زندگی تحسین می‌کنید. برای ساخت چنین صفحه‌ای تنها به دانش پایه‌ای HTML و CSS نیاز دارید. در رابطه با آن شخص مطلب بنویسید و عکس او را به صفحه اضافه کنید. در بالای صفحه باید تصویر و نام شخص مورد نظر را قرار دهید و مابقی جزئیات را در زیر آن‌ها بنویسید. با استفاده از پاراگراف‌ها، لیست‌ها، لینک‌ها و تصاویری با CSS می‌توانید ظاهر زیبایی را به صفحه ببخشید. از رنگ پس‌زمینه و فونت مناسب برای صفحه استفاده کنید. شما با استفاده از HTML می‌توانید اکثر قسمت‌های صفحه را بسازید، اما از کمی CSS هم برای رنگ و لعاب بخشیدن به صفحه استفاده کنید. <br /> <br />
2. صفحه‌ی وب شامل فرم<br />
همیشه فرم‌ها بخش مهمی از هر پروژه‌ای هستند و شما در بسیاری از اپلیکیشن‌ها با آن‌ها سر و کار خواهید داشت. حالا که اینطور است، چرا زودتر تمرین نکنیم و دانش خود را در آن زمینه افزایش ندهیم؟! وقتی با مسائل مربوط به Input و تگ‌های اساسی در HTML آشنا شدید، بیایید و با تمام آن تگ‌ها یک فرم را ایجاد کنید. نحوه‌ی استفاده از فیلدهای متنی، چک باکس، دکمه رادیویی، تاریخ و سایر المان‌های مهم موجود در فرم را یاد بگیرید. وقتی مشغول ساخت یک فرم هستید، ساختاردهی درست به صفحه‌ی وب را یاد خواهید گرفت. برای ساخت چنین صفحاتی نیز می‌توانید به تنهایی از مهارت‌های HTML یا HTML5 خود استفاده کنید اما برای بهتر جلوه دادن پروژه می‌توانید کمی استفاده از CSS را نیز مد نظر قرار دهید. <br /><br />
3. وبسایت رستوران<br />
از دانش جامع خود در زمینه HTML و CSS جهت ساخت یک صفحه‌ی وب زیبا برای رستوران استفاده کنید. ساخت طرح‌بندی برای وبسایت یک رستوران نسبت به نمونه‌های قبلی کمی پیچیده‌تر است. شما با استفاده از CSS grid یک طرح‌بندی را برای مرتب کردن غذاها و نوشیدنی‌ها آماده می‌کنید. باید قیمت‌ها و تصاویر را به آن اضافه کنید. برای زیباتر کردن ظاهر صفحه می‌توانید از ترکیب رنگ مناسب، فونتی زیبا و تصاویر باکیفیت استفاده کنید. برای اینکه بتوانید تصاویر بهتری را به کاربران ارائه دهید، می‌توانید از تصاویر کشویی استفاده کنید. همچنین برای هدایت به صفحات داخلی از لینک‌ها استفاده کنید. <br /> <br />
4. سایت عکاسی<br />
اگر به خوبی با HTML5 و CSS3 آشنا باشید، می‌توانید یک وبسایت تک صفحه‌ایِ واکنش‌گرا برای عکاسی بسازید. برای واکنش‌گرا کردن آن از فلکس باکس و مدیا کوئری استفاده کنید. نام شرکت را به همراه یک تصویر در بالای صفحه قرار دهید. کارهای خود را با قرار دادن چندین عکس در پایین آن به نمایش بگذارید. در بخش پاورقی جزئیات تماس عکاس را ذکر کنید. برای دیدن کارها یک دکمه اضافه کنید. این دکمه باید شما را مستقیماً به قسمت تصاویر هدایت کند. همچنین باید به نکاتی مثل مارجین، padding، ترکیب رنگ، اندازه و سبک فونت، اندازه تصویر و استایل دکمه‌ها رسیدگی کنید. <br />


                </p>
      
               </section>
             
                          
                
<br /> <br /><br /><br /> <br /> <br /> <br /> 
<section>
                    <img src={ bg7} alt="" className='  -mt-80' />
                </section>
                
                <section className=' -mt-16'>
                    
                    <h1 className='mr-16'>نظرات کاربران</h1>
                    <ul className='mt-4 mr-16 font-normal text-sm'>
                      <li>قبل از مطرح کردن هرگونه سوال ، بخش سوالات دیگران را مطالعه نمایید.</li>
                      <li>در صورت وجود هرگونه مشکل از طریق بخش تیکت ها ، مشکل خود را پیگیری نمایید.</li>
                      <li>کامنت خود را بصورت فارسی تایپ نمایید. از به کار بردن کلمات رکیک یا توهین آمیز خودداری نمایید. 
                       <br /> در صورت مشاهده کامنت تایید نمیشود.</li>
                    </ul>
                    <div className='w-[90%]'>
                    <textarea name="" id="" cols="60" rows="10" className=' mr-44 bg-gray-200'></textarea>
                    <br /><img src={bg8} className=' -mt-10 ' alt="" />
                    <Button className=' -mt-36 ml-60 float-left'>ارسال دیدگاه</Button></div>
                    
                    

                  </section>


        </section>
      )
      
}

export default Htmlcss