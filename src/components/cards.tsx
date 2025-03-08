"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

import { useRouter } from "next/navigation"

export default function TravelDestinations() {
  const destinations = [
    {
      id: 1,
      name: "MANALI",
      description:
        "Experience the breathtaking white-washed buildings and stunning blue domes overlooking the Aegean Sea.",
      image: "/manali.jpg",
      borderColor: "border-blue-400",
    },
    {
      id: 2,
      name: "TAJ MAHAL",
      description:
        "The Taj Mahal, located in Agra, India, is one of the most famous monuments in the world. Built by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it is a symbol of love and an architectural masterpiece. Made of white marble, the mausoleum is adorned with intricate carvings and inlaid gemstones. It is a UNESCO World Heritage Site and attracts millions of visitors every year.",
      image: "/tajmahal.jpg",
      borderColor: "border-pink-400",
    },
    {
      id: 3,
      name: "Great Wall of China",
      description:
        "The Great Wall of China is one of the greatest architectural feats in history. Stretching over 21,000 kilometers, it was built by various Chinese dynasties to protect against invasions. The most well-preserved sections were constructed during the Ming Dynasty (1368–1644). Today, the Great Wall is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
      image: "/great.jpg",
      borderColor: "border-green-400",
    },
    {
      id: 4,
      name: "HOWRAH BRIDGE",
      description:
        "Built in 1799 by Maharaja Sawai Pratap Singh, it features 953 small windows (jharokhas) designed to allow the breeze to pass through, keeping the palace cool. The honeycomb-like facade is made of pink sandstone, making it one of Jaipur's most iconic landmarks.",
      image: "/howrah.jpg",
      borderColor: "border-purple-400",
    },
    {
      id: 5,
      name: "INDIA GATE",
      description:
        "India Gate is a war memorial in New Delhi, built in honor of Indian soldiers who died in World War I and the Third Anglo-Afghan War. Designed by Sir Edwin Lutyens, it stands 42 meters high and resembles the Arc de Triomphe in Paris. The monument is surrounded by beautiful lawns and an eternal flame, Amar Jawan Jyoti, which pays tribute to the fallen soldiers.",
      image: "/inida.jpg",
      borderColor: "border-teal-400",
    },
    {
      id: 6,
      name: "Serengeti National Park, Tanzania",
      description:
        "Witness the incredible wildlife and the Great Migration across the vast plains of this iconic African safari destination.",
      image: "/PARK.jpg",
      borderColor: "border-amber-400",
    },
  ]
const router = useRouter()
const handleClick = (destination: string) => {
    router.push("/destination/" + destination)
}
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Discover Amazing Destinations</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {destinations.map((destination) => (
          <motion.div key={destination.id} variants={item}>
            <Card
              className={`overflow-hidden h-full transition-all duration-300 hover:shadow-xl group border-2 ${destination.borderColor} bg-slate-50`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 bg-slate-50">
                <motion.h3 className="text-xl font-semibold mb-2" whileHover={{ scale: 1.02 }}>
                  {destination.name}
                </motion.h3>
                <p className="text-muted-foreground">{destination.description}</p>
                <motion.button
                onClick={()=>handleClick(destination.name)}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

