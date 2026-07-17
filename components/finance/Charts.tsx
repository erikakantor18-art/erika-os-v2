"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

interface Props {
  expenseChart: {
    name: string;
    value: number;
  }[];

  income: number;
  expense: number;
}

const COLORS = [
  "#4F46E5",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#8B5CF6",
  "#14B8A6",
];

export default function Charts({
  expenseChart,
  income,
  expense,
}: Props) {

  const data = [
    {
      name: "Income",
      value: income,
    },
    {
      name: "Expense",
      value: expense,
    },
  ];

  return (

    <div className="grid gap-6 lg:grid-cols-2">

      <div className="rounded-3xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">
          Income vs Expense
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="name"/>

            <YAxis/>

            <Tooltip/>

            <Legend/>

            <Bar
              dataKey="value"
              radius={[10,10,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="rounded-3xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">
          Expense Categories
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie
              data={expenseChart}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
            >

              {expenseChart.map((_,i)=>(
                <Cell
                  key={i}
                  fill={COLORS[i%COLORS.length]}
                />
              ))}

            </Pie>

            <Tooltip/>

            <Legend/>

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}