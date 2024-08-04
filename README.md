# Setup after cloning to local device
# installation
- run *npm install* in the root directory of application

 # setup database
 - open *'database.sql'* file and follow the steps provided to create a postgresql database and table for the application

# APIs
**Register Lead**
- Creates a new lead in the database.
- Sample request: 

```
mutation RegisterLead($name: String, $email: String, $mobile: String, $postcode: String, $servicesInterested: [String!]) {
  registerLead(
    name: "test2", 
    email: "emailtest2@email.com", 
    mobile: "09993823471", 
    postcode: "1121", 
    services_interested: ["delivery", "pickup", "payment"]
  ) {
    id
    name
    email
    mobile
    postcode
    services_interested
  }
}
```

**Get All Leads**
- Retrieves all registered leads from the database.
- Sample request:

```
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
```

**Get Lead By ID**
- Retrieves a specific lead by its ID.
- Sample request:

```
query GetLead($getLeadId: Int) {
  getLead(id: 2) {
    id
    name
    email
    mobile
    postcode
    services_interested
  }
}
```