import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"

export function ProvidersSection() {
  return (

    <>

      <Navbar></Navbar>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-600 text-white">
              For Providers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-900">
              Join Our Network of Cat Hostel Providers
            </h2>
            <p className="max-w-[900px] text-green-700 md:text-xl/relaxed">
              Are you passionate about cats? Join our network of trusted cat hostel providers and start your own cat
              boarding business.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                    <span className="text-sm font-bold text-white">1</span>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-green-900">Apply & Get Certified</h3>
                    <p className="text-green-700">Complete our certification process and meet our quality standards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-green-900">Set Your Schedule</h3>
                    <p className="text-green-700">Choose your availability and pricing for cat boarding services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                    <span className="text-sm font-bold text-white">3</span>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-green-900">Start Earning</h3>
                    <p className="text-green-700">Welcome cats into your home and earn money doing what you love.</p>
                  </div>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white w-fit px-6 py-2 rounded-md font-medium transition-colors">
                Become a Provider
              </button>
            </div>
            <Image
              src="https://images.pexels.com/photos/9783913/pexels-photo-9783913.jpeg?_gl=1*1awwpku*_ga*ODE4NzY4NDk0LjE3NTMwMzE1NDk.*_ga_8JE65Q40S6*czE3NTMwMzQxODkkbzIkZzEkdDE3NTMwMzQ2OTgkajQ0JGwwJGgw"
              width={500}
              height={400}
              alt="Smiling woman caregiver sitting on floor surrounded by 4 different cats in a bright, clean hostel room"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default ProvidersSection
