// import React from "react";
// import Card from "./SkillUi/Card";
// import js from '../../asset/images/Javascript.png'
// import react from '../../asset/images/react.png'
// import python from '../../asset/images/python.png'
// import machineLearning from '../../asset/images/machineLearning.png'
// import imageProcessing from '../../asset/images/imageProcessing.png'
// import django from '../../asset/images/django.png'
// import nlp from '../../asset/images/nlp.png'
// import css from '../../asset/images/css.png'
// import html from '../../asset/images/html.png'
// import uiux from '../../asset/images/ux-ui-design-icon-outline-vector-33243310 1.png'
// import { Link } from "react-router-dom";


// export default function SkillCard() {
//   // component for show shill like django javascript, ...
//   // has 2 prop: img: Img, text: string
//   return <>

//       <section className="container mx-auto  p-10 flex flex-col gap-7 ">
//         <section>
//         <h1 className="inline-block pb-2 mb-4 ">
//         مهارت
//       </h1>
//         </section>

//         <section className="flex justify-center flex-wrap gap-7">
//             <Link to="/skill/javaScript">
//             <Card title ={'JavaScript'}  img={js}> </Card>
//             </Link>
//             <Link to="/skill/python">
//             <Card title ={'Python'}  img={python}> </Card>
//             </Link>
//             <Link to="/skill/html&css">
//             <Card title ={'Html&Css'}  img={html}> </Card>
//             </Link>
//             <Link to="/skill/nlp">
//             <Card title ={'NLP'}  img={nlp}> </Card>
//             </Link>
//             <Link to="/skill/ui-ux">
//             <Card title ={'UIUX'}  img={uiux}> </Card>
//             </Link>

//             <Card title ={'Django'}  img={django}> </Card>
         
//             <Card title ={'Machine Learning'}  img={machineLearning}> </Card>
            

//             <Card title ={'React'}  img={react}> </Card>

//         </section>
     
     
//       </section>

  
  
//   </>;
// }
import javascript from '../../asset/images/Javascript_Logo 1.png'
import css from '../../asset/images/150-1506020_file-html-logo-html5-css3-logo-png-transparent 1.png'
import html from '../../asset/images/5847f5bdcef1014c0b5e489c 1.png'
import django from '../../asset/images/1_1OBwwxzJksMv0YDD-XmyBw 1.png'
import python from '../../asset/images/kisspng-europython-logo-programming-language-portable-netw-join-our-team-job-opportunities-sample-solutions-5c9d90c3c63625 2.png'
import react from '../../asset/images/React-icon 1.png'
import nlp from '../../asset/images/image 24.png'
import ml from '../../asset/images/artigo-nlp-27 1.png'
import ip from '../../asset/images/Blog-Images-Forget-Machine-Learning-Humans-Still-Have-a-Lot-to-Learn-Part-II 1.png'
import uiux from '../../asset/images/ux-ui-design-icon-outline-vector-33243310 1.png'
import { Link } from 'react-router-dom'
export default function SkillCard() {
  
  return (
    <div className='h-[600px]'>
      <div className=' w-[60%] grid grid-cols-4 mt-28 mr-52 h-auto'>
        <div className=" inline  w-24 h-30 border border-black-300"><Link to='/skill/python'>
          <img src={python} className='w-24 h-20' alt="" />
          <p className='font-extralight text-center border-t border-black-300'>Python</p>
          </Link> </div>

        <div className=" inline  w-24 h-30 border border-black-300"><img src={uiux} className='w-24 h-20' alt="" /> <Link to='/skill/ui-ux'><p className='font-extralight text-center border-t border-black-300'>UI UX Design</p></Link></div>
        <div className=" inline  w-24 h-30 border border-black-300"><Link to=''><img src={html} className='w-24 h-20' alt="" /><p className='font-extralight text-center border-t border-black-300'>HTML & CSS</p></Link></div>

        <div className=" inline  w-24 h-30 border border-black-300"><Link to='/skill/javaScript'><img src={javascript} className='w-24 h-20' alt="" /><p className='font-extralight text-center border-t border-black-300'>JavaScript</p></Link></div>
        
      </div>
      <div className=' w-[60%] grid grid-cols-4 mt-16 mr-52 '>
      <div className=" inline  w-24 h-30 border border-black-300">
        <img src={ip} className='w-24 h-20 ' alt="" /><p href="/machine-learning" className='font-extralight leading-4  text-center border-t  border-black-300 '>Machine Learning</p></div>
      <div className=" inline  w-24 h-30 border border-black-300"><Link to='/skill/nlp'><img src={ml} className='w-24 h-20' alt="" /><p className='font-extralight leading-4  text-center border-t  border-black-300 '>NLP</p></Link></div>
      <div className=" inline  w-24 h-30 border border-black-300"><img src={nlp} className='w-24 h-20' alt="" /><p className=' font-extralight text-center border-t border-black-300 leading-4'>Image Processing</p></div>
      <div className="  inline  w-24 h-30 border border-black-300"><img src={react} className='w-20 mr-2 h-20' alt="" /><p className='font-extralight text-center border-t leading-4 border-black-300'>React</p></div>
        
      
      </div>
    </div>
  );
}
