import type { SteamSale } from "../types/steam-sale";

export async function fetchSteamSale(year: number, slug: string): Promise<SteamSale | undefined> {
    if (!slug) {
        return undefined;
    }

    const getSaleUrl = new URL(`${process.env.PUBLIC_API_URL}/steam/sales/${year}/${slug}`);
    const getSaleResponse = await fetch(getSaleUrl);
    const saleData = await getSaleResponse.json() as SteamSale | undefined;

    return saleData;
}
