import { useEffect, useState } from "react";

export interface ClockOptions {
    showSeconds?: boolean;
    format12h?: boolean;
    asNumber?: boolean;
}

export function useClock({
    showSeconds = false,
    format12h = true,
    asNumber = false,
}: ClockOptions = {}) {
    const getTime = () => {
        const now = new Date();

        let hours = now.getHours();
        if (format12h) {
            hours = hours % 12 || 12;
        }

        return {
            hours: asNumber ? hours : String(hours).padStart(2, "0"),
            minutes: asNumber ? now.getMinutes() : String(now.getMinutes()).padStart(2, "0"),
            seconds: asNumber ? now.getSeconds() : String(now.getSeconds()).padStart(2, "0"),
        };
    };

    const [time, setTime] = useState(getTime);

    useEffect(() => {
        const delay = 1000 - (Date.now() % 1000);

        const timeout = setTimeout(() => {
            setTime(getTime());

            const interval = setInterval(() => {
                setTime(getTime());
            }, 1000);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [showSeconds, format12h]);

    return time;
}
