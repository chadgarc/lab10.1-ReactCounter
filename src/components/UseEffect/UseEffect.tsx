import { useEffect } from 'react'
import type { UseEffectProps } from '../../types/types'

/**
 * Component that handles side effects for the counter:
 * - Persists the current count and history to localStorage with a status update.
 * - Listens for ArrowUp and ArrowDown keyboard shortcuts to increment and decrement.
 *
 * @param {UseEffectProps} props - Props for the UseEffect component.
 * @param {number} props.currentCount - The current count value to persist.
 * @param {number[]} props.countHistory - Array of historical count values to persist.
 * @param {(message: string) => void} props.handleStatus - Function to update the save status message.
 * @param {() => void} props.onIncrement - Callback invoked on ArrowUp key press.
 * @param {() => void} props.onDecrement - Callback invoked on ArrowDown key press.
 * @returns {JSX.Element} Empty fragment as this component only manages side effects.
 */
export const UseEffect = ({
    currentCount,
    countHistory,
    handleStatus,
    onIncrement,
    onDecrement,
}: UseEffectProps) => {
    
    useEffect(() => {
        
        handleStatus('Saving to localStorage...')
        
        const timer = setTimeout(() => {
            localStorage.setItem("currentCount", JSON.stringify(currentCount))
            localStorage.setItem("countHistory", JSON.stringify(countHistory))
            handleStatus('Saved.')
        }, 1500);
        
        
        return () => {
            clearTimeout(timer);
        }

    }, [currentCount, countHistory])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                onIncrement();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                onDecrement();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onIncrement, onDecrement])

    return (
        <></>
    )
}