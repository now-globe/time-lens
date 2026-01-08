"use client";

import { useClock } from "@/hooks/use-timer";

interface NormalClockProps {
    showSeconds?: boolean;
    format12h?: boolean;
    separator?: string;
    className?: string;
}

export default function NormalClock({
    showSeconds = false,
    format12h = true,
    separator = ":",
    className = "text-5xl tracking-widest",
}: NormalClockProps) {
    const { hours, minutes, seconds } = useClock({
        showSeconds,
        format12h,
    });

    return (
        <h1 className={className}>
            {hours}
            {separator}
            {minutes}
            {showSeconds && (
                <>
                    {separator}
                    {seconds}
                </>
            )}
        </h1>
    );
}
