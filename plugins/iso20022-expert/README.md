# ISO20022 Expert Plugin

Expert knowledge and guidance on ISO20022 financial messaging standards.

## Overview

This plugin provides comprehensive expertise on ISO20022 message formats, covering:
- **Payment Initiation (pain)**: Customer-initiated payment instructions and creditor payment activation requests
- **Payments Clearing and Settlement (pacs)**: Bank-to-bank payment messages, status reports, and returns
- **Cash Management (camt)**: Account reporting, notifications, exceptions, and investigations

## Features

- **Conversational Q&A**: Ask natural language questions about ISO20022 standards
- **Message-specific guidance**: Get detailed information on specific message types (pacs.008, camt.053, etc.)
- **Implementation support**: Receive guidance on implementing ISO20022 in your systems
- **Schema understanding**: Learn about message structure, data elements, and validation rules

## Installation

### From Marketplace

```bash
/plugin install iso20022-expert@malanka-marketplace
```

### Local Development

```bash
cc --plugin-dir /Users/jcs/VSCode/malanka-marketpalce/plugins/iso20022-expert
```

## Usage

Simply ask questions about ISO20022 in natural language:

- "What is ISO20022?"
- "Explain the pacs.008 message structure"
- "How do I implement camt.053 for account statements?"
- "What's the difference between pacs.008 and pacs.009?"
- "How does pain.013 request-to-pay work?"
- "What is camt.056 used for in payment cancellations?"
- "Help me understand exceptions handling with camt.026"
- "What fields are required in pain.001?"

The ISO20022 expertise skill will automatically activate and provide concise answers with progressive disclosure, allowing you to ask for more details as needed. Responses include references to official ISO20022 specifications.

## Covered Message Types

### Payment Initiation (pain)
- **pain.001**: Customer Credit Transfer Initiation
- **pain.002**: Customer Payment Status Report
- **pain.007**: Customer Payment Reversal
- **pain.008**: Customer Direct Debit Initiation
- **pain.013**: Creditor Payment Activation Request (Request-to-Pay)
- **pain.014**: Creditor Payment Activation Request Status Report

### Payments Clearing and Settlement (pacs)
- **pacs.002**: FI to FI Payment Status Report
- **pacs.003**: FI to FI Customer Direct Debit
- **pacs.004**: Payment Return
- **pacs.007**: FI to FI Payment Reversal
- **pacs.008**: FI to FI Customer Credit Transfer
- **pacs.009**: Financial Institution Credit Transfer
- **pacs.010**: Financial Institution Direct Debit
- **pacs.028**: FI to FI Payment Status Request

### Cash Management (camt)
**Account Reporting:**
- **camt.052**: Bank to Customer Account Report
- **camt.053**: Bank to Customer Statement
- **camt.054**: Bank to Customer Debit/Credit Notification
- **camt.060**: Account Reporting Request

**Exceptions and Investigations:**
- **camt.026**: Unable to Apply
- **camt.027**: Claim Non Receipt
- **camt.029**: Resolution of Investigation
- **camt.055**: Customer Payment Cancellation Request
- **camt.056**: FI to FI Payment Cancellation Request
- **camt.087**: Request for Account Management Status Report

## Components

- **iso20022-expertise skill**: Auto-activates on ISO20022-related questions, provides expert guidance with reference to official specifications

## Source Materials

This plugin is built on official ISO20022 message specification documents, organized by message category for easy reference.

## License

MIT
