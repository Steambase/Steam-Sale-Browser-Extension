import SaleCountdownTimer from "./sale-countdown-timer"
import { getDifferenceInDays } from "~lib/helpers/dateUtils"

import type { SteamSale } from "@lib/types/steam-sale"

interface Props {
    now: Date;
    current?: SteamSale;
    next?: SteamSale;
}

function SaleSubHeader({ now, current, next }: Props) {
    // Current Sale
    const currentSaleEndAt = current ? new Date(current.end_at) : undefined
    const currentEndsAtDays = currentSaleEndAt
        ? getDifferenceInDays(now, currentSaleEndAt)
        : undefined

    // Next Sale
    const nextSaleStartAt = next ? new Date(next.start_at) : undefined
    const nextStartsAtDays = nextSaleStartAt
        ? getDifferenceInDays(nextSaleStartAt, now)
        : undefined

    /**
     * Handle Next Sale Case
     */
    if (next && nextSaleStartAt && nextStartsAtDays !== undefined) {
        return (
            <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-col space-y-1 text-center">
                    <p className="text-2xl font-normal text-slate-300">
                        <strong>
                            <a
                                href={`${process.env.PLASMO_PUBLIC_SITE_URL}/sales/${next.year}/${next.slug}?utm_source=steambase&utm_medium=browser_extension&utm_campaign=steam_sale_extension`}
                                className="text-green-400 underline"
                            >
                                {next.type === 1 ? `${next.name} Sale` : next.name}
                            </a>
                        </strong>
                        &nbsp;is the next
                        <br />
                        Steam sale, which starts on <strong>{nextSaleStartAt.toLocaleDateString()}</strong>.
                    </p>
                    <span className="text-base font-light text-slate-400">
                        <i>(10:00 AM - Pacific Time)</i>
                    </span>
                </div>
                <div>
                    <SaleCountdownTimer
                        date={nextSaleStartAt}
                        completedText={`${next.name} has started!`}
                        type="start"
                    />
                </div>
            </div>
        )
    }

    /**
     * Handle Current Sale Case
     */
    if (current && currentSaleEndAt && currentEndsAtDays !== undefined) {
        return (
            <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-col space-y-1 text-center">
                    <p className="text-2xl font-normal text-slate-300">
                        <strong>
                            <a
                                href={`${process.env.PLASMO_PUBLIC_SITE_URL}/sales/${current.year}/${current.slug}?utm_source=steambase&utm_medium=browser_extension&utm_campaign=steam_sale_extension`}
                                className="text-green-400 underline"
                            >
                                {current.type === 1
                                    ? `${current.name} Sale`
                                    : current.name}
                            </a>
                        </strong>
                        &nbsp;is now live!
                        <br />
                        It will end <strong>{currentSaleEndAt.toLocaleDateString()}</strong>
                    </p>
                    <span className="text-base font-light text-slate-400">
                        <i>(10:00 AM - Pacific Time)</i>
                    </span>
                </div>
                <div>
                    <SaleCountdownTimer
                        date={currentSaleEndAt}
                        completedText={`${current.name} has ended`}
                        type="end"
                    />
                </div>
            </div>
        )
    }

    /**
     * Fallback To Unknown Case
     */
    return (
        <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col space-y-1 text-center">
                <p className="text-2xl font-normal text-slate-300">
                    There are no offically announced Steam sales at this time.
                    We'll automatically update the countdown as soon as Valve
                    announces their next sale.
                </p>
            </div>
        </div>
    );
}

export default SaleSubHeader;
