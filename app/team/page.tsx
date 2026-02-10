import client from "@/lib/tina-local-client";
import { TeamClient } from "@/components/team-client";

async function getTeamData() {
  const valuesResponse = await client.queries.companyValuesConnection();
  const teamResponse = await client.queries.teamMembersConnection();

  return {
    values: valuesResponse.data.companyValuesConnection.edges?.map(edge => edge?.node) || [],
    team: teamResponse.data.teamMembersConnection.edges?.map(edge => edge?.node) || [],
  };
}

export default async function TeamPage() {
  const { values, team } = await getTeamData();

  return <TeamClient values={values as any} team={team as any} />;
}
