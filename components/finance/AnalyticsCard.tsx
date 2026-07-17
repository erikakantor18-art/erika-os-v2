"use client";

interface Props{
    transactions:number;
    income:number;
    expense:number;
}

export default function AnalyticsCard({

    transactions,
    income,
    expense

}:Props){

    const average=
        transactions===0
        ?0
        :(income+expense)/transactions;

    return(

<div className="grid gap-5 md:grid-cols-4">

<div className="rounded-3xl bg-white border p-6">

<p className="text-gray-500">
Transactions
</p>

<h2 className="mt-2 text-3xl font-bold">
{transactions}
</h2>

</div>

<div className="rounded-3xl bg-white border p-6">

<p className="text-gray-500">
Income
</p>

<h2 className="mt-2 text-3xl font-bold text-green-600">

Rp {income.toLocaleString()}

</h2>

</div>

<div className="rounded-3xl bg-white border p-6">

<p className="text-gray-500">
Expense
</p>

<h2 className="mt-2 text-3xl font-bold text-red-600">

Rp {expense.toLocaleString()}

</h2>

</div>

<div className="rounded-3xl bg-white border p-6">

<p className="text-gray-500">
Average
</p>

<h2 className="mt-2 text-2xl font-bold">

Rp {Math.round(average).toLocaleString()}

</h2>

</div>

</div>

    )

}