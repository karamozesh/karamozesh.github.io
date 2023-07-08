import React from 'react';
import { useSelector } from 'react-redux';

import { Sector } from 'recharts';

const CustomActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
  } = props;

  console.log(props.payload);
  // const { tag, data } = props.payload;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 20) * cos;
  const sy = cy + (outerRadius + 20) * sin;
  const mx = cx + (outerRadius + 40) * cos;
  const my = cy + (outerRadius + 40) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  // const ex = mx;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  const color = fill.slice(0, 7);
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 15}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke={'#000'}
        strokeWidth={2}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={color}
        fill="none"
      />
      <circle
        cx={ex}
        cy={ey}
        r={2}
        fill={color}
        stroke="none"
      />

      <text
        x={ex + (cos >= 0 ? 100 : -80)}
        y={ey + 5}
        dy={18}
        textAnchor={textAnchor}
        fill="#757575"
        direction="rtl"
        className="description"
      >
        {newData} نظر ({percentage}%)
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey - 20}
        dy={18}
        textAnchor={textAnchor}
        fill={color}
      >
        {label.label}
      </text>
    </g>
  );
};

export default CustomActiveShape;
