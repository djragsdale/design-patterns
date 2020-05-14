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