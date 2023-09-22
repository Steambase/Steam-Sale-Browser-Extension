import React, { useState, useEffect } from "react"
import PageLayout from "@layouts/page-layout"
import SaleSubHeader from "@components/sale-sub-header"

import { Snowflake, Flower, Sun, Leaf } from "lucide-react"

import { fetchCurrentSteamSale } from "@lib/queries/fetchCurrentSteamSale"
import { fetchNextSteamSale } from "~lib/queries/fetchNextSteamSale"

import logo from "data-base64:~assets/logo.svg"

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
                <article className="py-4 md:py-32">
                    <section className="flex flex-col items-center space-y-8">
                        <h1 className="font-semibold text-center text-3xl md:text-4xl xl:text-5xl text-white">When is the next Steam sale?</h1>
                        <SaleSubHeader
                            now={now}
                            current={currentSale}
                            next={nextSale}
                        />
                        <ul
                            className="list-none flex flex-row flex-wrap gap-4 justify-center items-center text-slate-500"
                        >
                            <li>
                                <a
                                    href={`${process.env.PLASMO_PUBLIC_SITE_URL}/sales/${now.getFullYear()}/steam-spring-sale?utm_source=steambase&utm_medium=browser_extension&utm_campaign=steam_sale_extension`}
                                    rel="prefetch-intent"
                                    className="min-w-50 max-w-50 p-4 flex flex-row items-center border-2 rounded-lg text-base font-normal text-slate-200 hover:text-slate-200 hover:no-underline border-slate-800 bg-slate-800 hover:border-blue-400"
                                >
                                    Spring Sale
                                    <Flower className="ml-2 w-5 h-5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`${process.env.PLASMO_PUBLIC_SITE_URL}/sales/${now.getFullYear()}/steam-summer-sale?utm_source=steambase&utm_medium=browser_extension&utm_campaign=steam_sale_extension`}
                                    className="min-w-50 max-w-50 p-4 flex flex-row items-center border-2 rounded-lg text-base font-normal text-slate-200 hover:text-slate-200 hover:no-underline border-slate-800 bg-slate-800 hover:border-blue-400"
                                >
                                    Summer Sale
                                    <Sun className="ml-2 w-5 h-5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`${process.env.PLASMO_PUBLIC_SITE_URL}/sales/${now.getFullYear()}/steam-autumn-sale?utm_source=steambase&utm_medium=browser_extension&utm_campaign=steam_sale_extension`}
                                    className="min-w-50 max-w-50 p-4 flex flex-row items-center border-2 rounded-lg text-base font-normal text-slate-200 hover:text-slate-200 hover:no-underline border-slate-800 bg-slate-800 hover:border-blue-400"
                                >
                                    Autumn Sale
                                    <Leaf className="ml-2 w-5 h-5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`${process.env.PLASMO_PUBLIC_SITE_URL}/sales/${now.getFullYear()}/steam-winter-sale?utm_source=steambase&utm_medium=browser_extension&utm_campaign=steam_sale_extension`}
                                    rel="prefetch-intent"
                                    className="min-w-50 max-w-50 p-4 flex flex-row items-center border-2 rounded-lg text-base font-normal text-slate-200 hover:text-slate-200 hover:no-underline border-slate-800 bg-slate-800 hover:border-blue-400"
                                >
                                    Winter Sale
                                    <Snowflake className="ml-2 w-5 h-5" />
                                </a>
                            </li>
                        </ul>
                        <div className="px-2.5 py-2 border-2 rounded-lg border-transparent hover:border-blue-400 transition-colors duration-300">
                            <a href={`${process.env.PLASMO_PUBLIC_SITE_URL}?utm_source=steambase&utm_medium=browser_extension&utm_campaign=steam_sale_extension`}>
                                <img src={logo} alt="Steambase Logo" width="150" className="object-cover" />
                            </a>
                        </div>
                    </section>
                </article>
            </PageLayout>
        </>
    )
}

export default SaleTrackerPage
