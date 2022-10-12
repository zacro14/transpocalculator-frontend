import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const link = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Calculator',
            url: '/calculator',
        },
        {
            name: 'About Us',
            url: '/about',
        },
    ]
    return (
        <nav className="h-20 bg-white mx-auto flex align-middle border-b border-slate-300">
            <div className="flex justify-center w-full px-3 items-center">
                <div className="px-28">
                    <Link passHref href={'/'}>
                        <a className="text-7xl font-bold text-indigo-800 cursor-pointer">
                            TC
                        </a>
                    </Link>
                </div>
                <ul className="flex ">
                    {link.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url} passHref>
                                {link.url === router.pathname ? (
                                    <a className="text-indigo-400 px-5 font-medium transition delay-75">
                                        {link.name}
                                    </a>
                                ) : (
                                    <a className="text-indigo-900 px-5 hover:text-indigo-400 font-medium transition delay-75">
                                        {link.name}
                                    </a>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header