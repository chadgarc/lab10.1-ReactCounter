export interface CounterProps {
    stepValue?: number;
    currentCount: number;
    changeMessage: string;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
    onStepValueChange: (value: number) => void;
}

export interface HistoryProps {
    countHistory: number[];
}

export interface UseEffectProps {
    currentCount: number;
    countHistory: number[];
    handleStatus: (message: string) => void;
    onIncrement: () => void;
    onDecrement: () => void;
}
