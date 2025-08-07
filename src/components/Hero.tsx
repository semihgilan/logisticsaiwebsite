import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your smartest AI<br />
            logistics worker
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Offload work to the only AI that thinks, adapts, and learns.
          </p>
          
          {/* Supporting Points */}
          <div className="mb-10 space-y-2 text-gray-600">
            <p>Go live in weeks. Pay only for completed outcomes.</p>
            <p>Built for complex logistics workflows and unstructured data.</p>
            <p>Improves with every interaction.</p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/trial" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Try risk-free for 60 days
            </Link>
            <Link 
              href="/demo" 
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
            >
              Book a demo
            </Link>
            <Link 
              href="/webinars" 
              className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
            >
              Join upcoming webinars
            </Link>
          </div>
        </div>
        
        {/* Optional Mascot/Visual */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}