"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, Play } from "lucide-react"
// import { Image2 } from "../assets/hero-img.jpeg"

export function HeroSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-100 via-emerald-50 to-green-100">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 hover:bg-green-200">
                                🐱 Premium Cat Care
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-900">
                                Your Cat's Home Away From Home
                            </h1>
                            <p className="max-w-[600px] text-green-700 md:text-xl">
                                Professional cat boarding services with love, care, and attention your feline friend deserves. Safe,
                                comfortable, and fun environment for your precious cats.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 py-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-900">500+</div>
                                <div className="text-sm text-green-700">Happy Cats</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-900">50+</div>
                                <div className="text-sm text-green-700">Trusted Providers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-900">24/7</div>
                                <div className="text-sm text-green-700">Care Available</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 h-11 px-8 transition-colors">
                                <Heart className="w-4 h-4 mr-2" />
                                Book Cat Stay
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-green-600 text-green-600 hover:bg-green-50 bg-transparent h-11 px-8 transition-colors">
                                <Play className="w-4 h-4 mr-2" />
                                Watch Video
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <Image
                                src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?_gl=1*18by2ji*_ga*ODE4NzY4NDk0LjE3NTMwMzE1NDk.*_ga_8JE65Q40S6*czE3NTMwMzQxODkkbzIkZzEkdDE3NTMwMzQ2MjMkajQ3JGwwJGgw"
                                alt="Adorable cat lying on a cozy blanket"
                                width={600}
                                height={600}
                                priority
                                className="mx-auto aspect-square overflow-hidden rounded-3xl object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-1">
                                        {[1, 2, 3, 4].map((i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-green-800">5.0 Rating</span>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -left-4 bg-green-600 text-white rounded-full p-3 shadow-lg">
                                <Heart className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
