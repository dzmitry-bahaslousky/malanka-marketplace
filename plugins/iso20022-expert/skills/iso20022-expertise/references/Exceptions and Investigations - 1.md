## ISO 20022

## Exceptions and Investigations Maintenance 2023 - 2024

## Message Definition Report - Part 1

## Approved by the Payments SEG on 8th January 2024

This document provides information about the use of messages for Exceptions and Investigations and includes, for example, business scenarios, messages flows.

March 2024

## Table of Contents

| Table of Contents..............................................................................................................................2   | Table of Contents..............................................................................................................................2   | Table of Contents..............................................................................................................................2                                                                                                |
|----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.                                                                                                                                                 | Introduction..............................................................................................................................5        | Introduction..............................................................................................................................5                                                                                                     |
|                                                                                                                                                    | 1.1. Terms and Definitions                                                                                                                         | ............................................................................................................5                                                                                                                                   |
|                                                                                                                                                    | 1.2. Abbreviations and Acronyms                                                                                                                    | .................................................................................................5                                                                                                                                              |
|                                                                                                                                                    | 1.3. Document Scope and                                                                                                                            |                                                                                                                                                                                                                                                 |
|                                                                                                                                                    | 1.4.                                                                                                                                               | Objectives...........................................................................................5 References.............................................................................................................................7 |
| 2.                                                                                                                                                 | Scope and Functionality .........................................................................................................8                 | Scope and Functionality .........................................................................................................8                                                                                                              |
|                                                                                                                                                    | 2.1.                                                                                                                                               | Background............................................................................................................................8                                                                                                         |
|                                                                                                                                                    | 2.2.                                                                                                                                               | Scope.....................................................................................................................................8                                                                                                     |
|                                                                                                                                                    | 2.3. Groups of MessageDefinitions and                                                                                                              | Functionality...................................................................9                                                                                                                                                               |
| 3.                                                                                                                                                 | BusinessRoles and Participants..........................................................................................12                         | BusinessRoles and Participants..........................................................................................12                                                                                                                      |
|                                                                                                                                                    | 3.1. Participants and BusinessRoles                                                                                                                | Definitions.........................................................................13                                                                                                                                                          |
|                                                                                                                                                    | 3.2. BusinessRoles and Participants                                                                                                                | Table.................................................................................13                                                                                                                                                        |
| 4.                                                                                                                                                 | BusinessProcess Description..............................................................................................15                        | BusinessProcess Description..............................................................................................15                                                                                                                     |
|                                                                                                                                                    | 4.1.                                                                                                                                               | Initiating an Exception or Investigation ................................................................................15                                                                                                                     |
|                                                                                                                                                    | 4.2.                                                                                                                                               | Concepts..............................................................................................................................16                                                                                                        |
|                                                                                                                                                    | 4.3.                                                                                                                                               | Rules....................................................................................................................................17                                                                                                     |
| 5.                                                                                                                                                 | Description of BusinessActivities........................................................................................30                        | Description of BusinessActivities........................................................................................30                                                                                                                     |
|                                                                                                                                                    | 5.1.                                                                                                                                               | Payment...............................................................................................................................32                                                                                                        |
|                                                                                                                                                    | 5.2. Possible                                                                                                                                      | Transitions.............................................................................................................34                                                                                                                      |
| 6.                                                                                                                                                 | BusinessTransactions...........................................................................................................35                  | BusinessTransactions...........................................................................................................35                                                                                                               |
|                                                                                                                                                    | 6.1. Claim Non                                                                                                                                     | Receipt...............................................................................................................35                                                                                                                        |
|                                                                                                                                                    | 6.2. Request for                                                                                                                                   | Cancellation......................................................................................................39                                                                                                                            |
|                                                                                                                                                    | 6.3. Request for Modification                                                                                                                      | ......................................................................................................42                                                                                                                                        |
|                                                                                                                                                    | 6.4. Unable to Apply....................................................................................................................46         |                                                                                                                                                                                                                                                 |
| 7.                                                                                                                                                 | Revision Record ....................................................................................................................51             | Revision Record ....................................................................................................................51                                                                                                          |

## Preliminary Note

The Message Definition Report (MDR) is made of three parts:

## MDR Part 1

This describes the contextual background required to understand the functionality of the proposed message set. Part 1 is produced by the submitting organisation that developed or maintained the message set in line with an MDR Part 1 template provided by the ISO 20022 Registration Authority (RA) on www.iso20022.org.

## MDR Part 2

This is the detailed description of each message definition of the message set. Part 2 is produced by the RA using the model developed by the submitting organisation.

## MDR Part 3

This is an extract if the ISO 20022 Business Model describing the business concepts used in the message set. Part 3 is an Excel document produced by the RA.

## 1. Introduction

## 1.1. Terms and Definitions

The following terms are reserved words defined in ISO 20022 Edition 2013 Ð Part1. When used in this document, the UpperCamelCase notation is followed.

| Term                | Definition                                                                                                                                                                                                                               |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BusinessRole        | Functional role played by a business actor in a particular BusinessProcess or BusinessTransaction.                                                                                                                                       |
| Participant         | Involvement of a BusinessRole in a BusinessTransaction.                                                                                                                                                                                  |
| BusinessProcess     | Definition of the business activities undertaken by BusinessRoles within a BusinessArea whereby each BusinessProcess fulfils one type of business activity and whereby a BusinessProcess may include and extend other BusinessProcesses. |
| BusinessTransaction | Particular solution that meets the communication requirements and the interaction requirements of a particular BusinessProcess and BusinessArea.                                                                                         |
| MessageDefinition   | Formal description of the structure of a message instance.                                                                                                                                                                               |

Note

When a MessageDefinition or message identifier is specified, it should include the variant and version number. However, in this document (except in the business examples section, if present), variant and version numbers are not included. In order to know the correct variant and version number for a MessageDefinition, the related Message Definition Report Part 2 document should be consulted.

## 1.2. Abbreviations and Acronyms

The following is a list of abbreviations and acronyms used in the document.

| Abbreviation/Acronyms   | Definition                  |
|-------------------------|-----------------------------|
| EnI                     | Exceptions & Investigations |

## 1.3. Document Scope and Objectives

This document is the first part of the Exceptions and Investigations Message Definition Report (MDR) that describes the BusinessTransactions and underlying message set. For the sake of completeness, the document may also describe BusinessActivities that are not in the scope of the BusinessProcesses covered in this document.

This document describes the following:

- ∞ the BusinessProcess scope
- ∞ the BusinessRoles involved in these BusinessProcesses

The main objectives of this document are as follows:

- ∞ to provide information about the messages that support the BusinessProcesses
- ∞ to explain the BusinessProcesses and BusinessActivities these messages have addressed
- ∞ to give a high level description of BusinessProcesses and the associated BusinessRoles

## ∞ to document the BusinessTransactions

The MessageDefinitions are specified in Message Definition Report Part 2.

## 1.4. References

