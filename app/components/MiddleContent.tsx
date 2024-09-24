'use client'

import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Footer from './Footer';

interface MiddleContentProps {
    children: ReactNode,
    isMenuBarOpen?: boolean,
}

const MiddleContent = ({ children, isMenuBarOpen }: MiddleContentProps) => {
    const childrenDivRef = useRef<HTMLDivElement>(null);
    const isTransforming = useRef(false);
    const animationFrameId = useRef<number | null>(null);
    const [fixedElementStyle, setFixedElementStyle] = useState<React.CSSProperties>({});


    const updateFixedElementStyle = useCallback(() => {
        if (childrenDivRef.current) {
            const { width, top, left } = childrenDivRef.current.getBoundingClientRect();
            setFixedElementStyle({
                width,
                left,
                position: 'fixed',
            });
        }
    }, []);

    const updateWhileTransforming = useCallback(() => {
        updateFixedElementStyle();
        animationFrameId.current = requestAnimationFrame(updateWhileTransforming);
    }, [updateFixedElementStyle]);

    useEffect(() => {
        updateFixedElementStyle();

        const resizeObserver = new ResizeObserver(updateFixedElementStyle);

        const element = childrenDivRef.current;
        if (element) {
            resizeObserver.observe(element);
        }

        const mutationObserver = new MutationObserver(() => {
            updateFixedElementStyle();
        });

        if (element) {
            mutationObserver.observe(element, {
                attributes: true,
                attributeFilter: ['style', 'class'],
                subtree: true
            });
        }

        return () => {
            if (element) {
                resizeObserver.unobserve(element);
                mutationObserver.disconnect();
            }
        };
    }, [updateFixedElementStyle, isMenuBarOpen]);

    useEffect(() => {
        const element = childrenDivRef.current;

        if (element) {
            const handleTransitionStart = () => {
                isTransforming.current = true;
                updateWhileTransforming();
            };

            const handleTransitionEnd = () => {
                isTransforming.current = false;
                if (animationFrameId.current !== null) {
                    cancelAnimationFrame(animationFrameId.current);
                    animationFrameId.current = null;
                }
                updateFixedElementStyle();
            };

            element.addEventListener('transitionstart', handleTransitionStart);
            element.addEventListener('transitionend', handleTransitionEnd);

            updateFixedElementStyle();

            return () => {
                element.removeEventListener('transitionstart', handleTransitionStart);
                element.removeEventListener('transitionend', handleTransitionEnd);
                if (animationFrameId.current !== null) {
                    cancelAnimationFrame(animationFrameId.current);
                }
            };
        }
    }, [updateFixedElementStyle, updateWhileTransforming, isMenuBarOpen]);


    return (
        <>
            {/* <div style={{ ...fixedElementStyle }} className='fixed rounded-xl h-full bg-gradient-to-b from-[#11062E] to-[#070123]' /> */}
            <div ref={childrenDivRef} className={`max-w-[1200px] w-full transition-width duration-300 flex flex-col items-center z-10`}>
                <div className='w-full px-[2.08vw] pt-[2.08vw] pb-[4.86vw]'>
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MiddleContent