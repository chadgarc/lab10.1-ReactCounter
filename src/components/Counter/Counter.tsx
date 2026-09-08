
export const Counter = ({
    stepValue = 1,
    currentCount,
    changeMessage,
    onIncrement,
    onDecrement,
    onReset
    }:{
        stepValue?: number,
        currentCount: number,
        changeMessage: string,
        onIncrement: () => void,
        onDecrement: () => void,
        onReset: () => void
    }) => {

    return (
        <section className='flex flex-col gap-4'>
            <h1>Current Count: {currentCount}</h1>
            <section className="flex gap-3 mx-auto">
                <button className="btn bg-blue-900 hover:bg-blue-700 text-white" onClick={onIncrement}>Increment</button>
                <button className="btn bg-amber-800 hover:bg-amber-600 text-white" onClick={onDecrement}>Decrement</button>
                <button className="btn bg-red-900 hover:bg-red-700 text-white" onClick={onReset}>Reset</button>
            </section>
            <p>Step Value: {stepValue}</p>
            <p>{changeMessage !== '' ? changeMessage : 'Start counting'}</p>
        </section>
    )
}   