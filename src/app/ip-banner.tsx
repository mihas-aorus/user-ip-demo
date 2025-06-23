import { headers } from "next/headers";
import { getIpInfo } from "@/lib/get-ip-location";

function getCleanIp(ip: string | null): string {
    if (!ip) return "IP not found";
    return ip.startsWith("::ffff:") ? ip.replace("::ffff:", "") : ip;
}

export default async function IPBanner() {
    const headersList = await headers();
    const rawIp =
        headersList.get("x-forwarded-for")?.split(",")[0] ||
        headersList.get("x-real-ip") ||
        "IP not found";

    const ip = getCleanIp(rawIp);

    const ipInfo = await getIpInfo();

    return (
        <div style={{ background: "#eee", padding: "10px", textAlign: "center" }}>
            <div>Your IP Address: <strong>{ip}</strong></div>
            {ipInfo ? (
                <>
                    Your IP: <strong>{ipInfo.ip}</strong> ({ipInfo.city}, {ipInfo.country})
                </>
            ) : (
                "Unable to detect your IP or location."
            )}
        </div>
    );
}
