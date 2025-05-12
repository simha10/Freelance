"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { LampContainer } from "./ui/lamp"
import { Button } from "./ui/moving-border"
import Link from "next/link"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <LampContainer className="flex flex-col justify-center items-center max-h-screen pt-10 sm:pt-16 md:pt-32 lg:pt-96">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 sm:mt-8 md:mt-16 lg:mt-60 bg-gradient-to-br from-slate-300 to-slate-500 py-2 sm:py-4 bg-clip-text text-center text-xl sm:text-2xl md:text-4xl lg:text-7xl font-medium tracking-tight text-transparent"
      >
        Welcome to Freelancing{" "}
        <span className="inline-block">
          <ContainerTextFlip words={["better", "modern", "Skilled", "Finest"]} />
        </span>{" "}
        World
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center text-xs sm:text-sm md:text-base lg:text-xl max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto font-normal text-gray-600 px-2 sm:px-4 md:px-6 lg:px-8"
      >
        We are glad to have you here. In the internet era, the global freelance market has rapidly increased in size and
        scope. Freelancing can be rewarding and fulfilling for those who want to set their own working hours and prefer
        working with many different clients. However, getting started as a freelancer may take time to build a portfolio
        and client base. In this article, we will examine what a freelancer is, how to become one and some essential
        skills required for freelancing.
      </motion.p>
      <Link href={"/freelancing-guide"}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center mt-3 sm:mt-4 md:mt-6 lg:mt-8"
        >
          <Button
            borderRadius="1.5rem"
            className="bg-gradient-to-r from-purple-950 to-indigo-300 text-white font-bold hover:scale-105 transition-transform duration-300 ease-in-out text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3"
          >
            Get Started
          </Button>
        </motion.div>
      </Link>
    </LampContainer>
  )
}

export default HeroSection
