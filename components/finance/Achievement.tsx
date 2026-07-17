"use client";

interface Props{

income:number;

expense:number;

transactions:number;

}

export default function Achievement({

income,

expense,

transactions

}:Props){

const data=[

{

title:"First Transaction",

done:transactions>0

},

{

title:"10 Transactions",

done:transactions>=10

},

{

title:"Income Added",

done:income>0

},

{

title:"Expense Added",

done:expense>0

},

{

title:"Positive Balance",

done:income>=expense

}

];

return(

<div className="rounded-3xl border bg-white p-6">

<h2 className="mb-6 text-xl font-bold">

Achievements

</h2>

<div className="space-y-4">

{data.map(item=>(

<div

key={item.title}

className="flex items-center justify-between rounded-2xl border p-4"

>

<span>

{item.title}

</span>

<span className="text-2xl">

{item.done

?"🏆"

:"⬜"}

</span>

</div>

))}

</div>

</div>

)

}