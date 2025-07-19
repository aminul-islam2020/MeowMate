import { Heart, Shield, Clock, Award, Users, Zap } from "lucide-react"

export function FeaturesSection() {
    const features = [
        {
            icon: Shield,
            title: "Safe & Secure",
            description:
                "24/7 monitoring, secure facilities, and trained staff ensure your cat's safety and well-being at all times.",
        },
        {
            icon: Heart,
            title: "Loving Care",
            description:
                "Individual attention, playtime, and cuddles from our cat-loving staff who treat your pet like family.",
        },
        {
            icon: Clock,
            title: "Flexible Stays",
            description: "Short-term or long-term boarding options with flexible scheduling to meet your travel needs.",
        },
        {
            icon: Award,
            title: "Certified Staff",
            description: "All our caregivers are professionally trained and certified in pet care and first aid.",
        },
        {
            icon: Users,
            title: "Small Groups",
            description: "We maintain small group sizes to ensure each cat gets personalized attention and care.",
        },
        {
            icon: Zap,
            title: "Quick Booking",
            description: "Easy online booking system with instant confirmation and real-time availability updates.",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-900">
                            Premium Cat Care Services
                        </h2>
                        <p className="max-w-[900px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We provide exceptional care for your feline friends with professional staff, modern facilities, and
                            personalized attention.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div
                                key={index}
                                className="rounded-lg border bg-white text-card-foreground shadow-sm border-green-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col space-y-1.5 p-6 text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                        <IconComponent className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-green-900">{feature.title}</h3>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-sm text-muted-foreground text-center text-green-700">{feature.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
