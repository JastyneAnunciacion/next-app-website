'use client'

import React from 'react';
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useState } from 'react'
import MainComponents from '../components/MainComponents'

const inter = Inter({ subsets: ['latin'] })

interface ChildProps {
    isMenuBarOpen: boolean;
}

export default function PhoenixLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMenuBarOpen, setMenuBarOpen] = useState(false);

    const toggleMenuBar = () => {
        setMenuBarOpen(prev => !prev);
    };

    return (
        <html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body className={inter.className}>
                <MainComponents isMenuBarOpen={isMenuBarOpen} toggleMenuBar={toggleMenuBar}>
                    {React.Children.map(children, child => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child as React.ReactElement<ChildProps>, {
                                isMenuBarOpen,
                            });
                        }
                        return child;
                    })}
                </MainComponents>
            </body>
        </html>
    );
}
