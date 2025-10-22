'use client'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface ContactFormData {
  name: string
  phoneNumber: string
  email: string
  role: string
  country: string
  companyName: string
  requirements: string
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phoneNumber: '',
    email: '',
    role: '',
    country: '',
    companyName: '',
    requirements: ''
  })

  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const { name, phoneNumber, email,role,country, companyName } = formData
    return name.trim() !== '' && 
           phoneNumber.trim() !== '' && 
           email.trim() !== '' && 
           role.trim() !== '' &&
           country.trim() !== '' &&
           companyName.trim() !== ''
  }
  const handleClose = () => {
   setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          role: '',
          country: '',
          companyName: '',
          requirements: ''
        })
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm() || isSubmitting) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/tara/survey/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company: formData.companyName,
          email: formData.email,
          role: formData.role,
          country: formData.country,
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          requirement: formData.requirements
        })
      })

      const result = await response.json()

      if (result.errCode === 0) {
        toast.success('Submit Successfully!')
        onClose()
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          role: '',
          country: '',
          companyName: '',
          requirements: ''
        })
      } else {
        toast.error(result.errMsg || 'Submit Failed, Please Try Again')
      }
    } catch (error) {
      toast.error('Network Error, Please Try Again')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    const newFormData = { ...formData, [field]: value }
    setFormData(newFormData)
    setIsFormValid(validateForm())
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-6 md:p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <p className="text-sm text-gray-600 mb-6">Thank you for your interest in our products. We will contact you for a trial as soon as our products are released.</p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <label className="block  text-sm font-medium text-gray-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                  required
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Requirements Description
              </label>
              <textarea
                className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={4}
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`px-4 py-2 text-white rounded-md transition-colors ${
                isFormValid && !isSubmitting
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 mt-6">Your information will be handled confidentially in accordance with our Privacy Policy.</p>
      </div>
    </div>
  )
} 