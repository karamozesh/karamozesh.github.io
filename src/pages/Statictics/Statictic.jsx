import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter = (value) => (
  <CountUp end={value} separator="," />
);

function Statictic() {
  return (
    <div className="bg-secondaryColor flex flex-col mx-auto px-12 py-20 items-center justify-between md:flex-row ">
      <div className="relative -top-10 md:top-0">
        <h2>آمار آموزشکار در یک نگاه</h2>
      </div>

      <div className="w-full md:w-[70%]">
        <Row gutter={13}>
          <Col
            span={6}
            className="flex justify-center items-center  text-2xl"
          >
            <Statistic
              title="رزومه ساخته شده"
              value={212}
              valueStyle={{
                color: 'white',
                fontSize: '2rem',
              }}
              formatter={formatter}
              className="text-red flex
                  flex-col-reverse items-center justify-center bg-primaryColor shadow-ticketConversation text-center p-2 h-full rounded text-white"
            />
          </Col>
          <Col
            span={6}
            className=" flex justify-center items-center text-white"
          >
            <Statistic
              title="مشاوره های انجام شده"
              value={5}
              valueStyle={{
                color: 'white',
                fontSize: '2rem',
              }}
              precision={7}
              formatter={formatter}
              className="text-white flex
                  flex-col-reverse items-center justify-center bg-primaryColor shadow-ticketConversation text-center p-2 h-full rounded"
            />
          </Col>
          <Col
            span={6}
            className=" flex justify-center items-center text-white"
          >
            <Statistic
              title="تیکت های ایجاد شده"
              value={300}
              valueStyle={{
                color: 'white',
                fontSize: '2rem',
              }}
              precision={234}
              formatter={formatter}
              className="text-white flex
                  flex-col-reverse items-center justify-center bg-primaryColor shadow-ticketConversation text-center p-2 h-full rounded"
            />
          </Col>
          <Col
            span={6}
            className=" flex justify-center items-center "
          >
            <Statistic
              title="خودشناسی های انجام شده"
              value={536}
              valueStyle={{
                color: 'white',
                fontSize: '2rem',
              }}
              precision={2}
              formatter={formatter}
              className="!text-white flex
                  flex-col-reverse items-center justify-center bg-primaryColor text-center p-2 h-full rounded shadow-ticketConversation"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Statictic;
