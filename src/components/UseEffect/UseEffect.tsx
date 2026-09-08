import { useEffect } from 'react'

export const UseEffect = ({
    currentCount,
    countHistory,
    handleStatus,
    onIncrement,
    onDecrement,
}: {
    currentCount: number,
    countHistory: number[],
    handleStatus: (message: string) => void,
    onIncrement: () => void,
    onDecrement: () => void,
}) => {
    
    useEffect(() => {
        
        localStorage.setItem("currentCount", JSON.stringify(currentCount))
        localStorage.setItem("countHistory", JSON.stringify(countHistory))
        
        return () => {
            handleStatus('Saving to localStorage...')
            setTimeout(() => {
                handleStatus('Saved.')
            }, 1500);
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