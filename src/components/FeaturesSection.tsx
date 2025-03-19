import Image from 'next/image';
import { FiCloud, FiServer, FiShield, FiBarChart2 } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Feature {
  name: string;
  description: string;
  icon: IconType;
}

const features: Feature[] = [
  {
    name: 'Automated Cost Optimization',
    description: 'HiOps automatically adjusts your Kubernetes resources to ensure you\'re always using the most cost-effective instance types.',
    icon: FiBarChart2,
  },
  {
    name: 'Multi-Cloud Support',
    description: 'Run your applications across AWS, Google Cloud, and Microsoft Azure to avoid vendor lock-in and optimize for cost and performance.',
    icon: FiCloud,
  },
  {
    name: 'Autonomous Kubernetes',
    description: 'Let HiOps handle node provisioning, scaling, and resource allocation to optimize for both performance and cost.',
    icon: FiServer,
  },
  {
    name: 'Security & Compliance',
    description: 'Enterprise-grade security features to ensure your multi-cloud deployments remain secure and compliant.',
    icon: FiShield,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-12 bg-cast-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-cast-dark sm:text-4xl">
            All-in-one Kubernetes Cost Optimization
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Reduce your cloud costs and increase performance with intelligent automation.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-cast-light-blue rounded-md">
                    <feature.icon className="h-6 w-6 text-cast-blue" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-cast-dark">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-cast-dark">
              Reduce your cloud costs by up to 50%
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              HiOps&apos;s real-time optimization engine analyzes your workloads and recommends the most cost-effective cloud instances while maintaining performance.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Automatic instance type selection based on workload requirements
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Spot instance automation with intelligent fallback strategies
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-600">
                  Automated resource allocation based on actual usage
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
            <div className="relative mx-auto w-full">
              <Image 
                src="/savings-graph.png" 
                alt="Cost savings with CAST.AI" 
                width={600} 
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;