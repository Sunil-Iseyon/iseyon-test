import client from '@/lib/tina-local-client'

async function getPrivacyPolicySections() {
  const response = await client.queries.privacyPolicyConnection()
  return response.data.privacyPolicyConnection.edges.map((edge) => edge.node)
}

export default async function PrivacyPolicyPage() {
  const sections = await getPrivacyPolicySections()

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 pt-24 flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">
        Privacy Policy
      </h1>

      <p className="text-gray-500 mb-12">
        Last updated: February 2026
      </p>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold mb-2">
              {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
