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
