import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { lightOrDark } from '../../functions/color';

const CustomPieChart = ({ results }) => {
  return (
    <ResponsiveContainer
      className="h-[20vh]"
      height={500}
    >
      <PieChart>
        <Pie
          data={results}
          dataKey="point"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={200}
          label={renderCustomizedLabel}
          labelLine={false}
          minAngle={3}
        >
          {results.map((label, index) => {
            let color = label.color;
            return (
              <Cell
                key={`cell-${index}`}
                fill={color}
                stroke={'#000'}
                strokeWidth={2}
              />
            );
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  fill,
  name,
  color,
}) => {
  const isLight = lightOrDark(color) === 'light';

  const radius =
    innerRadius +
    (outerRadius - innerRadius) * 0.7;
  const x =
    cx + radius * Math.cos(-midAngle * RADIAN);
  const y =
    cy + radius * Math.sin(-midAngle * RADIAN);

  return Math.floor(percent * 100) > 0 ? (
    <text
      x={x}
      y={y}
      fill={isLight ? '#000' : '#fff'}
      textAnchor={x > cx ? 'middle' : 'end'}
      dominantBaseline="central"
      index={index}
      className="text-xs"
    >
      {percent.toFixed(2)}% | {name}
    </text>
  ) : (
    <></>
  );
};
