import { FiCheck, FiX } from 'react-icons/fi';

const MlOpsRightForYou: React.FC = () => {
  const goodFits = [
    "You want instant visibility into AWS costs.",
    "You want actionable cost-saving solutions.",
    "You need quick, accurate answers 24/7."
  ];
  
  const badFits = [
    "You primarily use Azure, Google Cloud, etc.",
    "You are comfortable paying for unused services.",
    "You prefer manual monitoring and guesswork."
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Is HiOps Right For You?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Not every solution fits every business. See if HiOps aligns with your needs.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">You&apos;re a good fit if:</h3>
              <ul className="space-y-4">
                {goodFits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">
                      <FiCheck className="h-5 w-5" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">You&apos;re not a good fit if:</h3>
              <ul className="space-y-4">
                {badFits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-500 mr-3 mt-1">
                      <FiX className="h-5 w-5" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 flex justify-center">
            <a 
              href="/signup" 
              className="btn btn-sm btn-primary"
            >
              Start now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MlOpsRightForYou;