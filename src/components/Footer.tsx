const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 sm:py-6 px-2 sm:px-4 md:px-8 mt-4 sm:mt-8">
      <div className="container mx-auto text-center">
        <p className="text-xs sm:text-sm md:text-base">© 2023 Your Company. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:space-x-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-white px-1 sm:px-2 py-1 text-xs sm:text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white px-1 sm:px-2 py-1 text-xs sm:text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white px-1 sm:px-2 py-1 text-xs sm:text-sm">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-2 sm:mt-4 gap-1 sm:gap-2 md:space-x-4">
        <a href="#" className="text-gray-400 hover:text-white px-1 sm:px-2 py-1 text-xs sm:text-sm">
          Facebook
        </a>
        <a href="#" className="text-gray-400 hover:text-white px-1 sm:px-2 py-1 text-xs sm:text-sm">
          Twitter
        </a>
        <a href="#" className="text-gray-400 hover:text-white px-1 sm:px-2 py-1 text-xs sm:text-sm">
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Footer
