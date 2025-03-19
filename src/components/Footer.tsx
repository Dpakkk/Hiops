import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-auto relative">
                <Image 
                  src="/logo.svg" 
                  alt="CAST.AI Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              CAST AI helps businesses optimize their Kubernetes costs and management across multiple cloud providers.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://twitter.com/cast_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cast-blue">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/cast-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cast-blue">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/castai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cast-blue">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCRBiBJXK2nkbfTgQmLPXnfQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cast-blue">
                <FiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/platform/kubernetes-cost-optimization" className="text-sm text-gray-500 hover:text-cast-blue">
                  Kubernetes Cost Optimization
                </Link>
              </li>
              <li>
                <Link href="/platform/autonomous-kubernetes" className="text-sm text-gray-500 hover:text-cast-blue">
                  Autonomous Kubernetes
                </Link>
              </li>
              <li>
                <Link href="/platform/security" className="text-sm text-gray-500 hover:text-cast-blue">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/platform/multi-cloud" className="text-sm text-gray-500 hover:text-cast-blue">
                  Multi-Cloud
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/resources/blog" className="text-sm text-gray-500 hover:text-cast-blue">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/documentation" className="text-sm text-gray-500 hover:text-cast-blue">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-sm text-gray-500 hover:text-cast-blue">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/webinars" className="text-sm text-gray-500 hover:text-cast-blue">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/resources/kubernetes-academy" className="text-sm text-gray-500 hover:text-cast-blue">
                  Kubernetes Academy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-cast-blue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 hover:text-cast-blue">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-cast-blue">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-gray-500 hover:text-cast-blue">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="text-sm text-gray-500 hover:text-cast-blue">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CAST AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;