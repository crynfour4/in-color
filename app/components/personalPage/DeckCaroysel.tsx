"use client";

import {
    Fragment,
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type PointerEvent,
} from "react";

const CSS = `
@keyframes dc-blur-in {
    from { opacity: 0; filter: blur(8px); transform: translateY(10px); }
    to     { opacity: 1; filter: blur(0);     transform: translateY(0);        }
}
.dc-word {
    display: inline-block;
    animation: dc-blur-in 0.35s cubic-bezier(0.22, 0.61, 0.36, 1) both;
    animation-play-state: paused;
    will-change: filter, transform, opacity;
}
.dc-deck.is-revealed .dc-word {
    animation-play-state: running;
}
`;

export type DeckItem = { title: string; text: string };

export interface DeckCarouselProps {
    items: DeckItem[];
}

const DECK_EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const SETTLE = `transform 0.7s ${DECK_EASE}, opacity 0.7s ${DECK_EASE}`;
const FALL = "transform 0.4s cubic-bezier(0.4, 0, 0.7, 1), opacity 0.34s ease-out";
const FALL_MS = 340;

function BlurText({
    text,
    base,
    step,
}: {
    text: string;
    base: number;
    step: number;
}) {
    const words = text.split(" ");
    return (
        <>
            {words.map((w, i) => (
                <Fragment key={`${w}-${i}`}>
                    <span
                        className="dc-word"
                        style={{ animationDelay: `${base + i * step}ms` }}
                    >
                        {w}
                    </span>
                    {i < words.length - 1 ? " " : ""}
                </Fragment>
            ))}
        </>
    );
}

export function DeckCarousel({ items }: DeckCarouselProps) {
    const n = items.length;
    const [active, setActive] = useState(0);
    const [leaving, setLeaving] = useState<number | null>(null);
    const [revealed, setRevealed] = useState(false);
    const deckRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!document.getElementById("dc-styles")) {
            const el = document.createElement("style");
            el.id = "dc-styles";
            el.textContent = CSS;
            document.head.appendChild(el);
        }
    }, []);

    useEffect(() => {
        const el = deckRef.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setRevealed(true);
            return;
        }
        const obs = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setRevealed(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const next = () => {
        if (leaving !== null) return;
        setLeaving(active);
        window.setTimeout(() => {
            setActive((a) => (a + 1) % n);
            setLeaving(null);
        }, FALL_MS);
    };

    const prev = () => {
        if (leaving !== null) return;
        setActive((a) => (a - 1 + n) % n);
    };

    const downX = useRef<number | null>(null);
    const onPointerDown = (e: PointerEvent) => {
        downX.current = e.clientX;
    };
    const onPointerUp = (e: PointerEvent) => {
        if (downX.current === null) return;
        const dx = e.clientX - downX.current;
        downX.current = null;
        if (dx < -50) next();
        else if (dx > 50) prev();
    };

    const cardStyle = (i: number): CSSProperties => {
        if (i === leaving) {
            return {
                transform: "translateY(120%) rotate(6deg) scale(0.96)",
                opacity: 0,
                zIndex: n + 1,
                pointerEvents: "none",
                transformOrigin: "top center",
                transition: FALL,
                cursor: "default",
            };
        }
        const offset = (i - active + n) % n;
        const visible = offset < 3;
        const isFront = offset === 0 && leaving === null;
        return {
            transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.05})`,
            opacity: visible ? (offset === 0 ? 1 : 0.5) : 0,
            zIndex: n - offset,
            pointerEvents: isFront ? "auto" : "none",
            transformOrigin: "top center",
            transition: SETTLE,
            cursor: isFront ? "grab" : "default",
        };
    };

    return (
        <div className="relative w-full min-w-sm lg:min-w-xl m-auto">
            <div
                ref={deckRef}
                className={`dc-deck${revealed ? " is-revealed" : ""}`}
                style={{
                    position: "relative",
                    minHeight: "240px",
                    width: "100%",
                    userSelect: "none",
                    perspective: "1200px",
                    touchAction: "pan-y",
                }}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
            >
                {items.map((item, i) => {
                    const showText = i === active;
                    return (
                        <article
                            key={item.title}
                            aria-hidden={!showText}
                            style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                overflow: "hidden",
                                borderRadius: "0.75rem",
                                border: "1px solid #e2e8f0",
                                background: "#171717",
                                padding: "1.75rem",
                                boxShadow: "0 18px 40px -20px rgba(0,0,0,0.18)",
                                ...cardStyle(i),
                            }}
                        >
                            <div
                                key={`c-${active}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    opacity: showText ? 1 : 0,
                                    transition: "opacity 0.3s ease",
                                }}
                            >
                                {item.title && item.title.trim() !== "" && (
                                    <h3
                                        style={{
                                        margin: "0",
                                        fontSize: "1.125rem",
                                        fontWeight: 700,
                                        lineHeight: 1.3,
                                        color: "#ffffff",
                                        }}
                                    >
                                        <BlurText text={item.title} base={100} step={30} />
                                    </h3>
                                )}
                                <p
                                    style={{
                                        lineHeight: 1.6,
                                        color: "#F3F4F6",
                                        fontSize: "0.9375rem",
                                    }}
                                >
                                    <BlurText text={item.text} base={230} step={18} />
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>

            <button
                type="button"
                aria-label="Previous card"
                onClick={prev}
                className="absolute -left-5 lg:-left-20 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-30 flex items-center justify-center border border-gray-300 bg-white/70 backdrop-blur-sm hover:bg-white text-gray-800 shadow-lg transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            <button
                type="button"
                aria-label="Next card"
                onClick={next}
                className="absolute -right-5 lg:-right-20 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-30 flex items-center justify-center border border-gray-300 bg-white/70 backdrop-blur-sm hover:bg-white text-gray-800 shadow-lg transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </div>
    );
}