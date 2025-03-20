'use client';

import Image from 'next/image';

const TrustedBy: React.FC = () => {
  // List of logo paths and names
    const logos = [
    { src: '/trusted-by/aws.png', alt: 'aws', width: 100, height: 40 },
    { src: '/trusted-by/olympianmotors.png', alt: 'oly', width: 110, height: 40 },
    { src: '/trusted-by/wefunder.png', alt: 'wefunder', width: 120, height: 40 },
    { src: '/trusted-by/clip-bike.png', alt: 'clip bike', width: 60, height: 40 },
    { src: '/trusted-by/sarbham.png', alt: 'sarbham', width: 150, height: 80 },
    // { src: '/logos/fico.svg', alt: 'FICO', width: 100, height: 40 },
    // { src: '/logos/hugging-face.svg', alt: 'Hugging Face', width: 140, height: 40 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg font-medium text-gray-600 uppercase tracking-wider">
            Trusted by
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 px-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;