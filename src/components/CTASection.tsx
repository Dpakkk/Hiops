import Link from 'next/link';

const CTASection: React.FC = () => {
  return (
    <div className="bg-cast-blue">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to reduce your cloud costs?</span>
          <span className="block text-cast-light-blue">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-cast-blue bg-white hover:bg-gray-100">
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/demo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cast-dark-blue hover:bg-opacity-90">
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;