import React from 'react';
 
function Input({label, amount,onAmountchng ,currencychng,
    currencyopt=[],
    selectCurrency='USD',
    amountDisabled=false,
    currencyDisabled=false
    ,clasName="",}) {
    return (
       
        
<div className= { `bg-white p-3 rounded-lg text-sm flex ${clasName}`} > 
    <div className='w-1/2'>
        <label className='text-gray-500 mb-2 inline-block'>{label}  </label>
        <input
        className='outline-none border border-gray-300 rounded-lg p-2 w-full'
         type="number" 
         placeholder='Amount'
         disabled={amountDisabled}/>
    </div>
    <div className='w-1/2 flex flex-wrap justify-end text-right'>
       <p className='text-black/40 mb-2 w-full'>Currency</p>
         <select
          className='rounded-lg px-1 py-1  bg-gray-100 cursor-pointer outline-none'>
              <option value="USD">USD</option>
              {/* <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="JPY">JPY</option> */}
              </select>
            
     </div>
 </div>

    );
}