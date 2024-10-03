"use client"
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavItem {
    label: string;
    href: string;
}

const NavMenu: NavItem[] = [
    {
        label: "About Us",
        href: "/about-us"
    },
    {
        label: "BLog",
        href: "/blog"
    },
    {
        label: "Career",
        href: "/career"
    },
]

const Header = () => {
    const path = usePathname();
    const {isSignedIn} = useUser();
    return (
        <header className='px-6 sm:px-12 md:px-18 flex justify-between items-center gap-3 shadow-md'>
            <Link href={"/"}
                className='flex items-center my-2'
            >
                <Image
                    src={"https://myapplication-logos.s3.ap-south-1.amazonaws.com/abbasi-groups.png"}
                    alt='Abbasi Groups'
                    width={80}
                    height={60}
                    className='w-20 h-auto md:w-auto' // Resize logo for smaller screens
                    priority
                />
                <span className='text-2xl font-bold text-primary'>ʌɓɓʌşï Grʊp</span>
            </Link>
            <ul className='hidden md:flex items-center gap-6 text-xl'>
                {NavMenu.map((item) => (
                    <li key={item.label}>
                        <Link href={item.href} 
                        className={`hover:text-primary hover:font-bold transition-all duration-300 cursor-pointer")
                            ${path === item.href && "text-primary font-bold"}
                        `}
                        >
                            {item.label.toLocaleUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>

            {
            isSignedIn ? 
            <UserButton /> 
            : 
            <SignInButton>
                <Button>
                    SignIn
                </Button>
            </SignInButton>
        }

        </header>
    )
}

export default Header