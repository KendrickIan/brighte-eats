import leads from "./dataset";
const Resolvers = {
  Query: {
    getAllLeads: () => leads,
    getLead: (_: any, args: any) => {
      console.log(args);
      return leads.find((lead) => lead.id === args.id);
    },
  },
  Mutation: {
    registerLead: (_: any, args: any) => {
      console.log(args);
      const newLead = {
        id: leads.length + 1,
        name: args.name,
        email: args.email,
        mobile: args.mobile,
        postcode: args.postcode,
        services_interested: args.pref_services,
      };
      leads.push(newLead);
      return newLead;
    },
  },
};
export default Resolvers;



// test mutation query
/*
mutation RegisterLead($name: String, $email: String, $mobile: String, $postcode: String, $servicesInterested: [String!]) {
  registerLead(
    name: "test", 
    email: "emailtest@email.com", 
    mobile: "09993824471", 
    postcode: "1114", 
    services_interested: ["delivery, pickup"]
  ) {
    id
    name
    email
    mobile
    postcode
    services_interested
  }
}
*/

//test get all leads query
/*
query GetAllLeads {
  getAllLeads {
    id
    name
    email
    mobile
    postcode
    services_interested
  }
}
*/