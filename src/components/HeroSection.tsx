import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and text */}
        <div className="text-center mb-12">
          <h1 className="title">
            Intelligent AWS Cost <br></br> Monitoring & Optimization
          </h1>
          <p className="subtitle">
             Instantly find out why your AWS costs increased and how to reduce them—fast.
          </p>
          <p className="subtitle">
             MLpops combines AI-driven insights with 24/7 human DevOps support.
          </p>
          
          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/signup" className="btn-primary">
              Start free <FiArrowRight className="ml-2" />
            </Link>
            <Link href="/demo" className="btn-secondary">
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
              <div className="w-full h-full relative">
                <Image
                  src="/placeholder-person.jpg"
                    // src="/before-after-hiops.png"
                  alt="Professional using HiOps dashboard"
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
