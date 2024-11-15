import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown, X } from 'lucide-react';
import { specialties } from '../../constants/specialities';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    primaryRole: '',
    emailAddress: '',
    specialty: [],
    confirmEmail: '',
    website: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    howDidYouHear: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPrimaryRoleDropdown, setShowPrimaryRoleDropdown] = useState(false);
  const [showSpecialtyDropdown, setShowSpecialtyDropdown] = useState(false);

  const primaryRoles = [
    'Tenant Representation (Lease/Sublease)',
    'Landlord Representation (Lease/Sublease)',
    'Seller Representation (Sale)',
    'Buyer Representation (Sale)',
    'NNN (Triple Net) Property Representation',
    'Other (Please Specify)'
  ];






  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" mx-auto w-full max-w-4xl bg-white shadow-xl rounded-2xl py-6 px-8">
      <h2 className="text-3xl font-bold text-center text-[#001C46] mb-2">Signup</h2>
      <p className="text-center text-gray-600 mb-8">
        Create an Account and Start Sharing your Listings
        <br />with Tenant Reps, Buyer Reps, and Investors
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your First Name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Last Name"
            />
          </div>

          {/* Primary Role */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              Primary Role*
            </label>
            <div
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md cursor-pointer flex justify-between items-center"
              onClick={() => setShowPrimaryRoleDropdown(!showPrimaryRoleDropdown)}
            >
              <span className="text-gray-500">
                {formData.primaryRole || "Enter your Primary Role"}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
            {showPrimaryRoleDropdown && (
              <div className="absolute z-10 w-2/3 mt-1 right-0 bg-[#F2F5FA] border border-gray-200 rounded-md shadow-lg">
                {primaryRoles.map((role) => (
                  <div
                    key={role}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, primaryRole: role }));
                      setShowPrimaryRoleDropdown(false);
                    }}
                  >
                    {role}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              Email Address*
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Email Address(username)"
              required
            />
          </div>

          {/* Specialty */}
          <SpecialtyDropdown formData={formData} setFormData={setFormData} />

          {/* Confirm Email */}
          <div>
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              Confirm Email Address*
            </label>
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Email Address Again"
              required
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Company Website"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              State*
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your State"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              City*
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your City"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              Password*
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-[#001C46] mb-1">
              Confirm Password*
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your Password again"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* How did you hear about us */}
        <div>
          <label className="block text-sm font-medium text-[#001C46] mb-1">
            How did you Hear About us?
          </label>
          <input
            type="text"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your Answer"
          />
        </div>

        {/* Register Button */}
        <div className='w-full flex items-center justify-center'>
          <button
            type="submit"
            className="w-2/6 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Register
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <NavLink to="/auth/login" className="text-purple-600 hover:text-purple-500 inline">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>

  );
};

export default SignUp;


const SpecialtyDropdown = ({ formData, setFormData }) => {
  const [showSpecialtyDropdown, setShowSpecialtyDropdown] = useState(false);

  const handleSpecialtyToggle = (specialty) => {
    setFormData(prev => ({
      ...prev,
      specialty: prev.specialty.includes(specialty)
        ? prev.specialty.filter(s => s !== specialty)
        : [...prev.specialty, specialty]
    }));
  };

  const removeSpecialty = (specialtyToRemove, e) => {
    e.stopPropagation();
    setFormData(prev => ({
      ...prev,
      specialty: prev.specialty.filter(s => s !== specialtyToRemove)
    }));
  };

  return (
    <div className="relative md:col-span-2 ">
      <label className="block text-sm font-medium text-[#001C46] mb-1">
        Specialty
      </label>
      <div
        className="w-full min-h-[40px] px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md cursor-pointer flex justify-between items-center"
        onClick={() => setShowSpecialtyDropdown(!showSpecialtyDropdown)}
      >
        <div className="flex flex-wrap gap-2 flex-1">
          {formData.specialty.length > 0 ? (
            formData.specialty.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1 px-2 py-1 bg-purple-100 rounded-md"
              >
                <span className="text-sm text-purple-700">{item}</span>
                <X
                  className="w-3 h-3 text-purple-700 cursor-pointer hover:text-purple-900"
                  onClick={(e) => removeSpecialty(item, e)}
                />
              </div>
            ))
          ) : (
            <span className="text-gray-500">Enter your Specialty</span>
          )}
        </div>
        <ChevronDown className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
      </div>
      {showSpecialtyDropdown && (
        <div className="absolute z-10 w-`/2 right-0 mt-1 bg-[#F2F5FA] border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {specialties.map((specialty) => (
            <label
              key={specialty}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                checked={formData.specialty.includes(specialty)}
                onChange={() => handleSpecialtyToggle(specialty)}
                className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm">{specialty}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};