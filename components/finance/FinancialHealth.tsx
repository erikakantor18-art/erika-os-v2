"use client";

interface Props{

income:number;

expense:number;

balance:number;

}

export default function FinancialHealth({

income,

expense,

balance

}:Props){

const score=

income===0

?0

:Math.round(

(balance/income)*100

);

return(

<div className="rounded-3xl border bg-gradient-to-br from-indigo-600 to-blue-600 p-8 text-white">

<p className="opacity-80">

Financial Health

</p>

<h1 className="mt-3 text-6xl font-bold">

{score}%

</h1>

<p className="mt-6">

{balance>=0

?"Excellent! Keep saving 🚀"

:"Warning! Expenses exceed income."}

</p>

<div className="mt-8 grid grid-cols-2 gap-4">

<div>

<p className="opacity-80">

Income

</p>

<h2 className="font-bold">

Rp {income.toLocaleString()}

</h2>

</div>

<div>

<p className="opacity-80">

Expense

</p>

<h2 className="font-bold">

Rp {expense.toLocaleString()}

</h2>

</div>

</div>

</div>

)

}