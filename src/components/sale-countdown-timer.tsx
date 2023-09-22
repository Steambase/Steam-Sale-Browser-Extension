import { useCountdown } from "@hooks/useCountdown"

type Props = {
    date: Date;
    completedText: string;
    type: "start" | "end";
}

function getColorClasses(color: "start" | "end") {
    return color === "start" ? "text-green-400 border-green-400" : "text-amber-300 border-amber-300";
}

export function SaleCountdownTimer(props: Props) {
    const [days, hours, minutes, seconds] = useCountdown(props.date);

    if (days + hours + minutes + seconds <= 0) {
        <div className={`grid gap-4 place-items-center px-6 py-4 border-2 rounded-lg text-5xl md:text-7xl text-center font-medium ${getColorClasses(props.type)}`} suppressHydrationWarning={true}>
            {props.completedText}
        </div>
    }

    return (
        <div className={`grid grid-cols-5 md:grid-cols-7 place-items-center px-6 py-4 border-2 md:border-4 rounded-3xl text-5xl md:text-7xl text-center font-medium ${getColorClasses(props.type)}`}>
            <div className="w-[100px] flex flex-col space-y-1">
                <span className="text-center" suppressHydrationWarning={true}>{days.toString().padStart(2, '0')}</span>
                <span className="text-center text-xs font-light text-slate-300" suppressHydrationWarning={true}>({days === 1 ? "day" : "days"})</span>
            </div>
            <span className="text-center self-start -mt-1 md:-mt-2">:</span>
            <div className="w-[100px] flex flex-col space-y-1">
                <span className="text-center" suppressHydrationWarning={true}>{hours.toString().padStart(2, '0')}</span>
                <span className="text-center text-xs font-light text-slate-300" suppressHydrationWarning={true}>({hours === 1 ? "hour" : "hours"})</span>
            </div>
            <span className="text-center self-start -mt-1 md:-mt-2">:</span>
            <div className="w-[100px] flex flex-col space-y-1">
                <span className="text-center" suppressHydrationWarning={true}>{minutes.toString().padStart(2, '0')}</span>
                <span className="text-center text-xs font-light text-slate-300" suppressHydrationWarning={true}>({minutes === 1 ? "minute" : "minutes"})</span>
            </div>
            <span className="hidden md:flex text-center self-start -mt-1 md:-mt-2">:</span>
            <div className="hidden md:flex w-[100px] flex-col space-y-1">
                <span className="text-center" suppressHydrationWarning={true}>{seconds.toString().padStart(2, '0')}</span>
                <span className="text-center text-xs font-light text-slate-300" suppressHydrationWarning={true}>({seconds === 1 ? "second" : "seconds"})</span>
            </div>
        </div>
    );
}
