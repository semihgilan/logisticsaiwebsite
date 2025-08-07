export default function Integrations() {
  const integrations = [
    { name: 'Email Integration', description: 'IMAP/SMTP, M365' },
    { name: 'Teams Integration', description: 'Microsoft Teams' },
    { name: 'WhatsApp Integration', description: 'Business messaging' },
    { name: 'TMS/WMS/ERP', description: 'Custom connectors and APIs' },
    { name: 'Database Integration', description: 'Postgres, SQL Server, Snowflake' },
    { name: 'Document/PDF tools', description: 'Acrobat, OCR' },
    { name: 'Webhooks', description: 'REST APIs' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Operates in your tech stack
          </h2>
          <p className="text-xl text-gray-600">
            Connect Talarex to the systems you already use
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-3"></div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                {integration.name}
              </h3>
              <p className="text-xs text-gray-600">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}