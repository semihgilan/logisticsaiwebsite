export default function Features() {
  const features = [
    {
      title: 'Deep context about your operating procedures',
      description: 'Talarex ingests natural language SOPs and historical cases to build durable context, so the AI handles edge cases—consistently and at scale.',
      icon: '🧠'
    },
    {
      title: 'AI-driven automation',
      description: 'Trained on logistics-specific data to accurately process unstructured documents, multi-threaded emails, and complex business rules.',
      icon: '⚡'
    },
    {
      title: 'Continuously learning',
      description: 'Talarex flags uncertain decisions for review, learns from feedback, and improves future performance automatically.',
      icon: '📈'
    },
    {
      title: 'AI responsiveness. Human reliability.',
      description: 'Teach Talarex what to resolve autonomously and what to escalate. Keep a human-in-the-loop for critical paths.',
      icon: '🤝'
    },
    {
      title: 'No process compromises',
      description: 'Use your existing TMS, WMS, ERP, and communications stack. Talarex connects to your tools—no rip-and-replace.',
      icon: '🔗'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built for logistics. Trained on your workflows.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}