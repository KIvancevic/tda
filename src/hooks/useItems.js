import { useQuery, gql } from "@apollo/client"


const GET_ITEMS = gql`
query {
  characters {
    results {
      id
      name
      image
      gender
      status
      species
    }
  }
}
`;

export const useItems = () => {

  const { error, data, loading } = useQuery(GET_ITEMS)

  return {
    error,
    data,
    loading,
  };
}
