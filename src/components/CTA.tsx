import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Try a risk-free AI deployment
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Launch a pilot, measure ROI, and scale with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/get-started" 
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            Get started
          </Link>
          <Link 
            href="/demo" 
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition font-medium"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}