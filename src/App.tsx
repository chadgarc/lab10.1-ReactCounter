import { useState } from 'react'
import { History } from './components/History/History';
import { Counter } from './components/Counter/Counter';
import { UseEffect } from './components/UseEffect/UseEffect';

function App() {

  const savedCount = localStorage.getItem('currentCount');
  const savedHistory = localStorage.getItem('countHistory');

  const previousCurrentCount: number = savedCount ? Number(savedCount) : 0;
  const previousCountHistory: number[] = savedHistory ? JSON.parse(savedHistory) : [];

  const [currentCount, setCurrentCount] = useState<number>(previousCurrentCount);
  const [countHistory, setCountHistory] = useState<number[]>(previousCountHistory);
  const [changeMessage, setChangeMessage] = useState<string>('')
  const [stepValue, setStepValue] = useState<number>(1)

  const handleIncrement = () => {
    setCurrentCount( prev => prev + stepValue);
    setCountHistory(prev => [...prev, currentCount + stepValue]);
  }

  const handleDecrement = () => {
    setCurrentCount( prev => prev - stepValue);
    setCountHistory(prev => [...prev, currentCount - stepValue]);
  }

  const handleReset = () => {
    setCurrentCount(0);
    setCountHistory([]);
    setChangeMessage('Count has been reset.');  
  }
  
  const handleStatus = (message: string) => {
    setChangeMessage(message)
  }

  const handleStepValue = (value: number) => {
    setStepValue(value)
  }

  return (
    <>
      <UseEffect
        currentCount={currentCount}
        countHistory={countHistory}
        handleStatus={handleStatus}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <section className='bg-white p-4 rounded h-150
        flex flex-col m-auto gap-5'>
        <h2>Counter</h2>
        <Counter
          stepValue={stepValue}
          currentCount={currentCount}
          changeMessage={changeMessage}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onStepValueChange={handleStepValue}
        />
        <History countHistory={countHistory} />
        <p className='mt-auto'>Use ArrowUp to increment and ArrowDown to decrement.</p>
      </section>
    </>
  )
}

export default App
