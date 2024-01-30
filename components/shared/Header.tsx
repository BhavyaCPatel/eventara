import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className='wrapper flex items-center justify-between'>
                <Link href={"/"} className='w-36'>
                    <Image src="/assets/images/logo.png" width={140} height={40} alt='Eventara Logo'/>
                </Link>
                <SignedIn>
                    <nav className='md:flex-between hidden w-full max-w-xs'>
                        <NavItems/>
                    </nav>
                </SignedIn>
                <div className='flex w-32 justify-end gap-3 mr-2'>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                        <MobileNav/>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className='px-4 py-2' size={'btn'}>
                            <Link href={"/sign-in"}>Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header >
    )
}

export default Header