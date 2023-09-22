export type SteamSale = {
    name: string;
    slug: string;
    type: number;
    year: number;
    is_confirmed: boolean;
    start_at: string;
    end_at: string;
    banner_image_url?: string;
    steam_announcement_url?: string;
}
