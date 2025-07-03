"use client"

import { useState } from "react"
import { FiEye, FiSmartphone, FiX, FiInfo } from "react-icons/fi"

const ARButton = ({ product }) => {
  const [showARModal, setShowARModal] = useState(false)

  const handleARClick = () => {
    setShowARModal(true)
  }

  return (
    <>
      <button
        onClick={handleARClick}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <FiEye size={20} />
        <span className="font-semibold">Try in AR - See in Your Room</span>
      </button>

      {/* AR Modal */}
      {showARModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowARModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FiSmartphone size={32} className="text-purple-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">AR Experience Coming Soon!</h3>

              <p className="text-gray-600 mb-6">
                Visualize how <strong>{product.name}</strong> would look in your space using augmented reality.
              </p>

              {/* Feature Preview */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <FiInfo className="mr-2" />
                  What you'll be able to do:
                </h4>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Place the product in your real environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Resize and rotate to see different angles
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Take photos to share with friends
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Check dimensions and fit
                  </li>
                </ul>
              </div>

              {/* Device Requirements */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Device Requirements:</h4>
                <p className="text-sm text-blue-700">iOS 12+ with A12 chip or Android 8.0+ with ARCore support</p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowARModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Maybe Later
                </button>
                <button
                  onClick={() => {
                    // In a real app, this would launch AR functionality
                    alert("AR feature will be available soon!")
                    setShowARModal(false)
                  }}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ARButton
