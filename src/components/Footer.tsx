import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop: 4 columns, Mobile: 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-auto relative">
                <Image 
                  src="/logo-white-bg.svg" 
                  alt="CAST.AI Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              HiOps tells you why your AWS cost went up and what you can do to reduce the cost. 
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://twitter.com/cast_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/cast-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/castai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCRBiBJXK2nkbfTgQmLPXnfQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/platform/kubernetes-cost-optimization" className="text-sm text-gray-300 hover:text-white">
                  Kubernetes Cost Optimization
                </Link>
              </li>
              <li>
                <Link href="/platform/autonomous-kubernetes" className="text-sm text-gray-300 hover:text-white">
                  Autonomous Kubernetes
                </Link>
              </li>
              <li>
                <Link href="/platform/security" className="text-sm text-gray-300 hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/platform/multi-cloud" className="text-sm text-gray-300 hover:text-white">
                  Multi-Cloud
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/resources/blog" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/documentation" className="text-sm text-gray-300 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-sm text-gray-300 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/webinars" className="text-sm text-gray-300 hover:text-white">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/resources/kubernetes-academy" className="text-sm text-gray-300 hover:text-white">
                  Kubernetes Academy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-gray-300 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="text-sm text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HiOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;