"use client"

import { useState } from "react"
import { FiRotateCw, FiUpload, FiInfo } from "react-icons/fi"

const Viewer360Placeholder = ({ product }) => {
  const [currentAngle, setCurrentAngle] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleAngleChange = (angle) => {
    setCurrentAngle(angle)
  }

  const handleImageUpload = () => {
    setIsUploading(true)
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
    }, 2000)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">360° Product View</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <FiInfo />
          <span>Drag to rotate</span>
        </div>
      </div>

      {/* 360 Viewer Container */}
      <div className="relative bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} - 360 view`}
          className="max-w-full max-h-full object-contain transform transition-transform duration-200"
          style={{ transform: `rotateY(${currentAngle}deg)` }}
        />

        {/* Rotation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-full px-4 py-2">
          <div className="flex items-center space-x-4 text-white">
            <button
              onClick={() => handleAngleChange(currentAngle - 45)}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <FiRotateCw className="transform rotate-180" />
            </button>
            <span className="text-sm">{Math.abs(currentAngle)}°</span>
            <button
              onClick={() => handleAngleChange(currentAngle + 45)}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <FiRotateCw />
            </button>
          </div>
        </div>

        {/* Loading Overlay */}
        {isUploading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Processing 360° images...</p>
            </div>
          </div>
        )}
      </div>

      {/* Angle Thumbnails */}
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <button
            key={angle}
            onClick={() => handleAngleChange(angle)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-colors ${
              currentAngle === angle ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={`${angle}°`}
              className="w-full h-full object-cover rounded-md"
            />
          </button>
        ))}
      </div>

      {/* Upload Section */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <FiUpload className="mx-auto text-gray-400 mb-2" size={24} />
        <p className="text-gray-600 mb-2">Upload multiple product images for 360° view</p>
        <p className="text-sm text-gray-500 mb-4">
          Recommended: 8-16 images taken at equal intervals around the product
        </p>
        <button
          onClick={handleImageUpload}
          disabled={isUploading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isUploading ? "Uploading..." : "Upload Images"}
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-4 bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Photography Tips:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Use consistent lighting and background</li>
          <li>• Keep the product centered in each shot</li>
          <li>• Take photos at 45° intervals for smooth rotation</li>
          <li>• Use a tripod for stable, consistent shots</li>
        </ul>
      </div>
    </div>
  )
}

export default Viewer360Placeholder
