# Sample Architecture

## Summary

Enterprise architectures often focus on systems instead of singular applications. These systems can have multiple data sources, integrations with third-party services, scheduled batch job processing, and multiple clients. Is is not uncommon for there to a client- or customer-focused application, an administration application used by IT and executive leadership, a reporting application used by finance, and many CLIs run by servers on different operating systems.

This sample architecture describes a system with the following features:

- Customer Ordering
  - Listing products
  - Shopping cart
  - Payment (instant or invoiced)
- Supply Chain Management
  - Shipments
  - Manifests
- Scheduled Jobs
  - Sending confirmation emails for orders
  - Batching invoices
- Administration Portal
  - Viewing all data
  - Managing users and permissions
  - Managing InvoiceAccounts and Cost Centers
  - Viewing status and output of scheduled jobs

## Technical Requirements

The Fictional company has embraced the Service-Oriented Architecture buzzword, so they want a single service gateway for all application clients. This gateway may reach out to third-party services, databases, microservices or serverless functions as needed. Fictional has selected Node+Express as the main platform because it runs on existing infrastructure and fits the talent pool they have been able to find.

- **Firebase** will be used for user login and permissions. We need to use permissions instead of defined User Roles because Fictional often has managers liaise with other departments.
- **PostgresDB** will be used for all financial and supply chain data.
- A separate **PostgressDB** instance will be used for Credit Card data for PCI compliance.
- **MySQL** will be used for Product data because the Product team already has a process for updating this regularly.

## Directory Structure

### Clients

Submodules for all the different clients. Keeping them in the same repository means our tests are run against the current version. Previous client distributions should be tested against each web service update.

### Constants

Only constant values. Helpful for enums that don't need to reside in the database.

### Models

True Domain Models. They might be Data Mappers.

### Routes

Only handles validation and interacting with the models. All domain logic should exist in the Domain Model.

### Services

Complex or transactional logic should exist here if it bridges multiple domains. Interactive CLI tools or scheduled jobs will often use these services. Services should be used through web routes when possible. If long-running tasks make that impossible, they can be used directly by CLI tools and web services can be used to determine the status of a particular job.

### Util

Pure functions only. Names should be descriptive of what they do in domain language.

## Setup Instructions

### Install MySQL

1. `brew install mysql`
1. `mysql_secure_installation`
1. `brew services start mysql`
1. `mysql -u root -p`
1. `CREATE USER 'dev'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`
1. `GRANT ALL PRIVILEGES ON * . * TO 'dev'@'localhost';`
1. `FLUSH PRIVILEGES;`
1. `\q`
1. `mysql -u dev -p`
1. Create a new standard Sequel Pro connection to host `127.0.0.1`.

Once installed, use `brew services start mysql` to start mysql and `brew services stop mysql` to stop it.

### Initialize Products Database

1. `npm run dev:products:migrate`
1. `npm run dev:products:seed`
