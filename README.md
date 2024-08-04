# Setup after cloning to local device
# installation
- run *npm install* in the root directory of application

 # setup database
 - open *'database.sql'* file and follow the steps provided to create a postgresql database and table for the application

 # running the application
 - in the root directory of the application, run the command *npx nodemon app/index.ts*
 - once running, open your browser then access the URL *http://localhost:4000/graphql* to open the GraphQL Sandbox

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
- Sample Request and Response in Sandbox:
![image](https://github.com/user-attachments/assets/02ffae2b-cfbb-4eb8-8622-33ceb8a39058)


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
- Sample Request and Response in Sandbox:
![image](https://github.com/user-attachments/assets/bbb800fa-b782-4172-a689-4a6d0fad34c0)


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
- Sample Request and Response in Sandbox:
![image](https://github.com/user-attachments/assets/c50a3502-cd77-4f4f-a461-5e2fe924185c)
