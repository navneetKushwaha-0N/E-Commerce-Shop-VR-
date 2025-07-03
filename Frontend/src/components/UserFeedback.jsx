"use client"

import { useState } from "react"
import { FiUpload, FiCamera, FiStar, FiX, FiCheck } from "react-icons/fi"

const UserFeedback = ({ product }) => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [images, setImages] = useState([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setImages((prev) => [
            ...prev,
            ...files.map((file) => ({
              id: Date.now() + Math.random(),
              file,
              url: URL.createObjectURL(file),
              name: file.name,
            })),
          ])
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const removeImage = (id) => {
    setImages(images.filter((img) => img.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate review submission
    alert("Thank you for your feedback! Your review has been submitted.")
    setRating(0)
    setReview("")
    setImages([])
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Share Your Experience</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rate this product</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl transition-colors ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                } hover:text-yellow-400`}
              >
                <FiStar fill={star <= rating ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Write your review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Share your thoughts about this product..."
          />
        </div>

        {/* Image Upload */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Add photos (optional)</label>
            <button
              type="button"
              onClick={() => setShowGuide(!showGuide)}
              className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
            >
              <FiCamera className="mr-1" />
              Photo tips
            </button>
          </div>

          {/* Photo Guide */}
          {showGuide && (
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">Great photo tips:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Show the product in use or in your space</li>
                <li>• Include different angles and close-ups</li>
                <li>• Use good lighting for clear images</li>
                <li>• Show size comparison with everyday objects</li>
                <li>• Highlight any unique features or details</li>
              </ul>
            </div>
          )}

          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <FiUpload className="mx-auto text-gray-400 mb-2" size={24} />
              <p className="text-gray-600 mb-1">Click to upload images</p>
              <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
            </label>
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Uploading images...</span>
                <span className="text-sm text-gray-600">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Uploaded Images */}
          {images.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt="Review"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(image.id)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FiX size={12} />
                  </button>
                  <div className="absolute bottom-1 left-1 bg-green-500 text-white rounded-full p-1">
                    <FiCheck size={12} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={rating === 0 || !review.trim()}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          Submit Review
        </button>
      </form>
    </div>
  )
}

export default UserFeedback
