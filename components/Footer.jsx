import Link from "next/link"
import { Cat, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-green-900 text-white">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                                <Cat className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">MeowMate</span>
                        </div>
                        <p className="text-green-100 text-sm">
                            Professional cat boarding services with love, care, and attention your feline friend deserves.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-green-100 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-green-100 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-green-100 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-green-100 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/providers" className="text-green-100 hover:text-white transition-colors text-sm">
                                    Become a Provider
                                </Link>
                            </li>
                            <li>
                                <Link href="/interested" className="text-green-100 hover:text-white transition-colors text-sm">
                                    Book Cat Stay
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-green-100 hover:text-white transition-colors text-sm">
                                    Products & Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-green-100 text-sm">Cat Boarding</li>
                            <li className="text-green-100 text-sm">Day Care</li>
                            <li className="text-green-100 text-sm">Grooming</li>
                            <li className="text-green-100 text-sm">Pet Supplies</li>
                            <li className="text-green-100 text-sm">Emergency Care</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-green-400" />
                                <span className="text-green-100 text-sm">+1 (555) 123-CATS</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-green-400" />
                                <span className="text-green-100 text-sm">hello@purrfectstay.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-green-400" />
                                <span className="text-green-100 text-sm">123 Cat Street, Feline City, FC 12345</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-green-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs text-green-100">
                        © {new Date().getFullYear()} MeowMate Cat Hostel. All rights reserved.
                    </p>
                    <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <Link href="#" className="text-xs hover:underline underline-offset-4 text-green-100 hover:text-white">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-xs hover:underline underline-offset-4 text-green-100 hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-xs hover:underline underline-offset-4 text-green-100 hover:text-white">
                            Cat Care Guidelines
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
