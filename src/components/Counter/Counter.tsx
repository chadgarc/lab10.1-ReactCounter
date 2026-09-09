import type { CounterProps } from '../../types/types'

/**
 * Interactive counter component.
 * Displays the current count, step value input, action buttons (increment,
 * decrement, reset), and a status message.
 *
 * @param {CounterProps} props - Props for the Counter component.
 * @param {number} [props.stepValue=1] - The value added or subtracted on each step.
 * @param {number} props.currentCount - The current count value.
 * @param {string} props.changeMessage - Status message describing the current action or state.
 * @param {() => void} props.onIncrement - Callback invoked when incrementing the count.
 * @param {() => void} props.onDecrement - Callback invoked when decrementing the count.
 * @param {() => void} props.onReset - Callback invoked when resetting the count.
 * @param {(value: number) => void} props.onStepValueChange - Callback invoked when the step input value changes.
 * @returns {JSX.Element} The rendered Counter component.
 */
export const Counter = ({
    stepValue = 1,
    currentCount,
    changeMessage,
    onIncrement,
    onDecrement,
    onReset,
    onStepValueChange
}: CounterProps) => {

    return (
        <section className='flex flex-col gap-4'>
            <h1>Current Count: {currentCount}</h1>
            <section className="flex gap-3 mx-auto">
                <button className="btn bg-blue-900 hover:bg-blue-700 text-white" onClick={onIncrement}>Increment</button>
                <button className="btn bg-amber-800 hover:bg-amber-600 text-white" onClick={onDecrement}>Decrement</button>
                <button className="btn bg-red-900 hover:bg-red-700 text-white" onClick={onReset}>Reset</button>
            </section>
            <p>Step Value: {<input className="text-right w-15" type="number" onChange={(e) => onStepValueChange(Number(e.target.value))} value={stepValue}></input>}</p>
            <p>{changeMessage !== '' ? changeMessage : 'Start counting'}</p>
        </section>
    )
}   