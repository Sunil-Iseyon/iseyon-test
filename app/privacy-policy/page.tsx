import client from '@/lib/tina-local-client'
import { PrivacyPolicyClient } from '@/components/privacy-policy-client'

async function getPrivacyPolicySections() {
  const response = await client.queries.privacyPolicyConnection()
  return response.data.privacyPolicyConnection.edges.map((edge) => edge.node)
}

export default async function PrivacyPolicyPage() {
  const sections = await getPrivacyPolicySections()

  return <PrivacyPolicyClient sections={sections as any} />
}
