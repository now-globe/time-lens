import NormalClock from "@/components/common/clocks/normal";

export default function Home() {
    return (
        <div className="flex h-svh items-center justify-center">
            <NormalClock showSeconds format12h={false} className="text-5xl lg:text-8xl font-semibold tracking-widest transition-all duration-100 ease-in-out" />
        </div>
    );
}
