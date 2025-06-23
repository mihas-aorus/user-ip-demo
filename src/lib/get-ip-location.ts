export interface IPInfo {
    ip: string;
    city: string;
    region: string;
    country: string;
}

export async function getIpInfo(): Promise<IPInfo | null> {
    try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("Failed to fetch IP");
        const data = await res.json();

        return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_code,
        };
    } catch (error) {
        console.error("IP lookup error:", error);
        return null;
    }
}
