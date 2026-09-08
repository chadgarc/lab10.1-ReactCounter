

export const History = (
    {countHistory}: 
    {countHistory: number[]}) => {
    
    return (
        <div className="flex flex-col flex-1 min-h-0">
            <h2 className="text-left">Count History:</h2>
            <div className="border-black border-t"></div>
            <section className="flex-1 min-h-0 overflow-y-auto pr-2">
                {countHistory.map((count, index) => (
                    <div key={index}>
                        <p className="text-right w-10 h-7 mt-2">{count}</p>
                        <div className="flex-1 border-black border-t-2 border-dotted"></div>
                    </div>
                ))}
            </section>
        </div>
    )
}