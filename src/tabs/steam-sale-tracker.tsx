import React, { useState, useEffect } from "react"
import PageLayout from "@layouts/page-layout"

import { fetchCurrentSteamSale } from "@lib/queries/fetchCurrentSteamSale"
import { fetchNextSteamSale } from "~lib/queries/fetchNextSteamSale"

import type { SteamSale } from "@lib/types/steam-sale"

function SaleTrackerPage() {
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

        fetchSalesData()
    }, [])

    return (
        <>
            <PageLayout>
                <article className="flex flex-col">
                    <h1>When is the next Steam sale?</h1>
                    <p className="text-white">{nextSale?.name ?? "unknown"}</p>
                </article>
            </PageLayout>
        </>
    )
}

export default SaleTrackerPage
