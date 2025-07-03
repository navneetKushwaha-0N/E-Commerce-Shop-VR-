import { Link } from "react-router-dom"
import { FiArrowRight, FiTrendingUp, FiStar, FiShield } from "react-icons/fi"
import ProductCard from "../components/ProductCard"
import { mockProducts } from "../data/mockData"

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 8)
  const trendingProducts = mockProducts.slice(8, 12)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Experience Shopping in
                <span className="text-yellow-300"> AR & 360°</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover products like never before with our immersive shopping experience. See how items look in your
                space before you buy.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Shop Now
                  <FiArrowRight className="ml-2" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="AR Shopping Experience"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <FiStar className="text-yellow-400" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">From 10,000+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose ShopVR?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing online shopping with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">360° Product View</h3>
              <p className="text-gray-600">See every angle of your product with our interactive 360° viewer</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AR Try-Before-Buy</h3>
              <p className="text-gray-600">Visualize products in your space using augmented reality</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Shop with confidence with our secure payment and return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 flex items-center">
              View All
              <FiArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Trending Now</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 flex items-center">
              View All
              <FiArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Products</h2>
          <p className="text-blue-100 mb-8">Get notified about new arrivals, exclusive deals, and AR features</p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-semibold hover:bg-yellow-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
