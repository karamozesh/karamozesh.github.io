import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';


const formatter = (value) => <CountUp end={value} separator="," />;


function Statictic() {
  return (
    <div className="bg-secondaryColor h-54 flex mx-auto px-12 py-5 items-center justify-between ">
      <div>
        <h2>امار خدمات سایت</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>

      <div className='  '>

            <Row gutter={13} >

                <Col span={8} className=' flex justify-center items-center  text-2xl '>
                  <Statistic title="رزومه ساخته شده" value={65} formatter={formatter} className='text-red flex
                  flex-col-reverse items-center justify-center bg-primaryColor shadow-lg text-center p-2 h-full rounded '/>
                </Col>
                <Col span={8}  className=' flex justify-center items-center '>
                  <Statistic title="  مشاوره دریافت شده" value={132} precision={2} formatter={formatter}  className='text-white flex
                  flex-col-reverse items-center justify-center bg-primaryColor shadow-lg text-center p-2 h-full rounded' />
                </Col>
                <Col span={8}  className=' flex justify-center items-center '>
                  <Statistic title="  مشاوره دریافت شده" value={132} precision={2} formatter={formatter}  className='text-white flex
                  flex-col-reverse items-center justify-center bg-primaryColor  shadow-lg text-center p-2 h-full rounded' />
                </Col>
              
            
            </Row>
      </div>
    </div>
  );
}

export default Statictic;
