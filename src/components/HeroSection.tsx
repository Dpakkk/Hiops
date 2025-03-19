import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-black">
            AI powered AWS cost monitoring and<br></br> reasoning platform.
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            HiOps tells you why your AWS cost went up and what you can do to reduce the cost. Fully automated. We use AI and devops humans to help you reduce the cost. 

          </p>
          
          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/signup" 
              className="flex items-center justify-center px-5 py-2.5 text-base font-medium rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Start free <FiArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/demo" 
              className="flex items-center justify-center px-5 py-2.5 text-base font-medium rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
        
        {/* Dashboard visualization - 3 column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Left panel - metrics */}
          <div className="lg:col-span-3 bg-gray-50 p-5 rounded-lg">
            
            <div className="bg-white p-4 rounded-lg">
              <div className="mb-2 text-sm text-gray-500">Cost saved</div>
              <div className="flex items-center">
                <div className="text-3xl font-bold">198</div>
                <div className="mx-2 text-xs bg-teal-100 text-teal-800 px-1 rounded">K</div>
                <div className="mx-2">→</div>
                <div className="text-3xl font-bold">72</div>
                <div className="ml-2 text-xs bg-blue-100 text-blue-800 px-1 rounded">D</div>
              </div>
            </div>
          </div>
          
          {/* Center panel - person image */}
          <div className="lg:col-span-5 relative rounded-lg overflow-hidden">
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 w-full h-full">
              {/* This will be replaced with your actual image */}
              <div className="w-full h-full relative">
                <Image
                  src="/placeholder-person.jpg"
                  alt="Professional using CAST AI dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right panel - additional metrics */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="grid grid-cols-3 mb-6">
                <div className="col-span-2 text-sm text-gray-500">Model recommended</div>
                <div className="text-sm text-gray-500">Savings</div>
              </div>
              
              <div className="mb-4">
                <div className="grid grid-cols-3 items-center mb-3">
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs inline-block">GPT-4o</div>
                  <div className="flex items-center">
                    <span className="mr-2">→</span>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">LLAMA3.2-3B</div>
                  </div>
                  <div className="font-medium">$674.00</div>
                </div>
                
                <div className="grid grid-cols-3 items-center">
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs inline-block">GPT-4o</div>
                  <div className="flex items-center">
                    <span className="mr-2">→</span>
                    <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs">LLAMA3-70B</div>
                  </div>
                  <div className="font-medium">$500.00</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;