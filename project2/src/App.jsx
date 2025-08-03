import { useEffect, useState } from 'react';
import './App.css';
import Input from './component/input';
import Usecurr from './customHook/usecurr';
import ThemeToggle from './component/ThemeToggle';

function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const rates = Usecurr(from);
  const option = Object.keys(rates || {});

  useEffect(() => {
    if (!rates || !rates[to]) return;
    setConvertedAmount((amount * rates[to]).toFixed(2));
  }, [amount, from, to, rates]);

  const swap = () => {
    if (!rates || !rates[to]) return;
    const tempAmount = amount * rates[to];
    const oldFrom = from;
    setFrom(to);
    setTo(oldFrom);
    setAmount((tempAmount / rates[from]).toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex items-center justify-center px-4">
      <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 w-full max-w-lg border border-gray-200 dark:border-gray-700 transition-all">
        <ThemeToggle />

        <h1 className="text-4xl font-bold text-center mb-6 text-orange-600 dark:text-orange-400">
          🌐 Currency Converter
        </h1>

        <Input
          label="From"
          amount={amount}
          onAmountchng={setAmount}
          currencychng={setFrom}
          currencyopt={option}
          selectCurrency={from}
        />

        <div className="flex justify-center my-5">
          <button
            onClick={swap}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-md shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
          >
            🔄 Swap
          </button>
        </div>

        <Input
          label="To"
          amount={convertedAmount}
          onAmountchng={() => {}}
          currencychng={setTo}
          currencyopt={option}
          selectCurrency={to}
          amountDisabled={true}
        />

        {convertedAmount > 0 && (
          <div className="mt-6 text-center text-lg font-medium text-green-600 dark:text-green-400 conversion-result">
            {amount} {from} = {convertedAmount} {to}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
