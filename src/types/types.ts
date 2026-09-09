/**
 * Props for the Counter component.
 */
export interface CounterProps {
    /** The amount to add or subtract on each step. Optional (defaults to 1). */
    stepValue?: number;
    /** Current counter value. */
    currentCount: number;
    /** Status message describing the current action or state. */
    changeMessage: string;
    /** Callback to increment the counter. */
    onIncrement: () => void;
    /** Callback to decrement the counter. */
    onDecrement: () => void;
    /** Callback to reset the counter to zero. */
    onReset: () => void;
    /** Callback invoked when the step value changes. */
    onStepValueChange: (value: number) => void;
}

/**
 * Props for the History component.
 */
export interface HistoryProps {
    /** Array containing historical count values. */
    countHistory: number[];
}

/**
 * Props for the UseEffect component.
 */
export interface UseEffectProps {
    /** Current count value to persist to localStorage. */
    currentCount: number;
    /** Historical count values to persist to localStorage. */
    countHistory: number[];
    /** Callback to update the storage status message. */
    handleStatus: (message: string) => void;
    /** Callback to increment the count via keyboard shortcut. */
    onIncrement: () => void;
    /** Callback to decrement the count via keyboard shortcut. */
    onDecrement: () => void;
}
