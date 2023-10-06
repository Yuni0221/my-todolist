import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#00bfff", "#f472b6"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Chart({ totalCompleted, totalOngoing }) {
  const data = [
    { name: "Ongoing task", value: totalOngoing },
    { name: "Completed task", value: totalCompleted },
  ];

  return (
    <PieChart width={220} height={220}>
      <Pie
        data={data}
        cx={105}
        cy={70}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={65}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
