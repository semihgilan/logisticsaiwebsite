export default function UseCases() {
  const useCases = [
    {
      title: 'Document processing',
      description: 'Extract, validate, and route data from invoices, BOLs, PODs, packing lists, and rate confirmations.',
      icon: '📄'
    },
    {
      title: 'Inbox automation',
      description: 'Classify, respond, and update TMS/WMS from multi-threaded email chains.',
      icon: '📧'
    },
    {
      title: 'Exception management',
      description: 'Auto-detect, notify stakeholders, and resolve with SOP-backed decisions.',
      icon: '⚠️'
    },
    {
      title: 'Data hygiene',
      description: 'Normalize carrier and lane data, reconcile mismatches, and enrich records automatically.',
      icon: '🔍'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600">
            Automate your most time-consuming logistics operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start">
                <div className="text-2xl mr-4">{useCase.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}