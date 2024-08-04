// import leads from "./dataset";
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '74165293883',
  database: 'brighte-eats',
  host: 'localhost',
  port: 5432,
});
const Resolvers = {
  Query: {
    getAllLeads: async () => {
      const client = await pool.connect();
      
      try {
        const result = await client.query('SELECT * FROM "leads"');
        console.log(result, "<<< GET ALL RESULT");
        
        return result.rows;
      } finally {
        client.release();  

      }
    },
    getLead: async (_: any, args: any) => {
      const client = await pool.connect();
      try {
        const result = await client.query('SELECT * FROM "leads" WHERE id = $1', [args.id]);
        console.log(result, "<<< GET ONE RESULT");
        return result.rows[0] || null;
      } finally {
        client.release();
      }
    },
  },
  Mutation: {
    registerLead: async (_: any, args: any) => {
      const client = await pool.connect();
      try {
        const result = await client.query(
          'INSERT INTO "leads" (name, email, mobile, postcode, services_interested) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [args.name, args.email, args.mobile, args.postcode, args.services_interested]
        );
        console.log(result, "<<< ADD NEW ENTRY");
        return result.rows[0];
      } finally {
        client.release();
      }
    },
  },
};

// const Resolvers = {
//   Query: {
//     getAllLeads: () => leads,
//     getLead: (_: any, args: any) => {
//       console.log(args);
//       return leads.find((lead) => lead.id === args.id);
//     },
//   },
//   Mutation: {
//     registerLead: (_: any, args: any) => {
//       console.log(args);
//       const newLead = {
//         id: leads.length + 1,
//         name: args.name,
//         email: args.email,
//         mobile: args.mobile,
//         postcode: args.postcode,
//         services_interested: args.pref_services,
//       };
//       leads.push(newLead);
//       return newLead;
//     },
//   },
// };
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