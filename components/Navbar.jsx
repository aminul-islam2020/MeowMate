"use client"

import { useState } from "react"
import Link from "next/link"
import { Cat, Home, Users, Package, MessageCircle, Menu, X } from "lucide-react"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                        <Cat className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-green-800">MeowMate</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="flex items-center space-x-1 text-green-700 hover:text-green-600 transition-colors">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/Provider"
                        className="flex items-center space-x-1 text-green-700 hover:text-green-600 transition-colors"
                    >
                        <Users className="w-4 h-4" />
                        <span>Cat Hostel Providers</span>
                    </Link>
                    <Link href="/interested" className="text-green-700 hover:text-green-600 transition-colors">
                        Give Your Cat to Hostel
                    </Link>
                    <Link
                        href="/products"
                        className="flex items-center space-x-1 text-green-700 hover:text-green-600 transition-colors"
                    >
                        <Package className="w-4 h-4" />
                        <span>Products</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center space-x-1 text-green-700 hover:text-green-600 transition-colors"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span>Contact Us</span>
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Book Now
                    </button>

                    {/* Mobile menu button */}
                    <button onClick={toggleMenu} className="md:hidden p-2 text-green-700 hover:text-green-600">
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
                        <nav className="flex flex-col space-y-4 p-4">
                            <Link
                                href="/"
                                className="flex items-center space-x-2 text-green-700 hover:text-green-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </Link>
                            <Link
                                href="/providers"
                                className="flex items-center space-x-2 text-green-700 hover:text-green-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Users className="w-4 h-4" />
                                <span>Cat Hostel Providers</span>
                            </Link>
                            <Link
                                href="/interested"
                                className="text-green-700 hover:text-green-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Give Your Cat to Hostel
                            </Link>
                            <Link
                                href="/products"
                                className="flex items-center space-x-2 text-green-700 hover:text-green-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Package className="w-4 h-4" />
                                <span>Products</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center space-x-2 text-green-700 hover:text-green-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Contact Us</span>
                            </Link>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-fit">
                                Book Now
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
