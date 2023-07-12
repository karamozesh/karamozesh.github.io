import React from 'react'
import SkillSection from './UI/SkiilSection'
import SkillRoad from './UI/SkillRoad'
import bg from '../../asset/images/bg.png'
import road from '../../asset/images/Group 448.png'
import bg2 from '../../asset/images/bg2.png'
import bg3 from '../../asset/images/Group 444.png'
import bg4 from '../../asset/images/Teleportation-pana 3.png'
import bg5 from '../../asset/images/Teleportation-pana 2.png'
import bg6 from '../../asset/images/Group 445.png'
import bg7 from '../../asset/images/Group 446.png'
import bg8 from '../../asset/images/Group 447.png'
import Button from '../../components/UI/Button'


function NLP() {

    return (

        <section className="  mx-auto flex flex-col  ">

            <h1 className="inline-block p-10 ">
                پردازش زبان طبیعی  </h1>


            <SkillSection explain={'پردازش زبان طبیعی (Natural Language Processing) به شاخه‌ای از علوم رایانه (Computer Science)‌ و به‌طور خاص، شاخه‌ای از هوش مصنوعی (AI) مربوط می‌شود. این شاخه به کامپیوترها این امکان را می‌دهد تا متن و کلمه‌های گفتاری را به‌همان شیوه‌ای درک کنند که انسان می‌تواند بفهمد. '}></SkillSection>


            <section className="flex gap-5 justify-center mx-auto h-[70vh] mt-8 w-full bg-hero-pattern1 bg-cover">


                <SkillRoad title={'پروژه های تمرینی'}></SkillRoad>
                <SkillRoad title={'نقشه راه'}></SkillRoad>
                <SkillRoad title={'منابع یادگیری'}></SkillRoad>
                <SkillRoad title={'اهمیت یادگیری و کاربرد ها'}></SkillRoad>
                <SkillRoad title={'کاربرد NLP'}></SkillRoad>



            </section>

            <section className='container mx-auto '>
                <h1 className="inline-block py-8 mr-8 ">
                    کاربرد NLP در دنیای برنامه نویسی چیست؟
                </h1>
                <p className='px-5'>
                    پردازش زبان طبیعی (NLP) زبان‌شناسی محاسباتی (Computational Linguistics) را با مدل‌های (Statistical Models)، یادگیری ماشین (Machine Learning) و یادگیری عمیق (Deep Leaning) ترکیب می‌کند که همان زیرشاخه یادگیری ماشین است. در کنار هم این فناوری‌ها کامپیوترها را قادر می‌کنند تا زبان انسان را در قالب متن یا داده‌های صوتی پردازش و معنای کامل آن را درک کنند.

                    <br />
                    <br />
                    <br />
                    <img src={bg6} alt="" className='-ml-4 w-32 float-left' />
                    <h1 className="inline-block py-8  mr-8">
                        اهمیت یادگیری و کاربردها:
                    </h1>
                    <br />
                    <br />
                    <br />
                    یکی از دلایل اهمیت پردازش زبان طبیعی برای مشاغل این است که می‌توان از آن برای تجزیه‌وتحلیل حجم زیادی از داده‌های متنی، مانند نظرات کاربران رسانه‌های اجتماعی، نقدهای آنلاین، گزارش‌های خبری و غیره، استفاده کرد.
                    همه‌ی این داده‌های تجاری حاوی تعداد زیادی اطلاعات ارزشمند هستند و پردازش زبان طبیعی می‌تواند به مشاغل کمک کند به‌سرعت به این اطلاعات دست یابند.
                    از کاربرد‌های این مهارت می‌توان به موارد زیر اشاره کرد: <br />
                    تحلیل احساسات (Sentiment Analysis) <br />
                    طبقه‌بندی متن  (Text Classification)<br />
                    چت‌بات‌ها و دستیاران مجازی  (Chatbots & Virtual Assistants)<br />
                    استخراج متن (Text Extraction)<br />
                    ترجمه‌ی ماشینی (Machine Translation)<br />
                    خلاصه‌سازی متن (Text Summarization)<br />
                    هوش اقتصادی  (Market Intelligence)<br />
                    تصحیح خودکار (Auto-Correct)<br />
                    طبقه‌بندی قصد یا نیت  (Intent Classification)<br />
                    تشخیص شرایط اضطراری (Urgency Detection)<br />
                    تشخیص گفتار(Speech Recognition)<br />

                </p>


            </section>

            <section className='container mx-auto'>
                <img src={bg2} alt="" className='w-36 float-left mr-8' />

                <h1 className="inline-block py-8 mr-8 ">
                    منابع یادگیری  NLP             </h1>
                <p className='px-5'>
                    یکی از قوی‌ترین دانشگاه‌ها در حوزه NLP دانشگاه استنفورد است که پیشرفت در این حوزه را مدیون عملکرد تیم‌های تحقیقاتی در آن هستیم. همچنین قوی‌ترین کتاب‌ها و منابع آموزشی در این حوزه را اساتید این دانشگاه به ارمغان آورده‌اند.
                    کلاس‌های درس این این اساتید در دانشگاه استنفورد به لطف اینترنت ضبط شده و در اختیار عموم قرار گرفته است و به یکی از بهترین دوره‌ها برای شروع پردازش زبان طبیعی تبدیل شده‌است.
                    <br />
                    از <a className=' text-emerald-400' href="https://web.stanford.edu/class/cs224n/">این سایت</a> می‌توانید به منابع مخلف از جمله کتاب‌ها، سرفصل دروس، ویدئو‌ها، اسلاید‌ها و تمارین این درس بهره‌مند شوید. <br />
                    <br />

                    دن ژورافسکی و کریس مانینگ از اساتید بزرگ این حوزه در دوره‌ای در کورسرا به تدریس NLP پرداختند که ویدئو جلسات در یوتیوب، تمارین، اسلایدهای آن را می‌توانید از <a className=' text-emerald-400' href="https://github.com/Anwarvic/Dan-Jurafsky--Chris-Manning--NLP">این لینک</a>  مشاهده کنید.
                    <br />
                    <br />
                    همچنین <a className=' text-emerald-400' href="https://www.coursera.org/learn/classification-vector-spaces-in-nlp/home/">کورسرا</a> دوره‌ای برای پردازش زبان‌ طبیعی به تدریس اندرو ‌ان‌جی تدارک دیده که امکان دریافت رایگان آن نیز وجود دارد.
                </p>
                <br /> <br />



                <br /><br /><br />

                <img src={bg3} alt="" className='w-[45%]  -ml-48 float-left ' />
                <h1 className="inline py-8 mr-12 "> نقشه راه</h1>
                <div className='mx-auto w-[96%] flex justify-center'>

                    <img src={road} alt="" className='w-[94%] mr-8' />

                </div>
                <div className='mx-auto w-[96%] '>

                    <img src={bg5} alt="" className=' -mt-32 inline w-16 mr-10 float-right' />
                </div>


                <br /> <br /><br /><br /> <br /> <br /> <br /> <br /> <br />
                <div className='nlp-bg'>
                    <h1 className="inline-block py-8 mr-12">پروژه هایی برای تمرین NLP :</h1>
                    <p className='px-5'>
                        پروژه‌ها و تمارین:
                        همه ما میدانیم برای تسلط و یادگیری واقعی یک مهارت نیاز به تمرین و تکرار زیاد است. به‌ قول لینوس توروالدز خالق هسته لینوکس : "حرف زدن بی‌فایده است، کدت را نشان بده"
                        <br />
                        پس به سراغ پروژه‌های تمرینی می‌رویم که مهارت‌های پردازش زبان طبیعی را تقویت کنیم.
                        <br />
                        1 –
                        <a className=' text-emerald-400' href="https://neptune.ai/blog/10-nlp-projects">Neptune.ai</a> <br />
                        ده پروژه در سطح‌های مختلف برای تقویت رزومه
                        <br /> <br />
                        2 - <a className=' text-emerald-400' href="https://www.projectpro.io/article/nlp-projects-ideas-/452">projectpro</a>
                        <br /> بیست پروژه NLP  به همراه سورس کد. <br />
                        <br /> 3 - <a className=' text-emerald-400' href="https://medium.com/coders-camp/20-machine-learning-projects-on-nlp-582effe73b9c">medium</a><br />  بیست پروژه یادگیری ماشین در حوزه NLP به همراه توضیحات کد و مفاهیم
                    </p>
                </div>

            </section>

            <section className=' '>

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

export default NLP