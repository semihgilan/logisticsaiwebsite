export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Ingest',
      description: 'Connect tools, import SOPs, and feed historical emails and documents for context.',
      icon: '📥'
    },
    {
      number: '2',
      title: 'Automate',
      description: 'Configure workflows and guardrails. Talarex executes, escalates when needed, and tracks outcomes.',
      icon: '⚙️'
    },
    {
      number: '3',
      title: 'Learn',
      description: 'Feedback loops continuously improve accuracy and speed across roles and lanes.',
      icon: '🎯'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}