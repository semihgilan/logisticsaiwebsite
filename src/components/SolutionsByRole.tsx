import Link from 'next/link';

const solutions = [
  {
    title: 'Freight Brokerages',
    metric: '0.1',
    description: 'Automate rate requests, confirm capacity faster, and eliminate manual data entry across quotes, tenders, and invoices.',
    href: '/solutions/freight-brokerages',
    icon: '📦'
  },
  {
    title: 'Freight Forwarders',
    metric: '0.2',
    description: 'Extract data from commercial invoices, BOLs, and emails; orchestrate multi-party updates and compliance checks automatically.',
    href: '/solutions/freight-forwarders',
    icon: '🚢'
  },
  {
    title: 'Carriers',
    metric: '0.3',
    description: 'Digitize dispatch workflows, streamline POD capture, and respond to appointment changes in real time across email and messaging.',
    href: '/solutions/carriers',
    icon: '🚚'
  },
  {
    title: 'Shippers',
    metric: '0.4',
    description: 'Standardize inbound confirmations, reduce exceptions, and maintain live shipment visibility without adding headcount.',
    href: '/solutions/shippers',
    icon: '🏭'
  }
];

export default function SolutionsByRole() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            10x efficiency for operations of all types
          </h2>
          <p className="text-xl text-gray-600">
            Deploy in weeks. Pay only for completed work. Redefine your business margins.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div 
              key={solution.title}
              className="group relative bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all hover:shadow-lg"
            >
              <div className="mb-4">
                <span className="text-3xl">{solution.icon}</span>
              </div>
              
              <div className="flex items-baseline mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
                <span className="ml-2 text-sm text-blue-600 font-mono">/ {solution.metric}</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                {solution.description}
              </p>
              
              <Link 
                href={solution.href}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Explore {solution.title.toLowerCase()} solutions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}