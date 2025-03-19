import Image from 'next/image';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    content: "We've reduced our cloud costs by over 40% without sacrificing performance. The automated optimization has saved our team countless hours of manual work.",
    author: "Jane Cooper",
    role: "CTO, TechCorp",
    company: "/company-logo1.png",
  },
  {
    content: "CAST AI's multi-cloud approach has given us flexibility and bargaining power with cloud providers that we never had before.",
    author: "Michael Johnson",
    role: "DevOps Lead, DataSphere",
    company: "/company-logo2.png",
  },
  {
    content: "The implementation was surprisingly easy. Within days, we were seeing significant cost reductions without any performance impact.",
    author: "Sarah Williams",
    role: "Engineering Director, CloudNative",
    company: "/company-logo3.png",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-cast-dark">
            Trusted by innovative companies
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            See what our customers are saying about CAST AI
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cast-gray p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-lg italic">&quot;{testimonial.content}&quot;</p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-cast-blue flex items-center justify-center">
                    <span className="text-white font-medium">
                      {testimonial.author.split(' ')[0][0] + testimonial.author.split(' ')[1][0]}
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-cast-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <Image 
                  src={testimonial.company} 
                  alt="Company logo" 
                  width={100} 
                  height={40}
                  className="h-6 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Customer logos */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center">
                <Image 
                  src={`/client-logo${index + 1}.png`}
                  alt={`Customer logo ${index + 1}`} 
                  width={120} 
                  height={60}
                  className="h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;