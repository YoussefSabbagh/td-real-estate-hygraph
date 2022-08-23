import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProperties = async () => {
  const query = gql`
    query getProperties {
      properties {
        land_area
        address
        bathrooms
        city
        constructionArea
        country
        id
        parking
        price
        rooms
        servicesRooms
        title
        type
        typeProperty
        mainPhoto {
          url
        }
        images {
          id
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  console.log(result);

  return result.properties;
};
