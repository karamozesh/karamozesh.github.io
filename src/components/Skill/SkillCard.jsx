import React from "react";
import Card from "./SkillUi/Card";
import js from '../../asset/images/Javascript.png'
import react from '../../asset/images/react.png'
import python from '../../asset/images/python.png'
import machineLearning from '../../asset/images/machineLearning.png'
import imageProcessing from '../../asset/images/imageProcessing.png'
import django from '../../asset/images/django.png'
import nlp from '../../asset/images/nlp.png'
import css from '../../asset/images/css.png'
import html from '../../asset/images/html.png'
import uiux from '../../asset/images/ux-ui-design-icon-outline-vector-33243310 1.png'
import { Link } from "react-router-dom";


export default function SkillCard() {
  // component for show shill like django javascript, ...
  // has 2 prop: img: Img, text: string
  return <>

      <section className="container mx-auto  p-10 flex flex-col gap-7 ">
        <section>
        <h1 className="inline-block pb-2 mb-4 ">
        مهارت
      </h1>
        </section>

        <section className="flex justify-center flex-wrap gap-7">
            <Link to="/skill/javaScript">
            <Card title ={'JavaScript'}  img={js}> </Card>
            </Link>
            <Link to="/skill/python">
            <Card title ={'Python'}  img={python}> </Card>
            </Link>
            <Link to="/skill/html&css">
            <Card title ={'Html&Css'}  img={html}> </Card>
            </Link>
            <Link to="/skill/nlp">
            <Card title ={'NLP'}  img={nlp}> </Card>
            </Link>
            <Link to="/skill/ui-ux">
            <Card title ={'UIUX'}  img={uiux}> </Card>
            </Link>

            <Card title ={'Django'}  img={django}> </Card>
         
            <Card title ={'Machine Learning'}  img={machineLearning}> </Card>
            

            <Card title ={'React'}  img={react}> </Card>

        </section>
     
     
      </section>

  
  
  </>;
}
