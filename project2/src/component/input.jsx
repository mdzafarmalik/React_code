import React, { useId } from 'react';

function Input({
  label,
  amount,
  onAmountchng,
  currencychng,
  currencyopt,
  selectCurrency,
  className = '',
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();

  const parseAmount = (value) => {
    if (value === '' || value === '.') return value;
    const num = parseFloat(value);
    return isNaN(num) ? '' : num;
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-center sm:items-end gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-6 transition-all ${className}`}
    >
      <div className="w-full sm:w-1/2">
        <label htmlFor={id} className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-200">
          {label}
        </label>
        <input
          id={id}
          type="number"
          placeholder="Enter amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => onAmountchng && onAmountchng(parseAmount(e.target.value))}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none disabled:bg-gray-100 dark:disabled:bg-gray-700 dark:bg-gray-900 dark:text-white transition-all"
        />
      </div>

      <div className="w-full sm:w-1/2">
        <label className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-200">
          Currency
        </label>
        <select
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) => currencychng && currencychng(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none disabled:bg-gray-100 dark:disabled:bg-gray-700 cursor-pointer transition-all"
        >
          {currencyopt.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
