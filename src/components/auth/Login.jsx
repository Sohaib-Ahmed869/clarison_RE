import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import googleLogo from "../../assets/images/google-logo.png"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login clicked');
  };

  return (
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-[#001C46] text-3xl font-bold mb-2">Login</h1>
          <p className="text-gray-600">
            Welcome back! Please log in to access your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#001C46]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#001C46]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 bg-[#FCFCFD] border border-[#F1F1F3] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-600">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Login
          </button>

          {/* OR Divider */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-gray-500">OR</span>
            </div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 px-4 flex items-center justify-center border border-gray-300 rounded-md bg-[#F7F7F8]"
          >
            <img 
              src={googleLogo}
              alt="Google Logo"
              className="h-6 w-6 mr-2"
            />
            Login with Google
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-purple-600 hover:text-purple-500">
            Sign Up
          </a>
        </p>
      </div>
  );
};

export default Login;