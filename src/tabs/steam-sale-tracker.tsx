import React, { useState, useEffect } from "react"
import PageLayout from "@layouts/page-layout"
import SaleSubHeader from "@components/sale-sub-header"

import { fetchCurrentSteamSale } from "@lib/queries/fetchCurrentSteamSale"
import { fetchNextSteamSale } from "~lib/queries/fetchNextSteamSale"

import type { SteamSale } from "@lib/types/steam-sale"

function SaleTrackerPage() {
    const [now, setNow] = useState<Date>(new Date())
    const [currentSale, setCurrentSale] = useState<SteamSale>(null)
    const [nextSale, setNextSale] = useState<SteamSale>(null)

    // Fetch Steam Sale Data
    React.useEffect(() => {

        const fetchSalesData = async () => {
            const currentSaleTask = fetchCurrentSteamSale()
            const nextSaleTask = fetchNextSteamSale()

            const [currentSale, nextSale] = await Promise.all([currentSaleTask, nextSaleTask])

            setCurrentSale(currentSale)
            setNextSale(nextSale)
        }

        // Update State
        setNow(new Date())
        fetchSalesData()
    }, [])

    return (
        <>
            <PageLayout>
                <article className="py-32">
                    <section className="flex flex-col space-y-8">
                        <h1>When is the next Steam sale?</h1>
                        <SaleSubHeader
                            now={now}
                            current={currentSale}
                            next={nextSale}
                        />
                    </section>
                </article>
            </PageLayout>
        </>
    )
}

export default SaleTrackerPage
