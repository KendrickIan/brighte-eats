import { gql } from "apollo-server-express";

const Schema = gql`
  type Lead {
    id: ID!
    name: String
    email: String
    mobile: String
    postcode: String
    services_interested: [String!]
  }
  type Query {
    getAllLeads: [Lead]
    getLead(id: Int): Lead
  }
  type Mutation {
    registerLead(
      name: String,
      email: String,
      mobile: String,
      postcode: String,
      services_interested: [String!]
    ): Lead
  }
`;
export default Schema;
//export this Schema so we can use it in our project