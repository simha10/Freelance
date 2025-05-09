"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { cn } from "@/utils/cn"

const Feedbacks = () => {
  return (
    <div className="relative flex min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] lg:min-h-[50rem] w-full flex-col items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center pt-3 sm:pt-5">
          <p className="text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center">
            What our clients say about us
          </p>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1 sm:mt-2">
            Explore the most popular Freelance DEVS in the market
          </p>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg text-center">
            We are glad to have you here.
          </p>
        </div>
        <div className="rounded-md flex flex-col antialiased items-center justify-center overflow-hidden mt-6">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
]

export default Feedbacks
