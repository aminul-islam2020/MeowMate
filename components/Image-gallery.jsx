"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const galleryImages = [
        {
            src: "/placeholder.svg?height=300&width=250&text=Cozy+Cat+Suites",
            alt: "Luxurious cat suite with comfortable bedding, climbing trees, and a black cat relaxing by the window",
            title: "Cozy Cat Suites",
        },
        {
            src: "/placeholder.svg?height=200&width=250&text=Cats+Napping+Together",
            alt: "Three cats of different colors peacefully napping together on soft blankets in a sunny room",
            title: "Peaceful Nap Time",
        },
        {
            src: "/placeholder.svg?height=200&width=250&text=Play+Time+Fun",
            alt: "Energetic kittens playing with colorful toys in a bright, spacious play area with climbing structures",
            title: "Fun Play Time",
        },
        {
            src: "/placeholder.svg?height=300&width=250&text=Meal+Time+Together",
            alt: "Multiple cats eating from individual bowls in a clean, organized feeding area with natural lighting",
            title: "Meal Time Together",
        },
        {
            src: "/placeholder.svg?height=300&width=250&text=Outdoor+Cat+Garden",
            alt: "Secure outdoor garden area with cats exploring cat-safe plants, climbing posts, and sunny spots",
            title: "Outdoor Cat Garden",
        },
        {
            src: "/placeholder.svg?height=200&width=250&text=Cuddle+Time",
            alt: "Staff member gently cuddling with a content orange tabby cat in a comfortable reading nook",
            title: "Cuddle Time",
        },
        {
            src: "/placeholder.svg?height=200&width=250&text=Cat+Spa+Treatment",
            alt: "Relaxed long-haired cat receiving gentle spa treatment in a calm, soothing environment",
            title: "Spa Treatment",
        },
        {
            src: "/placeholder.svg?height=300&width=250&text=Night+Time+Comfort",
            alt: "Peaceful nighttime scene with cats sleeping comfortably in individual cozy beds with soft lighting",
            title: "Night Time Comfort",
        },
    ]

    const openModal = (image, index) => {
        setSelectedImage(image)
        setCurrentIndex(index)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length
        setSelectedImage(galleryImages[nextIndex])
        setCurrentIndex(nextIndex)
    }

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
        setSelectedImage(galleryImages[prevIndex])
        setCurrentIndex(prevIndex)
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-emerald-100">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-600 text-white">
                        Our Facilities
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-900">
                        See Our Happy Guests in Action
                    </h2>
                    <p className="max-w-[900px] text-green-700 md:text-xl/relaxed">
                        Take a peek at our cozy rooms, play areas, and the adorable cats who call our hostel their temporary home.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl gap-4 py-12 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative group cursor-pointer" onClick={() => openModal(image, index)}>
                            <Image
                                src={image.src || "/placeholder.svg"}
                                width={250}
                                height={index % 2 === 0 ? 300 : 200}
                                alt={image.alt}
                                className={`w-full ${index % 2 === 0 ? "h-72" : "h-48"} object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <h3 className="font-semibold text-lg">{image.title}</h3>
                                    <p className="text-sm">Click to view</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative max-w-4xl max-h-full">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <Image
                            src={selectedImage.src || "/placeholder.svg"}
                            width={800}
                            height={600}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />

                        <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                            <h3 className="font-semibold text-xl">{selectedImage.title}</h3>
                            <p className="text-sm opacity-75">
                                {currentIndex + 1} of {galleryImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ImageGallery