| Document                                                                                  | Version   | Date       | Author   |
|-------------------------------------------------------------------------------------------|-----------|------------|----------|
| ISO 20022 Business Justification Ð Exceptions and Investigations                          |           |            | SWIFT    |
| ISO 20022 Maintenance Change Request (MCR 189)                                            | 2021      | 2021-10-01 | SWIFT    |
| ISO 20022 Maintenance Change Request (MCR #208) document (Payments Maintenance 2022/2023) | 2022      | 2022-08-31 | SWIFT    |
| ISO 20022 Maintenance Change Request (MCR #234) document (Payments Maintenance 2023/2024) | 2023      | 2023-08-31 | SWIFT    |

## 2. Scope and Functionality

## 2.1. Background

This Message Definition Report covers a set of seventeen Message Definitions developed by SWIFT in close collaboration with the payments industry and approved by to the ISO 20022 Payments Standards Evaluation Group (SEG) on 8th January 2024.

These messages are specifically designed to support payment-related investigation activities.

## 2.2. Scope

In an average payments operations department, two to five per cent of all payments, made on any particular day, result in an enquiry. In an effort to improve the competitive position of their cash management offerings, financial institutions are putting increasing pressure on their payments operations. While many processing units achieve impressive straight-through processing (STP) rates, it has become clear that the cost of handling each enquiry resulting from a payment is multiplied in the total payment cost.

Management of exceptions and investigations remains one of the most labour-intensive activities for a financial institution, largely because it blocks increased automation. The reason for this is the widespread use of free-format messages combined with a lack of industry rules.

In response to increasing regulatory and competitive pressure, financial institutions are looking at implementing activity based pricing, and at invoicing their payments services separately from the processing. This approach is designed to generate additional revenue. However, it requires a high level of service, supported by standardised customer reporting.

The fact remains that improving customer service levels though fast and efficient resolution of problems is a key differentiating factor for customer retention.

The following payment-related investigation activities have been defined to support the payment related investigations:

## Request to cancel payment workflow

This activity is raised by the party that initiated the payment to request for the cancellation of that payment. Depending whether the underlying payment is in the initiation or interbank leg, a Customer Payment Cancellation Request or a Financial Institution to Financial Institution Payment Cancellation Request is generated. It can eventually entail a Request For Debit Authorisation and its confirmation, but excludes the return of funds.

## Request to modify payment workflow

This activity is raised by the party that initiated the payment to request for the modification of that payment. It can eventually entail an Additional Payment Information message that may be sent by the account servicing institution to the creditor or beneficiary.

## Unable to apply workflow

This activity is initiated by a party instructed to make a payment or by the beneficiary of the payment as that party is not able to execute or is not able to reconcile the payment. It might also be initiated by the party sending the payment, when investigating on the related statement entry.

## Claim non-receipt workflow

This activity is initiated by the party which is expecting a payment. If the payment does not arrive, this party contacts its debtor. The debtor then creates a case and assigns it (by sending it) to the party that it has instructed earlier to make the payment. The activity also supports the missing or incorrect cover information situations

## 2.3. Groups of MessageDefinitions and Functionality

## 2.3.1. Initiation

The above workflows may be initiated through the following messages:

## CustomerPaymentCancellationRequest

This message initiates or forwards a case for a payment cancellation request workflow in the Payment Initiation (or Payment Activation Request) business area.

## FIToFIPaymentCancellationRequest

This message initiates or forwards a case for a payment cancellation request workflow in the Payment Interbank business area.

## RequestToModifyPayment

This message initiates a case for a payment modification request workflow.

## ClaimNonReceipt

This message initiates or forwards a case for a claim non-receipt workflow.

## UnableToApply

This message initiates or forwards a case for an unable to apply workflow.

| MessageDefinition                  | Message Identifier   |
|------------------------------------|----------------------|
| CustomerPaymentCancellationRequest | camt.055             |
| FIToFIPaymentCancellationRequest   | camt.056             |
| RequestToModifyPayment             | camt.087             |
| ClaimNonReceipt                    | camt.027             |
| UnableToApply                      | camt.026             |

## 2.3.2. Case Management

The initiation messages are supported by case management messages.

## ResolutionOfInvestigation

This message provides an answer to the inquiry (positive or negative), and enables the case assignee to close the case.

## NotificationOfCaseAssignment

This message notifies the case assigner that a case has been assigned to the next party in the payment chain or that the assignee will do the cancellation, modification or correction.

## RequestForDuplicate

This message requests a copy of the original transaction, request or data from the case assigner/creator. It is used when the case assignee is not able to find the record to which the enquiry is related.

## Duplicate

This message is used to provide a copy of the original, which can be a payment instruction, a request or data, in response to a Request For Duplicate message.

## RejectInvestigation

This message is sent by the case assignee to the assigner cannot accept the assignment (details on the reason are provided in the message description).

## CancelCaseAssignment

This message is sent by the case creator and forwarded to the next case assignee if the case has been wrongly allocated or the case has been solved by other means.

## CaseStatusReportRequest

This message is used to request the status of a case under investigation.

## CaseStatusReport

This message is used to provide the status of the case in response to a Case Status Report Request message.

## DebitAuthorisationRequest

This message is used to request the authorisation from the creditor to debit its account.

## DebitAuthorisationResponse

This message is used by a creditor to provide an answer to a Debit Authorisation Request message.

## AdditionalPaymentInformation

This message is used to provide additional information about a payment instruction.

## ProprietaryFormatInvestigation

This message is used when no other standardised message allows the assignment of or reply to a case. It can only be used based on bilateral agreements.

| MessageDefinition              | Message Identifier   |
|--------------------------------|----------------------|
| ResolutionOfInvestigation      | camt.029             |
| NotificationOfCaseAssignment   | camt.030             |
| RequestForDuplicate            | camt.033             |
| Duplicate                      | camt.034             |
| RejectInvestigation            | camt.031             |
| CancelCaseAssignment           | camt.032             |
| CaseStatusReportRequest        | camt.038             |
| CaseStatusReport               | camt.039             |
| DebitAuthorisationRequest      | camt.037             |
| DebitAuthorisationResponse     | camt.036             |
| AdditionalPaymentInformation   | camt.028             |
| ProprietaryFormatInvestigation | camt.035             |

## 2.3.3. Functionality

See Message Definition Report Part 2 for the message scopes and formats.

Creator

Case

Instructing

Reimbursement

Agent

## 3. BusinessRoles and Participants

A BusinessRole represents an entity (or a class of entities) of the real world, physical or legal, a person, a group of persons, a corporation. Examples of BusinessRoles: ÒFinancial InstitutionÓ, ÒAutomated Clearing HouseÓ, ÒCentral Securities DepositoryÓ.

A Participant is a functional role performed by a BusinessRole in a particular BusinessProcess or BusinessTransaction. Examples of Participants: the ÒuserÓ of a system, ÒdebtorÓ, ÒcreditorÓ, ÒinvestorÓ.

The relationship between BusinessRoles and Participants is many-to-many. One BusinessRole can be involved as different Participants at different moments in time or at the same time. Different BusinessRoles can be involved as the same Participant.

In the context of Exceptions and Investigations the high-level BusinessRoles and typical Participants can be represented as follows:

Creditor Agent

Intermediary Agent

<!-- image -->

## 3.1. Participants and BusinessRoles Definitions

## Participants

| Description       | Definition                                                                                            |
|-------------------|-------------------------------------------------------------------------------------------------------|
| Case Creator      | Party that initiates the case to investigate on a payment.                                            |
| Case Assigner     | Party assigning an investigation case                                                                 |
| Case Assignee     | Party which is assigned an investigation case.                                                        |
| Instructing Agent | Agent that instructs the next party in the chain to carry out the (set of) instruction(s).            |
| Instructed Agent  | Agent that is instructed by the previous party in the chain to carry out the (set of) instruction(s). |

## BusinessRoles

| Description                     | Definition                                                                                                                                    |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Creditor                        | Party to which an amount of money is due.                                                                                                     |
| Debtor Agent/Bank               | Financial institution servicing an account for the debtor.                                                                                    |
| Debtor                          | Party that owes an amount of money to the (ultimate) creditor.                                                                                |
| Creditor Agent/Bank             | Financial institution servicing an account for the creditor.                                                                                  |
| Instructing Reimbursement Agent | Agent through which the instructing agent will reimburse the instructed agent.                                                                |
| Third Reimbursement Agent       | Branch of the instructed agent where the amount of money will be made available when different from the instructed reimbursement agent.       |
| Instructed Reimbursement Agent  | Agent at which the instructed agent will be reimbursed.                                                                                       |
| Intermediary Agent              | Agent between the debtor's agent and the creditor's agent. There can be several intermediary agents specified for the execution of a payment. |

## 3.2. BusinessRoles and Participants Table

| BusinessRole                    | Participant Case Creator   | Participant Instructing Agent   | Participant Instructed Agent   | Participant Case Assigner   | Participant Case Assignee   |
|---------------------------------|----------------------------|---------------------------------|--------------------------------|-----------------------------|-----------------------------|
| Creditor                        | X                          |                                 |                                | X                           | X                           |
| Debtor Agent/ Bank              | X                          | X                               | X                              | X                           | X                           |
| Creditor                        | X                          |                                 |                                | X                           | X                           |
| Creditor Agent/ Bank            | X                          | X                               | X                              | X                           | X                           |
| Instructing Reimbursement Agent |                            |                                 |                                | X                           | X                           |
| Third Reimbursement Agent       |                            |                                 |                                | X                           | X                           |
| Instructed Reimbursement Agent  |                            |                                 |                                | X                           | X                           |
| Intermediary Agent              |                            | X                               | X                              | X                           | X                           |

Payment

Initiation

Exceptions and Investigations

BusinessProcesses Overview

## 4. BusinessProcess Description

This diagram represents the high level BusinessProcesses.

<!-- image -->

## 4.1. Initiating an Exception or Investigation

An exception or investigation process starts when a problem occurs in the normal execution of a payment transaction.

The exception is normally related to problems detected with the processing environment of the case creator, whereas an investigation is related to an issue identified in the payment chain that will lead to the failure of the processing.

The problem can be one of the following:

- ∞ a payment needs to be cancelled due to a processing error or a decision by the party instructing the payment
- ∞ a payment must be modified due to a processing error or a decision by the party instructing the payment
- ∞ a payment is received but it is incorrect
- ∞ a payment is received but some information is missing, preventing its proper processing
- ∞ an expected payment is not received
- ∞ an entry in the statement cannot be reconciled on the initiating party

Four different types of exception and investigation processes have been covered and a corresponding set of standards developed:

## Request for Cancellation

The instructing party requests cancellation of a payment instruction.

## Request for Modification

The instructing party may request modification of a payment instruction.

## Unable to Apply

An unable-to-apply message is sent when insufficient or incorrect information prevents the processing of a payment instruction, for example the account number is missing or incorrect, the account is closed, the name and account do not match or the final agent is missing. Processing of a payment instruction covers both the execution of the instruction and the reconciliation of the instruction.

## Claim Non Receipt

A claim-non-receipt message is sent when a party that expects a payment does not receive it or when an agent is missing the cover for a received payment instruction.

An exception or investigation process requires communication between several parties. It is therefore essential to clearly define the behaviour of each party involved and the communication between them. This may appear to be laborious and will lead to an increased number of messages exchanged but on the whole the exceptions and investigations processes become more efficient.

Each exception and investigation process is supported by a specific workflow. A workflow defines the set of messages to be exchanged between the parties and the sequence of exchanges.

The four main processes and the supporting case management messages were introduced in section 2.3.

This section will further describe how these messages can be used together to support the exceptions and investigations activities. It also gives a few scenarios to illustrate the concept. Further examples may be found under individual chapters of the messages themselves.

## 4.2. Concepts

## 4.2.1. The Exception or Investigation Case

A case is created each time an exception and investigation process is needed. A case is a file that records the progress of the investigation. This file can be paper-based (a physical folder) or electronic (a database table). A party creates and organises a case file in its own way. It is a process internal to the party. The assignment of this case and the exchange of messages between collaborating parties must respect a set of rules that are described in the next subsection. The steps in the process that follow the case creation can be either automated or manual. The first message exchanged in an investigation workflow is called a 'case assignment' message. There is one specific 'case assignment' message for each of the four activities:

Activity Case assignment message

- ∞ Request for cancellation CustomerPaymentCancellationRequest message
- ∞ FIToFIPaymentCancellationRequest message
- ∞ Request for modification RequestToModifyPayment message
- ∞ Unable to apply UnableToApply message
- ∞ Claim non receipt ClaimNonReceipt message

## 4.2.2. Case Identification

The case creator must assign an identification number to the case. This unique identification will be repeated in all messages related to this case by all parties involved in the workflow.

## 4.3. Rules

## 4.3.1. Uniqueness of the Case Identification

The identification of a case must be unique for the case creator.

The case creator must assign the case identification in such a way that it ensures uniqueness. For example, if a sequential number is assigned to each case, the range of numbers should be large enough to avoid ambiguity when restarting the sequence. A simple approach is to combine a date followed with a sequential number (For example, 20090303000001).

To further enhance the uniqueness of this identification, the message schema mandates the presence of the case creator (identified as a party or an agent). The case creator party or agent should be identified through elements that allow for full straight through processing (like a BIC or a clearing system identification). To avoid misunderstanding, the creator identification should be used in all communication.

While the identification and creator of a case stay the same in all the messages pertaining to the same investigation, each message has also its own identification called the Assignment Identification. It is a good practice to choose an assignment identification which is distinct of the one for the case.

## 4.3.2. The 'No By-pass' Rule

The 'no by-pass' rule specifies that no party involved in the original payment transaction can be bypassed in the exceptions and investigations workflow. It also specifies that all parties involved in an investigation workflow must be kept informed of the status of the investigation at all times. The rule is explained below.

Each workflow specifies the parties to which a case can be assigned. For example, a request for cancellation case assignment follows the route of the payment instruction (from instructing party to instructed party), while the unable to apply case assignment travels in the opposite direction (from the instructed party to the instructing party).

The following table summarises the direction of the various investigation activities:

| Activity                 | Case Assignment Message                                                                                    | Case Assigner                                                       | Case Assignee             |
|--------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------|
| Request for cancellation | ∞ CustomerCancellationRequestPay ment message (C2B space), ∞ FIToFICancellationRequest message (B2B Space) | Instructing party                                                   | Instructed party/creditor |
| Request for modification | RequestToModifyPayment message                                                                             | Instructing party                                                   | Instructed party/creditor |
| Unable to apply          | UnableToApply message                                                                                      | Instructed party/ creditor, Instructing party for statement queries | Instructing party         |
| Claim non receipt        | ClaimNonReceipt message                                                                                    | Instructing party                                                   | Instructed                |

party

Debtor

Debtor Bank

Creditor Bank

## This diagram illustrates the different possibilities:

<!-- image -->

As stated in the outset, the 'no by-pass' rule specifies that no party involved in the original payment transaction can be by-passed in the exception and investigation workflow. It also specifies that all parties involved in an investigation workflow must be kept informed of the status of the investigation at all times. It means that:

- ∞ each time a case is assigned to another party, the party must notify this new assignment to its case assigner. This Notification Of Assignment message must also be forwarded to the case creator
- ∞ the Resolution Of Investigation message must be sent by the party solving the investigation to the case assigner. This Resolution Of Investigation message must be forwarded by all preceding case assignees to their respective case assigners until it reaches the case creator

The 'no by-pass' rule ensures that all the parties involved in the payment transaction are aware of the changes caused by an exceptions and investigations workflow. This way every party will have an opportunity to contribute to the investigation and more importantly to make the necessary accounting adjustments where necessary. As returns are outside the remits of exceptions and investigations, it is up to the participants' established practices to govern how the returns are routed. However participants should bear in mind the impact of not observing the no by-pass rules on the account level and choose the routing with care.

## Clarification in the case of a "transparent Automated Clearing House"

When an Automated Clearing House (an ACH) is "transparent" in the underlying payment instruction, the "No By-pass" rule is still applicable, but the case assigner could assign the case directly to the counterparty within the ACH. However, it is left up to the bank on how to handle the routing of the exception and investigation message in case of an ACH involvement:

- ∞ involve the ACH as a case assignee in the Investigation process, although the ACH is not identified in the payment instruction
- ∞ by-pass the ACH, and route the exception and investigation query directly to the counterparty within the ACH for the payment instruction

In both cases, the route to be followed, in the Exceptions and Investigations workflow, needs to be multilaterally agreed between the parties involved in the ACH payment instruction.

## 4.3.3. Modifying 'Amount of Money' and 'Currency'

The Request To Modify Payment message must never be used to increase the amount of the original payment instruction.

To increase the amount the agent should simply send a payment to make up the shortfall or to cancel the original payment and re-send a payment with the correct amount.

Equally, the Request To Modify Payment message must never be used to modify the currency of the original payment instruction. If the currency is wrong, use the Request To Cancel Payment message to cancel it and issue and a new payment instruction.

## 4.3.4. Contingency for Missing Response

An assignment may go astray. An investigating agent may have overlooked an assignment. To safeguard against such an event, this service has put in place three features. These are:

## 1. The Case Status Report and Case Status Report Request messages

This is made up of a pair of complementary messages: one used to ask for a status of the assignment and another used to reply to the inquirer (who is also the assigner). For details, the reader should refer to the appropriate chapters on these two messages. These two messages should be used rarely. Participants of an investigation should observe the service level and act on the assignment promptly, thus providing an appropriate response as quickly as possible, preferably within 24 hours of receiving the assignment.

## 2. The MINE Acknowledgement

Each time an agent re-assigns the case to another agent, the agent also sends a notification of case assignment in the opposite direction to inform the upstream agent. This propagation continues and eventually all upstream agents know the identity of the case assignee.

When the agent does not re-assign the case, this agent is not required to send a Notification Of Case Assignment. The penultimate assigner/agent has to assume that the message has got to the destination safely. However this may not be always true. It is then useful for the agent who takes up the case to send a Notification Of Case Assignment with the justification code MINE, meaning Mine Investigation Case, to its case assigner to acknowledge the fact that it has received it and will act on it without further re-assignment. This Notification Of Case Assignment should be routed back to the case creator to inform all parties in the investigation case about the latest status. This notification is useful when a correction may take a long time, such as the asking for the authorisation to debit from the account whose owner may take a while to verify the details before responding. This saves the assigner from sending out a chaser unnecessarily. In the worse event where a chaser becomes really necessary, having previously received the notification will eliminate the doubt that the message may have been lost during the transmission.

It is possible that a correction or cancellation can be done quickly. In this case a Resolution Of Investigation may be returned immediately without much delay and therefore the MINE notification may be skipped.

## 3. The ODUE (overdue) status in response to a Case Status Report Request message

If an assigner does not get any response to a Case Status Report Request message, the assigner may put the case into an ODUE (overdue) status. This means that the agent decides to follow up the investigation manually and outside the normal process. It is envisaged that the case will be escalated to the relevant relationship manager for follow-up actions.

An agent may put a case into ODUE status if the investigation has taken longer than considered reasonable. Agents decide individually for themselves what a reasonable length of time is between opening a case and reaching a resolution. When an agent puts a case into the ODUE state, it is not required to inform other

Investigation Agent A

Investigation Agent B

1. Case assignment

Investigation Agent C

parties in the investigation chain. If the case has been assigned to it by another party, this assigner may find out only when it asks for a status. It is up to individuals to handle their case files the way they want.

Once a resolution is found a Resolution Of Investigation can be sent out. The case status can then move from the ODUE to the CLSD state.

## 4.3.5. Case Management

This section describes the generic workflow and the logical sequence of activities in the exceptions and investigations message set. 7. Notification of case

## 4.3.5.1. Main Scenario

9. Notification of case

8. Notification of case assignment(MINE)

Step 1: A assigns a case to B: A case is assigned to another party by sending one of the four case assignment messages:

<!-- image -->

1. Payment Cancellation Request,
2. Request To Modify Payment,
3. Unable To Apply or
4. Claim Non Receipt.

When a case is assigned to a case assignee, the case assignee must first check the validity of the assignment. The assignment is valid if the following two conditions are met:

1. the case assignee can retrieve the underlying payment instruction (the instruction under investigation) and this instruction has not been rejected or cancelled

assignment(MINE)

2. the assignee is entitled to investigate the underlying payment instruction such as a request for cancellation assigned by the creditor agent to the debtor does not make sense. Generally speaking, one party can assign a case to another party (thus making the former the assigner and the latter the assignee) if the underlying instruction was exchanged between the same two parties

If the assignment is valid, the case assignee must check that there is no other case open on this underlying instruction.

If there is no other case open for the same payment instruction, the case assignee must accept the case. It is assumed that the assignee accepts the assignment and thus it is not necessary for the assignee to send a message to confirm acceptance except for the last agent in the assignment chain. (See above description on MINE Acknowledgement).

If there is another case open on the same payment instruction, the case assignee can request the closure of one of the open cases. This is achieved by sending a Resolution Of Investigation message with the identification of the case to be closed.

If the assignment is not valid, it must be rejected. This is achieved by sending a Reject Investigation message to the case assigner with the adequate rejection reason as detailed in the message (See Reject Investigation message documentation).

If the case assignee does not have enough information to retrieve the underlying instruction, it can request a copy of the original instruction (see the Request For Duplicate message as detailed below will therefore be used).

Step 2: B assigns the case to C: If the case assignee is not able to resolve the case and assumes the next party is able to resolve the case, the case assignment message is forwarded to the next party in the payment instruction processing chain.

Step 3: B sends a Notification Of Case Assignment to A: After assigning the case to the next party, B informs A of the new assignment of the case.

Step 4: C assigns the case to D.

Step 5: C sends a Notification Of Case Assignment to B: After assigning the case to the next party, C informs B of the new assignment of the case.

Step 6: B forwards the Notification Of Case Assignment to A: B informs A of the new assignment of the case to D.

Step 7, 8 and 9 : D sends a Notification Of Case Assignment to C: D informs C that it will do the investigation (modification or cancellation) and the notification is forwarded to the case creator.

Step 10: D sends a Resolution Of Investigation to C: After solving the case, D sends a Resolution Of Investigation to C.

Step 11: C forwards the Resolution Of Investigation to B.

Step 12: B forwards the Resolution Of Investigation to A.

## 4.3.5.2. Cancel Case Assignment Scenario

This workflow can be initiated by the case assigner wanting to stop the processing of a case. It must be answered with a Resolution Of Investigation message expressing a positive or negative answer.

The case cancellation must be forwarded by all subsequent case assignees until it reaches the end-point which is the party who is the last in the chain of case assignments and hence have the duty to act on the case. If the first Cancel Case Assignment message is sent by the case creator, it will result in the case being cancelled. If it is sent by an intermediate assigner, only the assignment initiated by this party (and their potential subsequent assignments) will be cancelled.

Investigation Agent A

Investigation Agent B

Investigation Agent C

1. Case assignment: Unable to

<!-- image -->

- Step 1: D assigns an Unable To Apply case to C.
- Step 2: C is not able to solve the problem and re-assigns a case to B.

Step 3: C notifies D about re-assigning the case to B.

- Step 4: D solves the problem internally and requests the cancellation of the previous assignment by sending a Cancel Case Assignment message to C.
- Step 5: As C has re-assigned the Unable To Apply to B, C forwards the case cancellation request to B.
- Step 6: C notifies D about the re-assignment.
- Step 7: B replies C with a Resolution Of Investigation message. Depending on the result of the request, the Resolution Of Investigation will contain an element AssignmentCancellationConfirmation set to 'yes' (cancellation confirmed) or 'no' (cancellation rejected).
- Step 8: C forwards the Resolution Of Investigation to D.

Investigation Agent A

Investigation Agent B

Investigation Agent C

## 4.3.5.3. Case Management with Cascading Workflows

This section describes a more complex type of process. The figure below highlights the use of:

- ∞ a Notification Of Case Assignment by an agent to say that it is taking up the case or that the case is 'MINE'
- ∞ an intermediate Resolution Of Investigation by an agent to inform the parties about the imminent arrival of a new workflow to solve the case, through the Re-Open of the case

These two points are shown in the illustration below.

(MINE)

8. Resolution of investigation (CWFW I

1 20. Resolution of investigation (CNCL) |

(FTHI)

<!-- image -->

We look at a specific example of an Unable To Apply workflow. This problem is expected to come from the creditor's side as it is due to either an error in sending the payment to the wrong recipient or a lack of sufficient information for the creditor to reconcile the accounts.

Referring to the illustration on cascading workflows, the investigation is kicked off by the creditor, the agent D.

Step 1, 2, 3, 4, 5 and 6 : These steps follow the convention already described in the previous section. Briefly, agent D raises the case and assigns it to agent C. The case is successively re-assigned to agent B and A. Each re-assignment triggers a series of notification messages.

Step 7: Agent A decides that it is the one who should solve the case and not to re-assign it further. It then sends a Notification Of Case Assignment to B, with the code MINE which stands for Found Investigating Agent. This message confirms to agent B that the message has been received and the case is being dealt with. The forward to the case creator of this Notification Of Case Assignment is not illustrated on this scenario, but must be executed.

Step 8: At this point agent A has two choices, which are either to modify or to cancel the payment. In either case, it is useful for agent A to indicate to the other investigating parties what it intends to do. This can be done by a Resolution Of Investigation that carries the code CWFW (cancellation will follow) or MWFW (modification will follow).

The use of an intermediate resolution message makes the flow more coherent with the general concept that an assignment in one direction should bring about a resolution in the opposite direction. This intermediate resolution message ensures that the state-transition fits into the overall concept.

Step 9 and 10: The resolution message is simply propagated up to the end of the chain. For the follow-up workflow described below, the case identification used in Steps 1 to 10 is reused, with the CaseReopenIndicator flag set to true. This allows all parties to link the initial workflow to the follow-up workflow.

Step 11, 12, 13, 14, 15 and 16: These steps follow the logic set out in the previous example.

Step 17: This step is similar to Step 7 where agent D decides that it is able to execute the request without further re-assigning it. The forward to the sender who reopened the original case of this Notification Of Case Assignment is not illustrated on this scenario, but must be executed.

Step 18, 19 and 20: The natural propagation of a resolution which will result in the closure of the case.

Investigation Agent A

Investigation Agent B

Investigation Agent C

## 4.3.5.4. Request to Modify may entail Cancellation and Re-pay

For a request to modify a payment some banks may prefer to cancel the whole payment and re-issue the payment. In this case it is quite possible to have a workflow that starts off as a Request To Modify Payment and being turned into a Payment Cancellation Request Message in mid-stream by another agent as illustrated below. assignment(DTAU)

However, an intermediate agent should only transform a modification request into a cancellation request, if a case assignee needs to initiate a cancellation workflow to fulfil the requirements of the modification request. In this case, the intermediate agent needs to send back a Notification Of Case Assignment, with the status CNCL, to indicate to the case creator that the modification request has been transformed into a cancellation.

For example, if the modification is to alter the "Debtor", the "Last Settlement Agent" or the "Intermediate Settlement Agent", and the instruction has already been forwarded along, the case assignee has to cancel the initial request if the modification means routing the payment through a different settlement route. Corrected payment initiated

By the same token successive Resolution Of Investigation messages may carry a different confirmation status depending on the assignment between the two adjacent parties. This is also demonstrated below.

<!-- image -->

Investigation Agent A

Investigation Agent B

Investigation Agent C

## 4.3.5.5. Additional Payment Information &amp; Resolution of Investigation

&lt;

K

The Additional Payment Information message provides elements that are usually not reported in a statement or advice message, for example full remittance information or identification of parties other than the account servicing institution and the account owner. It complements information about a payment instruction that has already been received, in the form of an entry or copy of the original payment instruction. 5. Notification of case

This message is sent by the account servicing institution to the account owner. There can be two events that prompt an account servicing institution to send this type of message to an account owner:

- ∞ a response to an Unable To Apply assignment from the account owner.
- ∞ a result of a request from further upstream to modify the payment information. (The latter case excludes any changes that affect the transaction such as amount of money to be paid.)

It is reasonable to assume that when the account servicing institution uses an Additional Payment Information message, it is confident that the extra information given will resolve the problem. Therefore it is not necessary for the account servicing institution to wait for a positive resolution from the account owner before closing the case. This is illustrated below.

<!-- image -->

## 4.3.5.6. Replacing a Case Status Report with a Resolution of Investigation

When an agent does not get a response from the assignee within the expected time, the agent may send a Case Status Report Request. The assignee, upon receipt of such a request is required to reply with a specific message called Case Status Report.

If the assignee has found an answer to the investigation when the status request arrives, it may skip sending the Case Status Report and send out a Resolution Of Investigation with the appropriate resolution.

## 4.3.5.7. Returns &amp; Rejection of Incoming Funds

Monies may be returned to the debtor because of a cancellation or modification requesting to lower the amount payable.

This is normally handled by the payments department and considered outside the remits of Exceptions and Investigations.

Investigation Agent A

Investigation Agent B

However in this release of Exceptions and Investigations messages, the agent may optionally provide details on the instruction that will be related to the resolution of the investigation. The following Resolution Related Information elements are available in the Resolution Of Investigation message:

- ∞ the amount to be returned/reversed (Interbank Settlement Amount)
- ∞ the date the return (in case of credit transfers) /reversal (in case of direct debits) is or will be made (Interbank Settlement Date) and
- ∞ the channel through which the return/reversal will be sent (Clearing Channel)

See section on Resolution Of Investigation for more details.

## 4.3.5.8. Request for Duplicate

This scenario can be initiated by a case assignee that does not have enough information to retrieve the underlying instruction. In such a case, the case assignee can request a copy of the original instruction. This is achieved by sending a Request For Duplicate message. It will be answered by a Duplicate message.

<!-- image -->

Step 1: The case assigner assigns the case to the case assignee.

Step 2: The case assignee needs more information and requests a duplicate of the payment instruction referenced in the case using the Request For Duplicate message.

Step 3: The case assigner returns a duplicate of the payment instruction using a Duplicate message. Note that this message can be used to return duplicates of a payment instruction in any format such as XML, FIN, EDIFACT and proprietary formats.

Step 4: The case assignee manages to solve the case and sends back a Resolution Of Investigation

## 4.3.5.9. Concurrent Workflows - Principle

Concurrent workflows are related to the scenario where two different case assignments that pertain to the same payment instruction are generated together at the same time. A case assignee must check if an incoming assignment is not a duplicate.

The principle which has been established is to select one of the two assignments for investigation and turn away the other assignment with an informative message.

Concurrent workflows are rare, but it is part of the best practices to have a common approach to deal with the situation when a concurrent workflow arises to avoid confusion. The table below provides for the precedence to apply in case two concurrent workflows have been received by an assignee.

| When the assignee Has     | Unable To Apply                         | Claim Non Receipt                       |
|---------------------------|-----------------------------------------|-----------------------------------------|
| Request To Modify Payment | Continue with Request To Modify Payment | Continue with Request To Modify Payment |
| Request To Cancel Payment | Continue with Request To Cancel Payment | Continue with Request To Cancel Payment |
| Unable To Apply           | N/A                                     | Continue with Unable To Apply           |

Investigation Agent A

Investigation Agent B

Investigation Agent C

## The diagram below illustrates the principles as documented above:

K

a. Unable to apply

<!-- image -->

a. Request to modify / cancel b. Request to modify / cancel

c. Claim non receipt c. Unable to apply

## 5. Description of BusinessActivities

This section presents the different BusinessActivities within each BusinessProcess. The BusinessActivities of a process are described with activity diagrams.

## Legend

<!-- image -->

<!-- image -->

| Symbol   | Name                 | Definition                                                   |
|----------|----------------------|--------------------------------------------------------------|
|          | Start Point          | Shows where the lifecycle of the business process commences. |
|          | End Point            | Shows where the lifecycle of the business process may ends.  |
|          | Lozenge (or diamond) | Indicates that a choice between several actions can be made. |
|          | Bar                  | Indicates that several actions are initiated in parallel.    |

Debtor

Debtor Agent

Start

## 5.1. Payment

Purchase

This section aims at describing the normal flow for a payment activity.

## Main Activities

Creditor

Invoice

For Purchase

This diagram sets the main activities, which are further detailed in the subsequent sections.

Remittance Advice

Remittance Information

<!-- image -->

Creditor Agent

## Payment

This diagram lists the points in the processing of a normal payment where exceptions and investigations may occur:

<!-- image -->

## 5.2. Possible Transitions

The diagram below shows the potential transitions between the different exceptions and investigations activities.

For example, a beneficiary claims non-receipt of funds may be later transformed into a request for cancellation.

All flows are detailed in the subsequent sections of the BusinessTransactions

<!-- image -->

## 6. BusinessTransactions

This section describes the message flows based on the activity diagrams documented above. It shows the typical exchanges of information in the context of a BusinessTransaction.

## 6.1. Claim Non Receipt

A claim non receipt case is initiated by the originator of the payment instruction (usually the debtor). This workflow excludes the use by a creditor to prompt its financial institution about the absence of a payment.

The workflow considers that the party expecting a payment contacts its debtor if this payment is missing. The debtor creates a case and assigns the case to its first agent by sending a Claim Non Receipt message. The case assignee checks the status of the received payment instruction. The payment instruction can be pending, rejected, cancelled, or executed:

- ∞ If the payment instruction is pending, the case assignee may confirm the eventual execution of this instruction with a Resolution Of Investigation message. The case assignee sends a Resolution Of Investigation message to the case assigner. This message contains the code IPAY (PaymentInitiated) as the status confirmation.
- ∞ If the payment instruction has been rejected or cancelled, the case assignee notifies the rejection or cancellation with a Reject Investigation message.
- ∞ If the payment instruction has been executed: the case assignee checks the execution status. Different actions can be taken:
- -If the payment instruction was correctly executed and the payment is 'not on us', the case chain (by means of a Claim Non Receipt message).
- assignee forwards the claim non receipt case to the next agent in the payment processing This message is similar to the one received: the case identification remains the one

assigned by the case creator.

The identification of the underlying instruction may be different: it must be the identification used between the case assigner and the case assignee. This message must be followed by a Notification Of Case Assignment sent to the case assigner. This message simply contains the case identification and the code FTHI (FurtherInvestigation) as justification of forwarding.

- -If the payment instruction execution was correctly executed and the payment is 'on us', the case assignee returns a Resolution Of Investigation message with the code CONF (ConfirmationOfPayment) as the confirmation status. This message may carry the identification of the payment in the CorrectionTransaction component. Following reception of this message, the case assigner should close the case.
- -If the payment instruction was incorrectly executed, the case assignee will initiate a Request To Cancel Payment or a Request To Modify Payment. When a cancellation is required, the case assignee initiates a correct payment and returns its identification to the case assigner with a Resolution Of Investigation message (within the CorrectionTransaction component). This Resolution Of Investigation message will carry the code IPAY (PaymentInitiated) as the confirmation status. The Resolution Of Investigation message will be forwarded up to the case creator. When a modification is required, the case assignee sends a Request To Modify Payment message to the next party.

A Notification Of Case Assignment message must be sent to the initial case assigner. This message simply contains the case identification and the code MODI (RequestToModify) as the justification of forwarding.

Debtor

Debtor Bank

LILL

Creditor Bank

## 6.1.1. Claim Non Receipt With Missing Information

1 NotificationOfCaseAssignment (FTHI)

ResolutionOfInvestigation (INFO)

Diagram 1: A workflow related to missing information

<!-- image -->

Debtor

Debtor Bank

Creditor Bank

## 6.1.2. Claim Non Receipt With Request To Modify

RequestToModify

<!-- image -->

NotificationOfCaseAssignment (FTHI) /

NotificationOfCaseAssignment (MODI)

Optional

NotificationOfCaseAssignment (MINE)

ResolutionOfInvestigation (MODI)

Diagram 2: A workflow involving a request to modify

Debtor

Debtor Bank

Creditor Bank

## 6.1.3. Claim Non Receipt With Request To Cancel

&gt;

<!-- image -->

1 NotificationOfCaseAssignment (CNCL)

I flotific ationOfCaseAssignment (DTAUL

¡Optional

NotificationOtCaseAssignment (MINE)

ResolutionOfInvestigation (IPAY)

Diagram 3: A workflow involving a request to cancel (and subsequently authorisation to debit)

DebitAuthorisationRequest

## 6.2. Request for Cancellation

This BusinessTransaction describes the workflow of a payment cancellation request.

## 6.2.1. Multiple or Single Payment Cancellation Request

This scenario describes the workflow of a cancellation request identified with a unique case identification at message level.

The party willing to cancel a payment instruction that is the debtor or debtor agent for a credit transfer or any other agent involved in the payment instruction processing chain determines the case identification and the information necessary to identify the underlying payment. The cancellation request has to follow the same process as the original payment instruction.

The party cancellation the payment instruction sends either a Customer Payment Cancellation Request message, when cancelling a (partial) underlying initiation instruction, or a FI To FI Payment Cancellation Request message, when cancellation an interbank instruction to its case assignee.

The cancellation workflow covers the below possible combinations:

- ∞ Cancellation of multiple groups/messages
- ∞ Cancellation of one group/message
- ∞ Cancellation of one payment information block within a group/message
- ∞ Cancellation of several payment information blocks (or batches) within single or multiple groups/ messages
- ∞ Cancellation of one transaction within a group/payment information block
- ∞ Cancellation of multiple transactions within single/multiple groups/messages or payment information blocks

In response to a cancellation request, the case assignee well allows respond with a Resolution Of Investigation message.

## 6.2.2. Usage of the Case in the Cancellation Request

This case component uniquely identifies the case associated with the cancellation request and the creator of the case end-to-end. The content is defined by the case creator when creating the case and must be forwarded unchanged throughout the full life cycle of the investigation until the case is closed.

The use of the case component will be mandated within the Exception and Investigation workflow, but until the implementation of the workflow is widespread, the component will remain optional in the message. Additionally, the functionality of the current messages integrates requirements from the original cancellation request messages defined in the Payments Initiation and Payments Clearing and Settlement business areas. Those requirements go beyond the Exceptions and Investigations workflow, and the case component has been made available at several levels in the message: the Assignment, the Group, the PaymentInformation and the Transaction levels.

The case component requires additional usage rules as following:

- ∞ In the Resolution Of Investigation message, the case component has to be used at the same level as in the Payment Cancellation Request messages, when present.
- ∞ Within the Exceptions and Investigations typical workflow, the case is mandatory at the message level (on the assignment). However, the cancellation functionality has been extended to a single transaction, a complete single group or a complete single payment information block or batch. When cancellation a full message or a full payment information block, the cancellation may be successful, partially successful or fully rejected. In the latter, the case assignee must provide further details on the transactions for which the cancellation has been successful and for those that have been rejected. In case of partial rejection no case may be forwarded and the case creator will have to reissue a new payment cancellation request for each individual transaction.

Further details on how it should be implemented are provided in both Payment Cancellation Request messages description.

## 6.2.3. Payment Cancellation Using Case at Message Level

The party requesting for the payment cancellation may provide one of the following cancellation reasons:

- ∞ AGNT IncorrectAgent Agent in the payment workflow is incorrect.
- ∞ CURR IncorrectCurrency Currency of the payment is incorrect.
- ∞ CUST RequestedByCustomer Cancellation is requested by the debtor.
- ∞ CUTA CancelUponUnableToApply Cancellation requested because an investigation request has been received and no remediation is possible.
- ∞ DUPL DuplicatePayment Payment is a duplicate of another payment.
- ∞ UPAY UnduePayment Payment is not justified.

When the message reaches the case assignee:

- ∞ the payment instruction may have been successfully processed,
- ∞ the payment instruction may be pending execution,

or

- ∞ the cancellation cannot be performed, for example the cancellation is outside the agreed limits or when the payment instruction has been unsuccessfully processed.

If the payment has been successfully processed, the case assignee must, in case of single transaction cancellation:

- ∞ forward the Payment Cancellation Request message to the next agent. The Payment Cancellation Request message is sent to the next agent in the payment chain. The current agent becomes the case assigner and the next agent in the payment chain becomes the case assignee. The message sent carries over some details from the one received, notably, the case identification and the reason for the cancellation remain the same. The identification of the underlying payment, however, may be different. The agent should always refer to the payment identification that has been used between the it (the case assigner at the moment) and the case assignee.
- ∞ reply with a Notification Of Case Assignment message to the case assigner. This message contains the case identification and CNCL (Case has been forwarded to the next party for cancellation) as the justification of forwarding.

If the payment is still pending execution, the case assignee:

- ∞ can perform the cancellation,

and

- ∞ sends a positive Resolution Of Investigation message to its case assigner. This message should contain the case identification and CNCL (a requested cancellation is successful) as the code for confirming the investigation

If the request for cancellation can only be process partially, the Resolution Of Investigation message is used to indicate the partial execution in the status confirming the investigation. In this case, the case opened for the group cancellation must be closed, and a new payment cancellation request must be issued with a new case for each individual payment transaction within the group that could not be cancelled. Details on the individual cancellation status of the transactions must be provided in the Cancellation Details component of the Resolution Of Investigation message in case of partial cancellation.

Successfully cancelled transactions details may be omitted in the Cancellation Details.

If the request for cancellation cannot be performed, the Resolution Of Investigation message is used to reject the request.

This message should then contain one of the following cancellation status reason codes for a negative resolution.

Debtor

Debtor Bank

Creditor Bank

| Code   | Code Name        | Definition                                                                                   |
|--------|------------------|----------------------------------------------------------------------------------------------|
| LEGL   | LegalDecision    | Reported when the cancellation cannot be accepted because of regulatory rules.               |
| AGNT   | AgentDecision    | Reported when an agent refuses to cancel.                                                    |
| CUST   | CustomerDecision | Reported when the cancellation cannot be accepted because of a customer decision (creditor). |

When the case is assigned to the creditor agent and the payment has already been processed successfully, the last assignee must send a Debit Authorisation Request to the creditor.

This message must contain the case identification as in the Request To Cancel Payment. The underlying payment identification must be the identification appearing on the statement or the credit advice sent to the creditor. The reason for cancellation must be identical to the one received in the Request To Cancel Payment message.

A Notification Of Case Assignment message sent in response to the case assigner. This message will indicate that a request for debit authorisation has been issued to the creditor through the justification code DTAU (case has been forwarded to obtain authorisation to debit).

The creditor sends a Debit Authorisation Response to the final agent. This message must contain a Debit Authorisation Indicator set to Yes or No, depending on the decision of the creditor.

This response allows the final agent to issue a Resolution Of Investigation message to the preceding case assigner and iteratively up to the case creator.

When the response is positive, the confirmation of the Resolution Of Investigation should carry the code CNCL (Used when a requested cancellation is successful). When the response is negative, the Resolution Of Investigation should convey the creditor's refusal by using the code CUST (the cancellation cannot be accepted because of a customer's, in other words the creditor's decision) in the RejectedCancellation field. In the latter case, the agent can provide further explanation of up to 140 characters together with the refusal code characters together with the refusal code.

<!-- image -->

Diagram 4: A basic workflow of Request For Cancellation

## 6.3. Request for Modification

## 6.3.1. Modification of the Payment Instruction

This scenario describes the workflow when a payment instruction needs to be modified.

The case creator creates an investigation case and assigns it by sending a Request To Modify Payment message. The Request To Modify Payment message stipulates the elements that are to be modified.

The following table summarises the information that can be modified within a payment instruction. The second column indicates the ultimate party within the payment instruction processing chain that may receive the Request To Modify Payment message:

| Information Modified           | Ultimate Party                                   |
|--------------------------------|--------------------------------------------------|
| End-To-End Identification      | Up to the last instructed party                  |
| Transaction Identification     | Up to last instructed agent                      |
| Instruction Identification     | Up to next instructed party or agent             |
| Payment Type Information       | Up to next instructed party or agent             |
| Requested Execution Date       | Up to first instructed agent                     |
| Requested Collection Date      | Up to the last instructed agent                  |
| Interbank Settlement Date      | Up to last instructed agent                      |
| Interbank Settlement Amount    | Up to last instructed agent                      |
| Debtor Agent Account           | Up to last instructed agent (debtor or creditor) |
| Debtor                         | Up to last instructed party (debtor or creditor) |
| Debtor Account                 | Up to last instructed party (debtor or creditor) |
| Settlement Information         | Up to next instructed agent                      |
| Creditor Agent Account         | Up to last instructed agent (debtor or creditor) |
| Creditor                       | Up to last instructed party (debtor or creditor) |
| Creditor Account               | Up to last instructed party (debtor or creditor) |
| Remittance information         | Up to last instructed party (debtor or creditor) |
| Purpose                        | Up to last instructed party (debtor or creditor) |
| Instruction for Debtor Agent   | Up to debtor agent                               |
| Charge Bearer                  | Up to last instructed party (debtor or creditor) |
| Instruction For Creditor Agent | Up to creditor agent                             |
| Instruction For Next Agent     | Up to next instructed agent                      |

On the case assignee's side, the following situations may occur:

- ∞ The payment instruction has been cancelled, rejected or returned. This means the modification cannot take place and the case assigner will be notified through the Reject Investigation message.

Debtor

¡ Optional

Debtor Bank

Creditor Bank

- ∞ The payment instruction has been successfully processed. The case assignee will forward the Request To Modify Payment message to the next instructed party, for example if the remittance information needs to be modified. The case assignee also sends a Notification Of Case Assignment message to the case assigner/case creator.
- ∞ The payment instruction is still pending execution at the case assignee and the modification can take place. The case assignee sends a Resolution Of Investigation message to the case assigner with the confirmation status set to value MODI (modified as per request).
- ∞ The payment instruction is still pending execution at the case assignee but the case assignee prefers not to modify the payment instruction (such as for security reasons) and opts for a cancellation of the original payment instruction. The case assignee sends a Resolution Of Investigation message to the case assigner with reject status (rejected modification) and with the code UnableToModifySubmitCancellation (UM21) as further instruction.
- ∞ The payment instruction is still pending execution at the case assignee and one of the elements cannot be successfully modified. The whole Request To Modify Payment is rejected. The case assignee sends a negative Resolution Of Investigation message with the reject modification. 'Rejected Modification' must have one or more of the modification rejections codes (see detailed description in the message structure documentation). If several elements of the request cannot be modified, then several occurrences of the codes can be used.

## 6.3.1.1. Request To Modify ResolutionOfinvestigation (INFO)

Diagram 5: A basic workflow of Request For Modification

<!-- image -->

## 6.3.2. Modification of the Instruction Amount

When the Request To Modify Payment message concerns changing the amount in the payment instruction, the following actions must be taken:

Debtor

¡ Optional

Debtor Bank

Creditor Bank

- ∞ if the amount of the original payment instruction is higher than the amount to be effectively paid to the creditor, the case assignee performing the modification must return the funds to the case assigner. This means that in some circumstances, the final agent will have to request debit authorisation from the creditor (when the payment instruction has been successfully processed up to the creditor).

Some banks prefer to receive confirmation and details of the returns or reversals from the case assignee. A case assignee can provide such details by filling out the 'Related Resolution Information' field in the Resolution Of Investigation message, in which the details of the related return and/or reversal of the funds are provided.

- ∞ if the amount of the original payment instruction is lower than the amount to be effectively paid to the creditor, the case creator must NOT use this message to modify the amount upward but instead send a new instruction to pay the difference.

The latter action is not considered as an investigation case.

## 6.3.2.1. A Workflow of a Request to Modify (lower) the Amount

ResolutionOfInvestigation (MODI)

<!-- image -->

Diagram 6: A workflow of a request to modify (lower) the amount

## 6.3.3. Case Assignment to the Final Agent Scenario

When the Request To Modify Payment message is assigned to the final agent in the payment chain (creditor agent for credit transfers or debtor agent for direct debits), and when the payment instruction processing has been completed, there are three possible outcomes:

Debtor

¡Optional

Debtor Bank

Creditor Bank

1. the Request To Modify Payment does not contradict the payment instruction: the modified elements, for example remittance information are forwarded to the creditor. The Request To Modify Payment message is used for this forwarding.
2. the Request To Modify Payment contradicts the payment instruction (for example the wrong creditor has been credited): this requires full debit authorisation from the creditor. A Debit Authorisation Request must be sent to the creditor (please refer to the Request To Cancel Payment workflow for more details). This scenario is only applicable for credit transfers.
3. the Request To Modify Payment partially contradicts the payment instruction (for example amount paid in excess): this requires partial debit authorisation from the creditor. A Debit Authorisation Request must be sent to the creditor (please refer to the Request To Cancel Payment workflow for more details). This scenario is only applicable for credit transfers.

## 6.3.3.1. Request for Modification Followed by a Cancellation request

ResolutionOfInvestigation (MODI)

Diagram 7: Request for modification followed by a cancellation request

<!-- image -->

## 6.4. Unable to Apply

The unable to apply scenario covers two main situations:

1. a payment instruction has been received, but incorrect/missing payment information prevents its processing (unable to execute);
2. a payment instruction or entry has been received, but incorrect/missing payment information prevents its reconciliation (unable to apply).

The unable to apply scenario describes how to request additional information when a party has received a payment instruction and is unable to apply or execute.

The party that is unable to apply or execute a payment instruction creates an investigation case and assigns the case to its instructing party by sending an Unable To Apply message.

Many queries in the Corporate-To-Bank space are related to entries in the bank statements. To allow either the debtor or the creditor to raise an investigation on an cash related item in the statement, additional queries are extending the scope of the regular investigation on a payment instruction.

The table below shows the type of queries that may be requested on statement entries with an indication of which side of the payment chain may initiate the type of query.

| Type of query                | Debit side   | Credit side   |
|------------------------------|--------------|---------------|
| The amount is incorrect!     | Yes          | Yes           |
| Explain the charges!         | Yes          | Yes           |
| What is the payment purpose? |              | Yes           |

The case creator determines the case identification and the information necessary to identify the underlying payment. The underlying payment identification should be one which is meaningful to the case assignee (such as the End-To-End-Identification).

The case creator must indicate the reason for assigning the case.

The Unable To Apply message provides the possibility to specifically indicate the element from the payment instruction that is either missing or incorrect (using the MissingOrIncorrectInformation element). For both incorrect and missing information, a specific list of specific error codes has been defined. The list of codes available is detailed in the UnableToApply message structure.

The case assignee checks the execution of the payment instruction. The result of this check can either be positive (payment instruction executed correctly) or negative (payment instruction executed incorrectly).

If the payment instruction was correctly executed, and if more information is available at the case assignee, the case assignee can send to the case assigner, using an Additional Payment Information message, further details to allow reconciliation. Bear in mind that the Additional Payment Information is used exclusively by the account servicing agent to the account holder. The case assignee can decide to send all the additional information instead of only returning the missing or additional information.

If the payment instruction was correctly executed, and if no further information is available at the case assignee, the case assignee can assign the case by forwarding an Unable To Apply message to the preceding agent in the payment processing chain. The sender is the case assigner and the previous instructing party in the payment processing chain is the case assignee. The case identification remains the same. The identification of the underlying payment should be meaningful to the case assignee (for example the End-To-End Identification of an XML payment instruction).

In the latter case, the case assignee must send a Notification Of Case Assignment message to the case assigner.

If the payment instruction was incorrectly executed, the case assignee can either:

Debtor

Debtor Bank

Creditor Bank

-

- ∞ request the modification of the payment instruction by sending a Request To Modify Payment message to the case assigner,

or

- ∞ request the cancellation of the payment instruction by sending a Resolution Of Investigation message with the code CWFW (CancellationWillFollow) as the confirmation status and by sending a Request To Cancel Payment message afterwards

## 6.4.1. Unable to Apply followed by Sending Additional Information

ResolutionOfinvestigation (MWFW &gt;

NotificationOfCaseAssignment (MODI)

K

ResolutionOfInvestigation (INFO)

Diagram 8: Unable to apply followed by sending additional information

<!-- image -->

Debtor

Debtor Bank

CHIL

Creditor Bank

## 6.4.2. Unable to Apply Followed by a Request for Cancellation

UnableToApply

<!-- image -->

Resolution investigation CHEWS I

NotificationOfCaseAssignment (CNCL)

NotificationOfCaseAssignment (DTAU)

ResolutionOfInvestigation (CNCL)

Diagram 9: Unable to apply followed by a request for cancellation

Debtor

Debtor Bank

Creditor Bank

## 6.4.3. Unable to Apply Followed by a Request for Modification

UnableToApply

<!-- image -->

ResolutionOfinvestigation (MWFW,

NotificationOfCaseAssignment (CNCL)!

NotificationOfCaseAssignment (MODI),

ResolutionOfInvestigation (MODI)

Scenario 9: Unable to apply followed by a request for modification

## 7. Revision Record

|   Revision | Date          | Author       | Description                  | Sections affected   |
|------------|---------------|--------------|------------------------------|---------------------|
|          1 | December 2023 | SWIFT        | Draft version for SEG review | All                 |
|          2 | March 2024    | ISO 20022 RA | Approved version             | All                 |

## Disclaimer:

Although the Registration Authority has used all reasonable efforts to ensure accuracy of the contents of the iso20022.org website and the information published thereon, the Registration Authority assumes no liability whatsoever for any inadvertent errors or omissions that may appear thereon. Moreover, the information is provided on an "as is" basis. The Registration Authority disclaims all warranties and conditions, either express or implied, including but not limited to implied warranties of merchantability, title, non-infringement and fitness for a particular purpose.

The Registration Authority shall not be liable for any direct, indirect, special or consequential damages arising out of the use of the information published on the iso20022.org website, even if the Registration Authority has been advised of the possibility of such damages.

## Intellectual Property Rights:

The ISO 20022 MessageDefinitions described in this document were contributed by SWIFT.  The ISO 20022 IPR policy is available at www.ISO20022.org &gt; About ISO 20022 &gt; Intellectual Property Rights.