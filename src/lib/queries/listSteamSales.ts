import type { SteamSale } from "../types/steam-sale";

interface ListSteamSalesRequest {
    type?: "major" | "minor",
    year?: number;
    startAtFilters?: string[];
    endAtFilters?: string[];
    sortBy?: "start" | "end";
    sortDirection?: "asc" | "desc";
}

export async function listSteamSales(request :ListSteamSalesRequest | undefined = undefined) :Promise<SteamSale[]> {
    const salesUrl = new URL(`${import.meta.env.PUBLIC_API_URL}/steam/sales`);

    // Filtering
    if (request?.type) {
        const typeValue = request.type === "major" ? "1" : "2";
        salesUrl.searchParams.append('type', typeValue);
    }

    if (request?.year) {
        salesUrl.searchParams.append('year', request.year.toString());
    }

    if (request?.startAtFilters && request?.startAtFilters.length > 0) {
        request.startAtFilters.forEach((filter) => {
            salesUrl.searchParams.append('startAtFilters', filter.toString());
        });
    }

    if (request?.endAtFilters && request?.endAtFilters.length > 0) {
        request.endAtFilters.forEach((filter) => {
            salesUrl.searchParams.append('endAtFilters', filter.toString());
        });
    }

    // Sorting
    if (request?.sortBy) {
        salesUrl.searchParams.append('sortBy', request.sortBy);
    }

    if (request?.sortDirection) {
        const directionValue = request.sortDirection === "asc" ? "0" : "1";
        salesUrl.searchParams.append('sortDirection', directionValue);
    }

    const listSalesResponse = await fetch(salesUrl);
    const listSalesData = await listSalesResponse.json() as SteamSale[];

    return listSalesData;
}
