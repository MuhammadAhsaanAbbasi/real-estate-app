import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "Abbasi Groups",
    description: "Real Estate App by Abbasi Groups",
    icons: {
        icon: "https://myapplication-logos.s3.ap-south-1.amazonaws.com/abbasi-groups.png",
    },
};


const UserProfileLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default UserProfileLayout