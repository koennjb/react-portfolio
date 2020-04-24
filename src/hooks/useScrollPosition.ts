import { useLayoutEffect, MutableRefObject, DependencyList, useState } from 'react';

const isBrowser = typeof window !== `undefined`;

interface ScrollPosition {
    x: number;
    y: number;
}

interface GetScrollPositionParam {
    element?: MutableRefObject<HTMLElement>;
    useWindow?: boolean;
}

export interface EffectParams {
    prevPos: ScrollPosition;
    currPos: ScrollPosition;
}

function getScrollPosition(): ScrollPosition {
    return isBrowser ? { x: window.pageXOffset, y: window.pageYOffset } : { x: 0, y: 0 };
}

export function useScrollPosition(effect: (value: EffectParams) => void, deps: DependencyList, wait: number): void {
    const [position, setPosition] = useState<ScrollPosition>(getScrollPosition());
    // initial render

    useLayoutEffect(() => {
        let throttleTimeout: number | null = null;
        const handleScroll = (): void => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = window.requestAnimationFrame(() => {
                        const currPos = getScrollPosition();
                        effect({ prevPos: position, currPos });
                        setPosition(currPos);
                        throttleTimeout = null;
                    });
                }
            } else {
                const currPos = getScrollPosition();
                effect({ prevPos: position, currPos });
                setPosition(currPos);
                throttleTimeout = null;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return (): void => window.removeEventListener('scroll', handleScroll);
    }, [deps, effect, position, wait]);
}
