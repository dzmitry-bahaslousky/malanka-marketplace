## ISO 20022

## Creditor Payment Activation Request - Maintenance 2023 - 2024

## Message Definition Report - Part 2

## Approved by the Payments SEG on 08 January 2024

This document provides details of the Message Definitions for Creditor Payment Activation Request - Maintenance 2023 2024.

March 2024

## Table of Contents

| 1   | Message Set Overview ...................................................................................................................................... 3   | Message Set Overview ...................................................................................................................................... 3          |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     | 1.1                                                                                                                                                             | List of MessageDefinitions ........................................................................................................................... 3               |
| 2   | pain.013.001.11 CreditorPaymentActivationRequestV11 .................................................................. 4                                        | pain.013.001.11 CreditorPaymentActivationRequestV11 .................................................................. 4                                               |
|     | 2.1                                                                                                                                                             | MessageDefinition Functionality .................................................................................................................. 4                   |
|     | 2.2                                                                                                                                                             | Structure .......................................................................................................................................................... 5 |
|     | 2.3                                                                                                                                                             | Constraints ...................................................................................................................................................... 9   |
|     | 2.4                                                                                                                                                             | Message Building Blocks ............................................................................................................................ 12                |
| 3   | pain.014.001.11 CreditorPaymentActivationRequestStatusReportV11 .................................... 79                                                         | pain.014.001.11 CreditorPaymentActivationRequestStatusReportV11 .................................... 79                                                                |
|     | 3.1                                                                                                                                                             | MessageDefinition Functionality ................................................................................................................ 79                    |
|     | 3.2                                                                                                                                                             | Structure ........................................................................................................................................................ 80  |
|     | 3.3                                                                                                                                                             | Constraints .................................................................................................................................................... 84    |
|     | 3.4                                                                                                                                                             | Message Building Blocks ............................................................................................................................ 87                |
| 4   | Message Items Types .................................................................................................................................... 141    | Message Items Types .................................................................................................................................... 141           |
|     | 4.1                                                                                                                                                             | MessageComponents ............................................................................................................................... 141                  |
|     | 4.2                                                                                                                                                             | Message Datatypes ................................................................................................................................... 234              |

## 1 Message Set Overview

## Introduction

This document describes the Creditor Payment Activation Request message set. It includes the new version of the MessageDefinitions that have been added as part of the maintenance cycle 2023-2024 (See MCR #234) and approved by the Payments Standards Evaluation Group on 08 January 2024.

## 1.1 List of MessageDefinitions

The following table lists all MessageDefinitions described in this book.

| MessageDefinition                                                | Definition                                                                                                                                                                                                                                                                              |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pain.013.001.11 CreditorPaymentActivationRequestV11              | The CreditorPaymentActivationRequest message is sent by the Creditor sending party to the Debtor receiving party, directly or through agents. It is used by a Creditor to request movement of funds from the debtor account to a creditor.                                              |
| pain.014.001.11 CreditorPaymentActivationRequestStatusRepor tV11 | The CreditorPaymentActivationRequestStatusReport message is sent by a party to the next party in the creditor payment activation request chain. It is used to inform the latter about the positive or negative status of a creditor payment activation request (either single or file). |

## 2 pain.013.001.11 CreditorPaymentActivationRequestV11

## 2.1 MessageDefinition Functionality

The CreditorPaymentActivationRequest message is sent by the Creditor sending party to the Debtor receiving party, directly or through agents. It is used by a Creditor to request movement of funds from the debtor account to a creditor.

Outline

The CreditorPaymentActivationRequestV11 MessageDefinition is composed of 3 MessageBuildingBlocks:

- A. GroupHeader

Set of characteristics shared by all individual transactions included in the message.

- B. PaymentInformation

Set of characteristics that applies to the debit side of the payment transactions included in the creditor payment initiation.

- C. SupplementaryData

Additional information that cannot be captured in the structured elements and/or any other specific block.

## 2.2 Structure

| Or   | MessageElement/BuildingBlock <XML Tag>      | Mult.   | Type      | Constr. No.                                      | Page   |
|------|---------------------------------------------|---------|-----------|--------------------------------------------------|--------|
|      | Message root <Document> <CdtrPmtActvtnReq>  | [1..1]  |           | C26                                              |        |
|      | GroupHeader <GrpHdr>                        | [1..1]  |           |                                                  | 12     |
|      | MessageIdentification <MsgId>               | [1..1]  | Text      |                                                  | 13     |
|      | CreationDateTime <CreDtTm>                  | [1..1]  | DateTime  |                                                  | 13     |
|      | NumberOfTransactions <NbOfTxs>              | [1..1]  | Text      |                                                  | 13     |
|      | ControlSum <CtrlSum>                        | [0..1]  | Quantity  |                                                  | 13     |
|      | InitiatingParty <InitgPty>                  | [1..1]  | ±         |                                                  | 13     |
|      | ForwardingAgent <FwdgAgt>                   | [0..1]  | ±         |                                                  | 14     |
|      | PaymentInformation <PmtInf>                 | [1..*]  |           | C5, C7, C8, C9, C10, C13, C14, C23, C25, C6, C29 | 15     |
|      | PaymentInformationIdentification <PmtInfId> | [0..1]  | Text      |                                                  | 21     |
|      | PaymentMethod <PmtMtd>                      | [1..1]  | CodeSet   |                                                  | 21     |
|      | RequestedAdviceType <ReqdAdvcTp>            | [0..1]  |           |                                                  | 22     |
|      | CreditAdvice <CdtAdvc>                      | [0..1]  |           |                                                  | 22     |
| {Or  | Code <Cd>                                   | [1..1]  | CodeSet   |                                                  | 22     |
| Or}  | Proprietary <Prtry>                         | [1..1]  | Text      |                                                  | 23     |
|      | DebitAdvice <DbtAdvc>                       | [0..1]  |           |                                                  | 23     |
| {Or  | Code <Cd>                                   | [1..1]  | CodeSet   |                                                  | 23     |
| Or}  | Proprietary <Prtry>                         | [1..1]  | Text      |                                                  | 23     |
|      | PaymentTypeInformation <PmtTpInf>           | [0..1]  | ±         |                                                  | 23     |
|      | RequestedExecutionDate <ReqdExctnDt>        | [0..1]  | ±         |                                                  | 24     |
|      | ExpiryDate <XpryDt>                         | [0..1]  | ±         |                                                  | 24     |
|      | PaymentCondition <PmtCond>                  | [0..1]  |           |                                                  | 25     |
|      | AmountModificationAllowed <AmtModAllwd>     | [0..1]  | Indicator |                                                  | 25     |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>         | [0..1]  | Indicator |                                                  | 25     |
|      | DelayPenalty <DelyPnlty>                    | [0..1]  | Text      |                                                  | 26     |
|      | ImmediatePaymentRebate <ImdtPmtRbt>         | [0..1]  |           |                                                  | 26     |

| Or   | MessageElement/BuildingBlock <XML Tag>     | Mult.   | Type      | Constr. No.             |   Page |
|------|--------------------------------------------|---------|-----------|-------------------------|--------|
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C15                 |     26 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |                         |     26 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |                         |     27 |
|      | Debtor <Dbtr>                              | [1..1]  | ±         |                         |     27 |
|      | DebtorAccount <DbtrAcct>                   | [0..1]  | ±         | C19, C18                |     28 |
|      | DebtorAgent <DbtrAgt>                      | [1..1]  | ±         |                         |     29 |
|      | DebtorAgentAccount <DbtrAgtAcct>           | [0..1]  | ±         | C19, C18                |     30 |
|      | UltimateDebtor <UltmtDbtr>                 | [0..1]  | ±         |                         |     31 |
|      | ChargeBearer <ChrgBr>                      | [0..1]  | CodeSet   |                         |     32 |
|      | CreditTransferTransaction <CdtTrfTx>       | [1..*]  |           | C20, C21, C22, C28, C30 |     33 |
|      | PaymentIdentification <PmtId>              | [1..1]  | ±         |                         |     37 |
|      | PaymentTypeInformation <PmtTpInf>          | [0..1]  | ±         |                         |     38 |
|      | PaymentCondition <PmtCond>                 | [0..1]  |           |                         |     38 |
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |                         |     39 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |                         |     39 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |                         |     39 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |                         |     39 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C15                 |     40 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |                         |     40 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |                         |     40 |
|      | RequestedExecutionDate <ReqdExctnDt>       | [0..1]  | ±         |                         |     40 |
|      | Amount <Amt>                               | [1..1]  | ±         |                         |     41 |
|      | ChargeBearer <ChrgBr>                      | [0..1]  | CodeSet   |                         |     41 |
|      | MandateRelatedInformation <MndtRltdInf>    | [0..1]  | ±         |                         |     42 |
|      | ChequeInstruction <ChqInstr>               | [0..1]  |           | C11                     |     42 |
|      | ChequeType <ChqTp>                         | [0..1]  | CodeSet   |                         |     43 |
|      | ChequeNumber <ChqNb>                       | [0..1]  | Text      |                         |     44 |
|      | ChequeFrom <ChqFr>                         | [0..1]  |           |                         |     44 |
|      | Name <Nm>                                  | [1..1]  | Text      |                         |     44 |

| Or   | MessageElement/BuildingBlock <XML Tag>        | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | Address <Adr>                                 | [1..1]  | ±       |               |     45 |
|      | DeliveryMethod <DlvryMtd>                     | [0..1]  |         |               |     45 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |     46 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |     46 |
|      | DeliverTo <DlvrTo>                            | [0..1]  |         |               |     46 |
|      | Name <Nm>                                     | [1..1]  | Text    |               |     47 |
|      | Address <Adr>                                 | [1..1]  | ±       |               |     47 |
|      | InstructionPriority <InstrPrty>               | [0..1]  | CodeSet |               |     47 |
|      | ChequeMaturityDate <ChqMtrtyDt>               | [0..1]  | Date    |               |     48 |
|      | FormsCode <FrmsCd>                            | [0..1]  | Text    |               |     48 |
|      | MemoField <MemoFld>                           | [0..2]  | Text    |               |     48 |
|      | RegionalClearingZone <RgnlClrZone>            | [0..1]  | Text    |               |     48 |
|      | PrintLocation <PrtLctn>                       | [0..1]  | Text    |               |     48 |
|      | Signature <Sgntr>                             | [0..5]  | Text    |               |     48 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±       |               |     48 |
|      | IntermediaryAgent1 <IntrmyAgt1>               | [0..1]  | ±       |               |     49 |
|      | IntermediaryAgent2 <IntrmyAgt2>               | [0..1]  | ±       |               |     50 |
|      | IntermediaryAgent3 <IntrmyAgt3>               | [0..1]  | ±       |               |     51 |
|      | CreditorAgent <CdtrAgt>                       | [1..1]  | ±       |               |     52 |
|      | CreditorAgentAccount <CdtrAgtAcct>            | [0..1]  | ±       | C19, C18      |     53 |
|      | Creditor <Cdtr>                               | [1..1]  | ±       |               |     53 |
|      | CreditorAccount <CdtrAcct>                    | [0..1]  | ±       | C19, C18      |     54 |
|      | UltimateCreditor <UltmtCdtr>                  | [0..1]  | ±       |               |     55 |
|      | InstructionForCreditorAgent <InstrForCdtrAgt> | [0..*]  | ±       |               |     56 |
|      | Purpose <Purp>                                | [0..1]  | ±       |               |     57 |
|      | RegulatoryReporting <RgltryRptg>              | [0..10] | ±       |               |     57 |
|      | Tax <Tax>                                     | [0..1]  |         |               |     58 |
|      | Creditor <Cdtr>                               | [0..1]  | ±       |               |     60 |
|      | Debtor <Dbtr>                                 | [0..1]  | ±       |               |     60 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±       |               |     60 |
|      | AdministrationZone <AdmstnZone>               | [0..1]  | Text    |               |     61 |

| Or   | MessageElement/BuildingBlock <XML Tag>    | Mult.   | Type     | Constr. No.   |   Page |
|------|-------------------------------------------|---------|----------|---------------|--------|
|      | ReferenceNumber <RefNb>                   | [0..1]  | Text     |               |     61 |
|      | Method <Mtd>                              | [0..1]  | Text     |               |     61 |
|      | TotalTaxableBaseAmount <TtlTaxblBaseAmt>  | [0..1]  | Amount   | C2, C16       |     61 |
|      | TotalTaxAmount <TtlTaxAmt>                | [0..1]  | Amount   | C2, C16       |     62 |
|      | Date <Dt>                                 | [0..1]  | Date     |               |     62 |
|      | SequenceNumber <SeqNb>                    | [0..1]  | Quantity |               |     62 |
|      | Record <Rcrd>                             | [0..*]  |          |               |     62 |
|      | Type <Tp>                                 | [0..1]  | Text     |               |     63 |
|      | Category <Ctgy>                           | [0..1]  | Text     |               |     63 |
|      | CategoryDetails <CtgyDtls>                | [0..1]  | Text     |               |     63 |
|      | DebtorStatus <DbtrSts>                    | [0..1]  | Text     |               |     64 |
|      | CertificateIdentification <CertId>        | [0..1]  | Text     |               |     64 |
|      | FormsCode <FrmsCd>                        | [0..1]  | Text     |               |     64 |
|      | Period <Prd>                              | [0..1]  |          |               |     64 |
|      | Year <Yr>                                 | [0..1]  | Year     |               |     64 |
|      | Type <Tp>                                 | [0..1]  | CodeSet  |               |     64 |
|      | FromToDate <FrToDt>                       | [0..1]  | ±        |               |     65 |
|      | TaxAmount <TaxAmt>                        | [0..1]  |          |               |     66 |
|      | Rate <Rate>                               | [0..1]  | Rate     |               |     66 |
|      | TaxableBaseAmount <TaxblBaseAmt>          | [0..1]  | Amount   | C2, C16       |     66 |
|      | TotalAmount <TtlAmt>                      | [0..1]  | Amount   | C2, C16       |     66 |
|      | Details <Dtls>                            | [0..*]  |          |               |     67 |
|      | Period <Prd>                              | [0..1]  |          |               |     67 |
|      | Year <Yr>                                 | [0..1]  | Year     |               |     67 |
|      | Type <Tp>                                 | [0..1]  | CodeSet  |               |     68 |
|      | FromToDate <FrToDt>                       | [0..1]  | ±        |               |     68 |
|      | Amount <Amt>                              | [1..1]  | Amount   | C2, C16       |     69 |
|      | AdditionalInformation <AddtlInf>          | [0..1]  | Text     |               |     69 |
|      | RelatedRemittanceInformation <RltdRmtInf> | [0..10] |          |               |     69 |
|      | RemittanceIdentification <RmtId>          | [0..1]  | Text     |               |     70 |
|      | RemittanceLocationDetails <RmtLctnDtls>   | [0..*]  |          |               |     70 |

| Or   | MessageElement/BuildingBlock <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|------------------------------------------|---------|-------------------|---------------|--------|
|      | Method <Mtd>                             | [1..1]  | CodeSet           |               |     70 |
|      | ElectronicAddress <ElctrncAdr>           | [0..1]  | Text              |               |     71 |
|      | PostalAddress <PstlAdr>                  | [0..1]  |                   |               |     71 |
|      | Name <Nm>                                | [1..1]  | Text              |               |     71 |
|      | Address <Adr>                            | [1..1]  | ±                 |               |     71 |
|      | RemittanceInformation <RmtInf>           | [0..1]  | ±                 |               |     72 |
|      | EnclosedFile <NclsdFile>                 | [0..*]  |                   |               |     73 |
|      | Type <Tp>                                | [1..1]  | ±                 |               |     73 |
|      | Identification <Id>                      | [1..1]  | Text              |               |     73 |
|      | IssueDate <IsseDt>                       | [1..1]  | ±                 |               |     74 |
|      | Name <Nm>                                | [0..1]  | Text              |               |     74 |
|      | LanguageCode <LangCd>                    | [0..1]  | CodeSet           | C31           |     74 |
|      | Format <Frmt>                            | [1..1]  |                   |               |     74 |
| {Or  | Code <Cd>                                | [1..1]  | CodeSet           |               |     74 |
| Or}  | Proprietary <Prtry>                      | [1..1]  | ±                 |               |     74 |
|      | FileName <FileNm>                        | [0..1]  | Text              |               |     75 |
|      | DigitalSignature <DgtlSgntr>             | [0..1]  |                   |               |     75 |
|      | Party <Pty>                              | [1..1]  | ±                 |               |     75 |
|      | Signature <Sgntr>                        | [1..1]  | (External Schema) |               |     76 |
|      | Enclosure <Nclsr>                        | [1..1]  | Binary            |               |     77 |
|      | SupplementaryData <SplmtryData>          | [0..*]  | ±                 | C27           |     77 |
|      | SupplementaryData <SplmtryData>          | [0..*]  | ±                 | C27           |     77 |

## 2.3 Constraints

## C1 ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## C2 ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## C3 AnyBIC

Only a valid Business identifier code is allowed. Business identifier codes for financial or nonfinancial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consists of eight (8) or eleven (11) contiguous characters.

## C4 BICFI

Valid BICs for financial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consist of eight (8) or eleven (11) contiguous characters.

## C5 ChargeBearerRule

If ChargeBearer is present, then CreditTransferTransaction/ChargeBearer is not allowed.

If CreditTransferTransaction/ChargeBearer is present, then ChargeBearer is not allowed.

CreditTransferTransaction/ChargeBearer and ChargeBearer may both be absent.

## C6 ChequeFromGuideline

CreditTransferTransaction/ChequeInstruction/ChequeFrom may only be present if different from CreditTransferTransaction/UltimateDebtor or Debtor.

## C7 ChequeInstructionDeliverToCreditorAgentGuideline

If CreditTransferTransaction/ChequeInstruction/DeliveryMethod is present and is CRFA (CourierToFinalAgent), MLFA (MailToFinalAgent), PUFA (PickUpByFinalAgent) or RGFA (RegisteredMailToFinalAgent), then CreditTransferTransaction/ChequeInstruction/DeliverTo may only be present if different than CreditTransferTransaction/Creditor.

## C8 ChequeInstructionDeliverToCreditorGuideline

If CreditTransferTransaction/ChequeInstruction/DeliveryMethod is present and is CRCD (CourierToCreditor), MLCD (MailToCreditor), PUCD (PickUpByCreditor) or RGCD (RegisteredMailToCreditor), then CreditTransferTransaction/ChequeInstruction/DeliverTo may only be present if different from CreditTransferTransaction/Creditor.

## C9 ChequeInstructionDeliverToDebtorGuideline

If CreditTransferTransaction/ChequeInstruction/DeliveryMethod is present and if CreditTransferTransaction/ChequeInstruction/DeliveryMethod/Code is CRDB (CourierToDebtor), MLDB (MailToDebtor), PUDB (PickUpByDebtor) or RGDB (RegisteredMailToDebtor), then CreditTransferTransaction/ChequeInstruction/DeliverTo may only be present if different than Debtor.

## C10 ChequeInstructionRule

If PaymentMethod is CHK (Cheque), then CreditTransferTransaction/ChequeInstruction is optional.

If PaymentMethod is different from CHK (Cheque), then CreditTransferTransaction/ ChequeInstruction is not allowed.

Rule rationale: ChequeInstructionDetails may be present if the payment method is Cheque. It must not be present if the payment method is 'Transfer'.

## C11 ChequeMaturityDateRule

If ChequeMaturityDate is present, then ChequeType must be present and equal to DRFT or ELDR.

## C12 Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## C13 CreditorAgentRule

If PaymentMethod is CHK (Cheque) and if CreditTransferTransaction/ ChequeInstruction/ DeliveryMethod is present and is equal to CRFA (CourierToFinalAgent), MLFA (MailToFinalAgent), PUFA (PickUpByFinalAgent) or RGFA (RegisteredMailToFinalAgent), then CreditTransferTransaction/CreditorAgent is mandatory.

If PaymentMethod is CHK (Cheque) and if CreditTransferTransaction/ ChequeInstruction/ DeliveryMethod is not present or is not equal to CRFA (CourierToFinalAgent), MLFA (MailToFinalAgent), PUFA (PickUpByFinalAgent) or RGFA (RegisteredMailToFinalAgent), then CreditTransferTransaction/CreditorAgent is not allowed.

## C14 CreditorAndOrCreditorAgentRule

If PaymentMethod is CHK (Cheque), then CreditTransferTransaction/CreditorAccount is not allowed.

If PaymentMethod is different from CHK (Cheque) and if CreditTransferTransaction/Creditor is not present, then CreditTransferTransaction/CreditorAccount is mandatory.

If PaymentMethod is different from CHK (Cheque) and if CreditTransferTransaction/Creditor is present, then CreditTransferTransaction/CreditorAccount is optional.

## C15 CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## C16 CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## C17 IBAN

A valid IBAN consists of all three of the following components: Country Code, check digits and BBAN.

## C18 IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## C19 IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

## C20 InstructionForCreditorAgentRule

If InstructionForCreditorAgent/Code contains CHQB (PayCreditorByCheque), then CreditorAccount is not allowed.

## C21 IntermediaryAgent2Rule

If IntermediaryAgent2 is present, then IntermediaryAgent1 must be present.

## C22 IntermediaryAgent3Rule

If IntermediaryAgent3 is present, then IntermediaryAgent2 must be present.

## C23 PaymentTypeInformationRule

If PaymentTypeInformation is present, then CreditTransferTransaction/ PaymentTypeInformation is not allowed.

## C24 RemittanceAmountAndTypeGuideline

If Type/Code is equal to CREN, DUPA or REMI for RemittanceAmountAndType, RemittanceAmountAndType must not be repeated.

## C25 RequestedExecutionDateRule

RequestedExecutionDate must be absent or CreditTransferTransaction/ RequestedExecutionDate must be absent. Both may be absent.

## C26 SupplementaryDataRule

The SupplementaryData building block at message level must not be used to provide additional information about a transaction. The SupplementaryData element at transaction level should be used for that purpose.

This constraint is defined at the MessageDefinition level.

## C27 SupplementaryDataRule

This component may not be used without the explicit approval of a SEG and submission to the RA of ISO 20022 compliant structure(s) to be used in the Envelope element.

## C28 UltimateCreditorGuideline

UltimateCreditor may only be present if different from Creditor.

## C29 UltimateDebtorGuideline

UltimateDebtor may only be present if different from Debtor.

## C30 UltimateDebtorGuideline

UltimateDebtor may only be present if different from Debtor.

## C31 ValidationByTable

Must be a valid terrestrial language.

## 2.4 Message Building Blocks

This chapter describes the MessageBuildingBlocks of this MessageDefinition.

## 2.4.1 GroupHeader &lt;GrpHdr&gt;

Presence: [1..1]

Definition: Set of characteristics shared by all individual transactions included in the message.

## GroupHeader &lt;GrpHdr&gt; contains the following GroupHeader112 elements

| Or   | MessageElement <XML Tag>       | Mult.   | Type     | Constr. No.   |   Page |
|------|--------------------------------|---------|----------|---------------|--------|
|      | MessageIdentification <MsgId>  | [1..1]  | Text     |               |     13 |
|      | CreationDateTime <CreDtTm>     | [1..1]  | DateTime |               |     13 |
|      | NumberOfTransactions <NbOfTxs> | [1..1]  | Text     |               |     13 |
|      | ControlSum <CtrlSum>           | [0..1]  | Quantity |               |     13 |
|      | InitiatingParty <InitgPty>     | [1..1]  | ±        |               |     13 |
|      | ForwardingAgent <FwdgAgt>      | [0..1]  | ±        |               |     14 |

## 2.4.1.1  MessageIdentification &lt;MsgId&gt;

Presence: [1..1]

Definition: Point to point reference assigned by the instructing party and sent to the next party in the chain to unambiguously identify the message.

Usage: The instructing party has to make sure that 'MessageIdentification' is unique per instructed party for a pre-agreed period.

Datatype: "Max35Text" on page 256

## 2.4.1.2  CreationDateTime &lt;CreDtTm&gt;

Presence:

[1..1]

Definition:

Date and time at which the message was created.

Datatype:

"ISODateTime" on page 250

## 2.4.1.3  NumberOfTransactions &lt;NbOfTxs&gt;

Presence:

[1..1]

Definition:

Number of individual transactions contained in the message.

Datatype: "Max15NumericText" on page 254

## 2.4.1.4  ControlSum &lt;CtrlSum&gt;

Presence:

[0..1]

Definition: Total of all individual amounts included in the message, irrespective of currencies.

Datatype: "DecimalNumber" on page 252

## 2.4.1.5  InitiatingParty &lt;InitgPty&gt;

Presence: [1..1]

Definition: Party initiating the creditor payment activation request. This can either be the creditor himself or the party that initiates the request on behalf of the creditor.

InitiatingParty &lt;InitgPty&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 2.4.1.6  ForwardingAgent &lt;FwdgAgt&gt;

Presence: [0..1]

Definition: Financial institution that receives the instruction from the initiating party and forwards it to the next agent in the payment chain for execution.

ForwardingAgent &lt;FwdgAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 2.4.2 PaymentInformation &lt;PmtInf&gt;

Presence: [1..*]

Definition: Set of characteristics that applies to the debit side of the payment transactions included in the creditor payment initiation.

Impacted by: C5 "ChargeBearerRule", C7 "ChequeInstructionDeliverToCreditorAgentGuideline", C8 "ChequeInstructionDeliverToCreditorGuideline", C9 "ChequeInstructionDeliverToDebtorGuideline", C10 "ChequeInstructionRule", C13 "CreditorAgentRule", C14 "CreditorAndOrCreditorAgentRule", C23 "PaymentTypeInformationRule", C25 "RequestedExecutionDateRule", C6 "ChequeFromGuideline", C29 "UltimateDebtorGuideline"

## PaymentInformation &lt;PmtInf&gt; contains the following PaymentInstruction46 elements

| Or   | MessageElement <XML Tag>                    | Mult.   | Type      | Constr. No.             |   Page |
|------|---------------------------------------------|---------|-----------|-------------------------|--------|
|      | PaymentInformationIdentification <PmtInfId> | [0..1]  | Text      |                         |     21 |
|      | PaymentMethod <PmtMtd>                      | [1..1]  | CodeSet   |                         |     21 |
|      | RequestedAdviceType <ReqdAdvcTp>            | [0..1]  |           |                         |     22 |
|      | CreditAdvice <CdtAdvc>                      | [0..1]  |           |                         |     22 |
| {Or  | Code <Cd>                                   | [1..1]  | CodeSet   |                         |     22 |
| Or}  | Proprietary <Prtry>                         | [1..1]  | Text      |                         |     23 |
|      | DebitAdvice <DbtAdvc>                       | [0..1]  |           |                         |     23 |
| {Or  | Code <Cd>                                   | [1..1]  | CodeSet   |                         |     23 |
| Or}  | Proprietary <Prtry>                         | [1..1]  | Text      |                         |     23 |
|      | PaymentTypeInformation <PmtTpInf>           | [0..1]  | ±         |                         |     23 |
|      | RequestedExecutionDate <ReqdExctnDt>        | [0..1]  | ±         |                         |     24 |
|      | ExpiryDate <XpryDt>                         | [0..1]  | ±         |                         |     24 |
|      | PaymentCondition <PmtCond>                  | [0..1]  |           |                         |     25 |
|      | AmountModificationAllowed <AmtModAllwd>     | [0..1]  | Indicator |                         |     25 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>         | [0..1]  | Indicator |                         |     25 |
|      | DelayPenalty <DelyPnlty>                    | [0..1]  | Text      |                         |     26 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>         | [0..1]  |           |                         |     26 |
| {Or  | Amount <Amt>                                | [1..1]  | Amount    | C1, C15                 |     26 |
| Or}  | Rate <Rate>                                 | [1..1]  | Rate      |                         |     26 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd>  | [0..1]  | Indicator |                         |     27 |
|      | Debtor <Dbtr>                               | [1..1]  | ±         |                         |     27 |
|      | DebtorAccount <DbtrAcct>                    | [0..1]  | ±         | C19, C18                |     28 |
|      | DebtorAgent <DbtrAgt>                       | [1..1]  | ±         |                         |     29 |
|      | DebtorAgentAccount <DbtrAgtAcct>            | [0..1]  | ±         | C19, C18                |     30 |
|      | UltimateDebtor <UltmtDbtr>                  | [0..1]  | ±         |                         |     31 |
|      | ChargeBearer <ChrgBr>                       | [0..1]  | CodeSet   |                         |     32 |
|      | CreditTransferTransaction <CdtTrfTx>        | [1..*]  |           | C20, C21, C22, C28, C30 |     33 |
|      | PaymentIdentification <PmtId>               | [1..1]  | ±         |                         |     37 |

| Or   | MessageElement <XML Tag>                   | Mult.   | Type      | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-----------|---------------|--------|
|      | PaymentTypeInformation <PmtTpInf>          | [0..1]  | ±         |               |     38 |
|      | PaymentCondition <PmtCond>                 | [0..1]  |           |               |     38 |
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |               |     39 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |               |     39 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |               |     39 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |               |     39 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C15       |     40 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |               |     40 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |               |     40 |
|      | RequestedExecutionDate <ReqdExctnDt>       | [0..1]  | ±         |               |     40 |
|      | Amount <Amt>                               | [1..1]  | ±         |               |     41 |
|      | ChargeBearer <ChrgBr>                      | [0..1]  | CodeSet   |               |     41 |
|      | MandateRelatedInformation <MndtRltdInf>    | [0..1]  | ±         |               |     42 |
|      | ChequeInstruction <ChqInstr>               | [0..1]  |           | C11           |     42 |
|      | ChequeType <ChqTp>                         | [0..1]  | CodeSet   |               |     43 |
|      | ChequeNumber <ChqNb>                       | [0..1]  | Text      |               |     44 |
|      | ChequeFrom <ChqFr>                         | [0..1]  |           |               |     44 |
|      | Name <Nm>                                  | [1..1]  | Text      |               |     44 |
|      | Address <Adr>                              | [1..1]  | ±         |               |     45 |
|      | DeliveryMethod <DlvryMtd>                  | [0..1]  |           |               |     45 |
| {Or  | Code <Cd>                                  | [1..1]  | CodeSet   |               |     46 |
| Or}  | Proprietary <Prtry>                        | [1..1]  | Text      |               |     46 |
|      | DeliverTo <DlvrTo>                         | [0..1]  |           |               |     46 |
|      | Name <Nm>                                  | [1..1]  | Text      |               |     47 |
|      | Address <Adr>                              | [1..1]  | ±         |               |     47 |
|      | InstructionPriority <InstrPrty>            | [0..1]  | CodeSet   |               |     47 |
|      | ChequeMaturityDate <ChqMtrtyDt>            | [0..1]  | Date      |               |     48 |
|      | FormsCode <FrmsCd>                         | [0..1]  | Text      |               |     48 |
|      | MemoField <MemoFld>                        | [0..2]  | Text      |               |     48 |
|      | RegionalClearingZone <RgnlClrZone>         | [0..1]  | Text      |               |     48 |
|      | PrintLocation <PrtLctn>                    | [0..1]  | Text      |               |     48 |

| Or   | MessageElement <XML Tag>                      | Mult.   | Type     | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|----------|---------------|--------|
|      | Signature <Sgntr>                             | [0..5]  | Text     |               |     48 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±        |               |     48 |
|      | IntermediaryAgent1 <IntrmyAgt1>               | [0..1]  | ±        |               |     49 |
|      | IntermediaryAgent2 <IntrmyAgt2>               | [0..1]  | ±        |               |     50 |
|      | IntermediaryAgent3 <IntrmyAgt3>               | [0..1]  | ±        |               |     51 |
|      | CreditorAgent <CdtrAgt>                       | [1..1]  | ±        |               |     52 |
|      | CreditorAgentAccount <CdtrAgtAcct>            | [0..1]  | ±        | C19, C18      |     53 |
|      | Creditor <Cdtr>                               | [1..1]  | ±        |               |     53 |
|      | CreditorAccount <CdtrAcct>                    | [0..1]  | ±        | C19, C18      |     54 |
|      | UltimateCreditor <UltmtCdtr>                  | [0..1]  | ±        |               |     55 |
|      | InstructionForCreditorAgent <InstrForCdtrAgt> | [0..*]  | ±        |               |     56 |
|      | Purpose <Purp>                                | [0..1]  | ±        |               |     57 |
|      | RegulatoryReporting <RgltryRptg>              | [0..10] | ±        |               |     57 |
|      | Tax <Tax>                                     | [0..1]  |          |               |     58 |
|      | Creditor <Cdtr>                               | [0..1]  | ±        |               |     60 |
|      | Debtor <Dbtr>                                 | [0..1]  | ±        |               |     60 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±        |               |     60 |
|      | AdministrationZone <AdmstnZone>               | [0..1]  | Text     |               |     61 |
|      | ReferenceNumber <RefNb>                       | [0..1]  | Text     |               |     61 |
|      | Method <Mtd>                                  | [0..1]  | Text     |               |     61 |
|      | TotalTaxableBaseAmount <TtlTaxblBaseAmt>      | [0..1]  | Amount   | C2, C16       |     61 |
|      | TotalTaxAmount <TtlTaxAmt>                    | [0..1]  | Amount   | C2, C16       |     62 |
|      | Date <Dt>                                     | [0..1]  | Date     |               |     62 |
|      | SequenceNumber <SeqNb>                        | [0..1]  | Quantity |               |     62 |
|      | Record <Rcrd>                                 | [0..*]  |          |               |     62 |
|      | Type <Tp>                                     | [0..1]  | Text     |               |     63 |
|      | Category <Ctgy>                               | [0..1]  | Text     |               |     63 |
|      | CategoryDetails <CtgyDtls>                    | [0..1]  | Text     |               |     63 |
|      | DebtorStatus <DbtrSts>                        | [0..1]  | Text     |               |     64 |
|      | CertificateIdentification <CertId>            | [0..1]  | Text     |               |     64 |
|      | FormsCode <FrmsCd>                            | [0..1]  | Text     |               |     64 |

| Or   | MessageElement <XML Tag>                  | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------------------|---------|---------|---------------|--------|
|      | Period <Prd>                              | [0..1]  |         |               |     64 |
|      | Year <Yr>                                 | [0..1]  | Year    |               |     64 |
|      | Type <Tp>                                 | [0..1]  | CodeSet |               |     64 |
|      | FromToDate <FrToDt>                       | [0..1]  | ±       |               |     65 |
|      | TaxAmount <TaxAmt>                        | [0..1]  |         |               |     66 |
|      | Rate <Rate>                               | [0..1]  | Rate    |               |     66 |
|      | TaxableBaseAmount <TaxblBaseAmt>          | [0..1]  | Amount  | C2, C16       |     66 |
|      | TotalAmount <TtlAmt>                      | [0..1]  | Amount  | C2, C16       |     66 |
|      | Details <Dtls>                            | [0..*]  |         |               |     67 |
|      | Period <Prd>                              | [0..1]  |         |               |     67 |
|      | Year <Yr>                                 | [0..1]  | Year    |               |     67 |
|      | Type <Tp>                                 | [0..1]  | CodeSet |               |     68 |
|      | FromToDate <FrToDt>                       | [0..1]  | ±       |               |     68 |
|      | Amount <Amt>                              | [1..1]  | Amount  | C2, C16       |     69 |
|      | AdditionalInformation <AddtlInf>          | [0..1]  | Text    |               |     69 |
|      | RelatedRemittanceInformation <RltdRmtInf> | [0..10] |         |               |     69 |
|      | RemittanceIdentification <RmtId>          | [0..1]  | Text    |               |     70 |
|      | RemittanceLocationDetails <RmtLctnDtls>   | [0..*]  |         |               |     70 |
|      | Method <Mtd>                              | [1..1]  | CodeSet |               |     70 |
|      | ElectronicAddress <ElctrncAdr>            | [0..1]  | Text    |               |     71 |
|      | PostalAddress <PstlAdr>                   | [0..1]  |         |               |     71 |
|      | Name <Nm>                                 | [1..1]  | Text    |               |     71 |
|      | Address <Adr>                             | [1..1]  | ±       |               |     71 |
|      | RemittanceInformation <RmtInf>            | [0..1]  | ±       |               |     72 |
|      | EnclosedFile <NclsdFile>                  | [0..*]  |         |               |     73 |
|      | Type <Tp>                                 | [1..1]  | ±       |               |     73 |
|      | Identification <Id>                       | [1..1]  | Text    |               |     73 |
|      | IssueDate <IsseDt>                        | [1..1]  | ±       |               |     74 |
|      | Name <Nm>                                 | [0..1]  | Text    |               |     74 |
|      | LanguageCode <LangCd>                     | [0..1]  | CodeSet | C31           |     74 |
|      | Format <Frmt>                             | [1..1]  |         |               |     74 |

| Or   | MessageElement <XML Tag>        | Mult.   | Type              | Constr. No.   |   Page |
|------|---------------------------------|---------|-------------------|---------------|--------|
| {Or  | Code <Cd>                       | [1..1]  | CodeSet           |               |     74 |
| Or}  | Proprietary <Prtry>             | [1..1]  | ±                 |               |     74 |
|      | FileName <FileNm>               | [0..1]  | Text              |               |     75 |
|      | DigitalSignature <DgtlSgntr>    | [0..1]  |                   |               |     75 |
|      | Party <Pty>                     | [1..1]  | ±                 |               |     75 |
|      | Signature <Sgntr>               | [1..1]  | (External Schema) |               |     76 |
|      | Enclosure <Nclsr>               | [1..1]  | Binary            |               |     77 |
|      | SupplementaryData <SplmtryData> | [0..*]  | ±                 | C27           |     77 |

## Constraints

## · ChargeBearerRule

If ChargeBearer is present, then CreditTransferTransaction/ChargeBearer is not allowed.

If CreditTransferTransaction/ChargeBearer is present, then ChargeBearer is not allowed.

CreditTransferTransaction/ChargeBearer and ChargeBearer may both be absent.

```
Following Must be True /ChargeBearer Must be absent Or    /CreditTransferTransaction[*]/ChargeBearer Must be absent
```

## · ChequeFromGuideline

CreditTransferTransaction/ChequeInstruction/ChequeFrom may only be present if different from CreditTransferTransaction/UltimateDebtor or Debtor.

## · ChequeInstructionDeliverToCreditorAgentGuideline

If CreditTransferTransaction/ChequeInstruction/DeliveryMethod is present and is CRFA (CourierToFinalAgent), MLFA (MailToFinalAgent), PUFA (PickUpByFinalAgent) or RGFA (RegisteredMailToFinalAgent), then CreditTransferTransaction/ChequeInstruction/DeliverTo may only be present if different than CreditTransferTransaction/Creditor.

## · ChequeInstructionDeliverToCreditorGuideline

If CreditTransferTransaction/ChequeInstruction/DeliveryMethod is present and is CRCD (CourierToCreditor), MLCD (MailToCreditor), PUCD (PickUpByCreditor) or RGCD (RegisteredMailToCreditor), then CreditTransferTransaction/ChequeInstruction/DeliverTo may only be present if different from CreditTransferTransaction/Creditor.

## · ChequeInstructionDeliverToDebtorGuideline

If CreditTransferTransaction/ChequeInstruction/DeliveryMethod is present and if CreditTransferTransaction/ChequeInstruction/DeliveryMethod/Code is CRDB (CourierToDebtor), MLDB (MailToDebtor), PUDB (PickUpByDebtor) or RGDB (RegisteredMailToDebtor), then CreditTransferTransaction/ChequeInstruction/DeliverTo may only be present if different than Debtor.

## · ChequeInstructionRule

If PaymentMethod is CHK (Cheque), then CreditTransferTransaction/ChequeInstruction is optional.

If PaymentMethod is different from CHK (Cheque), then CreditTransferTransaction/ ChequeInstruction is not allowed.

Rule rationale: ChequeInstructionDetails may be present if the payment method is Cheque. It must not be present if the payment method is 'Transfer'.

## · CreditorAgentRule

If PaymentMethod is CHK (Cheque) and if CreditTransferTransaction/ ChequeInstruction/ DeliveryMethod is present and is equal to CRFA (CourierToFinalAgent), MLFA (MailToFinalAgent), PUFA (PickUpByFinalAgent) or RGFA (RegisteredMailToFinalAgent), then CreditTransferTransaction/CreditorAgent is mandatory.

If PaymentMethod is CHK (Cheque) and if CreditTransferTransaction/ ChequeInstruction/ DeliveryMethod is not present or is not equal to CRFA (CourierToFinalAgent), MLFA (MailToFinalAgent), PUFA (PickUpByFinalAgent) or RGFA (RegisteredMailToFinalAgent), then CreditTransferTransaction/CreditorAgent is not allowed.

## · CreditorAndOrCreditorAgentRule

If PaymentMethod is CHK (Cheque), then CreditTransferTransaction/CreditorAccount is not allowed.

If PaymentMethod is different from CHK (Cheque) and if CreditTransferTransaction/Creditor is not present, then CreditTransferTransaction/CreditorAccount is mandatory.

If PaymentMethod is different from CHK (Cheque) and if CreditTransferTransaction/Creditor is present, then CreditTransferTransaction/CreditorAccount is optional.

## · PaymentTypeInformationRule

If PaymentTypeInformation is present, then CreditTransferTransaction/PaymentTypeInformation is not allowed.

## · RequestedExecutionDateRule

RequestedExecutionDate must be absent or CreditTransferTransaction/RequestedExecutionDate must be absent. Both may be absent.

```
Following Must be True /RequestedExecutionDate Must be absent Or    /CreditTransferTransaction[*]/RequestedExecutionDate Must be absent
```

## · UltimateDebtorGuideline

UltimateDebtor may only be present if different from Debtor.

## 2.4.2.1  PaymentInformationIdentification &lt;PmtInfId&gt;

Presence: [0..1]

Definition: Reference assigned by a sending party to unambiguously identify the payment information block within the message.

Datatype: "Max35Text" on page 256

## 2.4.2.2  PaymentMethod &lt;PmtMtd&gt;

Presence: [1..1]

Definition: Specifies the means of payment that will be used to move the amount of money.

Datatype: "PaymentMethod7Code" on page 247

| CodeName   | Name           | Definition                                                                                  |
|------------|----------------|---------------------------------------------------------------------------------------------|
| CHK        | Cheque         | Written order to a bank to pay a certain amount of money from one person to another person. |
| TRF        | CreditTransfer | Transfer of an amount of money in the books of the account servicer.                        |

## 2.4.2.3  RequestedAdviceType &lt;ReqdAdvcTp&gt;

Presence:

[0..1]

Definition:

Type of advice details requested.

## RequestedAdviceType &lt;ReqdAdvcTp&gt; contains the following AdviceType1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    |   Page |
|------|----------------------------|---------|---------|--------|
|      | CreditAdvice <CdtAdvc>     | [0..1]  |         |     22 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |     22 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |     23 |
|      | DebitAdvice <DbtAdvc>      | [0..1]  |         |     23 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |     23 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |     23 |

## 2.4.2.3.1  CreditAdvice &lt;CdtAdvc&gt;

Presence:

[0..1]

Definition:

Type of credit advice requested.

## CreditAdvice &lt;CdtAdvc&gt; contains one of the following AdviceType1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |     22 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |     23 |

## 2.4.2.3.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Advice type, in a coded form.

Datatype: "AdviceType1Code" on page 237

| CodeName   | Name                 | Definition                                       |
|------------|----------------------|--------------------------------------------------|
| ADWD       | AdviceWithDetails    | Advice with transaction details is requested.    |
| ADND       | AdviceWithoutDetails | Advice without transaction details is requested. |

## 2.4.2.3.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Advice type, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 2.4.2.3.2  DebitAdvice &lt;DbtAdvc&gt;

Presence:

[0..1]

Definition:

Type de debit advice requested.

## DebitAdvice &lt;DbtAdvc&gt; contains one of the following AdviceType1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |     23 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |     23 |

## 2.4.2.3.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Advice type, in a coded form.

Datatype:

"AdviceType1Code" on page 237

| CodeName   | Name                 | Definition                                       |
|------------|----------------------|--------------------------------------------------|
| ADWD       | AdviceWithDetails    | Advice with transaction details is requested.    |
| ADND       | AdviceWithoutDetails | Advice without transaction details is requested. |

## 2.4.2.3.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Advice type, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 2.4.2.4  PaymentTypeInformation &lt;PmtTpInf&gt;

Presence:

[0..1]

Definition:

Set of elements used to further specify the type of transaction.

## PaymentTypeInformation &lt;PmtTpInf&gt; contains the following elements (see

"PaymentTypeInformation29" on page 178 for details)

| Or   | MessageElement <XML Tag>        | Mult.   | Type    |   Page |
|------|---------------------------------|---------|---------|--------|
|      | InstructionPriority <InstrPrty> | [0..1]  | CodeSet |    178 |
|      | ServiceLevel <SvcLvl>           | [0..*]  |         |    178 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | LocalInstrument <LclInstrm>     | [0..1]  |         |    179 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | SequenceType <SeqTp>            | [0..1]  | CodeSet |    179 |
|      | CategoryPurpose <CtgyPurp>      | [0..1]  |         |    180 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    180 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    180 |

## 2.4.2.5  RequestedExecutionDate &lt;ReqdExctnDt&gt;

Presence:

[0..1]

Definition: Date at which the initiating party requests the clearing agent to process the payment. If payment by cheque, the date when the cheque must be generated by the bank.

Usage: This is the date on which the debtor's account(s) is (are) to be debited.

RequestedExecutionDate &lt;ReqdExctnDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 2.4.2.6  ExpiryDate &lt;XpryDt&gt;

Presence:

[0..1]

Definition:

Date by which the debtor must have accepted or rejected the request.

Usage:

Beyond this date, the request becomes void and cannot be processed anymore.

## ExpiryDate &lt;XpryDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 2.4.2.7  PaymentCondition &lt;PmtCond&gt;

Presence:

[0..1]

Definition:

Conditions for the execution of the payment.

## PaymentCondition &lt;PmtCond&gt; contains the following PaymentCondition2 elements

| Or   | MessageElement <XML Tag>                   | Mult.   | Type      | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-----------|---------------|--------|
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |               |     25 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |               |     25 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |               |     26 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |               |     26 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C15       |     26 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |               |     26 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |               |     27 |

## 2.4.2.7.1  AmountModificationAllowed &lt;AmtModAllwd&gt;

Presence:

[0..1]

Definition: Indicates if the debtor is allowed to pay a different amount then the requested amount.

Usage: When element is not present, the default value is "Not Applicable".

Datatype:

One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 2.4.2.7.2  EarlyPaymentAllowed &lt;EarlyPmtAllwd&gt;

Presence:

[0..1]

Definition:

Indicates if the debtor is allowed to pay before the requested execution date.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 2.4.2.7.3  DelayPenalty &lt;DelyPnlty&gt;

Presence:

[0..1]

Definition: Penalty to be applied for a delayed payment, that is when the payment is made after the requested execution date.

Datatype:

"Max140Text" on page 254

## 2.4.2.7.4  ImmediatePaymentRebate &lt;ImdtPmtRbt&gt;

Presence:

[0..1]

Definition:

Discount rate applied for immediate payment upon receipt of the request.

ImmediatePaymentRebate &lt;ImdtPmtRbt&gt; contains one of the following AmountOrRate1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
| {Or  | Amount <Amt>               | [1..1]  | Amount | C1, C15       |     26 |
| Or}  | Rate <Rate>                | [1..1]  | Rate   |               |     26 |

## 2.4.2.7.4.1  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Amount expressed as an amount of money.

Impacted by:

C1 "ActiveCurrency", C15 "CurrencyAmount"

Datatype:

"ActiveCurrencyAndAmount" on page 234

## Constraints

## · ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 2.4.2.7.4.2  Rate &lt;Rate&gt;

Presence:

[1..1]

Definition:

Amount expressed as a rate.

Datatype:

"PercentageRate" on page 253

## 2.4.2.7.5  GuaranteedPaymentRequested &lt;GrntedPmtReqd&gt;

Presence: [0..1]

Definition: Indicates if a payment guarantee is requested, assuming a payment guarantee contract exists between the different actors.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 2.4.2.8  Debtor &lt;Dbtr&gt;

Presence: [1..1]

Definition: Party that owes an amount of money to the (ultimate) creditor.

Debtor &lt;Dbtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 2.4.2.9  DebtorAccount &lt;DbtrAcct&gt;

Presence:

[0..1]

Definition:

Account used to process charges associated with a transaction.

Impacted by:

C19 "IdentificationOrProxyPresenceRule", C18 "IdentificationAndProxyGuideline"

DebtorAccount &lt;DbtrAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | ±       |               |    142 |
|      | Type <Tp>                  | [0..1]  | ±       |               |    142 |
|      | Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
|      | Name <Nm>                  | [0..1]  | Text    |               |    143 |
|      | Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 2.4.2.10  DebtorAgent &lt;DbtrAgt&gt;

Presence: [1..1]

Definition: Financial institution servicing an account for the debtor.

DebtorAgent &lt;DbtrAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 2.4.2.11  DebtorAgentAccount &lt;DbtrAgtAcct&gt;

Presence: [0..1]

Definition: Unambiguous identification of the account of the debtor agent at its servicing agent in the payment chain.

Impacted by: C19 "IdentificationOrProxyPresenceRule", C18 "IdentificationAndProxyGuideline"

DebtorAgentAccount &lt;DbtrAgtAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|----------------------------|---------|---------|---------------|--------|
| Identification <Id>        | [0..1]  | ±       |               |    142 |
| Type <Tp>                  | [0..1]  | ±       |               |    142 |
| Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
| Name <Nm>                  | [0..1]  | Text    |               |    143 |
| Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 2.4.2.12  UltimateDebtor &lt;UltmtDbtr&gt;

Presence: [0..1]

Definition: Ultimate party that owes an amount of money to the (ultimate) creditor.

UltimateDebtor &lt;UltmtDbtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 2.4.2.13  ChargeBearer &lt;ChrgBr&gt;

Presence: [0..1]

Definition: Specifies which party/parties will bear the charges associated with the processing of the payment transaction.

Datatype: "ChargeBearerType1Code" on page 237

| CodeName   | Name                  | Definition                                                                                                                                                                                                                                                                                                                                                                     |
|------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEBT       | BorneByDebtor         | All transaction charges are to be borne by the debtor.                                                                                                                                                                                                                                                                                                                         |
| CRED       | BorneByCreditor       | All transaction charges are to be borne by the creditor.                                                                                                                                                                                                                                                                                                                       |
| SHAR       | Shared                | In a credit transfer context, means that transaction charges on the sender side are to be borne by the debtor, transaction charges on the receiver side are to be borne by the creditor. In a direct debit context, means that transaction charges on the sender side are to be borne by the creditor, transaction charges on the receiver side are to be borne by the debtor. |
| SLEV       | FollowingServiceLevel | Charges are to be applied following the rules agreed in the service level and/or scheme.                                                                                                                                                                                                                                                                                       |

## 2.4.2.14  CreditTransferTransaction &lt;CdtTrfTx&gt;

Presence: [1..*]

Definition: Payment processes required to transfer cash from the debtor to the creditor.

Impacted by: C20 "InstructionForCreditorAgentRule", C21 "IntermediaryAgent2Rule", C22 "IntermediaryAgent3Rule", C28 "UltimateCreditorGuideline", C30 "UltimateDebtorGuideline"

## CreditTransferTransaction &lt;CdtTrfTx&gt; contains the following CreditTransferTransaction65 elements

| Or   | MessageElement <XML Tag>                   | Mult.   | Type      | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-----------|---------------|--------|
|      | PaymentIdentification <PmtId>              | [1..1]  | ±         |               |     37 |
|      | PaymentTypeInformation <PmtTpInf>          | [0..1]  | ±         |               |     38 |
|      | PaymentCondition <PmtCond>                 | [0..1]  |           |               |     38 |
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |               |     39 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |               |     39 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |               |     39 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |               |     39 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C15       |     40 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |               |     40 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |               |     40 |
|      | RequestedExecutionDate <ReqdExctnDt>       | [0..1]  | ±         |               |     40 |
|      | Amount <Amt>                               | [1..1]  | ±         |               |     41 |
|      | ChargeBearer <ChrgBr>                      | [0..1]  | CodeSet   |               |     41 |
|      | MandateRelatedInformation <MndtRltdInf>    | [0..1]  | ±         |               |     42 |
|      | ChequeInstruction <ChqInstr>               | [0..1]  |           | C11           |     42 |
|      | ChequeType <ChqTp>                         | [0..1]  | CodeSet   |               |     43 |
|      | ChequeNumber <ChqNb>                       | [0..1]  | Text      |               |     44 |
|      | ChequeFrom <ChqFr>                         | [0..1]  |           |               |     44 |
|      | Name <Nm>                                  | [1..1]  | Text      |               |     44 |
|      | Address <Adr>                              | [1..1]  | ±         |               |     45 |
|      | DeliveryMethod <DlvryMtd>                  | [0..1]  |           |               |     45 |
| {Or  | Code <Cd>                                  | [1..1]  | CodeSet   |               |     46 |
| Or}  | Proprietary <Prtry>                        | [1..1]  | Text      |               |     46 |
|      | DeliverTo <DlvrTo>                         | [0..1]  |           |               |     46 |
|      | Name <Nm>                                  | [1..1]  | Text      |               |     47 |
|      | Address <Adr>                              | [1..1]  | ±         |               |     47 |
|      | InstructionPriority <InstrPrty>            | [0..1]  | CodeSet   |               |     47 |
|      | ChequeMaturityDate <ChqMtrtyDt>            | [0..1]  | Date      |               |     48 |
|      | FormsCode <FrmsCd>                         | [0..1]  | Text      |               |     48 |
|      | MemoField <MemoFld>                        | [0..2]  | Text      |               |     48 |

| Or   | MessageElement <XML Tag>                      | Mult.   | Type     | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|----------|---------------|--------|
|      | RegionalClearingZone <RgnlClrZone>            | [0..1]  | Text     |               |     48 |
|      | PrintLocation <PrtLctn>                       | [0..1]  | Text     |               |     48 |
|      | Signature <Sgntr>                             | [0..5]  | Text     |               |     48 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±        |               |     48 |
|      | IntermediaryAgent1 <IntrmyAgt1>               | [0..1]  | ±        |               |     49 |
|      | IntermediaryAgent2 <IntrmyAgt2>               | [0..1]  | ±        |               |     50 |
|      | IntermediaryAgent3 <IntrmyAgt3>               | [0..1]  | ±        |               |     51 |
|      | CreditorAgent <CdtrAgt>                       | [1..1]  | ±        |               |     52 |
|      | CreditorAgentAccount <CdtrAgtAcct>            | [0..1]  | ±        | C19, C18      |     53 |
|      | Creditor <Cdtr>                               | [1..1]  | ±        |               |     53 |
|      | CreditorAccount <CdtrAcct>                    | [0..1]  | ±        | C19, C18      |     54 |
|      | UltimateCreditor <UltmtCdtr>                  | [0..1]  | ±        |               |     55 |
|      | InstructionForCreditorAgent <InstrForCdtrAgt> | [0..*]  | ±        |               |     56 |
|      | Purpose <Purp>                                | [0..1]  | ±        |               |     57 |
|      | RegulatoryReporting <RgltryRptg>              | [0..10] | ±        |               |     57 |
|      | Tax <Tax>                                     | [0..1]  |          |               |     58 |
|      | Creditor <Cdtr>                               | [0..1]  | ±        |               |     60 |
|      | Debtor <Dbtr>                                 | [0..1]  | ±        |               |     60 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±        |               |     60 |
|      | AdministrationZone <AdmstnZone>               | [0..1]  | Text     |               |     61 |
|      | ReferenceNumber <RefNb>                       | [0..1]  | Text     |               |     61 |
|      | Method <Mtd>                                  | [0..1]  | Text     |               |     61 |
|      | TotalTaxableBaseAmount <TtlTaxblBaseAmt>      | [0..1]  | Amount   | C2, C16       |     61 |
|      | TotalTaxAmount <TtlTaxAmt>                    | [0..1]  | Amount   | C2, C16       |     62 |
|      | Date <Dt>                                     | [0..1]  | Date     |               |     62 |
|      | SequenceNumber <SeqNb>                        | [0..1]  | Quantity |               |     62 |
|      | Record <Rcrd>                                 | [0..*]  |          |               |     62 |
|      | Type <Tp>                                     | [0..1]  | Text     |               |     63 |
|      | Category <Ctgy>                               | [0..1]  | Text     |               |     63 |
|      | CategoryDetails <CtgyDtls>                    | [0..1]  | Text     |               |     63 |
|      | DebtorStatus <DbtrSts>                        | [0..1]  | Text     |               |     64 |

| Or   | MessageElement <XML Tag>                  | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------------------|---------|---------|---------------|--------|
|      | CertificateIdentification <CertId>        | [0..1]  | Text    |               |     64 |
|      | FormsCode <FrmsCd>                        | [0..1]  | Text    |               |     64 |
|      | Period <Prd>                              | [0..1]  |         |               |     64 |
|      | Year <Yr>                                 | [0..1]  | Year    |               |     64 |
|      | Type <Tp>                                 | [0..1]  | CodeSet |               |     64 |
|      | FromToDate <FrToDt>                       | [0..1]  | ±       |               |     65 |
|      | TaxAmount <TaxAmt>                        | [0..1]  |         |               |     66 |
|      | Rate <Rate>                               | [0..1]  | Rate    |               |     66 |
|      | TaxableBaseAmount <TaxblBaseAmt>          | [0..1]  | Amount  | C2, C16       |     66 |
|      | TotalAmount <TtlAmt>                      | [0..1]  | Amount  | C2, C16       |     66 |
|      | Details <Dtls>                            | [0..*]  |         |               |     67 |
|      | Period <Prd>                              | [0..1]  |         |               |     67 |
|      | Year <Yr>                                 | [0..1]  | Year    |               |     67 |
|      | Type <Tp>                                 | [0..1]  | CodeSet |               |     68 |
|      | FromToDate <FrToDt>                       | [0..1]  | ±       |               |     68 |
|      | Amount <Amt>                              | [1..1]  | Amount  | C2, C16       |     69 |
|      | AdditionalInformation <AddtlInf>          | [0..1]  | Text    |               |     69 |
|      | RelatedRemittanceInformation <RltdRmtInf> | [0..10] |         |               |     69 |
|      | RemittanceIdentification <RmtId>          | [0..1]  | Text    |               |     70 |
|      | RemittanceLocationDetails <RmtLctnDtls>   | [0..*]  |         |               |     70 |
|      | Method <Mtd>                              | [1..1]  | CodeSet |               |     70 |
|      | ElectronicAddress <ElctrncAdr>            | [0..1]  | Text    |               |     71 |
|      | PostalAddress <PstlAdr>                   | [0..1]  |         |               |     71 |
|      | Name <Nm>                                 | [1..1]  | Text    |               |     71 |
|      | Address <Adr>                             | [1..1]  | ±       |               |     71 |
|      | RemittanceInformation <RmtInf>            | [0..1]  | ±       |               |     72 |
|      | EnclosedFile <NclsdFile>                  | [0..*]  |         |               |     73 |
|      | Type <Tp>                                 | [1..1]  | ±       |               |     73 |
|      | Identification <Id>                       | [1..1]  | Text    |               |     73 |
|      | IssueDate <IsseDt>                        | [1..1]  | ±       |               |     74 |
|      | Name <Nm>                                 | [0..1]  | Text    |               |     74 |

| Or   | MessageElement <XML Tag>        | Mult.   | Type              | Constr. No.   |   Page |
|------|---------------------------------|---------|-------------------|---------------|--------|
|      | LanguageCode <LangCd>           | [0..1]  | CodeSet           | C31           |     74 |
|      | Format <Frmt>                   | [1..1]  |                   |               |     74 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet           |               |     74 |
| Or}  | Proprietary <Prtry>             | [1..1]  | ±                 |               |     74 |
|      | FileName <FileNm>               | [0..1]  | Text              |               |     75 |
|      | DigitalSignature <DgtlSgntr>    | [0..1]  |                   |               |     75 |
|      | Party <Pty>                     | [1..1]  | ±                 |               |     75 |
|      | Signature <Sgntr>               | [1..1]  | (External Schema) |               |     76 |
|      | Enclosure <Nclsr>               | [1..1]  | Binary            |               |     77 |
|      | SupplementaryData <SplmtryData> | [0..*]  | ±                 | C27           |     77 |

## Constraints

## · InstructionForCreditorAgentRule

If InstructionForCreditorAgent/Code contains CHQB (PayCreditorByCheque), then CreditorAccount is not allowed.

```
On Condition /InstructionForCreditorAgent[*]/Code is within DataType <<Code>> ValidationRulePayCreditorByCheque1Code Following Must be True /CreditorAccount Must be absent
```

## · IntermediaryAgent2Rule

If IntermediaryAgent2 is present, then IntermediaryAgent1 must be present.

```
On Condition /IntermediaryAgent2 is present Following Must be True /IntermediaryAgent1 Must be present
```

## · IntermediaryAgent3Rule

If IntermediaryAgent3 is present, then IntermediaryAgent2 must be present.

```
On Condition /IntermediaryAgent3 is present Following Must be True /IntermediaryAgent2 Must be present
```

## · UltimateCreditorGuideline

UltimateCreditor may only be present if different from Creditor.

## · UltimateDebtorGuideline

UltimateDebtor may only be present if different from Debtor.

## 2.4.2.14.1  PaymentIdentification &lt;PmtId&gt;

Presence: [1..1]

Definition:

Set of elements used to reference a payment instruction.

## PaymentIdentification &lt;PmtId&gt; contains the following elements (see "PaymentIdentification6" on page 162 for details)

| Or   | MessageElement <XML Tag>            | Mult.   | Type          | Constr. No.   |   Page |
|------|-------------------------------------|---------|---------------|---------------|--------|
|      | InstructionIdentification <InstrId> | [0..1]  | Text          |               |    162 |
|      | EndToEndIdentification <EndToEndId> | [1..1]  | Text          |               |    162 |
|      | UETR <UETR>                         | [0..1]  | IdentifierSet |               |    162 |

## 2.4.2.14.2  PaymentTypeInformation &lt;PmtTpInf&gt;

Presence:

[0..1]

Definition:

Set of elements used to further specify the type of transaction.

## PaymentTypeInformation &lt;PmtTpInf&gt; contains the following elements (see

"PaymentTypeInformation29" on page 178 for details)

| Or   | MessageElement <XML Tag>        | Mult.   | Type    |   Page |
|------|---------------------------------|---------|---------|--------|
|      | InstructionPriority <InstrPrty> | [0..1]  | CodeSet |    178 |
|      | ServiceLevel <SvcLvl>           | [0..*]  |         |    178 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | LocalInstrument <LclInstrm>     | [0..1]  |         |    179 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | SequenceType <SeqTp>            | [0..1]  | CodeSet |    179 |
|      | CategoryPurpose <CtgyPurp>      | [0..1]  |         |    180 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    180 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    180 |

## 2.4.2.14.3  PaymentCondition &lt;PmtCond&gt;

Presence:

[0..1]

Definition:

Conditions for the execution of the payment.

## PaymentCondition &lt;PmtCond&gt; contains the following PaymentCondition2 elements

| Or   | MessageElement <XML Tag>                   | Mult.   | Type      | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-----------|---------------|--------|
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |               |     39 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |               |     39 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |               |     39 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |               |     39 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C15       |     40 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |               |     40 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |               |     40 |

## 2.4.2.14.3.1  AmountModificationAllowed &lt;AmtModAllwd&gt;

Presence: [0..1]

Definition: Indicates if the debtor is allowed to pay a different amount then the requested amount.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 2.4.2.14.3.2  EarlyPaymentAllowed &lt;EarlyPmtAllwd&gt;

Presence: [0..1]

Definition: Indicates if the debtor is allowed to pay before the requested execution date.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 2.4.2.14.3.3  DelayPenalty &lt;DelyPnlty&gt;

Presence: [0..1]

Definition: Penalty to be applied for a delayed payment, that is when the payment is made after the requested execution date.

Datatype: "Max140Text" on page 254

## 2.4.2.14.3.4  ImmediatePaymentRebate &lt;ImdtPmtRbt&gt;

Presence: [0..1]

Definition: Discount rate applied for immediate payment upon receipt of the request.

## ImmediatePaymentRebate &lt;ImdtPmtRbt&gt; contains one of the following AmountOrRate1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
| {Or  | Amount <Amt>               | [1..1]  | Amount | C1, C15       |     40 |
| Or}  | Rate <Rate>                | [1..1]  | Rate   |               |     40 |

## 2.4.2.14.3.4.1  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Amount expressed as an amount of money.

Impacted by:

C1 "ActiveCurrency", C15 "CurrencyAmount"

Datatype:

"ActiveCurrencyAndAmount" on page 234

## Constraints

## · ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 2.4.2.14.3.4.2  Rate &lt;Rate&gt;

Presence:

[1..1]

Definition:

Amount expressed as a rate.

Datatype: "PercentageRate" on page 253

## 2.4.2.14.3.5  GuaranteedPaymentRequested &lt;GrntedPmtReqd&gt;

Presence:

[0..1]

Definition: Indicates if a payment guarantee is requested, assuming a payment guarantee contract exists between the different actors.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 2.4.2.14.4  RequestedExecutionDate &lt;ReqdExctnDt&gt;

Presence: [0..1]

Definition: Date at which the initiating party requests the clearing agent to process the payment. If payment by cheque, the date when the cheque must be generated by the bank.

Usage: This is the date on which the debtor's account(s) is (are) to be debited.

RequestedExecutionDate &lt;ReqdExctnDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 2.4.2.14.5  Amount &lt;Amt&gt;

Presence: [1..1]

Definition: Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.

Amount &lt;Amt&gt; contains one of the following elements (see "AmountType4Choice" on page 146 for details)

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
| {Or  | InstructedAmount <InstdAmt>   | [1..1]  | Amount  | C2, C16       |    146 |
| Or}  | EquivalentAmount <EqvtAmt>    | [1..1]  |         |               |    147 |
|      | Amount <Amt>                  | [1..1]  | Amount  | C2, C16       |    147 |
|      | CurrencyOfTransfer <CcyOfTrf> | [1..1]  | CodeSet | C2            |    147 |

## 2.4.2.14.6  ChargeBearer &lt;ChrgBr&gt;

Presence: [0..1]

Definition: Specifies which party/parties will bear the charges associated with the processing of the payment transaction.

Datatype: "ChargeBearerType1Code" on page 237

| CodeName   | Name            | Definition                                                                                                                                                                                                                                                                                                                                                                     |
|------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEBT       | BorneByDebtor   | All transaction charges are to be borne by the debtor.                                                                                                                                                                                                                                                                                                                         |
| CRED       | BorneByCreditor | All transaction charges are to be borne by the creditor.                                                                                                                                                                                                                                                                                                                       |
| SHAR       | Shared          | In a credit transfer context, means that transaction charges on the sender side are to be borne by the debtor, transaction charges on the receiver side are to be borne by the creditor. In a direct debit context, means that transaction charges on the sender side are to be borne by the creditor, transaction charges on the receiver side are to be borne by the debtor. |

| CodeName   | Name                  | Definition                                                                               |
|------------|-----------------------|------------------------------------------------------------------------------------------|
| SLEV       | FollowingServiceLevel | Charges are to be applied following the rules agreed in the service level and/or scheme. |

## 2.4.2.14.7  MandateRelatedInformation &lt;MndtRltdInf&gt;

Presence:

[0..1]

Definition:

Provides further details of the mandate signed between the creditor and the debtor.

MandateRelatedInformation &lt;MndtRltdInf&gt; contains the following elements (see "CreditTransferMandateData1" on page 149 for details)

| Or   | MessageElement <XML Tag>           | Mult.   | Type     |   Page |
|------|------------------------------------|---------|----------|--------|
|      | MandateIdentification <MndtId>     | [0..1]  | Text     |    149 |
|      | Type <Tp>                          | [0..1]  | ±        |    149 |
|      | DateOfSignature <DtOfSgntr>        | [0..1]  | Date     |    150 |
|      | DateOfVerification <DtOfVrfctn>    | [0..1]  | DateTime |    150 |
|      | ElectronicSignature <ElctrncSgntr> | [0..1]  | Binary   |    150 |
|      | FirstPaymentDate <FrstPmtDt>       | [0..1]  | Date     |    150 |
|      | FinalPaymentDate <FnlPmtDt>        | [0..1]  | Date     |    150 |
|      | Frequency <Frqcy>                  | [0..1]  | ±        |    151 |
|      | Reason <Rsn>                       | [0..1]  |          |    151 |
| {Or  | Code <Cd>                          | [1..1]  | CodeSet  |    151 |
| Or}  | Proprietary <Prtry>                | [1..1]  | Text     |    151 |

## 2.4.2.14.8  ChequeInstruction &lt;ChqInstr&gt;

Presence:

[0..1]

Definition:

Set of elements needed to issue a cheque.

Impacted by:

C11 "ChequeMaturityDateRule"

## ChequeInstruction &lt;ChqInstr&gt; contains the following Cheque19 elements

| Or   | MessageElement <XML Tag>           | Mult.   | Type    | Constr. No.   |   Page |
|------|------------------------------------|---------|---------|---------------|--------|
|      | ChequeType <ChqTp>                 | [0..1]  | CodeSet |               |     43 |
|      | ChequeNumber <ChqNb>               | [0..1]  | Text    |               |     44 |
|      | ChequeFrom <ChqFr>                 | [0..1]  |         |               |     44 |
|      | Name <Nm>                          | [1..1]  | Text    |               |     44 |
|      | Address <Adr>                      | [1..1]  | ±       |               |     45 |
|      | DeliveryMethod <DlvryMtd>          | [0..1]  |         |               |     45 |
| {Or  | Code <Cd>                          | [1..1]  | CodeSet |               |     46 |
| Or}  | Proprietary <Prtry>                | [1..1]  | Text    |               |     46 |
|      | DeliverTo <DlvrTo>                 | [0..1]  |         |               |     46 |
|      | Name <Nm>                          | [1..1]  | Text    |               |     47 |
|      | Address <Adr>                      | [1..1]  | ±       |               |     47 |
|      | InstructionPriority <InstrPrty>    | [0..1]  | CodeSet |               |     47 |
|      | ChequeMaturityDate <ChqMtrtyDt>    | [0..1]  | Date    |               |     48 |
|      | FormsCode <FrmsCd>                 | [0..1]  | Text    |               |     48 |
|      | MemoField <MemoFld>                | [0..2]  | Text    |               |     48 |
|      | RegionalClearingZone <RgnlClrZone> | [0..1]  | Text    |               |     48 |
|      | PrintLocation <PrtLctn>            | [0..1]  | Text    |               |     48 |
|      | Signature <Sgntr>                  | [0..5]  | Text    |               |     48 |

## Constraints

## · ChequeMaturityDateRule

If ChequeMaturityDate is present, then ChequeType must be present and equal to DRFT or ELDR.

```
On Condition /ChequeMaturityDate is present Following Must be True /ChequeType Must be present And    /ChequeType Must be within DataType <<Code>> ChequeType3Code
```

## 2.4.2.14.8.1  ChequeType &lt;ChqTp&gt;

Presence:

[0..1]

Definition:

Specifies the type of cheque to be issued.

Datatype:

"ChequeType2Code" on page 238

| CodeName   | Name           | Definition                                                             |
|------------|----------------|------------------------------------------------------------------------|
| CCHQ       | CustomerCheque | Cheque drawn on the account of the debtor, and debited on the debtor's |

| CodeName   | Name                    | Definition                                                                                                                                                                                                                                                                                   |
|------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|            |                         | account when the cheque is cashed. Synonym is 'corporate cheque'.                                                                                                                                                                                                                            |
| CCCH       | CertifiedCustomerCheque | Cheque drawn on the account of the debtor, and debited on the debtor's account when the cheque is cashed. The financial institution prints and certifies the cheque, guaranteeing the payment.                                                                                               |
| BCHQ       | BankCheque              | Cheque drawn on the account of the debtor's financial institution, which is debited on the debtor's account when the cheque is issued.These cheques are printed by the debtor's financial institution and payment is guaranteed by the financial institution. Synonym is 'cashier's cheque'. |
| DRFT       | Draft                   | A guaranteed bank cheque with a future value date (do not pay before], which in commercial terms is a 'negotiatable instrument': the beneficiary can receive early payment from any bank under subtraction of a discount. The ordering customer's account is debited on value date.          |
| ELDR       | ElectronicDraft         | An instrument with a future value date (do not pay before], which in commercial terms is a 'negotiatable instrument': the beneficiary can receive early payment from any bank under subtraction of a discount. The ordering customer's account is debited on value date.                     |

## 2.4.2.14.8.2  ChequeNumber &lt;ChqNb&gt;

Presence:

[0..1]

Definition:

Unique and unambiguous identifier for a cheque as assigned by the agent.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.8.3  ChequeFrom &lt;ChqFr&gt;

Presence:

[0..1]

Definition:

Identifies the party that ordered the issuance of the cheque.

## ChequeFrom &lt;ChqFr&gt; contains the following NameAndAddress18 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Name <Nm>                  | [1..1]  | Text   |               |     44 |
|      | Address <Adr>              | [1..1]  | ±      |               |     45 |

## 2.4.2.14.8.3.1  Name &lt;Nm&gt;

Presence:

[1..1]

Definition:

Name by which a party is known and is usually used to identify that party.

Datatype:

"Max140Text" on page 254

## 2.4.2.14.8.3.2  Address &lt;Adr&gt;

Presence:

[1..1]

Definition:

Postal address of a party.

## Address &lt;Adr&gt; contains the following elements (see "PostalAddress27" on page 184 for details)

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | AddressType <AdrTp>              | [0..1]  |         |               |    184 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>              | [1..1]  | ±       |               |    185 |
|      | CareOf <CareOf>                  | [0..1]  | Text    |               |    185 |
|      | Department <Dept>                | [0..1]  | Text    |               |    185 |
|      | SubDepartment <SubDept>          | [0..1]  | Text    |               |    185 |
|      | StreetName <StrtNm>              | [0..1]  | Text    |               |    186 |
|      | BuildingNumber <BldgNb>          | [0..1]  | Text    |               |    186 |
|      | BuildingName <BldgNm>            | [0..1]  | Text    |               |    186 |
|      | Floor <Flr>                      | [0..1]  | Text    |               |    186 |
|      | UnitNumber <UnitNb>              | [0..1]  | Text    |               |    186 |
|      | PostBox <PstBx>                  | [0..1]  | Text    |               |    186 |
|      | Room <Room>                      | [0..1]  | Text    |               |    186 |
|      | PostCode <PstCd>                 | [0..1]  | Text    |               |    186 |
|      | TownName <TwnNm>                 | [0..1]  | Text    |               |    187 |
|      | TownLocationName <TwnLctnNm>     | [0..1]  | Text    |               |    187 |
|      | DistrictName <DstrctNm>          | [0..1]  | Text    |               |    187 |
|      | CountrySubDivision <CtrySubDvsn> | [0..1]  | Text    |               |    187 |
|      | Country <Ctry>                   | [0..1]  | CodeSet | C12           |    187 |
|      | AddressLine <AdrLine>            | [0..7]  | Text    |               |    187 |

## 2.4.2.14.8.4  DeliveryMethod &lt;DlvryMtd&gt;

Presence:

[0..1]

Definition:

Specifies the delivery method of the cheque by the debtor's agent.

## DeliveryMethod &lt;DlvryMtd&gt; contains one of the following ChequeDeliveryMethod1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |     46 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |     46 |

## 2.4.2.14.8.4.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Specifies the delivery method of the cheque by the debtor's agent.

Datatype:

"ChequeDelivery1Code" on page 237

| CodeName   | Name                       | Definition                                                               |
|------------|----------------------------|--------------------------------------------------------------------------|
| MLDB       | MailToDebtor               | Cheque is to be sent through mail services to debtor.                    |
| MLCD       | MailToCreditor             | Cheque is to be sent through mail services to creditor.                  |
| MLFA       | MailToFinalAgent           | Cheque is to be sent through mail services to creditor agent.            |
| CRDB       | CourierToDebtor            | Cheque is to be sent through courier services to debtor.                 |
| CRCD       | CourierToCreditor          | Cheque is to be sent through courier services to creditor.               |
| CRFA       | CourierToFinalAgent        | Cheque is to be sent through courier services to creditor agent.         |
| PUDB       | PickUpByDebtor             | Cheque will be picked up by the debtor.                                  |
| PUCD       | PickUpByCreditor           | Cheque will be picked up by the creditor.                                |
| PUFA       | PickUpByFinalAgent         | Cheque will be picked up by the creditor agent.                          |
| RGDB       | RegisteredMailToDebtor     | Cheque is to be sent through registered mail services to debtor.         |
| RGCD       | RegisteredMailToCreditor   | Cheque is to be sent through registered mail services to creditor.       |
| RGFA       | RegisteredMailToFinalAgent | Cheque is to be sent through registered mail services to creditor agent. |

## 2.4.2.14.8.4.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Specifies a proprietary delivery method of the cheque by the debtor's agent.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.8.5  DeliverTo &lt;DlvrTo&gt;

Presence:

[0..1]

Definition:

Party to whom the debtor's agent needs to send the cheque.

## DeliverTo &lt;DlvrTo&gt; contains the following NameAndAddress18 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Name <Nm>                  | [1..1]  | Text   |               |     47 |
|      | Address <Adr>              | [1..1]  | ±      |               |     47 |

## 2.4.2.14.8.5.1  Name &lt;Nm&gt;

Presence:

[1..1]

Definition:

Name by which a party is known and is usually used to identify that party.

Datatype:

"Max140Text" on page 254

## 2.4.2.14.8.5.2  Address &lt;Adr&gt;

Presence:

[1..1]

Definition:

Postal address of a party.

Address &lt;Adr&gt; contains the following elements (see "PostalAddress27" on page 184 for details)

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | AddressType <AdrTp>              | [0..1]  |         |               |    184 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>              | [1..1]  | ±       |               |    185 |
|      | CareOf <CareOf>                  | [0..1]  | Text    |               |    185 |
|      | Department <Dept>                | [0..1]  | Text    |               |    185 |
|      | SubDepartment <SubDept>          | [0..1]  | Text    |               |    185 |
|      | StreetName <StrtNm>              | [0..1]  | Text    |               |    186 |
|      | BuildingNumber <BldgNb>          | [0..1]  | Text    |               |    186 |
|      | BuildingName <BldgNm>            | [0..1]  | Text    |               |    186 |
|      | Floor <Flr>                      | [0..1]  | Text    |               |    186 |
|      | UnitNumber <UnitNb>              | [0..1]  | Text    |               |    186 |
|      | PostBox <PstBx>                  | [0..1]  | Text    |               |    186 |
|      | Room <Room>                      | [0..1]  | Text    |               |    186 |
|      | PostCode <PstCd>                 | [0..1]  | Text    |               |    186 |
|      | TownName <TwnNm>                 | [0..1]  | Text    |               |    187 |
|      | TownLocationName <TwnLctnNm>     | [0..1]  | Text    |               |    187 |
|      | DistrictName <DstrctNm>          | [0..1]  | Text    |               |    187 |
|      | CountrySubDivision <CtrySubDvsn> | [0..1]  | Text    |               |    187 |
|      | Country <Ctry>                   | [0..1]  | CodeSet | C12           |    187 |
|      | AddressLine <AdrLine>            | [0..7]  | Text    |               |    187 |

## 2.4.2.14.8.6  InstructionPriority &lt;InstrPrty&gt;

Presence:

[0..1]

Definition: Urgency or order of importance that the originator would like the recipient of the payment instruction to apply to the processing of the payment instruction.

Datatype:

"Priority2Code" on page 248

| CodeName   | Name   | Definition                |
|------------|--------|---------------------------|
| HIGH       | High   | Priority level is high.   |
| NORM       | Normal | Priority level is normal. |

## 2.4.2.14.8.7  ChequeMaturityDate &lt;ChqMtrtyDt&gt;

Presence:

[0..1]

Definition: Date when the draft becomes payable and the debtor's account is debited.

Datatype:

"ISODate" on page 250

## 2.4.2.14.8.8  FormsCode &lt;FrmsCd&gt;

Presence:

[0..1]

Definition: Identifies, in a coded form, the cheque layout, company logo and digitised signature to be used to print the cheque, as agreed between the initiating party and the debtor's agent.

Datatype: "Max35Text" on page 256

## 2.4.2.14.8.9  MemoField &lt;MemoFld&gt;

Presence:

[0..2]

Definition: Information that needs to be printed on a cheque, used by the payer to add miscellaneous information.

Datatype: "Max35Text" on page 256

## 2.4.2.14.8.10  RegionalClearingZone &lt;RgnlClrZone&gt;

Presence:

[0..1]

Definition: Regional area in which the cheque can be cleared, when a country has no nation-wide cheque clearing organisation.

Datatype: "Max35Text" on page 256

## 2.4.2.14.8.11  PrintLocation &lt;PrtLctn&gt;

Presence:

[0..1]

Definition:

Specifies the print location of the cheque.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.8.12  Signature &lt;Sgntr&gt;

Presence:

[0..5]

Definition: Signature to be used by the cheque servicer on a specific cheque to be printed.

Datatype:

"Max70Text" on page 256

## 2.4.2.14.9  UltimateDebtor &lt;UltmtDbtr&gt;

Presence:

[0..1]

Definition: Ultimate party that owes an amount of money to the (ultimate) creditor.

## UltimateDebtor &lt;UltmtDbtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 2.4.2.14.10  IntermediaryAgent1 &lt;IntrmyAgt1&gt;

Presence: [0..1]

Definition: Agent between the debtor's agent and the creditor's agent.

Usage: If more than one intermediary agent is present, then IntermediaryAgent1 identifies the agent between the DebtorAgent and the IntermediaryAgent2.

## IntermediaryAgent1 &lt;IntrmyAgt1&gt; contains the following elements (see

"BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 2.4.2.14.11  IntermediaryAgent2 &lt;IntrmyAgt2&gt;

Presence: [0..1]

Definition: Agent between the debtor's agent and the creditor's agent.

Usage: If more than two intermediary agents are present, then IntermediaryAgent2 identifies the agent between the IntermediaryAgent1 and the IntermediaryAgent3.

## IntermediaryAgent2 &lt;IntrmyAgt2&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 2.4.2.14.12  IntermediaryAgent3 &lt;IntrmyAgt3&gt;

Presence: [0..1]

Definition: Agent between the debtor's agent and the creditor's agent.

Usage: If IntermediaryAgent3 is present, then it identifies the agent between the IntermediaryAgent 2 and the CreditorAgent.

## IntermediaryAgent3 &lt;IntrmyAgt3&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 2.4.2.14.13  CreditorAgent &lt;CdtrAgt&gt;

Presence: [1..1]

Definition: Financial institution servicing an account for the creditor.

CreditorAgent &lt;CdtrAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 2.4.2.14.14  CreditorAgentAccount &lt;CdtrAgtAcct&gt;

Presence: [0..1]

Definition: Unambiguous identification of the account of the creditor agent at its servicing agent to which a credit entry will be made as a result of the payment transaction.

Impacted by: C19 "IdentificationOrProxyPresenceRule", C18 "IdentificationAndProxyGuideline"

CreditorAgentAccount &lt;CdtrAgtAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|----------------------------|---------|---------|---------------|--------|
| Identification <Id>        | [0..1]  | ±       |               |    142 |
| Type <Tp>                  | [0..1]  | ±       |               |    142 |
| Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
| Name <Nm>                  | [0..1]  | Text    |               |    143 |
| Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 2.4.2.14.15  Creditor &lt;Cdtr&gt;

Presence: [1..1]

Definition: Party to which an amount of money is due.

Creditor &lt;Cdtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 2.4.2.14.16  CreditorAccount &lt;CdtrAcct&gt;

Presence: [0..1]

Definition: Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.

Impacted by: C19 "IdentificationOrProxyPresenceRule", C18 "IdentificationAndProxyGuideline"

CreditorAccount &lt;CdtrAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | ±       |               |    142 |
|      | Type <Tp>                  | [0..1]  | ±       |               |    142 |
|      | Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
|      | Name <Nm>                  | [0..1]  | Text    |               |    143 |
|      | Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 2.4.2.14.17  UltimateCreditor &lt;UltmtCdtr&gt;

Presence:

[0..1]

Definition:

Ultimate party to which an amount of money is due.

## UltimateCreditor &lt;UltmtCdtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 2.4.2.14.18  InstructionForCreditorAgent &lt;InstrForCdtrAgt&gt;

Presence: [0..*]

Definition: Further information related to the processing of the payment instruction, provided by the initiating party, and intended for the creditor agent.

## InstructionForCreditorAgent &lt;InstrForCdtrAgt&gt; contains the following elements (see "InstructionForCreditorAgent3" on page 177 for details)

| Or   | MessageElement <XML Tag>          | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------|---------|---------|---------------|--------|
|      | Code <Cd>                         | [0..1]  | CodeSet |               |    177 |
|      | InstructionInformation <InstrInf> | [0..1]  | Text    |               |    178 |

## 2.4.2.14.19  Purpose &lt;Purp&gt;

Presence:

[0..1]

Definition:

Underlying reason for the payment transaction.

Usage: Purpose is used by the end-customers, that is initiating party, (ultimate) debtor, (ultimate) creditor to provide information concerning the nature of the payment. Purpose is a content element, which is not used for processing by any of the agents involved in the payment chain.

Purpose &lt;Purp&gt; contains one of the following elements (see "Purpose2Choice" on page 167 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    168 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    168 |

## 2.4.2.14.20  RegulatoryReporting &lt;RgltryRptg&gt;

Presence:

[0..10]

Definition:

Information needed due to regulatory and statutory requirements.

RegulatoryReporting &lt;RgltryRptg&gt; contains the following elements (see "RegulatoryReporting3" on page 187 for details)

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | DebitCreditReportingIndicator <DbtCdtRptgInd> | [0..1]  | CodeSet |               |    188 |
|      | Authority <Authrty>                           | [0..1]  |         |               |    188 |
|      | Name <Nm>                                     | [0..1]  | Text    |               |    188 |
|      | Country <Ctry>                                | [0..1]  | CodeSet | C12           |    189 |
|      | Details <Dtls>                                | [0..*]  |         |               |    189 |
|      | Type <Tp>                                     | [0..1]  | Text    |               |    189 |
|      | Date <Dt>                                     | [0..1]  | Date    |               |    189 |
|      | Country <Ctry>                                | [0..1]  | CodeSet | C12           |    189 |
|      | Code <Cd>                                     | [0..1]  | Text    |               |    190 |
|      | Amount <Amt>                                  | [0..1]  | Amount  | C2, C16       |    190 |
|      | Information <Inf>                             | [0..*]  | Text    |               |    190 |

## 2.4.2.14.21  Tax &lt;Tax&gt;

Presence:

[0..1]

Definition:

Provides details on the tax.

## Tax &lt;Tax&gt; contains the following TaxData1 elements

| Or   | MessageElement <XML Tag>                 | Mult.   | Type     | Constr. No.   |   Page |
|------|------------------------------------------|---------|----------|---------------|--------|
|      | Creditor <Cdtr>                          | [0..1]  | ±        |               |     60 |
|      | Debtor <Dbtr>                            | [0..1]  | ±        |               |     60 |
|      | UltimateDebtor <UltmtDbtr>               | [0..1]  | ±        |               |     60 |
|      | AdministrationZone <AdmstnZone>          | [0..1]  | Text     |               |     61 |
|      | ReferenceNumber <RefNb>                  | [0..1]  | Text     |               |     61 |
|      | Method <Mtd>                             | [0..1]  | Text     |               |     61 |
|      | TotalTaxableBaseAmount <TtlTaxblBaseAmt> | [0..1]  | Amount   | C2, C16       |     61 |
|      | TotalTaxAmount <TtlTaxAmt>               | [0..1]  | Amount   | C2, C16       |     62 |
|      | Date <Dt>                                | [0..1]  | Date     |               |     62 |
|      | SequenceNumber <SeqNb>                   | [0..1]  | Quantity |               |     62 |
|      | Record <Rcrd>                            | [0..*]  |          |               |     62 |
|      | Type <Tp>                                | [0..1]  | Text     |               |     63 |
|      | Category <Ctgy>                          | [0..1]  | Text     |               |     63 |
|      | CategoryDetails <CtgyDtls>               | [0..1]  | Text     |               |     63 |
|      | DebtorStatus <DbtrSts>                   | [0..1]  | Text     |               |     64 |
|      | CertificateIdentification <CertId>       | [0..1]  | Text     |               |     64 |
|      | FormsCode <FrmsCd>                       | [0..1]  | Text     |               |     64 |
|      | Period <Prd>                             | [0..1]  |          |               |     64 |
|      | Year <Yr>                                | [0..1]  | Year     |               |     64 |
|      | Type <Tp>                                | [0..1]  | CodeSet  |               |     64 |
|      | FromToDate <FrToDt>                      | [0..1]  | ±        |               |     65 |
|      | TaxAmount <TaxAmt>                       | [0..1]  |          |               |     66 |
|      | Rate <Rate>                              | [0..1]  | Rate     |               |     66 |
|      | TaxableBaseAmount <TaxblBaseAmt>         | [0..1]  | Amount   | C2, C16       |     66 |
|      | TotalAmount <TtlAmt>                     | [0..1]  | Amount   | C2, C16       |     66 |
|      | Details <Dtls>                           | [0..*]  |          |               |     67 |
|      | Period <Prd>                             | [0..1]  |          |               |     67 |
|      | Year <Yr>                                | [0..1]  | Year     |               |     67 |
|      | Type <Tp>                                | [0..1]  | CodeSet  |               |     68 |
|      | FromToDate <FrToDt>                      | [0..1]  | ±        |               |     68 |
|      | Amount <Amt>                             | [1..1]  | Amount   | C2, C16       |     69 |

| Or   | MessageElement <XML Tag>         | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------------|---------|--------|---------------|--------|
|      | AdditionalInformation <AddtlInf> | [0..1]  | Text   |               |     69 |

## 2.4.2.14.21.1  Creditor &lt;Cdtr&gt;

Presence:

[0..1]

Definition:

Party on the credit side of the transaction to which the tax applies.

Creditor &lt;Cdtr&gt; contains the following elements (see "TaxParty1" on page 232 for details)

| Or   | MessageElement <XML Tag>            | Mult.   | Type   | Constr. No.   |   Page |
|------|-------------------------------------|---------|--------|---------------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |               |    232 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |               |    232 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |               |    233 |

## 2.4.2.14.21.2  Debtor &lt;Dbtr&gt;

Presence:

[0..1]

Definition: Party on the debit side of the transaction to which the tax applies.

Debtor &lt;Dbtr&gt; contains the following elements (see "TaxParty2" on page 233 for details)

| Or   | MessageElement <XML Tag>            | Mult.   | Type   |   Page |
|------|-------------------------------------|---------|--------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |    233 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |    233 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |    233 |
|      | Authorisation <Authstn>             | [0..1]  |        |    233 |
|      | Title <Titl>                        | [0..1]  | Text   |    234 |
|      | Name <Nm>                           | [0..1]  | Text   |    234 |

## 2.4.2.14.21.3  UltimateDebtor &lt;UltmtDbtr&gt;

Presence:

[0..1]

Definition: Ultimate party that owes an amount of money to the (ultimate) creditor, in this case, to the taxing authority.

## UltimateDebtor &lt;UltmtDbtr&gt; contains the following elements (see "TaxParty2" on page 233 for details)

| Or   | MessageElement <XML Tag>            | Mult.   | Type   |   Page |
|------|-------------------------------------|---------|--------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |    233 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |    233 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |    233 |
|      | Authorisation <Authstn>             | [0..1]  |        |    233 |
|      | Title <Titl>                        | [0..1]  | Text   |    234 |
|      | Name <Nm>                           | [0..1]  | Text   |    234 |

## 2.4.2.14.21.4  AdministrationZone &lt;AdmstnZone&gt;

Presence:

[0..1]

Definition:

Territorial part of a country to which the tax payment is related.

Datatype: "Max35Text" on page 256

## 2.4.2.14.21.5  ReferenceNumber &lt;RefNb&gt;

Presence:

[0..1]

Definition:

Tax reference information that is specific to a taxing agency.

Datatype: "Max140Text" on page 254

## 2.4.2.14.21.6  Method &lt;Mtd&gt;

Presence:

[0..1]

Definition: Method used to indicate the underlying business or how the tax is paid.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.21.7  TotalTaxableBaseAmount &lt;TtlTaxblBaseAmt&gt;

Presence:

[0..1]

Definition:

Total amount of money on which the tax is based.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 2.4.2.14.21.8  TotalTaxAmount &lt;TtlTaxAmt&gt;

Presence:

[0..1]

Definition:

Total amount of money as result of the calculation of the tax.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 2.4.2.14.21.9  Date &lt;Dt&gt;

Presence:

[0..1]

Definition:

Date by which tax is due.

Datatype:

"ISODate" on page 250

## 2.4.2.14.21.10  SequenceNumber &lt;SeqNb&gt;

Presence:

[0..1]

Definition:

Sequential number of the tax report.

Datatype:

"Number" on page 253

## 2.4.2.14.21.11  Record &lt;Rcrd&gt;

Presence:

[0..*]

Definition:

Record of tax details.

## Record &lt;Rcrd&gt; contains the following TaxRecord3 elements

| Or   | MessageElement <XML Tag>           | Mult.   | Type    | Constr. No.   |   Page |
|------|------------------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                          | [0..1]  | Text    |               |     63 |
|      | Category <Ctgy>                    | [0..1]  | Text    |               |     63 |
|      | CategoryDetails <CtgyDtls>         | [0..1]  | Text    |               |     63 |
|      | DebtorStatus <DbtrSts>             | [0..1]  | Text    |               |     64 |
|      | CertificateIdentification <CertId> | [0..1]  | Text    |               |     64 |
|      | FormsCode <FrmsCd>                 | [0..1]  | Text    |               |     64 |
|      | Period <Prd>                       | [0..1]  |         |               |     64 |
|      | Year <Yr>                          | [0..1]  | Year    |               |     64 |
|      | Type <Tp>                          | [0..1]  | CodeSet |               |     64 |
|      | FromToDate <FrToDt>                | [0..1]  | ±       |               |     65 |
|      | TaxAmount <TaxAmt>                 | [0..1]  |         |               |     66 |
|      | Rate <Rate>                        | [0..1]  | Rate    |               |     66 |
|      | TaxableBaseAmount <TaxblBaseAmt>   | [0..1]  | Amount  | C2, C16       |     66 |
|      | TotalAmount <TtlAmt>               | [0..1]  | Amount  | C2, C16       |     66 |
|      | Details <Dtls>                     | [0..*]  |         |               |     67 |
|      | Period <Prd>                       | [0..1]  |         |               |     67 |
|      | Year <Yr>                          | [0..1]  | Year    |               |     67 |
|      | Type <Tp>                          | [0..1]  | CodeSet |               |     68 |
|      | FromToDate <FrToDt>                | [0..1]  | ±       |               |     68 |
|      | Amount <Amt>                       | [1..1]  | Amount  | C2, C16       |     69 |
|      | AdditionalInformation <AddtlInf>   | [0..1]  | Text    |               |     69 |

## 2.4.2.14.21.11.1  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

High level code to identify the type of tax details.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.21.11.2  Category &lt;Ctgy&gt;

Presence:

[0..1]

Definition:

Specifies the tax code as published by the tax authority.

Datatype: "Max35Text" on page 256

## 2.4.2.14.21.11.3  CategoryDetails &lt;CtgyDtls&gt;

Presence: [0..1]

Definition: Provides further details of the category tax code.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.21.11.4  DebtorStatus &lt;DbtrSts&gt;

Presence:

[0..1]

Definition: Code provided by local authority to identify the status of the party that has drawn up the settlement document.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.21.11.5  CertificateIdentification &lt;CertId&gt;

Presence:

[0..1]

Definition:

Identification number of the tax report as assigned by the taxing authority.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.21.11.6  FormsCode &lt;FrmsCd&gt;

Presence:

[0..1]

Definition:

Identifies, in a coded form, on which template the tax report is to be provided.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.21.11.7  Period &lt;Prd&gt;

Presence:

[0..1]

Definition: Set of elements used to provide details on the period of time related to the tax payment.

## Period &lt;Prd&gt; contains the following TaxPeriod3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Year <Yr>                  | [0..1]  | Year    |               |     64 |
|      | Type <Tp>                  | [0..1]  | CodeSet |               |     64 |
|      | FromToDate <FrToDt>        | [0..1]  | ±       |               |     65 |

## 2.4.2.14.21.11.7.1  Year &lt;Yr&gt;

Presence:

[0..1]

Definition:

Year related to the tax payment.

Datatype:

"ISOYear" on page 256

## 2.4.2.14.21.11.7.2  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Identification of the period related to the tax payment.

Datatype:

"TaxRecordPeriod1Code" on page 249

| CodeName   | Name       | Definition                                        |
|------------|------------|---------------------------------------------------|
| MM01       | FirstMonth | Tax is related to the second month of the period. |

| CodeName   | Name          | Definition                                          |
|------------|---------------|-----------------------------------------------------|
| MM02       | SecondMonth   | Tax is related to the first month of the period.    |
| MM03       | ThirdMonth    | Tax is related to the third month of the period.    |
| MM04       | FourthMonth   | Tax is related to the fourth month of the period.   |
| MM05       | FifthMonth    | Tax is related to the fifth month of the period.    |
| MM06       | SixthMonth    | Tax is related to the sixth month of the period.    |
| MM07       | SeventhMonth  | Tax is related to the seventh month of the period.  |
| MM08       | EighthMonth   | Tax is related to the eighth month of the period.   |
| MM09       | NinthMonth    | Tax is related to the ninth month of the period.    |
| MM10       | TenthMonth    | Tax is related to the tenth month of the period.    |
| MM11       | EleventhMonth | Tax is related to the eleventh month of the period. |
| MM12       | TwelfthMonth  | Tax is related to the twelfth month of the period.  |
| QTR1       | FirstQuarter  | Tax is related to the first quarter of the period.  |
| QTR2       | SecondQuarter | Tax is related to the second quarter of the period. |
| QTR3       | ThirdQuarter  | Tax is related to the third quarter of the period.  |
| QTR4       | FourthQuarter | Tax is related to the forth quarter of the period.  |
| HLF1       | FirstHalf     | Tax is related to the first half of the period.     |
| HLF2       | SecondHalf    | Tax is related to the second half of the period.    |

## 2.4.2.14.21.11.7.3  FromToDate &lt;FrToDt&gt;

Presence: [0..1]

Definition: Range of time between a start date and an end date for which the tax report is provided.

FromToDate &lt;FrToDt&gt; contains the following elements (see "DatePeriod2" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | FromDate <FrDt>            | [1..1]  | Date   |               |    148 |
|      | ToDate <ToDt>              | [1..1]  | Date   |               |    148 |

## 2.4.2.14.21.11.8  TaxAmount &lt;TaxAmt&gt;

Presence:

[0..1]

Definition:

Set of elements used to provide information on the amount of the tax record.

## TaxAmount &lt;TaxAmt&gt; contains the following TaxAmount3 elements

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | Rate <Rate>                      | [0..1]  | Rate    |               |     66 |
|      | TaxableBaseAmount <TaxblBaseAmt> | [0..1]  | Amount  | C2, C16       |     66 |
|      | TotalAmount <TtlAmt>             | [0..1]  | Amount  | C2, C16       |     66 |
|      | Details <Dtls>                   | [0..*]  |         |               |     67 |
|      | Period <Prd>                     | [0..1]  |         |               |     67 |
|      | Year <Yr>                        | [0..1]  | Year    |               |     67 |
|      | Type <Tp>                        | [0..1]  | CodeSet |               |     68 |
|      | FromToDate <FrToDt>              | [0..1]  | ±       |               |     68 |
|      | Amount <Amt>                     | [1..1]  | Amount  | C2, C16       |     69 |

## 2.4.2.14.21.11.8.1  Rate &lt;Rate&gt;

Presence:

[0..1]

Definition:

Rate used to calculate the tax.

Datatype:

"PercentageRate" on page 253

## 2.4.2.14.21.11.8.2  TaxableBaseAmount &lt;TaxblBaseAmt&gt;

Presence:

[0..1]

Definition:

Amount of money on which the tax is based.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 2.4.2.14.21.11.8.3  TotalAmount &lt;TtlAmt&gt;

Presence: [0..1]

Definition:

Total amount that is the result of the calculation of the tax for the record.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 2.4.2.14.21.11.8.4  Details &lt;Dtls&gt;

Presence:

[0..*]

Definition: Set of elements used to provide details on the tax period and amount.

Details &lt;Dtls&gt; contains the following TaxRecordDetails3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Period <Prd>               | [0..1]  |         |               |     67 |
|      | Year <Yr>                  | [0..1]  | Year    |               |     67 |
|      | Type <Tp>                  | [0..1]  | CodeSet |               |     68 |
|      | FromToDate <FrToDt>        | [0..1]  | ±       |               |     68 |
|      | Amount <Amt>               | [1..1]  | Amount  | C2, C16       |     69 |

## 2.4.2.14.21.11.8.4.1  Period &lt;Prd&gt;

Presence:

[0..1]

Definition:

Set of elements used to provide details on the period of time related to the tax payment.

Period &lt;Prd&gt; contains the following TaxPeriod3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Year <Yr>                  | [0..1]  | Year    |               |     67 |
|      | Type <Tp>                  | [0..1]  | CodeSet |               |     68 |
|      | FromToDate <FrToDt>        | [0..1]  | ±       |               |     68 |

## 2.4.2.14.21.11.8.4.1.1  Year &lt;Yr&gt;

Presence:

[0..1]

Definition:

Year related to the tax payment.

Datatype: "ISOYear" on page 256

## 2.4.2.14.21.11.8.4.1.2  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Identification of the period related to the tax payment.

Datatype:

"TaxRecordPeriod1Code" on page 249

| CodeName   | Name          | Definition                                          |
|------------|---------------|-----------------------------------------------------|
| MM01       | FirstMonth    | Tax is related to the second month of the period.   |
| MM02       | SecondMonth   | Tax is related to the first month of the period.    |
| MM03       | ThirdMonth    | Tax is related to the third month of the period.    |
| MM04       | FourthMonth   | Tax is related to the fourth month of the period.   |
| MM05       | FifthMonth    | Tax is related to the fifth month of the period.    |
| MM06       | SixthMonth    | Tax is related to the sixth month of the period.    |
| MM07       | SeventhMonth  | Tax is related to the seventh month of the period.  |
| MM08       | EighthMonth   | Tax is related to the eighth month of the period.   |
| MM09       | NinthMonth    | Tax is related to the ninth month of the period.    |
| MM10       | TenthMonth    | Tax is related to the tenth month of the period.    |
| MM11       | EleventhMonth | Tax is related to the eleventh month of the period. |
| MM12       | TwelfthMonth  | Tax is related to the twelfth month of the period.  |
| QTR1       | FirstQuarter  | Tax is related to the first quarter of the period.  |
| QTR2       | SecondQuarter | Tax is related to the second quarter of the period. |
| QTR3       | ThirdQuarter  | Tax is related to the third quarter of the period.  |
| QTR4       | FourthQuarter | Tax is related to the forth quarter of the period.  |
| HLF1       | FirstHalf     | Tax is related to the first half of the period.     |
| HLF2       | SecondHalf    | Tax is related to the second half of the period.    |

## 2.4.2.14.21.11.8.4.1.3  FromToDate &lt;FrToDt&gt;

Presence: [0..1]

Definition: Range of time between a start date and an end date for which the tax report is provided.

FromToDate &lt;FrToDt&gt; contains the following elements (see "DatePeriod2" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | FromDate <FrDt>            | [1..1]  | Date   |               |    148 |
|      | ToDate <ToDt>              | [1..1]  | Date   |               |    148 |

## 2.4.2.14.21.11.8.4.2  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Underlying tax amount related to the specified period.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 2.4.2.14.21.11.9  AdditionalInformation &lt;AddtlInf&gt;

Presence:

[0..1]

Definition:

Further details of the tax record.

Datatype:

"Max140Text" on page 254

## 2.4.2.14.22  RelatedRemittanceInformation &lt;RltdRmtInf&gt;

Presence:

[0..10]

Definition: Provides information related to the handling of the remittance information by any of the agents in the transaction processing chain.

## RelatedRemittanceInformation &lt;RltdRmtInf&gt; contains the following RemittanceLocation8 elements

| Or   | MessageElement <XML Tag>                | Mult.   | Type    |   Page |
|------|-----------------------------------------|---------|---------|--------|
|      | RemittanceIdentification <RmtId>        | [0..1]  | Text    |     70 |
|      | RemittanceLocationDetails <RmtLctnDtls> | [0..*]  |         |     70 |
|      | Method <Mtd>                            | [1..1]  | CodeSet |     70 |
|      | ElectronicAddress <ElctrncAdr>          | [0..1]  | Text    |     71 |
|      | PostalAddress <PstlAdr>                 | [0..1]  |         |     71 |
|      | Name <Nm>                               | [1..1]  | Text    |     71 |
|      | Address <Adr>                           | [1..1]  | ±       |     71 |

## 2.4.2.14.22.1  RemittanceIdentification &lt;RmtId&gt;

Presence:

[0..1]

Definition: Unique identification, as assigned by the initiating party, to unambiguously identify the remittance information sent separately from the payment instruction, such as a remittance advice.

Datatype: "Max35Text" on page 256

## 2.4.2.14.22.2  RemittanceLocationDetails &lt;RmtLctnDtls&gt;

Presence:

[0..*]

Definition: Set of elements used to provide information on the location and/or delivery of the remittance information.

## RemittanceLocationDetails &lt;RmtLctnDtls&gt; contains the following RemittanceLocationData2 elements

| Or   | MessageElement <XML Tag>       | Mult.   | Type    | Constr. No.   |   Page |
|------|--------------------------------|---------|---------|---------------|--------|
|      | Method <Mtd>                   | [1..1]  | CodeSet |               |     70 |
|      | ElectronicAddress <ElctrncAdr> | [0..1]  | Text    |               |     71 |
|      | PostalAddress <PstlAdr>        | [0..1]  |         |               |     71 |
|      | Name <Nm>                      | [1..1]  | Text    |               |     71 |
|      | Address <Adr>                  | [1..1]  | ±       |               |     71 |

## 2.4.2.14.22.2.1  Method &lt;Mtd&gt;

Presence:

[1..1]

Definition:

Method used to deliver the remittance advice information.

Datatype: "RemittanceLocationMethod2Code" on page 248

| CodeName   | Name   | Definition                                   |
|------------|--------|----------------------------------------------|
| FAXI       | Fax    | Remittance advice information must be faxed. |

| CodeName   | Name                      | Definition                                                                                                                                                                                                                                                                                                                                          |
|------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EDIC       | ElectronicDataInterchange | Remittance advice information must be sent through Electronic Data Interchange (EDI).                                                                                                                                                                                                                                                               |
| URID       | UniformResourceIdentifier | Remittance advice information needs to be sent to a Uniform Resource Identifier (URI). URI is a compact string of characters that uniquely identify an abstract or physical resource. URI's are the super-set of identifiers, such as URLs, email addresses, ftp sites, etc, and as such, provide the syntax for all of the identification schemes. |
| EMAL       | EMail                     | Remittance advice information must be sent through e-mail.                                                                                                                                                                                                                                                                                          |
| POST       | Post                      | Remittance advice information must be sent through postal services.                                                                                                                                                                                                                                                                                 |
| SMSM       | SMS                       | Remittance advice information must be sent through by phone as a short message service (SMS).                                                                                                                                                                                                                                                       |

## 2.4.2.14.22.2.2  ElectronicAddress &lt;ElctrncAdr&gt;

Presence:

[0..1]

Definition: Electronic address to which an agent is to send the remittance information.

Datatype:

"Max2048Text" on page 255

## 2.4.2.14.22.2.3  PostalAddress &lt;PstlAdr&gt;

Presence:

[0..1]

Definition: Postal address to which an agent is to send the remittance information.

## PostalAddress &lt;PstlAdr&gt; contains the following NameAndAddress18 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Name <Nm>                  | [1..1]  | Text   |               |     71 |
|      | Address <Adr>              | [1..1]  | ±      |               |     71 |

## 2.4.2.14.22.2.3.1  Name &lt;Nm&gt;

Presence:

[1..1]

Definition:

Name by which a party is known and is usually used to identify that party.

Datatype:

"Max140Text" on page 254

## 2.4.2.14.22.2.3.2  Address &lt;Adr&gt;

Presence:

[1..1]

Definition:

Postal address of a party.

Address &lt;Adr&gt; contains the following elements (see "PostalAddress27" on page 184 for details)

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | AddressType <AdrTp>              | [0..1]  |         |               |    184 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>              | [1..1]  | ±       |               |    185 |
|      | CareOf <CareOf>                  | [0..1]  | Text    |               |    185 |
|      | Department <Dept>                | [0..1]  | Text    |               |    185 |
|      | SubDepartment <SubDept>          | [0..1]  | Text    |               |    185 |
|      | StreetName <StrtNm>              | [0..1]  | Text    |               |    186 |
|      | BuildingNumber <BldgNb>          | [0..1]  | Text    |               |    186 |
|      | BuildingName <BldgNm>            | [0..1]  | Text    |               |    186 |
|      | Floor <Flr>                      | [0..1]  | Text    |               |    186 |
|      | UnitNumber <UnitNb>              | [0..1]  | Text    |               |    186 |
|      | PostBox <PstBx>                  | [0..1]  | Text    |               |    186 |
|      | Room <Room>                      | [0..1]  | Text    |               |    186 |
|      | PostCode <PstCd>                 | [0..1]  | Text    |               |    186 |
|      | TownName <TwnNm>                 | [0..1]  | Text    |               |    187 |
|      | TownLocationName <TwnLctnNm>     | [0..1]  | Text    |               |    187 |
|      | DistrictName <DstrctNm>          | [0..1]  | Text    |               |    187 |
|      | CountrySubDivision <CtrySubDvsn> | [0..1]  | Text    |               |    187 |
|      | Country <Ctry>                   | [0..1]  | CodeSet | C12           |    187 |
|      | AddressLine <AdrLine>            | [0..7]  | Text    |               |    187 |

## 2.4.2.14.23  RemittanceInformation &lt;RmtInf&gt;

Presence: [0..1]

Definition: Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.

RemittanceInformation &lt;RmtInf&gt; contains the following elements (see "RemittanceInformation22" on page 190 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Unstructured <Ustrd>       | [0..*]  | Text   |               |    191 |
|      | Structured <Strd>          | [0..*]  | ±      |               |    191 |

## 2.4.2.14.24  EnclosedFile &lt;NclsdFile&gt;

Presence:

[0..*]

Definition:

Document or template enclosed in the notification.

Usage: The use of the EnclosedFile element must be bilaterally agreed.

## EnclosedFile &lt;NclsdFile&gt; contains the following Document15 elements

| Or   | MessageElement <XML Tag>     | Mult.   | Type              | Constr. No.   |   Page |
|------|------------------------------|---------|-------------------|---------------|--------|
|      | Type <Tp>                    | [1..1]  | ±                 |               |     73 |
|      | Identification <Id>          | [1..1]  | Text              |               |     73 |
|      | IssueDate <IsseDt>           | [1..1]  | ±                 |               |     74 |
|      | Name <Nm>                    | [0..1]  | Text              |               |     74 |
|      | LanguageCode <LangCd>        | [0..1]  | CodeSet           | C31           |     74 |
|      | Format <Frmt>                | [1..1]  |                   |               |     74 |
| {Or  | Code <Cd>                    | [1..1]  | CodeSet           |               |     74 |
| Or}  | Proprietary <Prtry>          | [1..1]  | ±                 |               |     74 |
|      | FileName <FileNm>            | [0..1]  | Text              |               |     75 |
|      | DigitalSignature <DgtlSgntr> | [0..1]  |                   |               |     75 |
|      | Party <Pty>                  | [1..1]  | ±                 |               |     75 |
|      | Signature <Sgntr>            | [1..1]  | (External Schema) |               |     76 |
|      | Enclosure <Nclsr>            | [1..1]  | Binary            |               |     77 |

## 2.4.2.14.24.1  Type &lt;Tp&gt;

Presence:

[1..1]

Definition:

Type of document or template.

Type &lt;Tp&gt; contains one of the following elements (see "DocumentType1Choice" on page 152 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    152 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    152 |

## 2.4.2.14.24.2  Identification &lt;Id&gt;

Presence:

[1..1]

Definition:

Identification of the document or template.

Datatype:

"Max35Text" on page 256

## 2.4.2.14.24.3  IssueDate &lt;IsseDt&gt;

Presence:

[1..1]

Definition:

Issue date or date time of the document.

IssueDate &lt;IsseDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 2.4.2.14.24.4  Name &lt;Nm&gt;

Presence:

[0..1]

Definition:

Name of document or transaction, for example, tax invoice.

Datatype:

"Max140Text" on page 254

## 2.4.2.14.24.5  LanguageCode &lt;LangCd&gt;

Presence:

[0..1]

Definition:

Unique identifier for a language used in the document.

Impacted by:

C31 "ValidationByTable"

Datatype:

"LanguageCode" on page 246

## Constraints

## · ValidationByTable

Must be a valid terrestrial language.

## 2.4.2.14.24.6  Format &lt;Frmt&gt;

Presence:

[1..1]

Definition:

Format of the document or template, such as PDF, XML, XSLT.

Format &lt;Frmt&gt; contains one of the following DocumentFormat1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |     74 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |     74 |

## 2.4.2.14.24.6.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Document format.

Datatype:

"ExternalDocumentFormat1Code" on page 242

## 2.4.2.14.24.6.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition: Document format expressed as a proprietary code.

Proprietary &lt;Prtry&gt; contains the following elements (see "GenericIdentification1" on page 161 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    161 |
|      | SchemeName <SchmeNm>       | [0..1]  | Text   |               |    161 |
|      | Issuer <Issr>              | [0..1]  | Text   |               |    162 |

## 2.4.2.14.24.7  FileName &lt;FileNm&gt;

Presence:

[0..1]

Definition:

Technical name of the file.

Datatype: "Max140Text" on page 254

## 2.4.2.14.24.8  DigitalSignature &lt;DgtlSgntr&gt;

Presence:

[0..1]

Definition:

Digital signature of the enclosed binary file.

DigitalSignature &lt;DgtlSgntr&gt; contains the following PartyAndSignature4 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | Party <Pty>                | [1..1]  | ±                 |               |     75 |
|      | Signature <Sgntr>          | [1..1]  | (External Schema) |               |     76 |

## 2.4.2.14.24.8.1  Party &lt;Pty&gt;

Presence:

[1..1]

Definition:

Entity involved in an activity.

Party &lt;Pty&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 2.4.2.14.24.8.2  Signature &lt;Sgntr&gt;

Presence:

[1..1]

Definition:

Signature of a party.

Type:

(External Schema)

Specifies a data structure that allows to include any valid XML Structure (e.g. through an XML Schema). The property namespace is set to 'any'.

The processContents value is 'skip' which according to the above specification and to Iso20022: 2013 means that the application will not perform further validation processing.

## 2.4.2.14.24.9  Enclosure &lt;Nclsr&gt;

Presence: [1..1]

Definition: Binary file representing the enclosed document or template, such as a PDF file, image file, XML file, MT message.

Datatype: "Max10MbBinary" on page 235

## 2.4.2.14.25  SupplementaryData &lt;SplmtryData&gt;

Presence: [0..*]

Definition: Additional information that cannot be captured in the structured elements and/or any other specific block.

Impacted by: C27 "SupplementaryDataRule"

SupplementaryData &lt;SplmtryData&gt; contains the following elements (see "SupplementaryData1" on page 167 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | PlaceAndName <PlcAndNm>    | [0..1]  | Text              |               |    167 |
|      | Envelope <Envlp>           | [1..1]  | (External Schema) |               |    167 |

## Constraints

## · SupplementaryDataRule

This component may not be used without the explicit approval of a SEG and submission to the RA of ISO 20022 compliant structure(s) to be used in the Envelope element.

## 2.4.3 SupplementaryData &lt;SplmtryData&gt;

Presence:

[0..*]

Definition: Additional information that cannot be captured in the structured elements and/or any other specific block.

Impacted by:

C27 "SupplementaryDataRule"

SupplementaryData &lt;SplmtryData&gt; contains the following elements (see "SupplementaryData1" on page 167 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | PlaceAndName <PlcAndNm>    | [0..1]  | Text              |               |    167 |
|      | Envelope <Envlp>           | [1..1]  | (External Schema) |               |    167 |

## Constraints

## · SupplementaryDataRule

This component may not be used without the explicit approval of a SEG and submission to the RA of ISO 20022 compliant structure(s) to be used in the Envelope element.

## 3 pain.014.001.11 CreditorPaymentActivationRequestStatusRep ortV11

## 3.1 MessageDefinition Functionality

The CreditorPaymentActivationRequestStatusReport message is sent by a party to the next party in the creditor payment activation request chain. It is used to inform the latter about the positive or negative status of a creditor payment activation request (either single or file).

Outline

The CreditorPaymentActivationRequestStatusReportV11 MessageDefinition is composed of 4 MessageBuildingBlocks:

- A. GroupHeader

Set of characteristics shared by all individual transactions included in the message.

- B. OriginalGroupInformationAndStatus

Original group information concerning the group of transactions, to which the status report message refers to.

- C. OriginalPaymentInformationAndStatus

Information concerning the original payment information, to which the status report message refers.

- D. SupplementaryData

Additional information that cannot be captured in the structured elements and/or any other specific block.

## 3.2 Structure

| Or   | MessageElement/BuildingBlock <XML Tag>                   | Mult.   | Type     | Constr. No.           | Page   |
|------|----------------------------------------------------------|---------|----------|-----------------------|--------|
|      | Message root <Document> <CdtrPmtActvtnReqStsRpt>         | [1..1]  |          | C8, C9, C10, C11, C23 |        |
|      | GroupHeader <GrpHdr>                                     | [1..1]  |          |                       | 87     |
|      | MessageIdentification <MsgId>                            | [1..1]  | Text     |                       | 87     |
|      | CreationDateTime <CreDtTm>                               | [1..1]  | DateTime |                       | 87     |
|      | InitiatingParty <InitgPty>                               | [1..1]  | ±        |                       | 87     |
|      | ForwardingAgent <FwdgAgt>                                | [0..1]  | ±        |                       | 88     |
|      | DebtorAgent <DbtrAgt>                                    | [0..1]  | ±        |                       | 89     |
|      | CreditorAgent <CdtrAgt>                                  | [0..1]  | ±        |                       | 90     |
|      | OriginalGroupInformationAndStatus <OrgnlGrpInfAndSts>    | [1..1]  |          | C21, C15              | 90     |
|      | OriginalMessageIdentification <OrgnlMsgId>               | [1..1]  | Text     |                       | 91     |
|      | OriginalMessageNameIdentification <OrgnlMsgNmId>         | [1..1]  | Text     |                       | 91     |
|      | OriginalCreationDateTime <OrgnlCreDtTm>                  | [0..1]  | DateTime |                       | 92     |
|      | OriginalNumberOfTransactions <OrgnlNbOfTxs>              | [0..1]  | Text     |                       | 92     |
|      | OriginalControlSum <OrgnlCtrlSum>                        | [0..1]  | Quantity |                       | 92     |
|      | GroupStatus <GrpSts>                                     | [0..1]  | CodeSet  |                       | 92     |
|      | StatusReasonInformation <StsRsnInf>                      | [0..*]  |          | C22                   | 92     |
|      | Originator <Orgtr>                                       | [0..1]  | ±        |                       | 93     |
|      | Reason <Rsn>                                             | [0..1]  |          |                       | 94     |
| {Or  | Code <Cd>                                                | [1..1]  | CodeSet  |                       | 95     |
| Or}  | Proprietary <Prtry>                                      | [1..1]  | Text     |                       | 95     |
|      | AdditionalInformation <AddtlInf>                         | [0..*]  | Text     |                       | 95     |
|      | NumberOfTransactionsPerStatus <NbOfTxsPerSts>            | [0..*]  | ±        |                       | 95     |
|      | OriginalPaymentInformationAndStatus <OrgnlPmtInfAndSts>  | [0..*]  |          | C16, C17, C18, C19    | 95     |
|      | OriginalPaymentInformationIdentification <OrgnlPmtInfId> | [1..1]  | Text     |                       | 101    |
|      | OriginalNumberOfTransactions <OrgnlNbOfTxs>              | [0..1]  | Text     |                       | 101    |
|      | OriginalControlSum <OrgnlCtrlSum>                        | [0..1]  | Quantity |                       | 101    |

| Or   | MessageElement/BuildingBlock <XML Tag>           | Mult.   | Type          | Constr. No.   |   Page |
|------|--------------------------------------------------|---------|---------------|---------------|--------|
|      | PaymentInformationStatus <PmtInfSts>             | [0..1]  | CodeSet       |               |    101 |
|      | StatusReasonInformation <StsRsnInf>              | [0..*]  |               | C22           |    101 |
|      | Originator <Orgtr>                               | [0..1]  | ±             |               |    102 |
|      | Reason <Rsn>                                     | [0..1]  |               |               |    103 |
| {Or  | Code <Cd>                                        | [1..1]  | CodeSet       |               |    104 |
| Or}  | Proprietary <Prtry>                              | [1..1]  | Text          |               |    104 |
|      | AdditionalInformation <AddtlInf>                 | [0..*]  | Text          |               |    104 |
|      | NumberOfTransactionsPerStatus <NbOfTxsPerSts>    | [0..*]  | ±             |               |    104 |
|      | TransactionInformationAndStatus <TxInfAndSts>    | [0..*]  |               |               |    104 |
|      | StatusIdentification <StsId>                     | [0..1]  | Text          |               |    107 |
|      | OriginalInstructionIdentification <OrgnlInstrId> | [0..1]  | Text          |               |    107 |
|      | OriginalEndToEndIdentification <OrgnlEndToEndId> | [0..1]  | Text          |               |    108 |
|      | OriginalUETR <OrgnlUETR>                         | [0..1]  | IdentifierSet |               |    108 |
|      | TransactionStatus <TxSts>                        | [0..1]  | CodeSet       |               |    108 |
|      | StatusReasonInformation <StsRsnInf>              | [0..*]  |               | C22           |    108 |
|      | Originator <Orgtr>                               | [0..1]  | ±             |               |    109 |
|      | Reason <Rsn>                                     | [0..1]  |               |               |    110 |
| {Or  | Code <Cd>                                        | [1..1]  | CodeSet       |               |    110 |
| Or}  | Proprietary <Prtry>                              | [1..1]  | Text          |               |    110 |
|      | AdditionalInformation <AddtlInf>                 | [0..*]  | Text          |               |    110 |
|      | PaymentConditionStatus <PmtCondSts>              | [0..1]  |               |               |    110 |
|      | AcceptedAmount <AccptdAmt>                       | [0..1]  | Amount        | C1, C6        |    110 |
|      | GuaranteedPayment <GrntedPmt>                    | [0..1]  | Indicator     |               |    111 |
|      | EarlyPayment <EarlyPmt>                          | [0..1]  | Indicator     |               |    111 |
|      | ChargesInformation <ChrgsInf>                    | [0..*]  |               |               |    111 |
|      | Amount <Amt>                                     | [1..1]  | Amount        | C2, C7        |    112 |
|      | Agent <Agt>                                      | [1..1]  | ±             |               |    112 |
|      | Type <Tp>                                        | [0..1]  |               |               |    113 |
| {Or  | Code <Cd>                                        | [1..1]  | CodeSet       |               |    113 |
| Or}  | Proprietary <Prtry>                              | [1..1]  | ±             |               |    113 |
|      | DebtorDecisionDateTime <DbtrDcsnDtTm>            | [0..1]  | DateTime      |               |    114 |

| Or   | MessageElement/BuildingBlock <XML Tag>     | Mult.   | Type      | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-----------|---------------|--------|
|      | AcceptanceDateTime <AccptncDtTm>           | [0..1]  | DateTime  |               |    114 |
|      | AccountServicerReference <AcctSvcrRef>     | [0..1]  | Text      |               |    114 |
|      | ClearingSystemReference <ClrSysRef>        | [0..1]  | Text      |               |    114 |
|      | OriginalTransactionReference <OrgnlTxRef>  | [0..1]  |           |               |    114 |
|      | Amount <Amt>                               | [0..1]  | ±         |               |    116 |
|      | RequestedExecutionDate <ReqdExctnDt>       | [0..1]  | ±         |               |    116 |
|      | ExpiryDate <XpryDt>                        | [0..1]  | ±         |               |    117 |
|      | PaymentCondition <PmtCond>                 | [0..1]  |           |               |    117 |
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |               |    117 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |               |    117 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |               |    118 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |               |    118 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C6        |    118 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |               |    118 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |               |    119 |
|      | PaymentTypeInformation <PmtTpInf>          | [0..1]  | ±         |               |    119 |
|      | PaymentMethod <PmtMtd>                     | [0..1]  | CodeSet   |               |    119 |
|      | MandateRelatedInformation <MndtRltdInf>    | [0..1]  | ±         |               |    120 |
|      | RemittanceInformation <RmtInf>             | [0..1]  | ±         |               |    120 |
|      | EnclosedFile <NclsdFile>                   | [0..*]  |           |               |    121 |
|      | Type <Tp>                                  | [1..1]  | ±         |               |    121 |
|      | Identification <Id>                        | [1..1]  | Text      |               |    122 |
|      | IssueDate <IsseDt>                         | [1..1]  | ±         |               |    122 |
|      | Name <Nm>                                  | [0..1]  | Text      |               |    122 |
|      | LanguageCode <LangCd>                      | [0..1]  | CodeSet   | C25           |    122 |
|      | Format <Frmt>                              | [1..1]  |           |               |    122 |
| {Or  | Code <Cd>                                  | [1..1]  | CodeSet   |               |    123 |
| Or}  | Proprietary <Prtry>                        | [1..1]  | ±         |               |    123 |
|      | FileName <FileNm>                          | [0..1]  | Text      |               |    123 |
|      | DigitalSignature <DgtlSgntr>               | [0..1]  |           |               |    123 |
|      | Party <Pty>                                | [1..1]  | ±         |               |    123 |

| Or   | MessageElement/BuildingBlock <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|------------------------------------------|---------|-------------------|---------------|--------|
|      | Signature <Sgntr>                        | [1..1]  | (External Schema) |               |    124 |
|      | Enclosure <Nclsr>                        | [1..1]  | Binary            |               |    125 |
|      | UltimateDebtor <UltmtDbtr>               | [0..1]  | ±                 |               |    125 |
|      | Debtor <Dbtr>                            | [0..1]  | ±                 |               |    126 |
|      | DebtorAccount <DbtrAcct>                 | [0..1]  | ±                 | C14, C13      |    127 |
|      | DebtorAgent <DbtrAgt>                    | [0..1]  | ±                 |               |    128 |
|      | DebtorAgentAccount <DbtrAgtAcct>         | [0..1]  | ±                 | C14, C13      |    129 |
|      | CreditorAgent <CdtrAgt>                  | [1..1]  | ±                 |               |    130 |
|      | CreditorAgentAccount <CdtrAgtAcct>       | [0..1]  | ±                 | C14, C13      |    130 |
|      | Creditor <Cdtr>                          | [1..1]  | ±                 |               |    131 |
|      | CreditorAccount <CdtrAcct>               | [0..1]  | ±                 | C14, C13      |    132 |
|      | UltimateCreditor <UltmtCdtr>             | [0..1]  | ±                 |               |    133 |
|      | EnclosedFile <NclsdFile>                 | [0..*]  |                   |               |    134 |
|      | Type <Tp>                                | [1..1]  | ±                 |               |    135 |
|      | Identification <Id>                      | [1..1]  | Text              |               |    135 |
|      | IssueDate <IsseDt>                       | [1..1]  | ±                 |               |    135 |
|      | Name <Nm>                                | [0..1]  | Text              |               |    136 |
|      | LanguageCode <LangCd>                    | [0..1]  | CodeSet           | C25           |    136 |
|      | Format <Frmt>                            | [1..1]  |                   |               |    136 |
| {Or  | Code <Cd>                                | [1..1]  | CodeSet           |               |    136 |
| Or}  | Proprietary <Prtry>                      | [1..1]  | ±                 |               |    136 |
|      | FileName <FileNm>                        | [0..1]  | Text              |               |    137 |
|      | DigitalSignature <DgtlSgntr>             | [0..1]  |                   |               |    137 |
|      | Party <Pty>                              | [1..1]  | ±                 |               |    137 |
|      | Signature <Sgntr>                        | [1..1]  | (External Schema) |               |    138 |
|      | Enclosure <Nclsr>                        | [1..1]  | Binary            |               |    139 |
|      | SupplementaryData <SplmtryData>          | [0..*]  | ±                 | C24           |    139 |
|      | SupplementaryData <SplmtryData>          | [0..*]  | ±                 | C24           |    139 |

## 3.3 Constraints

## C1 ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## C2 ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## C3 AnyBIC

Only a valid Business identifier code is allowed. Business identifier codes for financial or nonfinancial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consists of eight (8) or eleven (11) contiguous characters.

## C4 BICFI

Valid BICs for financial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consist of eight (8) or eleven (11) contiguous characters.

## C5 Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## C6 CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## C7 CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## C8 GroupStatusAcceptedRule

If OriginalGroupInformationAndStatus/GroupStatus is present and is equal to ACTC (AcceptedTechnicalValidation), ACCP (AcceptedCustomerProfile), ACSP (AcceptedSettlementInProcess), ACSC (AcceptedSettlementCompleted) or ACWC

(AcceptedWithChange), then OriginalPaymentInformationAndStatus/PaymentInformationStatus must be different from RJCT (Rejected).

```
On Condition /OriginalGroupInformationAndStatus/GroupStatus is present And    /OriginalGroupInformationAndStatus/GroupStatus is within DataType <<Code>> ValidationRuleStatus1Code And    /OriginalPaymentInformationAndStatus[*]/PaymentInformationStatus is present Following Must be True
```

/OriginalPaymentInformationAndStatus[*]/PaymentInformationStatus Must not be within DataType &lt;&lt;Code&gt;&gt; ValidationRuleRejected1Code

This constraint is defined at the MessageDefinition level.

## C9 GroupStatusPendingRule

If OriginalGroupInformationAndStatus/GroupStatus is present and is equal to PDNG (Pending), then OriginalPaymentInformationAndStatus/PaymentInformationStatus must be different from RJCT (Rejected).

```
On Condition /OriginalGroupInformationAndStatus/GroupStatus is present And    /OriginalGroupInformationAndStatus/GroupStatus is within DataType <<Code>> ValidationRulePending1Code And    /OriginalPaymentInformationAndStatus[*]/PaymentInformationStatus is present Following Must be True /OriginalPaymentInformationAndStatus[*]/PaymentInformationStatus Must not be within DataType <<Code>> ValidationRuleRejected1Code
```

This constraint is defined at the MessageDefinition level.

## C10 GroupStatusReceivedRule

If OriginalGroupInformationAndStatus/GroupStatus is present and is equal to RCVD (Received), then OriginalPaymentInformationAndStatus/PaymentInformationStatus is not allowed.

```
On Condition /OriginalGroupInformationAndStatus/GroupStatus is present And    /OriginalGroupInformationAndStatus/GroupStatus is within DataType <<Code>> ValidationRuleReceived1Code And    /OriginalPaymentInformationAndStatus[1] is present Following Must be True /OriginalPaymentInformationAndStatus[*]/PaymentInformationStatus Must be absent
```

This constraint is defined at the MessageDefinition level.

## C11 GroupStatusRejectedRule

If OriginalGroupInformationAndStatus/GroupStatus is present and is equal to RJCT (Rejected), then OriginalPaymentInformationAndStatus/PaymentInformationStatus, if present, must be equal to RJCT (Rejected).

```
On Condition /OriginalGroupInformationAndStatus/GroupStatus is present And    /OriginalGroupInformationAndStatus/GroupStatus is within DataType <<Code>> ValidationRuleRejected1Code And    /OriginalPaymentInformationAndStatus[*]/PaymentInformationStatus is present Following Must be True /OriginalPaymentInformationAndStatus[*]/PaymentInformationStatus Must be within DataType <<Code>> ValidationRuleRejected1Code
```

This constraint is defined at the MessageDefinition level.

## C12 IBAN

A valid IBAN consists of all three of the following components: Country Code, check digits and BBAN.

## C13 IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## C14 IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

## C15 NumberOfTransactionPerStatusGuideline

OriginalGroupInformationAndStatus/NumberOfTransactionsPerStatus should only be present if GroupStatus equals 'PART'.

## C16 PaymentInformationStatusAcceptedRule

If PaymentInformationStatus is present and is equal to ACTC (AcceptedTechnicalValidation), ACCP (AcceptedCustomerProfile), ACSP (AcceptedSettlementInProcess), ACSC (AcceptedSettlementCompleted) or ACWC (AcceptedWithChange), then TransactionInformationAndStatus/TransactionStatus must be different from RJCT (Rejected).

## C17 PaymentInformationStatusPendingRule

If PaymentInformationStatus is present and is equal to PDNG, then TransactionInformationAndStatus/TransactionStatus must be different from RJCT.

## C18 PaymentInformationStatusReceivedRule

If PaymentInformationStatus is present and is equal to RCVD, then TransactionInformationAndStatus/TransactionStatus is not allowed.

## C19 PaymentInformationStatusRejectedRule

If PaymentInformationStatus is present and is equal to RJCT, then TransactionInformationAndStatus/TransactionStatus, if present, must be equal to RJCT.

## C20 RemittanceAmountAndTypeGuideline

If Type/Code is equal to CREN, DUPA or REMI for RemittanceAmountAndType, RemittanceAmountAndType must not be repeated.

## C21 StatusReasonInformationRule

If GroupStatus is present and is different from RJCT or PDNG then StatusReasonInformation/ AdditionalInformation must be absent.

## C22 StatusReasonRule

If Reason/Code is equal to NARR, then AddititionalInformation must be present.

## C23 SupplementaryDataRule

The SupplementaryData building block at message level must not be used to provide additional information about a transaction. The SupplementaryData element at transaction level should be used for that purpose.

This constraint is defined at the MessageDefinition level.

## C24 SupplementaryDataRule

This component may not be used without the explicit approval of a SEG and submission to the RA of ISO 20022 compliant structure(s) to be used in the Envelope element.

## C25 ValidationByTable

Must be a valid terrestrial language.

## 3.4 Message Building Blocks

This chapter describes the MessageBuildingBlocks of this MessageDefinition.

## 3.4.1 GroupHeader &lt;GrpHdr&gt;

Presence: [1..1]

Definition: Set of characteristics shared by all individual transactions included in the message.

## GroupHeader &lt;GrpHdr&gt; contains the following GroupHeader111 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type     | Constr. No.   |   Page |
|------|-------------------------------|---------|----------|---------------|--------|
|      | MessageIdentification <MsgId> | [1..1]  | Text     |               |     87 |
|      | CreationDateTime <CreDtTm>    | [1..1]  | DateTime |               |     87 |
|      | InitiatingParty <InitgPty>    | [1..1]  | ±        |               |     87 |
|      | ForwardingAgent <FwdgAgt>     | [0..1]  | ±        |               |     88 |
|      | DebtorAgent <DbtrAgt>         | [0..1]  | ±        |               |     89 |
|      | CreditorAgent <CdtrAgt>       | [0..1]  | ±        |               |     90 |

## 3.4.1.1  MessageIdentification &lt;MsgId&gt;

Presence: [1..1]

Definition: Point to point reference assigned by the instructing party and sent to the next party in the chain to unambiguously identify the message.

Usage: The instructing party has to make sure that 'MessageIdentification' is unique per instructed party for a pre-agreed period.

Datatype: "Max35Text" on page 256

## 3.4.1.2  CreationDateTime &lt;CreDtTm&gt;

Presence:

[1..1]

Definition: Date and time at which the status report was created by the instructing party.

Datatype: "ISODateTime" on page 250

## 3.4.1.3  InitiatingParty &lt;InitgPty&gt;

Presence: [1..1]

Definition: Party initiating the creditor payment activation request. This can either be the creditor himself or the party that initiates the request on behalf of the creditor.

InitiatingParty &lt;InitgPty&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.1.4  ForwardingAgent &lt;FwdgAgt&gt;

Presence: [0..1]

Definition: Financial institution that receives the instruction from the initiating party and forwards it to the next agent in the payment chain for execution.

ForwardingAgent &lt;FwdgAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 3.4.1.5  DebtorAgent &lt;DbtrAgt&gt;

Presence:

[0..1]

Definition:

Financial institution servicing an account for the debtor.

DebtorAgent &lt;DbtrAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 3.4.1.6  CreditorAgent &lt;CdtrAgt&gt;

Presence: [0..1]

Definition: Financial institution servicing an account for the creditor.

CreditorAgent &lt;CdtrAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 3.4.2 OriginalGroupInformationAndStatus &lt;OrgnlGrpInfAndSts&gt;

Presence: [1..1]

Definition: Original group information concerning the group of transactions, to which the status report message refers to.

Impacted by: C21 "StatusReasonInformationRule", C15 "NumberOfTransactionPerStatusGuideline"

## OriginalGroupInformationAndStatus &lt;OrgnlGrpInfAndSts&gt; contains the following OriginalGroupInformation32 elements

| Or   | MessageElement <XML Tag>                         | Mult.   | Type     |   Page |
|------|--------------------------------------------------|---------|----------|--------|
|      | OriginalMessageIdentification <OrgnlMsgId>       | [1..1]  | Text     |     91 |
|      | OriginalMessageNameIdentification <OrgnlMsgNmId> | [1..1]  | Text     |     91 |
|      | OriginalCreationDateTime <OrgnlCreDtTm>          | [0..1]  | DateTime |     92 |
|      | OriginalNumberOfTransactions <OrgnlNbOfTxs>      | [0..1]  | Text     |     92 |
|      | OriginalControlSum <OrgnlCtrlSum>                | [0..1]  | Quantity |     92 |
|      | GroupStatus <GrpSts>                             | [0..1]  | CodeSet  |     92 |
|      | StatusReasonInformation <StsRsnInf>              | [0..*]  |          |     92 |
|      | Originator <Orgtr>                               | [0..1]  | ±        |     93 |
|      | Reason <Rsn>                                     | [0..1]  |          |     94 |
| {Or  | Code <Cd>                                        | [1..1]  | CodeSet  |     95 |
| Or}  | Proprietary <Prtry>                              | [1..1]  | Text     |     95 |
|      | AdditionalInformation <AddtlInf>                 | [0..*]  | Text     |     95 |
|      | NumberOfTransactionsPerStatus <NbOfTxsPerSts>    | [0..*]  | ±        |     95 |

## Constraints

## · NumberOfTransactionPerStatusGuideline

OriginalGroupInformationAndStatus/NumberOfTransactionsPerStatus should only be present if GroupStatus equals 'PART'.

## · StatusReasonInformationRule

If GroupStatus is present and is different from RJCT or PDNG then StatusReasonInformation/ AdditionalInformation must be absent.

```
On Condition /GroupStatus is present And    /GroupStatus is not within DataType <<Code>> ValidationRulePendingAndRejected1Code Following Must be True /StatusReasonInformation[*]/AdditionalInformation[*] Must be absent
```

## 3.4.2.1  OriginalMessageIdentification &lt;OrgnlMsgId&gt;

Presence: [1..1]

Definition: Point to point reference, as assigned by the original instructing party, to unambiguously identify the original message.

Datatype: "Max35Text" on page 256

## 3.4.2.2  OriginalMessageNameIdentification &lt;OrgnlMsgNmId&gt;

Presence: [1..1]

Definition: Specifies the original message name identifier to which the message refers.

Datatype: "Max35Text" on page 256

## 3.4.2.3  OriginalCreationDateTime &lt;OrgnlCreDtTm&gt;

Presence:

[0..1]

Definition:

Date and time at which the original message was created.

Datatype: "ISODateTime" on page 250

## 3.4.2.4  OriginalNumberOfTransactions &lt;OrgnlNbOfTxs&gt;

Presence:

[0..1]

Definition:

Number of individual transactions contained in the original message.

Datatype: "Max15NumericText" on page 254

## 3.4.2.5  OriginalControlSum &lt;OrgnlCtrlSum&gt;

Presence:

[0..1]

Definition:

Total of all individual amounts included in the original message, irrespective of currencies.

Datatype:

"DecimalNumber" on page 252

## 3.4.2.6  GroupStatus &lt;GrpSts&gt;

Presence:

[0..1]

Definition:

Specifies the status of a group of transactions.

Datatype:

"ExternalPaymentGroupStatus1Code" on page 244

## 3.4.2.7  StatusReasonInformation &lt;StsRsnInf&gt;

Presence:

[0..*]

Definition:

Set of elements used to provide detailed information on the status reason.

Impacted by:

C22 "StatusReasonRule"

## StatusReasonInformation &lt;StsRsnInf&gt; contains the following StatusReasonInformation14 elements

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | Originator <Orgtr>               | [0..1]  | ±       |               |     93 |
|      | Reason <Rsn>                     | [0..1]  |         |               |     94 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |     95 |
| Or}  | Proprietary <Prtry>              | [1..1]  | Text    |               |     95 |
|      | AdditionalInformation <AddtlInf> | [0..*]  | Text    |               |     95 |

## Constraints

## · StatusReasonRule

If Reason/Code is equal to NARR, then AddititionalInformation must be present.

```
On Condition /Reason/Code is within DataType <<Code>> ValidationRuleNarrative1Code And    /Reason is present And    /Reason/Code is present Following Must be True /AdditionalInformation[1] Must be present
```

## 3.4.2.7.1  Originator &lt;Orgtr&gt;

Presence:

[0..1]

Definition:

Party that issues the status.

Originator &lt;Orgtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.2.7.2  Reason &lt;Rsn&gt;

Presence:

[0..1]

Definition:

Specifies the reason for the status report.

## Reason &lt;Rsn&gt; contains one of the following StatusReason6Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |     95 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |     95 |

## 3.4.2.7.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Reason for the status, as published in an external reason code list.

Datatype: "ExternalStatusReason1Code" on page 245

## 3.4.2.7.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Reason for the status, in a proprietary form.

Datatype: "Max35Text" on page 256

## 3.4.2.7.3  AdditionalInformation &lt;AddtlInf&gt;

Presence:

[0..*]

Definition:

Further details on the status reason.

Usage: Additional information can be used for several purposes such as the reporting of repaired information.

Datatype: "Max105Text" on page 254

## 3.4.2.8  NumberOfTransactionsPerStatus &lt;NbOfTxsPerSts&gt;

Presence:

[0..*]

Definition: Detailed information on the number of transactions for each identical transaction status.

NumberOfTransactionsPerStatus &lt;NbOfTxsPerSts&gt; contains the following elements (see "NumberOfTransactionsPerStatus5" on page 168 for details)

| Or   | MessageElement <XML Tag>                   | Mult.   | Type     | Constr. No.   |   Page |
|------|--------------------------------------------|---------|----------|---------------|--------|
|      | DetailedNumberOfTransactions <DtldNbOfTxs> | [1..1]  | Text     |               |    168 |
|      | DetailedStatus <DtldSts>                   | [1..1]  | CodeSet  |               |    168 |
|      | DetailedControlSum <DtldCtrlSum>           | [0..1]  | Quantity |               |    168 |

## 3.4.3 OriginalPaymentInformationAndStatus &lt;OrgnlPmtInfAndSts&gt;

Presence:

[0..*]

Definition: Information concerning the original payment information, to which the status report message refers.

Impacted by: C16 "PaymentInformationStatusAcceptedRule", C17 "PaymentInformationStatusPendingRule", C18 "PaymentInformationStatusReceivedRule", C19

"PaymentInformationStatusRejectedRule"

## OriginalPaymentInformationAndStatus &lt;OrgnlPmtInfAndSts&gt; contains the following OriginalPaymentInstruction47 elements

| Or   | MessageElement <XML Tag>                                 | Mult.   | Type          | Constr. No.   |   Page |
|------|----------------------------------------------------------|---------|---------------|---------------|--------|
|      | OriginalPaymentInformationIdentification <OrgnlPmtInfId> | [1..1]  | Text          |               |    101 |
|      | OriginalNumberOfTransactions <OrgnlNbOfTxs>              | [0..1]  | Text          |               |    101 |
|      | OriginalControlSum <OrgnlCtrlSum>                        | [0..1]  | Quantity      |               |    101 |
|      | PaymentInformationStatus <PmtInfSts>                     | [0..1]  | CodeSet       |               |    101 |
|      | StatusReasonInformation <StsRsnInf>                      | [0..*]  |               | C22           |    101 |
|      | Originator <Orgtr>                                       | [0..1]  | ±             |               |    102 |
|      | Reason <Rsn>                                             | [0..1]  |               |               |    103 |
| {Or  | Code <Cd>                                                | [1..1]  | CodeSet       |               |    104 |
| Or}  | Proprietary <Prtry>                                      | [1..1]  | Text          |               |    104 |
|      | AdditionalInformation <AddtlInf>                         | [0..*]  | Text          |               |    104 |
|      | NumberOfTransactionsPerStatus <NbOfTxsPerSts>            | [0..*]  | ±             |               |    104 |
|      | TransactionInformationAndStatus <TxInfAndSts>            | [0..*]  |               |               |    104 |
|      | StatusIdentification <StsId>                             | [0..1]  | Text          |               |    107 |
|      | OriginalInstructionIdentification <OrgnlInstrId>         | [0..1]  | Text          |               |    107 |
|      | OriginalEndToEndIdentification <OrgnlEndToEndId>         | [0..1]  | Text          |               |    108 |
|      | OriginalUETR <OrgnlUETR>                                 | [0..1]  | IdentifierSet |               |    108 |
|      | TransactionStatus <TxSts>                                | [0..1]  | CodeSet       |               |    108 |
|      | StatusReasonInformation <StsRsnInf>                      | [0..*]  |               | C22           |    108 |
|      | Originator <Orgtr>                                       | [0..1]  | ±             |               |    109 |
|      | Reason <Rsn>                                             | [0..1]  |               |               |    110 |
| {Or  | Code <Cd>                                                | [1..1]  | CodeSet       |               |    110 |
| Or}  | Proprietary <Prtry>                                      | [1..1]  | Text          |               |    110 |
|      | AdditionalInformation <AddtlInf>                         | [0..*]  | Text          |               |    110 |
|      | PaymentConditionStatus <PmtCondSts>                      | [0..1]  |               |               |    110 |
|      | AcceptedAmount <AccptdAmt>                               | [0..1]  | Amount        | C1, C6        |    110 |
|      | GuaranteedPayment <GrntedPmt>                            | [0..1]  | Indicator     |               |    111 |
|      | EarlyPayment <EarlyPmt>                                  | [0..1]  | Indicator     |               |    111 |
|      | ChargesInformation <ChrgsInf>                            | [0..*]  |               |               |    111 |
|      | Amount <Amt>                                             | [1..1]  | Amount        | C2, C7        |    112 |
|      | Agent <Agt>                                              | [1..1]  | ±             |               |    112 |

| Or   | MessageElement <XML Tag>                   | Mult.   | Type      | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-----------|---------------|--------|
|      | Type <Tp>                                  | [0..1]  |           |               |    113 |
| {Or  | Code <Cd>                                  | [1..1]  | CodeSet   |               |    113 |
| Or}  | Proprietary <Prtry>                        | [1..1]  | ±         |               |    113 |
|      | DebtorDecisionDateTime <DbtrDcsnDtTm>      | [0..1]  | DateTime  |               |    114 |
|      | AcceptanceDateTime <AccptncDtTm>           | [0..1]  | DateTime  |               |    114 |
|      | AccountServicerReference <AcctSvcrRef>     | [0..1]  | Text      |               |    114 |
|      | ClearingSystemReference <ClrSysRef>        | [0..1]  | Text      |               |    114 |
|      | OriginalTransactionReference <OrgnlTxRef>  | [0..1]  |           |               |    114 |
|      | Amount <Amt>                               | [0..1]  | ±         |               |    116 |
|      | RequestedExecutionDate <ReqdExctnDt>       | [0..1]  | ±         |               |    116 |
|      | ExpiryDate <XpryDt>                        | [0..1]  | ±         |               |    117 |
|      | PaymentCondition <PmtCond>                 | [0..1]  |           |               |    117 |
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |               |    117 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |               |    117 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |               |    118 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |               |    118 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C6        |    118 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |               |    118 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |               |    119 |
|      | PaymentTypeInformation <PmtTpInf>          | [0..1]  | ±         |               |    119 |
|      | PaymentMethod <PmtMtd>                     | [0..1]  | CodeSet   |               |    119 |
|      | MandateRelatedInformation <MndtRltdInf>    | [0..1]  | ±         |               |    120 |
|      | RemittanceInformation <RmtInf>             | [0..1]  | ±         |               |    120 |
|      | EnclosedFile <NclsdFile>                   | [0..*]  |           |               |    121 |
|      | Type <Tp>                                  | [1..1]  | ±         |               |    121 |
|      | Identification <Id>                        | [1..1]  | Text      |               |    122 |
|      | IssueDate <IsseDt>                         | [1..1]  | ±         |               |    122 |
|      | Name <Nm>                                  | [0..1]  | Text      |               |    122 |
|      | LanguageCode <LangCd>                      | [0..1]  | CodeSet   | C25           |    122 |
|      | Format <Frmt>                              | [1..1]  |           |               |    122 |
| {Or  | Code <Cd>                                  | [1..1]  | CodeSet   |               |    123 |

| Or   | MessageElement <XML Tag>           | Mult.         | Type              | Constr. No.   | Page    |
|------|------------------------------------|---------------|-------------------|---------------|---------|
| Or}  | Proprietary <Prtry>                | [1..1]        | ±                 |               | 123     |
|      | FileName <FileNm>                  | [0..1]        | Text              |               | 123     |
|      | DigitalSignature <DgtlSgntr>       | [0..1]        |                   |               | 123     |
|      | Party <Pty>                        | [1..1]        | ±                 |               | 123     |
|      | Signature <Sgntr>                  | [1..1]        | (External Schema) |               | 124     |
|      | Enclosure <Nclsr>                  | [1..1]        | Binary            |               | 125     |
|      | UltimateDebtor <UltmtDbtr>         | [0..1]        | ±                 |               | 125     |
|      | Debtor <Dbtr>                      | [0..1]        | ±                 |               | 126     |
|      | DebtorAccount <DbtrAcct>           | [0..1]        | ±                 | C14, C13      | 127     |
|      | DebtorAgent <DbtrAgt>              | [0..1]        | ±                 |               | 128     |
|      | DebtorAgentAccount <DbtrAgtAcct>   | [0..1]        | ±                 | C14, C13      | 129     |
|      | CreditorAgent <CdtrAgt>            | [1..1]        | ±                 |               | 130     |
|      | CreditorAgentAccount <CdtrAgtAcct> | [0..1]        | ±                 | C14, C13      | 130     |
|      | Creditor <Cdtr>                    | [1..1]        | ±                 |               | 131     |
|      | CreditorAccount <CdtrAcct>         | [0..1]        | ±                 | C14, C13      | 132     |
|      | UltimateCreditor <UltmtCdtr>       | [0..1]        | ±                 |               | 133     |
|      | EnclosedFile <NclsdFile>           | [0..*]        |                   |               | 134     |
|      | Type <Tp>                          | [1..1]        | ±                 |               | 135     |
|      | Identification <Id>                | [1..1]        | Text              |               | 135     |
|      | IssueDate <IsseDt>                 | [1..1]        | ±                 |               | 135     |
|      | Name <Nm>                          | [0..1]        | Text              |               | 136     |
|      | LanguageCode <LangCd>              | [0..1]        | CodeSet           | C25           | 136     |
| {Or  | Format <Frmt> Code <Cd>            | [1..1] [1..1] | CodeSet           |               | 136 136 |
| Or}  | Proprietary <Prtry>                | [1..1]        | ±                 |               | 136     |
|      | FileName <FileNm>                  | [0..1]        | Text              |               | 137     |
|      | DigitalSignature <DgtlSgntr>       | [0..1]        |                   |               | 137     |
|      | Party <Pty>                        | [1..1]        | ±                 |               | 137     |
|      | Signature <Sgntr>                  | [1..1]        | (External Schema) |               | 138     |
|      | Enclosure <Nclsr>                  | [1..1]        | Binary            |               | 139     |

| Or   | MessageElement <XML Tag>        | Mult.   | Type   | Constr. No.   |   Page |
|------|---------------------------------|---------|--------|---------------|--------|
|      | SupplementaryData <SplmtryData> | [0..*]  | ±      | C24           |    139 |

## Constraints

## · PaymentInformationStatusAcceptedRule

If PaymentInformationStatus is present and is equal to ACTC (AcceptedTechnicalValidation), ACCP (AcceptedCustomerProfile), ACSP (AcceptedSettlementInProcess), ACSC

(AcceptedSettlementCompleted) or ACWC (AcceptedWithChange), then

TransactionInformationAndStatus/TransactionStatus must be different from RJCT (Rejected).

```
On Condition /PaymentInformationStatus is present And    /PaymentInformationStatus is within DataType <<Code>> ValidationRuleStatus1Code And    /TransactionInformationAndStatus[*]/TransactionStatus is present Following Must be True /TransactionInformationAndStatus[*]/TransactionStatus Must not be within DataType <<Code>> ValidationRuleRejected1Code
```

## · PaymentInformationStatusPendingRule

If PaymentInformationStatus is present and is equal to PDNG, then TransactionInformationAndStatus/TransactionStatus must be different from RJCT.

```
On Condition /PaymentInformationStatus is present And    /PaymentInformationStatus is within DataType <<Code>> ValidationRulePending1Code And    /TransactionInformationAndStatus[*]/TransactionStatus is present Following Must be True /TransactionInformationAndStatus[*]/TransactionStatus Must not be within DataType <<Code>> ValidationRuleRejected1Code
```

## · PaymentInformationStatusReceivedRule

If PaymentInformationStatus is present and is equal to RCVD, then TransactionInformationAndStatus/TransactionStatus is not allowed.

```
On Condition /PaymentInformationStatus is present And    /PaymentInformationStatus is within DataType <<Code>> ValidationRuleReceived1Code And    /TransactionInformationAndStatus[1] is present Following Must be True /TransactionInformationAndStatus[*]/TransactionStatus Must be absent
```

## · PaymentInformationStatusRejectedRule

If PaymentInformationStatus is present and is equal to RJCT, then TransactionInformationAndStatus/TransactionStatus, if present, must be equal to RJCT.

```
On Condition /PaymentInformationStatus is present And    /PaymentInformationStatus is within DataType <<Code>> ValidationRuleRejected1Code And    /TransactionInformationAndStatus[*]/TransactionStatus is present Following Must be True /TransactionInformationAndStatus[*]/TransactionStatus Must be within DataType
```

&lt;&lt;Code&gt;&gt; ValidationRuleRejected1Code

## 3.4.3.1  OriginalPaymentInformationIdentification &lt;OrgnlPmtInfId&gt;

Presence:

[1..1]

Definition: Unique identification, as assigned by the original sending party, to unambiguously identify the original payment information group.

Datatype: "Max35Text" on page 256

## 3.4.3.2  OriginalNumberOfTransactions &lt;OrgnlNbOfTxs&gt;

Presence:

[0..1]

Definition: Number of individual transactions contained in the original payment information group.

Datatype: "Max15NumericText" on page 254

## 3.4.3.3  OriginalControlSum &lt;OrgnlCtrlSum&gt;

Presence:

[0..1]

Definition: Total of all individual amounts included in the original payment information group, irrespective of currencies.

Datatype: "DecimalNumber" on page 252

## 3.4.3.4  PaymentInformationStatus &lt;PmtInfSts&gt;

Presence:

[0..1]

Definition:

Specifies the status of the payment information group.

Datatype: "ExternalPaymentGroupStatus1Code" on page 244

## 3.4.3.5  StatusReasonInformation &lt;StsRsnInf&gt;

Presence:

[0..*]

Definition:

Provides detailed information on the status reason.

Impacted by:

C22 "StatusReasonRule"

## StatusReasonInformation &lt;StsRsnInf&gt; contains the following StatusReasonInformation14 elements

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | Originator <Orgtr>               | [0..1]  | ±       |               |    102 |
|      | Reason <Rsn>                     | [0..1]  |         |               |    103 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    104 |
| Or}  | Proprietary <Prtry>              | [1..1]  | Text    |               |    104 |
|      | AdditionalInformation <AddtlInf> | [0..*]  | Text    |               |    104 |

## Constraints

## · StatusReasonRule

If Reason/Code is equal to NARR, then AddititionalInformation must be present.

```
On Condition /Reason/Code is within DataType <<Code>> ValidationRuleNarrative1Code And    /Reason is present And    /Reason/Code is present Following Must be True /AdditionalInformation[1] Must be present
```

## 3.4.3.5.1  Originator &lt;Orgtr&gt;

Presence:

[0..1]

Definition:

Party that issues the status.

Originator &lt;Orgtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.5.2  Reason &lt;Rsn&gt;

Presence:

[0..1]

Definition:

Specifies the reason for the status report.

## Reason &lt;Rsn&gt; contains one of the following StatusReason6Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    104 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    104 |

## 3.4.3.5.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Reason for the status, as published in an external reason code list.

Datatype:

"ExternalStatusReason1Code" on page 245

## 3.4.3.5.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Reason for the status, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 3.4.3.5.3  AdditionalInformation &lt;AddtlInf&gt;

Presence:

[0..*]

Definition:

Further details on the status reason.

Usage: Additional information can be used for several purposes such as the reporting of repaired information.

Datatype: "Max105Text" on page 254

## 3.4.3.6  NumberOfTransactionsPerStatus &lt;NbOfTxsPerSts&gt;

Presence:

[0..*]

Definition: Detailed information on the number of transactions for each identical transaction status.

NumberOfTransactionsPerStatus &lt;NbOfTxsPerSts&gt; contains the following elements (see "NumberOfTransactionsPerStatus5" on page 168 for details)

| Or   | MessageElement <XML Tag>                   | Mult.   | Type     | Constr. No.   |   Page |
|------|--------------------------------------------|---------|----------|---------------|--------|
|      | DetailedNumberOfTransactions <DtldNbOfTxs> | [1..1]  | Text     |               |    168 |
|      | DetailedStatus <DtldSts>                   | [1..1]  | CodeSet  |               |    168 |
|      | DetailedControlSum <DtldCtrlSum>           | [0..1]  | Quantity |               |    168 |

## 3.4.3.7  TransactionInformationAndStatus &lt;TxInfAndSts&gt;

Presence:

[0..*]

Definition: Provides information on the original transactions to which the status report message refers.

## TransactionInformationAndStatus &lt;TxInfAndSts&gt; contains the following PaymentTransaction150 elements

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          | Constr. No.   |   Page |
|------|--------------------------------------------------|---------|---------------|---------------|--------|
|      | StatusIdentification <StsId>                     | [0..1]  | Text          |               |    107 |
|      | OriginalInstructionIdentification <OrgnlInstrId> | [0..1]  | Text          |               |    107 |
|      | OriginalEndToEndIdentification <OrgnlEndToEndId> | [0..1]  | Text          |               |    108 |
|      | OriginalUETR <OrgnlUETR>                         | [0..1]  | IdentifierSet |               |    108 |
|      | TransactionStatus <TxSts>                        | [0..1]  | CodeSet       |               |    108 |
|      | StatusReasonInformation <StsRsnInf>              | [0..*]  |               | C22           |    108 |
|      | Originator <Orgtr>                               | [0..1]  | ±             |               |    109 |
|      | Reason <Rsn>                                     | [0..1]  |               |               |    110 |
| {Or  | Code <Cd>                                        | [1..1]  | CodeSet       |               |    110 |
| Or}  | Proprietary <Prtry>                              | [1..1]  | Text          |               |    110 |
|      | AdditionalInformation <AddtlInf>                 | [0..*]  | Text          |               |    110 |
|      | PaymentConditionStatus <PmtCondSts>              | [0..1]  |               |               |    110 |
|      | AcceptedAmount <AccptdAmt>                       | [0..1]  | Amount        | C1, C6        |    110 |
|      | GuaranteedPayment <GrntedPmt>                    | [0..1]  | Indicator     |               |    111 |
|      | EarlyPayment <EarlyPmt>                          | [0..1]  | Indicator     |               |    111 |
|      | ChargesInformation <ChrgsInf>                    | [0..*]  |               |               |    111 |
|      | Amount <Amt>                                     | [1..1]  | Amount        | C2, C7        |    112 |
|      | Agent <Agt>                                      | [1..1]  | ±             |               |    112 |
|      | Type <Tp>                                        | [0..1]  |               |               |    113 |
| {Or  | Code <Cd>                                        | [1..1]  | CodeSet       |               |    113 |
| Or}  | Proprietary <Prtry>                              | [1..1]  | ±             |               |    113 |
|      | DebtorDecisionDateTime <DbtrDcsnDtTm>            | [0..1]  | DateTime      |               |    114 |
|      | AcceptanceDateTime <AccptncDtTm>                 | [0..1]  | DateTime      |               |    114 |
|      | AccountServicerReference <AcctSvcrRef>           | [0..1]  | Text          |               |    114 |
|      | ClearingSystemReference <ClrSysRef>              | [0..1]  | Text          |               |    114 |
|      | OriginalTransactionReference <OrgnlTxRef>        | [0..1]  |               |               |    114 |
|      | Amount <Amt>                                     | [0..1]  | ±             |               |    116 |
|      | RequestedExecutionDate <ReqdExctnDt>             | [0..1]  | ±             |               |    116 |
|      | ExpiryDate <XpryDt>                              | [0..1]  | ±             |               |    117 |
|      | PaymentCondition <PmtCond>                       | [0..1]  |               |               |    117 |

| Or   | MessageElement <XML Tag>                   | Mult.   | Type              | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-------------------|---------------|--------|
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator         |               |    117 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator         |               |    117 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text              |               |    118 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |                   |               |    118 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount            | C1, C6        |    118 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate              |               |    118 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator         |               |    119 |
|      | PaymentTypeInformation <PmtTpInf>          | [0..1]  | ±                 |               |    119 |
|      | PaymentMethod <PmtMtd>                     | [0..1]  | CodeSet           |               |    119 |
|      | MandateRelatedInformation <MndtRltdInf>    | [0..1]  | ±                 |               |    120 |
|      | RemittanceInformation <RmtInf>             | [0..1]  | ±                 |               |    120 |
|      | EnclosedFile <NclsdFile>                   | [0..*]  |                   |               |    121 |
|      | Type <Tp>                                  | [1..1]  | ±                 |               |    121 |
|      | Identification <Id>                        | [1..1]  | Text              |               |    122 |
|      | IssueDate <IsseDt>                         | [1..1]  | ±                 |               |    122 |
|      | Name <Nm>                                  | [0..1]  | Text              |               |    122 |
|      | LanguageCode <LangCd>                      | [0..1]  | CodeSet           | C25           |    122 |
|      | Format <Frmt>                              | [1..1]  |                   |               |    122 |
| {Or  | Code <Cd>                                  | [1..1]  | CodeSet           |               |    123 |
| Or}  | Proprietary <Prtry>                        | [1..1]  | ±                 |               |    123 |
|      | FileName <FileNm>                          | [0..1]  | Text              |               |    123 |
|      | DigitalSignature <DgtlSgntr>               | [0..1]  |                   |               |    123 |
|      | Party <Pty>                                | [1..1]  | ±                 |               |    123 |
|      | Signature <Sgntr>                          | [1..1]  | (External Schema) |               |    124 |
|      | Enclosure <Nclsr>                          | [1..1]  | Binary            |               |    125 |
|      | UltimateDebtor <UltmtDbtr>                 | [0..1]  | ±                 |               |    125 |
|      | Debtor <Dbtr>                              | [0..1]  | ±                 |               |    126 |
|      | DebtorAccount <DbtrAcct>                   | [0..1]  | ±                 | C14, C13      |    127 |
|      | DebtorAgent <DbtrAgt>                      | [0..1]  | ±                 |               |    128 |
|      | DebtorAgentAccount <DbtrAgtAcct>           | [0..1]  | ±                 | C14, C13      |    129 |
|      | CreditorAgent <CdtrAgt>                    | [1..1]  | ±                 |               |    130 |

| Or   | MessageElement <XML Tag>           | Mult.   | Type              | Constr. No.   |   Page |
|------|------------------------------------|---------|-------------------|---------------|--------|
|      | CreditorAgentAccount <CdtrAgtAcct> | [0..1]  | ±                 | C14, C13      |    130 |
|      | Creditor <Cdtr>                    | [1..1]  | ±                 |               |    131 |
|      | CreditorAccount <CdtrAcct>         | [0..1]  | ±                 | C14, C13      |    132 |
|      | UltimateCreditor <UltmtCdtr>       | [0..1]  | ±                 |               |    133 |
|      | EnclosedFile <NclsdFile>           | [0..*]  |                   |               |    134 |
|      | Type <Tp>                          | [1..1]  | ±                 |               |    135 |
|      | Identification <Id>                | [1..1]  | Text              |               |    135 |
|      | IssueDate <IsseDt>                 | [1..1]  | ±                 |               |    135 |
|      | Name <Nm>                          | [0..1]  | Text              |               |    136 |
|      | LanguageCode <LangCd>              | [0..1]  | CodeSet           | C25           |    136 |
|      | Format <Frmt>                      | [1..1]  |                   |               |    136 |
| {Or  | Code <Cd>                          | [1..1]  | CodeSet           |               |    136 |
| Or}  | Proprietary <Prtry>                | [1..1]  | ±                 |               |    136 |
|      | FileName <FileNm>                  | [0..1]  | Text              |               |    137 |
|      | DigitalSignature <DgtlSgntr>       | [0..1]  |                   |               |    137 |
|      | Party <Pty>                        | [1..1]  | ±                 |               |    137 |
|      | Signature <Sgntr>                  | [1..1]  | (External Schema) |               |    138 |
|      | Enclosure <Nclsr>                  | [1..1]  | Binary            |               |    139 |
|      | SupplementaryData <SplmtryData>    | [0..*]  | ±                 | C24           |    139 |

## 3.4.3.7.1  StatusIdentification &lt;StsId&gt;

Presence: [0..1]

Definition: Unique identification, as assigned by an instructing party for an instructed party, to unambiguously identify the reported status.

Usage: The instructing party is the party sending the status message and not the party that sent the original instruction that is being reported on.

Datatype: "Max35Text" on page 256

## 3.4.3.7.2  OriginalInstructionIdentification &lt;OrgnlInstrId&gt;

Presence: [0..1]

Definition: Unique identification, as assigned by the original instructing party for the original instructed party, to unambiguously identify the original instruction.

Datatype: "Max35Text" on page 256

## 3.4.3.7.3  OriginalEndToEndIdentification &lt;OrgnlEndToEndId&gt;

Presence:

[0..1]

Definition: Unique identification, as assigned by the original initiating party, to unambiguously identify the original transaction.

Datatype: "Max35Text" on page 256

## 3.4.3.7.4  OriginalUETR &lt;OrgnlUETR&gt;

Presence:

[0..1]

Definition: Universally unique identifier to provide the original end-to-end reference of a payment transaction.

Datatype:

"UUIDv4Identifier" on page 252

## 3.4.3.7.5  TransactionStatus &lt;TxSts&gt;

Presence:

[0..1]

Definition: Specifies the status of a transaction, as published in an external payment transaction status code list.

Datatype: "ExternalPaymentTransactionStatus1Code" on page 244

## 3.4.3.7.6  StatusReasonInformation &lt;StsRsnInf&gt;

Presence:

[0..*]

Definition:

Provides detailed information on the status reason.

Impacted by:

C22 "StatusReasonRule"

StatusReasonInformation &lt;StsRsnInf&gt; contains the following StatusReasonInformation14 elements

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | Originator <Orgtr>               | [0..1]  | ±       |               |    109 |
|      | Reason <Rsn>                     | [0..1]  |         |               |    110 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    110 |
| Or}  | Proprietary <Prtry>              | [1..1]  | Text    |               |    110 |
|      | AdditionalInformation <AddtlInf> | [0..*]  | Text    |               |    110 |

## Constraints

## · StatusReasonRule

If Reason/Code is equal to NARR, then AddititionalInformation must be present.

```
On Condition /Reason/Code is within DataType <<Code>> ValidationRuleNarrative1Code And    /Reason is present And    /Reason/Code is present
```

Following Must be True /AdditionalInformation[1] Must be present

## 3.4.3.7.6.1  Originator &lt;Orgtr&gt;

Presence:

[0..1]

Definition:

Party that issues the status.

Originator &lt;Orgtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.7.6.2  Reason &lt;Rsn&gt;

Presence:

[0..1]

Definition:

Specifies the reason for the status report.

## Reason &lt;Rsn&gt; contains one of the following StatusReason6Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    110 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    110 |

## 3.4.3.7.6.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Reason for the status, as published in an external reason code list.

Datatype: "ExternalStatusReason1Code" on page 245

## 3.4.3.7.6.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Reason for the status, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 3.4.3.7.6.3  AdditionalInformation &lt;AddtlInf&gt;

Presence:

[0..*]

Definition:

Further details on the status reason.

Usage: Additional information can be used for several purposes such as the reporting of repaired information.

Datatype: "Max105Text" on page 254

## 3.4.3.7.7  PaymentConditionStatus &lt;PmtCondSts&gt;

Presence:

[0..1]

Definition: Status related to the requested conditions for the execution of the payment.

PaymentConditionStatus &lt;PmtCondSts&gt; contains the following PaymentConditionStatus2 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type      | Constr. No.   |   Page |
|------|-------------------------------|---------|-----------|---------------|--------|
|      | AcceptedAmount <AccptdAmt>    | [0..1]  | Amount    | C1, C6        |    110 |
|      | GuaranteedPayment <GrntedPmt> | [0..1]  | Indicator |               |    111 |
|      | EarlyPayment <EarlyPmt>       | [0..1]  | Indicator |               |    111 |

## 3.4.3.7.7.1  AcceptedAmount &lt;AccptdAmt&gt;

Presence:

[0..1]

Definition:

Amount accepted to be paid.

Usage:

May only be present when AmountModificationAllowed is present in the request.

Impacted by: C1 "ActiveCurrency", C6 "CurrencyAmount"

Datatype: "ActiveCurrencyAndAmount" on page 234

## Constraints

## · ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 3.4.3.7.7.2  GuaranteedPayment &lt;GrntedPmt&gt;

Presence: [0..1]

Definition: Indicates if the DebtorAgent guarantees the payment, assuming a payment guarantee contract exists between the different actors.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 3.4.3.7.7.3  EarlyPayment &lt;EarlyPmt&gt;

Presence: [0..1]

Definition:

Indicates if the debtor will pay before the requested execution date.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 3.4.3.7.8  ChargesInformation &lt;ChrgsInf&gt;

Presence: [0..*]

Definition: Provides information on the charges related to the processing of the rejection of the instruction.

Usage: This is passed on for information purposes only. Settlement of the charges will be done separately.

## ChargesInformation &lt;ChrgsInf&gt; contains the following Charges16 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Amount <Amt>               | [1..1]  | Amount  | C2, C7        |    112 |
|      | Agent <Agt>                | [1..1]  | ±       |               |    112 |
|      | Type <Tp>                  | [0..1]  |         |               |    113 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    113 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    113 |

## 3.4.3.7.8.1  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Transaction charges to be paid by the charge bearer.

Impacted by:

C2 "ActiveOrHistoricCurrency", C7 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 3.4.3.7.8.2  Agent &lt;Agt&gt;

Presence:

[1..1]

Definition: Agent that takes the transaction charges or to which the transaction charges are due.

Agent &lt;Agt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 3.4.3.7.8.3  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Defines the type of charges.

Type &lt;Tp&gt; contains one of the following ChargeType3Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    113 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    113 |

## 3.4.3.7.8.3.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Charge type, in a coded form.

Datatype:

"ExternalChargeType1Code" on page 240

## 3.4.3.7.8.3.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Type of charge in a proprietary form, as defined by the issuer.

Proprietary &lt;Prtry&gt; contains the following elements (see "GenericIdentification3" on page 163 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    163 |
|      | Issuer <Issr>              | [0..1]  | Text   |               |    163 |

## 3.4.3.7.9  DebtorDecisionDateTime &lt;DbtrDcsnDtTm&gt;

Presence:

[0..1]

Definition:

Date and time on when the debtor has accepted or rejected the request.

Datatype:

"ISODateTime" on page 250

## 3.4.3.7.10  AcceptanceDateTime &lt;AccptncDtTm&gt;

Presence:

[0..1]

Definition: Point in time when the payment order from the initiating party meets the processing conditions of the account servicing agent. This means that the account servicing agent has received the payment order and has applied checks such as authorisation, availability of funds.

Datatype: "ISODateTime" on page 250

## 3.4.3.7.11  AccountServicerReference &lt;AcctSvcrRef&gt;

Presence:

[0..1]

Definition: Unique reference, as assigned by the account servicing institution, to unambiguously identify the instruction.

Datatype: "Max35Text" on page 256

## 3.4.3.7.12  ClearingSystemReference &lt;ClrSysRef&gt;

Presence:

[0..1]

Definition: Unique reference, as assigned by a clearing system, to unambiguously identify the instruction.

Datatype: "Max35Text" on page 256

## 3.4.3.7.13  OriginalTransactionReference &lt;OrgnlTxRef&gt;

Presence:

[0..1]

Definition: Key elements used to identify the original transaction that is being referred to.

## OriginalTransactionReference &lt;OrgnlTxRef&gt; contains the following OriginalTransactionReference40 elements

| Or   | MessageElement <XML Tag>                   | Mult.   | Type              | Constr. No.   | Page    |
|------|--------------------------------------------|---------|-------------------|---------------|---------|
|      | Amount <Amt>                               | [0..1]  | ±                 |               | 116     |
|      | RequestedExecutionDate <ReqdExctnDt>       | [0..1]  | ±                 |               | 116     |
|      | ExpiryDate <XpryDt>                        | [0..1]  | ±                 |               | 117     |
|      | PaymentCondition <PmtCond>                 | [0..1]  |                   |               | 117     |
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator         |               | 117     |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator         |               | 117     |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text              |               | 118     |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |                   |               | 118     |
| {Or  | Amount <Amt>                               | [1..1]  | Amount            | C1, C6        | 118     |
| Or}  | Rate <Rate>                                | [1..1]  | Rate              |               | 118     |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator         |               | 119     |
|      | PaymentTypeInformation <PmtTpInf>          | [0..1]  | ±                 |               | 119     |
|      | PaymentMethod <PmtMtd>                     | [0..1]  | CodeSet           |               | 119     |
|      | MandateRelatedInformation <MndtRltdInf>    | [0..1]  | ±                 |               | 120     |
|      | RemittanceInformation <RmtInf>             | [0..1]  | ±                 |               | 120     |
|      | EnclosedFile <NclsdFile>                   | [0..*]  |                   |               | 121     |
|      | Type <Tp>                                  | [1..1]  | ±                 |               | 121     |
|      | Identification <Id>                        | [1..1]  | Text              |               | 122     |
|      | IssueDate <IsseDt>                         | [1..1]  | ±                 |               | 122     |
|      | Name <Nm>                                  | [0..1]  | Text              |               | 122     |
|      | LanguageCode <LangCd>                      | [0..1]  | CodeSet           | C25           | 122     |
|      | Format <Frmt>                              | [1..1]  |                   |               | 122     |
| {Or  | Code <Cd>                                  | [1..1]  | CodeSet           |               | 123     |
| Or}  | Proprietary <Prtry>                        | [1..1]  | ±                 |               | 123     |
|      | FileName <FileNm>                          | [0..1]  | Text              |               | 123     |
|      | DigitalSignature <DgtlSgntr>               | [0..1]  |                   |               | 123     |
|      | Party <Pty>                                | [1..1]  | ±                 |               |         |
|      | Signature <Sgntr>                          | [1..1]  | (External Schema) |               | 123 124 |
|      | Enclosure <Nclsr>                          | [1..1]  | Binary            |               | 125     |
|      | UltimateDebtor <UltmtDbtr>                 | [0..1]  | ±                 |               | 125     |

| Or   | MessageElement <XML Tag>           | Mult.   | Type   | Constr. No.   |   Page |
|------|------------------------------------|---------|--------|---------------|--------|
|      | Debtor <Dbtr>                      | [0..1]  | ±      |               |    126 |
|      | DebtorAccount <DbtrAcct>           | [0..1]  | ±      | C14, C13      |    127 |
|      | DebtorAgent <DbtrAgt>              | [0..1]  | ±      |               |    128 |
|      | DebtorAgentAccount <DbtrAgtAcct>   | [0..1]  | ±      | C14, C13      |    129 |
|      | CreditorAgent <CdtrAgt>            | [1..1]  | ±      |               |    130 |
|      | CreditorAgentAccount <CdtrAgtAcct> | [0..1]  | ±      | C14, C13      |    130 |
|      | Creditor <Cdtr>                    | [1..1]  | ±      |               |    131 |
|      | CreditorAccount <CdtrAcct>         | [0..1]  | ±      | C14, C13      |    132 |
|      | UltimateCreditor <UltmtCdtr>       | [0..1]  | ±      |               |    133 |

## 3.4.3.7.13.1  Amount &lt;Amt&gt;

Presence: [0..1]

Definition: Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.

Amount &lt;Amt&gt; contains one of the following elements (see "AmountType4Choice" on page 146 for details)

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
| {Or  | InstructedAmount <InstdAmt>   | [1..1]  | Amount  | C2, C16       |    146 |
| Or}  | EquivalentAmount <EqvtAmt>    | [1..1]  |         |               |    147 |
|      | Amount <Amt>                  | [1..1]  | Amount  | C2, C16       |    147 |
|      | CurrencyOfTransfer <CcyOfTrf> | [1..1]  | CodeSet | C2            |    147 |

## 3.4.3.7.13.2  RequestedExecutionDate &lt;ReqdExctnDt&gt;

Presence: [0..1]

Definition: Date at which the initiating party requests the clearing agent to process the payment.

Usage: This is the date on which the debtor's account is to be debited. If payment by cheque, the date when the cheque must be generated by the bank.

RequestedExecutionDate &lt;ReqdExctnDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 3.4.3.7.13.3  ExpiryDate &lt;XpryDt&gt;

Presence:

[0..1]

Definition: Date by which the debtor must have accepted or rejected the request.

Usage:

Beyond this date, the request becomes void and cannot be processed anymore.

ExpiryDate &lt;XpryDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 3.4.3.7.13.4  PaymentCondition &lt;PmtCond&gt;

Presence: [0..1]

Definition:

Conditions for the execution of the payment.

PaymentCondition &lt;PmtCond&gt; contains the following PaymentCondition2 elements

| Or   | MessageElement <XML Tag>                   | Mult.   | Type      | Constr. No.   |   Page |
|------|--------------------------------------------|---------|-----------|---------------|--------|
|      | AmountModificationAllowed <AmtModAllwd>    | [0..1]  | Indicator |               |    117 |
|      | EarlyPaymentAllowed <EarlyPmtAllwd>        | [0..1]  | Indicator |               |    117 |
|      | DelayPenalty <DelyPnlty>                   | [0..1]  | Text      |               |    118 |
|      | ImmediatePaymentRebate <ImdtPmtRbt>        | [0..1]  |           |               |    118 |
| {Or  | Amount <Amt>                               | [1..1]  | Amount    | C1, C6        |    118 |
| Or}  | Rate <Rate>                                | [1..1]  | Rate      |               |    118 |
|      | GuaranteedPaymentRequested <GrntedPmtReqd> | [0..1]  | Indicator |               |    119 |

## 3.4.3.7.13.4.1  AmountModificationAllowed &lt;AmtModAllwd&gt;

Presence: [0..1]

Definition: Indicates if the debtor is allowed to pay a different amount then the requested amount.

Usage: When element is not present, the default value is "Not Applicable".

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 3.4.3.7.13.4.2  EarlyPaymentAllowed &lt;EarlyPmtAllwd&gt;

Presence: [0..1]

Definition: Indicates if the debtor is allowed to pay before the requested execution date.

Usage: When element is not present, the default value is "Not Applicable".

Datatype:

One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 3.4.3.7.13.4.3  DelayPenalty &lt;DelyPnlty&gt;

Presence:

[0..1]

Definition: Penalty to be applied for a delayed payment, that is when the payment is made after the requested execution date.

Datatype: "Max140Text" on page 254

## 3.4.3.7.13.4.4  ImmediatePaymentRebate &lt;ImdtPmtRbt&gt;

Presence:

[0..1]

Definition:

Discount rate applied for immediate payment upon receipt of the request.

ImmediatePaymentRebate &lt;ImdtPmtRbt&gt; contains one of the following AmountOrRate1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
| {Or  | Amount <Amt>               | [1..1]  | Amount | C1, C6        |    118 |
| Or}  | Rate <Rate>                | [1..1]  | Rate   |               |    118 |

## 3.4.3.7.13.4.4.1  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Amount expressed as an amount of money.

Impacted by:

C1 "ActiveCurrency", C6 "CurrencyAmount"

Datatype:

"ActiveCurrencyAndAmount" on page 234

## Constraints

## · ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 3.4.3.7.13.4.4.2  Rate &lt;Rate&gt;

Presence:

[1..1]

Definition: Amount expressed as a rate.

Datatype: "PercentageRate" on page 253

## 3.4.3.7.13.4.5  GuaranteedPaymentRequested &lt;GrntedPmtReqd&gt;

Presence:

[0..1]

Definition: Indicates if a payment guarantee is requested, assuming a payment guarantee contract exists between the different actors.

Usage: When element is not present, the default value is "Not Applicable".

Datatype:

One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 3.4.3.7.13.5  PaymentTypeInformation &lt;PmtTpInf&gt;

Presence:

[0..1]

Definition:

Set of elements used to further specify the type of transaction.

## PaymentTypeInformation &lt;PmtTpInf&gt; contains the following elements (see

"PaymentTypeInformation29" on page 178 for details)

| Or   | MessageElement <XML Tag>        | Mult.   | Type    |   Page |
|------|---------------------------------|---------|---------|--------|
|      | InstructionPriority <InstrPrty> | [0..1]  | CodeSet |    178 |
|      | ServiceLevel <SvcLvl>           | [0..*]  |         |    178 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | LocalInstrument <LclInstrm>     | [0..1]  |         |    179 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | SequenceType <SeqTp>            | [0..1]  | CodeSet |    179 |
|      | CategoryPurpose <CtgyPurp>      | [0..1]  |         |    180 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    180 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    180 |

## 3.4.3.7.13.6  PaymentMethod &lt;PmtMtd&gt;

Presence:

[0..1]

Definition:

Specifies the means of payment that will be used to move the amount of money.

Datatype:

"PaymentMethod4Code" on page 247

| CodeName   | Name           | Definition                                                                                                                              |
|------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| CHK        | Cheque         | Written order to a bank to pay a certain amount of money from one person to another person.                                             |
| TRF        | CreditTransfer | Transfer of an amount of money in the books of the account servicer.                                                                    |
| DD         | DirectDebit    | Collection of an amount of money from the debtor's bank account by the creditor. The amount of money and dates of collections may vary. |
| TRA        | TransferAdvice | Transfer of an amount of money in the books of the account servicer. An advice should be sent back to the account owner.                |

## 3.4.3.7.13.7  MandateRelatedInformation &lt;MndtRltdInf&gt;

Presence: [0..1]

Definition: Provides further details of the mandate signed between the creditor and the debtor.

## MandateRelatedInformation &lt;MndtRltdInf&gt; contains the following elements (see

"CreditTransferMandateData1" on page 149 for details)

| Or   | MessageElement <XML Tag>           | Mult.   | Type     |   Page |
|------|------------------------------------|---------|----------|--------|
|      | MandateIdentification <MndtId>     | [0..1]  | Text     |    149 |
|      | Type <Tp>                          | [0..1]  | ±        |    149 |
|      | DateOfSignature <DtOfSgntr>        | [0..1]  | Date     |    150 |
|      | DateOfVerification <DtOfVrfctn>    | [0..1]  | DateTime |    150 |
|      | ElectronicSignature <ElctrncSgntr> | [0..1]  | Binary   |    150 |
|      | FirstPaymentDate <FrstPmtDt>       | [0..1]  | Date     |    150 |
|      | FinalPaymentDate <FnlPmtDt>        | [0..1]  | Date     |    150 |
|      | Frequency <Frqcy>                  | [0..1]  | ±        |    151 |
|      | Reason <Rsn>                       | [0..1]  |          |    151 |
| {Or  | Code <Cd>                          | [1..1]  | CodeSet  |    151 |
| Or}  | Proprietary <Prtry>                | [1..1]  | Text     |    151 |

## 3.4.3.7.13.8  RemittanceInformation &lt;RmtInf&gt;

Presence: [0..1]

Definition: Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.

## RemittanceInformation &lt;RmtInf&gt; contains the following elements (see "RemittanceInformation22" on page 190 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Unstructured <Ustrd>       | [0..*]  | Text   |               |    191 |
|      | Structured <Strd>          | [0..*]  | ±      |               |    191 |

## 3.4.3.7.13.9  EnclosedFile &lt;NclsdFile&gt;

Presence:

[0..*]

Definition:

Document or template enclosed in the notification.

Usage: The use of the EnclosedFile element must be bilaterally agreed.

EnclosedFile &lt;NclsdFile&gt; contains the following Document15 elements

| Or   | MessageElement <XML Tag>     | Mult.   | Type              |   Page |
|------|------------------------------|---------|-------------------|--------|
|      | Type <Tp>                    | [1..1]  | ±                 |    121 |
|      | Identification <Id>          | [1..1]  | Text              |    122 |
|      | IssueDate <IsseDt>           | [1..1]  | ±                 |    122 |
|      | Name <Nm>                    | [0..1]  | Text              |    122 |
|      | LanguageCode <LangCd>        | [0..1]  | CodeSet           |    122 |
|      | Format <Frmt>                | [1..1]  |                   |    122 |
| {Or  | Code <Cd>                    | [1..1]  | CodeSet           |    123 |
| Or}  | Proprietary <Prtry>          | [1..1]  | ±                 |    123 |
|      | FileName <FileNm>            | [0..1]  | Text              |    123 |
|      | DigitalSignature <DgtlSgntr> | [0..1]  |                   |    123 |
|      | Party <Pty>                  | [1..1]  | ±                 |    123 |
|      | Signature <Sgntr>            | [1..1]  | (External Schema) |    124 |
|      | Enclosure <Nclsr>            | [1..1]  | Binary            |    125 |

## 3.4.3.7.13.9.1  Type &lt;Tp&gt;

Presence:

[1..1]

Definition:

Type of document or template.

Type &lt;Tp&gt; contains one of the following elements (see "DocumentType1Choice" on page 152 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    152 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    152 |

## 3.4.3.7.13.9.2  Identification &lt;Id&gt;

Presence:

[1..1]

Definition:

Identification of the document or template.

Datatype:

"Max35Text" on page 256

## 3.4.3.7.13.9.3  IssueDate &lt;IsseDt&gt;

Presence:

[1..1]

Definition:

Issue date or date time of the document.

IssueDate &lt;IsseDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 3.4.3.7.13.9.4  Name &lt;Nm&gt;

Presence:

[0..1]

Definition:

Name of document or transaction, for example, tax invoice.

Datatype:

"Max140Text" on page 254

## 3.4.3.7.13.9.5  LanguageCode &lt;LangCd&gt;

Presence:

[0..1]

Definition:

Unique identifier for a language used in the document.

Impacted by:

C25 "ValidationByTable"

Datatype:

"LanguageCode" on page 246

## Constraints

## · ValidationByTable

Must be a valid terrestrial language.

## 3.4.3.7.13.9.6  Format &lt;Frmt&gt;

Presence:

[1..1]

Definition:

Format of the document or template, such as PDF, XML, XSLT.

## Format &lt;Frmt&gt; contains one of the following DocumentFormat1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    123 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    123 |

## 3.4.3.7.13.9.6.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Document format.

Datatype:

"ExternalDocumentFormat1Code" on page 242

## 3.4.3.7.13.9.6.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Document format expressed as a proprietary code.

Proprietary &lt;Prtry&gt; contains the following elements (see "GenericIdentification1" on page 161 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    161 |
|      | SchemeName <SchmeNm>       | [0..1]  | Text   |               |    161 |
|      | Issuer <Issr>              | [0..1]  | Text   |               |    162 |

## 3.4.3.7.13.9.7  FileName &lt;FileNm&gt;

Presence:

[0..1]

Definition:

Technical name of the file.

Datatype:

"Max140Text" on page 254

## 3.4.3.7.13.9.8  DigitalSignature &lt;DgtlSgntr&gt;

Presence:

[0..1]

Definition:

Digital signature of the enclosed binary file.

## DigitalSignature &lt;DgtlSgntr&gt; contains the following PartyAndSignature4 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | Party <Pty>                | [1..1]  | ±                 |               |    123 |
|      | Signature <Sgntr>          | [1..1]  | (External Schema) |               |    124 |

## 3.4.3.7.13.9.8.1  Party &lt;Pty&gt;

Presence:

[1..1]

Definition:

Entity involved in an activity.

Party &lt;Pty&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.7.13.9.8.2  Signature &lt;Sgntr&gt;

Presence:

[1..1]

Definition:

Signature of a party.

Type:

(External Schema)

Specifies a data structure that allows to include any valid XML Structure (e.g. through an XML Schema). The property namespace is set to 'any'.

The processContents value is 'skip' which according to the above specification and to Iso20022: 2013 means that the application will not perform further validation processing.

## 3.4.3.7.13.9.9  Enclosure &lt;Nclsr&gt;

Presence: [1..1]

Definition: Binary file representing the enclosed document or template, such as a PDF file, image file, XML file, MT message.

Datatype: "Max10MbBinary" on page 235

## 3.4.3.7.13.10  UltimateDebtor &lt;UltmtDbtr&gt;

Presence: [0..1]

Definition: Ultimate party that owes an amount of money to the (ultimate) creditor.

## UltimateDebtor &lt;UltmtDbtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.7.13.11  Debtor &lt;Dbtr&gt;

Presence:

[0..1]

Definition: Party that owes an amount of money to the (ultimate) creditor.

Debtor &lt;Dbtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.7.13.12  DebtorAccount &lt;DbtrAcct&gt;

Presence: [0..1]

Definition: Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.

Impacted by: C14 "IdentificationOrProxyPresenceRule", C13 "IdentificationAndProxyGuideline"

DebtorAccount &lt;DbtrAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | ±       |               |    142 |
|      | Type <Tp>                  | [0..1]  | ±       |               |    142 |
|      | Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
|      | Name <Nm>                  | [0..1]  | Text    |               |    143 |
|      | Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 3.4.3.7.13.13  DebtorAgent &lt;DbtrAgt&gt;

Presence:

[0..1]

Definition:

Financial institution servicing an account for the debtor.

## DebtorAgent &lt;DbtrAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 3.4.3.7.13.14  DebtorAgentAccount &lt;DbtrAgtAcct&gt;

Presence: [0..1]

Definition: Unambiguous identification of the account of the debtor agent at its servicing agent in the payment chain.

Impacted by: C14 "IdentificationOrProxyPresenceRule", C13 "IdentificationAndProxyGuideline"

DebtorAgentAccount &lt;DbtrAgtAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | ±       |               |    142 |
|      | Type <Tp>                  | [0..1]  | ±       |               |    142 |
|      | Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
|      | Name <Nm>                  | [0..1]  | Text    |               |    143 |
|      | Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 3.4.3.7.13.15  CreditorAgent &lt;CdtrAgt&gt;

Presence: [1..1]

Definition: Financial institution servicing an account for the creditor.

CreditorAgent &lt;CdtrAgt&gt; contains the following elements (see "BranchAndFinancialInstitutionIdentification8" on page 153 for details)

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 3.4.3.7.13.16  CreditorAgentAccount &lt;CdtrAgtAcct&gt;

Presence: [0..1]

Definition: Unambiguous identification of the account of the creditor agent at its servicing agent to which a credit entry will be made as a result of the payment transaction.

Impacted by: C14 "IdentificationOrProxyPresenceRule", C13 "IdentificationAndProxyGuideline"

CreditorAgentAccount &lt;CdtrAgtAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | ±       |               |    142 |
|      | Type <Tp>                  | [0..1]  | ±       |               |    142 |
|      | Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
|      | Name <Nm>                  | [0..1]  | Text    |               |    143 |
|      | Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 3.4.3.7.13.17  Creditor &lt;Cdtr&gt;

Presence:

[1..1]

Definition:

Party to which an amount of money is due.

Creditor &lt;Cdtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.7.13.18  CreditorAccount &lt;CdtrAcct&gt;

Presence: [0..1]

Definition: Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.

Impacted by: C14 "IdentificationOrProxyPresenceRule", C13 "IdentificationAndProxyGuideline"

CreditorAccount &lt;CdtrAcct&gt; contains the following elements (see "CashAccount40" on page 141 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | ±       |               |    142 |
|      | Type <Tp>                  | [0..1]  | ±       |               |    142 |
|      | Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
|      | Name <Nm>                  | [0..1]  | Text    |               |    143 |
|      | Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 3.4.3.7.13.19  UltimateCreditor &lt;UltmtCdtr&gt;

Presence:

[0..1]

Definition:

Ultimate party to which an amount of money is due.

UltimateCreditor &lt;UltmtCdtr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.7.14  EnclosedFile &lt;NclsdFile&gt;

Presence:

[0..*]

Definition: Document or template enclosed in the notification.

Usage: The use of the EnclosedFile element must be bilaterally agreed.

## EnclosedFile &lt;NclsdFile&gt; contains the following Document15 elements

| Or   | MessageElement <XML Tag>     | Mult.   | Type              | Constr. No.   |   Page |
|------|------------------------------|---------|-------------------|---------------|--------|
|      | Type <Tp>                    | [1..1]  | ±                 |               |    135 |
|      | Identification <Id>          | [1..1]  | Text              |               |    135 |
|      | IssueDate <IsseDt>           | [1..1]  | ±                 |               |    135 |
|      | Name <Nm>                    | [0..1]  | Text              |               |    136 |
|      | LanguageCode <LangCd>        | [0..1]  | CodeSet           | C25           |    136 |
|      | Format <Frmt>                | [1..1]  |                   |               |    136 |
| {Or  | Code <Cd>                    | [1..1]  | CodeSet           |               |    136 |
| Or}  | Proprietary <Prtry>          | [1..1]  | ±                 |               |    136 |
|      | FileName <FileNm>            | [0..1]  | Text              |               |    137 |
|      | DigitalSignature <DgtlSgntr> | [0..1]  |                   |               |    137 |
|      | Party <Pty>                  | [1..1]  | ±                 |               |    137 |
|      | Signature <Sgntr>            | [1..1]  | (External Schema) |               |    138 |
|      | Enclosure <Nclsr>            | [1..1]  | Binary            |               |    139 |

## 3.4.3.7.14.1  Type &lt;Tp&gt;

Presence: [1..1]

Definition:

Type of document or template.

Type &lt;Tp&gt; contains one of the following elements (see "DocumentType1Choice" on page 152 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    152 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    152 |

## 3.4.3.7.14.2  Identification &lt;Id&gt;

Presence:

[1..1]

Definition:

Identification of the document or template.

Datatype:

"Max35Text" on page 256

## 3.4.3.7.14.3  IssueDate &lt;IsseDt&gt;

Presence: [1..1]

Definition:

Issue date or date time of the document.

## IssueDate &lt;IsseDt&gt; contains one of the following elements (see "DateAndDateTime2Choice" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 3.4.3.7.14.4  Name &lt;Nm&gt;

Presence:

[0..1]

Definition:

Name of document or transaction, for example, tax invoice.

Datatype:

"Max140Text" on page 254

## 3.4.3.7.14.5  LanguageCode &lt;LangCd&gt;

Presence:

[0..1]

Definition:

Unique identifier for a language used in the document.

Impacted by:

C25 "ValidationByTable"

Datatype:

"LanguageCode" on page 246

## Constraints

## · ValidationByTable

Must be a valid terrestrial language.

## 3.4.3.7.14.6  Format &lt;Frmt&gt;

Presence:

[1..1]

Definition:

Format of the document or template, such as PDF, XML, XSLT.

## Format &lt;Frmt&gt; contains one of the following DocumentFormat1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    136 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    136 |

## 3.4.3.7.14.6.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Document format.

Datatype:

"ExternalDocumentFormat1Code" on page 242

## 3.4.3.7.14.6.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Document format expressed as a proprietary code.

## Proprietary &lt;Prtry&gt; contains the following elements (see "GenericIdentification1" on page 161 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    161 |
|      | SchemeName <SchmeNm>       | [0..1]  | Text   |               |    161 |
|      | Issuer <Issr>              | [0..1]  | Text   |               |    162 |

## 3.4.3.7.14.7  FileName &lt;FileNm&gt;

Presence:

[0..1]

Definition:

Technical name of the file.

Datatype: "Max140Text" on page 254

## 3.4.3.7.14.8  DigitalSignature &lt;DgtlSgntr&gt;

Presence:

[0..1]

Definition:

Digital signature of the enclosed binary file.

## DigitalSignature &lt;DgtlSgntr&gt; contains the following PartyAndSignature4 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | Party <Pty>                | [1..1]  | ±                 |               |    137 |
|      | Signature <Sgntr>          | [1..1]  | (External Schema) |               |    138 |

## 3.4.3.7.14.8.1  Party &lt;Pty&gt;

Presence:

[1..1]

Definition:

Entity involved in an activity.

Party &lt;Pty&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 3.4.3.7.14.8.2  Signature &lt;Sgntr&gt;

Presence:

[1..1]

Definition:

Signature of a party.

Type:

(External Schema)

Specifies a data structure that allows to include any valid XML Structure (e.g. through an XML Schema). The property namespace is set to 'any'.

The processContents value is 'skip' which according to the above specification and to Iso20022: 2013 means that the application will not perform further validation processing.

## 3.4.3.7.14.9  Enclosure &lt;Nclsr&gt;

Presence:

[1..1]

Definition: Binary file representing the enclosed document or template, such as a PDF file, image file, XML file, MT message.

Datatype: "Max10MbBinary" on page 235

## 3.4.3.7.15  SupplementaryData &lt;SplmtryData&gt;

Presence: [0..*]

Definition: Additional information that cannot be captured in the structured elements and/or any other specific block.

Impacted by: C24 "SupplementaryDataRule"

SupplementaryData &lt;SplmtryData&gt; contains the following elements (see "SupplementaryData1" on page 167 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | PlaceAndName <PlcAndNm>    | [0..1]  | Text              |               |    167 |
|      | Envelope <Envlp>           | [1..1]  | (External Schema) |               |    167 |

## Constraints

## · SupplementaryDataRule

This component may not be used without the explicit approval of a SEG and submission to the RA of ISO 20022 compliant structure(s) to be used in the Envelope element.

## 3.4.4 SupplementaryData &lt;SplmtryData&gt;

Presence:

[0..*]

Definition: Additional information that cannot be captured in the structured elements and/or any other specific block.

Impacted by:

C24 "SupplementaryDataRule"

SupplementaryData &lt;SplmtryData&gt; contains the following elements (see "SupplementaryData1" on page 167 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | PlaceAndName <PlcAndNm>    | [0..1]  | Text              |               |    167 |
|      | Envelope <Envlp>           | [1..1]  | (External Schema) |               |    167 |

## Constraints

## · SupplementaryDataRule

This component may not be used without the explicit approval of a SEG and submission to the RA of ISO 20022 compliant structure(s) to be used in the Envelope element.

## 4 Message Items Types

## 4.1 MessageComponents

## 4.1.1 Account

## 4.1.1.1  CashAccountType2Choice

Definition: Nature or use of the account.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    141 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    141 |

## 4.1.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Account type, in a coded form.

Datatype: "ExternalCashAccountType1Code" on page 240

## 4.1.1.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Nature or use of the account in a proprietary form.

Datatype:

"Max35Text" on page 256

## 4.1.1.2  CashAccount40

Definition: Provides the details to identify an account.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | ±       |               |    142 |
|      | Type <Tp>                  | [0..1]  | ±       |               |    142 |
|      | Currency <Ccy>             | [0..1]  | CodeSet | C2            |    142 |
|      | Name <Nm>                  | [0..1]  | Text    |               |    143 |
|      | Proxy <Prxy>               | [0..1]  | ±       |               |    143 |

## Constraints

## · IdentificationAndProxyGuideline

If the account identification is not defined through a conventional identification such as an email address or a mobile number, then the proxy element should be used for the identification of the account.

## · IdentificationOrProxyPresenceRule

Identification must be present or Proxy must be present. Both may be present.

```
Following Must be True /Identification Must be present Or    /Proxy Must be present
```

## 4.1.1.2.1  Identification &lt;Id&gt;

Presence: [0..1]

Definition: Unique and unambiguous identification for the account between the account owner and the account servicer.

Identification &lt;Id&gt; contains one of the following elements (see "AccountIdentification4Choice" on page 145 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type          | Constr. No.   |   Page |
|------|----------------------------|---------|---------------|---------------|--------|
| {Or  | IBAN <IBAN>                | [1..1]  | IdentifierSet | C17           |    145 |
| Or}  | Other <Othr>               | [1..1]  | ±             |               |    146 |

## 4.1.1.2.2  Type &lt;Tp&gt;

Presence:

[0..1]

Definition: Specifies the nature, or use of the account.

Type &lt;Tp&gt; contains one of the following elements (see "CashAccountType2Choice" on page 141 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    141 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    141 |

## 4.1.1.2.3  Currency &lt;Ccy&gt;

Presence:

[0..1]

Definition:

Identification of the currency in which the account is held.

Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.

Impacted by:

C2 "ActiveOrHistoricCurrency"

Datatype:

"ActiveOrHistoricCurrencyCode" on page 236

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## 4.1.1.2.4  Name &lt;Nm&gt;

Presence: [0..1]

Definition: Name of the account, as assigned by the account servicing institution, in agreement with the account owner in order to provide an additional means of identification of the account.

Usage: The account name is different from the account owner name. The account name is used in certain user communities to provide a means of identifying the account, in addition to the account owner's identity and the account number.

Datatype: "Max70Text" on page 256

## 4.1.1.2.5  Proxy &lt;Prxy&gt;

Presence: [0..1]

Definition: Specifies an alternate assumed name for the identification of the account.

Proxy &lt;Prxy&gt; contains the following elements (see "ProxyAccountIdentification1" on page 144 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                  | [0..1]  |         |               |    144 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    145 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    145 |
|      | Identification <Id>        | [1..1]  | Text    |               |    145 |

## 4.1.1.3  GenericAccountIdentification1

Definition: Information related to a generic account identification.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text    |               |    143 |
|      | SchemeName <SchmeNm>       | [0..1]  |         |               |    144 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    144 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    144 |
|      | Issuer <Issr>              | [0..1]  | Text    |               |    144 |

## 4.1.1.3.1  Identification &lt;Id&gt;

Presence: [1..1]

Definition:

Identification assigned by an institution.

Datatype:

"Max34Text" on page 255

## 4.1.1.3.2  SchemeName &lt;SchmeNm&gt;

Presence:

[0..1]

Definition:

Name of the identification scheme.

SchemeName &lt;SchmeNm&gt; contains one of the following AccountSchemeName1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    144 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    144 |

## 4.1.1.3.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Name of the identification scheme, in a coded form as published in an external list.

Datatype: "ExternalAccountIdentification1Code" on page 239

## 4.1.1.3.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Name of the identification scheme, in a free text form.

Datatype:

"Max35Text" on page 256

## 4.1.1.3.3  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Entity that assigns the identification.

Datatype:

"Max35Text" on page 256

## 4.1.1.4  ProxyAccountIdentification1

Definition: Information related to a proxy identification of the account.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    |   Page |
|------|----------------------------|---------|---------|--------|
|      | Type <Tp>                  | [0..1]  |         |    144 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |    145 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |    145 |
|      | Identification <Id>        | [1..1]  | Text    |    145 |

## 4.1.1.4.1  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Type of the proxy identification.

Type &lt;Tp&gt; contains one of the following ProxyAccountType1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    145 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    145 |

## 4.1.1.4.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Name of the identification scheme, in a coded form as published in an external list.

Datatype: "ExternalProxyAccountType1Code" on page 244

## 4.1.1.4.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Name of the identification scheme, in a free text form.

Datatype:

"Max35Text" on page 256

## 4.1.1.4.2  Identification &lt;Id&gt;

Presence:

[1..1]

Definition: Identification used to indicate the account identification under another specified name.

Datatype: "Max2048Text" on page 255

## 4.1.2 Account Identification

## 4.1.2.1  AccountIdentification4Choice

Definition: Specifies the unique identification of an account as assigned by the account servicer.

| Or   | MessageElement <XML Tag>   | Mult.   | Type          | Constr. No.   |   Page |
|------|----------------------------|---------|---------------|---------------|--------|
| {Or  | IBAN <IBAN>                | [1..1]  | IdentifierSet | C17           |    145 |
| Or}  | Other <Othr>               | [1..1]  | ±             |               |    146 |

## 4.1.2.1.1  IBAN &lt;IBAN&gt;

Presence: [1..1]

Definition: International Bank Account Number (IBAN) - identifier used internationally by financial institutions to uniquely identify the account of a customer. Further specifications of the format and content of the IBAN can be found in the standard ISO 13616 "Banking and related financial services International Bank Account Number (IBAN)" version 1997-10-01, or later revisions.

Impacted by:

C17 "IBAN"

Datatype:

"IBAN2007Identifier" on page 251

## Constraints

## · IBAN

A valid IBAN consists of all three of the following components: Country Code, check digits and BBAN.

## 4.1.2.1.2  Other &lt;Othr&gt;

Presence: [1..1]

Definition: Unique identification of an account, as assigned by the account servicer, using an identification scheme.

Other &lt;Othr&gt; contains the following elements (see "GenericAccountIdentification1" on page 143 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text    |               |    143 |
|      | SchemeName <SchmeNm>       | [0..1]  |         |               |    144 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    144 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    144 |
|      | Issuer <Issr>              | [0..1]  | Text    |               |    144 |

## 4.1.3 Amount

## 4.1.3.1  AmountType4Choice

Definition: Specifies the amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
| {Or  | InstructedAmount <InstdAmt>   | [1..1]  | Amount  | C2, C16       |    146 |
| Or}  | EquivalentAmount <EqvtAmt>    | [1..1]  |         |               |    147 |
|      | Amount <Amt>                  | [1..1]  | Amount  | C2, C16       |    147 |
|      | CurrencyOfTransfer <CcyOfTrf> | [1..1]  | CodeSet | C2            |    147 |

## 4.1.3.1.1  InstructedAmount &lt;InstdAmt&gt;

Presence: [1..1]

Definition: Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.

Usage: This amount has to be transported unchanged through the transaction chain.

Impacted by: C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.3.1.2  EquivalentAmount &lt;EqvtAmt&gt;

Presence: [1..1]

Definition: Amount of money to be moved between the debtor and creditor, expressed in the currency of the debtor's account, and the currency in which the amount is to be moved.

## EquivalentAmount &lt;EqvtAmt&gt; contains the following EquivalentAmount2 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
|      | Amount <Amt>                  | [1..1]  | Amount  | C2, C16       |    147 |
|      | CurrencyOfTransfer <CcyOfTrf> | [1..1]  | CodeSet | C2            |    147 |

## 4.1.3.1.2.1  Amount &lt;Amt&gt;

Presence: [1..1]

Definition: Amount of money to be moved between debtor and creditor, before deduction of charges, expressed in the currency of the debtor's account, and to be moved in a different currency.

Usage: The first agent will convert the equivalent amount into the amount to be moved.

Impacted by: C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype: "ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.3.1.2.2  CurrencyOfTransfer &lt;CcyOfTrf&gt;

Presence: [1..1]

Definition: Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.

Impacted by:

C2 "ActiveOrHistoricCurrency"

Datatype:

"ActiveOrHistoricCurrencyCode" on page 236

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## 4.1.4 Date Period

## 4.1.4.1  DatePeriod2

Definition: Range of time defined by a start date and an end date.

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | FromDate <FrDt>            | [1..1]  | Date   |               |    148 |
|      | ToDate <ToDt>              | [1..1]  | Date   |               |    148 |

## 4.1.4.1.1  FromDate &lt;FrDt&gt;

Presence:

[1..1]

Definition:

Start date of the range.

Datatype:

"ISODate" on page 250

## 4.1.4.1.2  ToDate &lt;ToDt&gt;

Presence:

[1..1]

Definition:

End date of the range.

Datatype:

"ISODate" on page 250

## 4.1.5 Date Time

## 4.1.5.1  DateAndDateTime2Choice

Definition: Choice between a date or a date and time format.

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
| {Or  | Date <Dt>                  | [1..1]  | Date     |               |    149 |
| Or}  | DateTime <DtTm>            | [1..1]  | DateTime |               |    149 |

## 4.1.5.1.1  Date &lt;Dt&gt;

Presence:

[1..1]

Definition:

Specified date.

Datatype:

"ISODate" on page 250

## 4.1.5.1.2  DateTime &lt;DtTm&gt;

Presence:

[1..1]

Definition:

Specified date and time.

Datatype:

"ISODateTime" on page 250

## 4.1.6 Direct Debit

## 4.1.6.1  CreditTransferMandateData1

Definition: Provides further details related to a credit transfer mandate signed between the creditor and the debtor.

| Or   | MessageElement <XML Tag>           | Mult.   | Type     |   Page |
|------|------------------------------------|---------|----------|--------|
|      | MandateIdentification <MndtId>     | [0..1]  | Text     |    149 |
|      | Type <Tp>                          | [0..1]  | ±        |    149 |
|      | DateOfSignature <DtOfSgntr>        | [0..1]  | Date     |    150 |
|      | DateOfVerification <DtOfVrfctn>    | [0..1]  | DateTime |    150 |
|      | ElectronicSignature <ElctrncSgntr> | [0..1]  | Binary   |    150 |
|      | FirstPaymentDate <FrstPmtDt>       | [0..1]  | Date     |    150 |
|      | FinalPaymentDate <FnlPmtDt>        | [0..1]  | Date     |    150 |
|      | Frequency <Frqcy>                  | [0..1]  | ±        |    151 |
|      | Reason <Rsn>                       | [0..1]  |          |    151 |
| {Or  | Code <Cd>                          | [1..1]  | CodeSet  |    151 |
| Or}  | Proprietary <Prtry>                | [1..1]  | Text     |    151 |

## 4.1.6.1.1  MandateIdentification &lt;MndtId&gt;

Presence:

[0..1]

Definition:

Unique identification, as assigned by the creditor, to unambiguously identify the mandate.

Datatype: "Max35Text" on page 256

## 4.1.6.1.2  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Specifies the type of mandate, such as paper, electronic or scheme.

Type &lt;Tp&gt; contains the following elements (see "MandateTypeInformation2" on page 164 for details)

| Or   | MessageElement <XML Tag>    | Mult.   | Type    |   Page |
|------|-----------------------------|---------|---------|--------|
|      | ServiceLevel <SvcLvl>       | [0..1]  |         |    165 |
| {Or  | Code <Cd>                   | [1..1]  | CodeSet |    165 |
| Or}  | Proprietary <Prtry>         | [1..1]  | Text    |    165 |
|      | LocalInstrument <LclInstrm> | [0..1]  |         |    165 |
| {Or  | Code <Cd>                   | [1..1]  | CodeSet |    166 |
| Or}  | Proprietary <Prtry>         | [1..1]  | Text    |    166 |
|      | CategoryPurpose <CtgyPurp>  | [0..1]  |         |    166 |
| {Or  | Code <Cd>                   | [1..1]  | CodeSet |    166 |
| Or}  | Proprietary <Prtry>         | [1..1]  | Text    |    166 |
|      | Classification <Clssfctn>   | [0..1]  | ±       |    166 |

## 4.1.6.1.3  DateOfSignature &lt;DtOfSgntr&gt;

Presence:

[0..1]

Definition: Date on which the credit transfer mandate has been signed by the debtor.

Datatype: "ISODate" on page 250

## 4.1.6.1.4  DateOfVerification &lt;DtOfVrfctn&gt;

Presence:

[0..1]

Definition: Date on which the credit transfer mandate has been verified.

Datatype:

"ISODateTime" on page 250

## 4.1.6.1.5  ElectronicSignature &lt;ElctrncSgntr&gt;

Presence:

[0..1]

Definition: Additional security provisions, such as a digital signature, as provided by the debtor.

Datatype: "Max10KBinary" on page 235

## 4.1.6.1.6  FirstPaymentDate &lt;FrstPmtDt&gt;

Presence:

[0..1]

Definition:

Date of the first payment of a recurrent credit transfer as per the mandate.

Datatype:

"ISODate" on page 250

## 4.1.6.1.7  FinalPaymentDate &lt;FnlPmtDt&gt;

Presence:

[0..1]

Definition:

Date of the final payment of a recurrent credit transfer as per the mandate.

Datatype:

"ISODate" on page 250

## 4.1.6.1.8  Frequency &lt;Frqcy&gt;

Presence:

[0..1]

Definition:

Regularity with which credit transfer instructions are to be created and processed.

Frequency &lt;Frqcy&gt; contains one of the following elements (see "Frequency36Choice" on page 158 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type     |   Page |
|------|----------------------------|---------|----------|--------|
| {Or  | Type <Tp>                  | [1..1]  | CodeSet  |    159 |
| Or   | Period <Prd>               | [1..1]  |          |    159 |
|      | Type <Tp>                  | [1..1]  | CodeSet  |    160 |
|      | CountPerPeriod <CntPerPrd> | [1..1]  | Quantity |    160 |
| Or}  | PointInTime <PtInTm>       | [1..1]  |          |    160 |
|      | Type <Tp>                  | [1..1]  | CodeSet  |    160 |
|      | PointInTime <PtInTm>       | [1..1]  | Text     |    161 |

## 4.1.6.1.9  Reason &lt;Rsn&gt;

Presence:

[0..1]

Definition:

Reason for the setup of the credit transfer mandate.

Usage:

The reason will allow the user to distinguish between different mandates for the same creditor.

Reason &lt;Rsn&gt; contains one of the following MandateSetupReason1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    151 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    151 |

## 4.1.6.1.9.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Reason for the mandate setup, as published in an external reason code list.

Datatype: "ExternalMandateSetupReason1Code" on page 243

## 4.1.6.1.9.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Reason for the mandate setup, in a proprietary form.

Datatype: "Max70Text" on page 256

## 4.1.7 Document

## 4.1.7.1  DocumentType1Choice

Definition: Choice of format for the document type.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    152 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    152 |

## 4.1.7.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Document type, in a coded form.

Datatype:

"ExternalDocumentType1Code" on page 242

## 4.1.7.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Document type, in a proprietary form.

Proprietary &lt;Prtry&gt; contains the following elements (see "GenericIdentification1" on page 161 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    161 |
|      | SchemeName <SchmeNm>       | [0..1]  | Text   |               |    161 |
|      | Issuer <Issr>              | [0..1]  | Text   |               |    162 |

## 4.1.8 Financial Institution Identification

## 4.1.8.1  ClearingSystemMemberIdentification2

Definition: Unique identification, as assigned by a clearing system, to unambiguously identify a member of the clearing system.

| Or   | MessageElement <XML Tag>                | Mult.   | Type   | Constr. No.   |   Page |
|------|-----------------------------------------|---------|--------|---------------|--------|
|      | ClearingSystemIdentification <ClrSysId> | [0..1]  | ±      |               |    152 |
|      | MemberIdentification <MmbId>            | [1..1]  | Text   |               |    153 |

## 4.1.8.1.1  ClearingSystemIdentification &lt;ClrSysId&gt;

Presence: [0..1]

Definition: Specification of a pre-agreed offering between clearing agents or the channel through which the payment instruction is processed.

ClearingSystemIdentification &lt;ClrSysId&gt; contains one of the following elements (see "ClearingSystemIdentification2Choice" on page 232 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    232 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    232 |

## 4.1.8.1.2  MemberIdentification &lt;MmbId&gt;

Presence:

[1..1]

Definition:

Identification of a member of a clearing system.

Datatype: "Max35Text" on page 256

## 4.1.8.2  BranchAndFinancialInstitutionIdentification8

Definition: Unique and unambiguous identification of a financial institution or a branch of a financial institution.

| Or   | MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|------|--------------------------------------------------|---------|---------------|--------|
|      | FinancialInstitutionIdentification <FinInstnId>  | [1..1]  |               |    153 |
|      | BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
|      | ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
|      | Name <Nm>                                        | [0..1]  | Text          |    154 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
|      | Other <Othr>                                     | [0..1]  | ±             |    155 |
|      | BranchIdentification <BrnchId>                   | [0..1]  |               |    156 |
|      | Identification <Id>                              | [0..1]  | Text          |    156 |
|      | LEI <LEI>                                        | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                                        | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>                          | [0..1]  | ±             |    156 |

## 4.1.8.2.1  FinancialInstitutionIdentification &lt;FinInstnId&gt;

Presence: [1..1]

Definition: Unique and unambiguous identification of a financial institution, as assigned under an internationally recognised or proprietary identification scheme.

## FinancialInstitutionIdentification &lt;FinInstnId&gt; contains the following FinancialInstitutionIdentification23 elements

| MessageElement <XML Tag>                         | Mult.   | Type          |   Page |
|--------------------------------------------------|---------|---------------|--------|
| BICFI <BICFI>                                    | [0..1]  | IdentifierSet |    154 |
| ClearingSystemMemberIdentification <ClrSysMmbId> | [0..1]  | ±             |    154 |
| LEI <LEI>                                        | [0..1]  | IdentifierSet |    154 |
| Name <Nm>                                        | [0..1]  | Text          |    154 |
| PostalAddress <PstlAdr>                          | [0..1]  | ±             |    155 |
| Other <Othr>                                     | [0..1]  | ±             |    155 |

## 4.1.8.2.1.1  BICFI &lt;BICFI&gt;

Presence:

[0..1]

Definition: Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362 "Banking - Banking telecommunication messages - Business identifier code (BIC)".

Impacted by:

C4 "BICFI"

Datatype:

"BICFIDec2014Identifier" on page 251

## Constraints

## · BICFI

Valid BICs for financial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consist of eight (8) or eleven (11) contiguous characters.

## 4.1.8.2.1.2  ClearingSystemMemberIdentification &lt;ClrSysMmbId&gt;

Presence:

[0..1]

Definition:

Information used to identify a member within a clearing system.

## ClearingSystemMemberIdentification &lt;ClrSysMmbId&gt; contains the following elements (see

"ClearingSystemMemberIdentification2" on page 152 for details)

| Or   | MessageElement <XML Tag>                | Mult.   | Type   | Constr. No.   |   Page |
|------|-----------------------------------------|---------|--------|---------------|--------|
|      | ClearingSystemIdentification <ClrSysId> | [0..1]  | ±      |               |    152 |
|      | MemberIdentification <MmbId>            | [1..1]  | Text   |               |    153 |

## 4.1.8.2.1.3  LEI &lt;LEI&gt;

Presence:

[0..1]

Definition:

Legal entity identifier of the financial institution.

Datatype:

"LEIIdentifier" on page 252

## 4.1.8.2.1.4  Name &lt;Nm&gt;

Presence:

[0..1]

Definition: Name by which an agent is known and which is usually used to identify that agent.

## Datatype: "Max140Text" on page 254

## 4.1.8.2.1.5  PostalAddress &lt;PstlAdr&gt;

Presence: [0..1]

Definition: Information that locates and identifies a specific address, as defined by postal services.

PostalAddress &lt;PstlAdr&gt; contains the following elements (see "PostalAddress27" on page 184 for details)

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | AddressType <AdrTp>              | [0..1]  |         |               |    184 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>              | [1..1]  | ±       |               |    185 |
|      | CareOf <CareOf>                  | [0..1]  | Text    |               |    185 |
|      | Department <Dept>                | [0..1]  | Text    |               |    185 |
|      | SubDepartment <SubDept>          | [0..1]  | Text    |               |    185 |
|      | StreetName <StrtNm>              | [0..1]  | Text    |               |    186 |
|      | BuildingNumber <BldgNb>          | [0..1]  | Text    |               |    186 |
|      | BuildingName <BldgNm>            | [0..1]  | Text    |               |    186 |
|      | Floor <Flr>                      | [0..1]  | Text    |               |    186 |
|      | UnitNumber <UnitNb>              | [0..1]  | Text    |               |    186 |
|      | PostBox <PstBx>                  | [0..1]  | Text    |               |    186 |
|      | Room <Room>                      | [0..1]  | Text    |               |    186 |
|      | PostCode <PstCd>                 | [0..1]  | Text    |               |    186 |
|      | TownName <TwnNm>                 | [0..1]  | Text    |               |    187 |
|      | TownLocationName <TwnLctnNm>     | [0..1]  | Text    |               |    187 |
|      | DistrictName <DstrctNm>          | [0..1]  | Text    |               |    187 |
|      | CountrySubDivision <CtrySubDvsn> | [0..1]  | Text    |               |    187 |
|      | Country <Ctry>                   | [0..1]  | CodeSet | C12           |    187 |
|      | AddressLine <AdrLine>            | [0..7]  | Text    |               |    187 |

## 4.1.8.2.1.6  Other &lt;Othr&gt;

Presence: [0..1]

Definition: Unique identification of an agent, as assigned by an institution, using an identification scheme.

Other &lt;Othr&gt; contains the following elements (see "GenericFinancialIdentification1" on page 157 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text    |               |    158 |
|      | SchemeName <SchmeNm>       | [0..1]  |         |               |    158 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    158 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    158 |
|      | Issuer <Issr>              | [0..1]  | Text    |               |    158 |

## 4.1.8.2.2  BranchIdentification &lt;BrnchId&gt;

Presence:

[0..1]

Definition:

Identifies a specific branch of a financial institution.

Usage: This component should be used in case the identification information in the financial institution component does not provide identification up to branch level.

## BranchIdentification &lt;BrnchId&gt; contains the following BranchData5 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type          |   Page |
|------|----------------------------|---------|---------------|--------|
|      | Identification <Id>        | [0..1]  | Text          |    156 |
|      | LEI <LEI>                  | [0..1]  | IdentifierSet |    156 |
|      | Name <Nm>                  | [0..1]  | Text          |    156 |
|      | PostalAddress <PstlAdr>    | [0..1]  | ±             |    156 |

## 4.1.8.2.2.1  Identification &lt;Id&gt;

Presence:

[0..1]

Definition: Unique and unambiguous identification of a branch of a financial institution.

Datatype: "Max35Text" on page 256

## 4.1.8.2.2.2  LEI &lt;LEI&gt;

Presence:

[0..1]

Definition:

Legal entity identification for the branch of the financial institution.

Datatype:

"LEIIdentifier" on page 252

## 4.1.8.2.2.3  Name &lt;Nm&gt;

Presence:

[0..1]

Definition: Name by which an agent is known and which is usually used to identify that agent.

Datatype: "Max140Text" on page 254

## 4.1.8.2.2.4  PostalAddress &lt;PstlAdr&gt;

Presence:

[0..1]

Definition: Information that locates and identifies a specific address, as defined by postal services.

PostalAddress &lt;PstlAdr&gt; contains the following elements (see "PostalAddress27" on page 184 for details)

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | AddressType <AdrTp>              | [0..1]  |         |               |    184 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>              | [1..1]  | ±       |               |    185 |
|      | CareOf <CareOf>                  | [0..1]  | Text    |               |    185 |
|      | Department <Dept>                | [0..1]  | Text    |               |    185 |
|      | SubDepartment <SubDept>          | [0..1]  | Text    |               |    185 |
|      | StreetName <StrtNm>              | [0..1]  | Text    |               |    186 |
|      | BuildingNumber <BldgNb>          | [0..1]  | Text    |               |    186 |
|      | BuildingName <BldgNm>            | [0..1]  | Text    |               |    186 |
|      | Floor <Flr>                      | [0..1]  | Text    |               |    186 |
|      | UnitNumber <UnitNb>              | [0..1]  | Text    |               |    186 |
|      | PostBox <PstBx>                  | [0..1]  | Text    |               |    186 |
|      | Room <Room>                      | [0..1]  | Text    |               |    186 |
|      | PostCode <PstCd>                 | [0..1]  | Text    |               |    186 |
|      | TownName <TwnNm>                 | [0..1]  | Text    |               |    187 |
|      | TownLocationName <TwnLctnNm>     | [0..1]  | Text    |               |    187 |
|      | DistrictName <DstrctNm>          | [0..1]  | Text    |               |    187 |
|      | CountrySubDivision <CtrySubDvsn> | [0..1]  | Text    |               |    187 |
|      | Country <Ctry>                   | [0..1]  | CodeSet | C12           |    187 |
|      | AddressLine <AdrLine>            | [0..7]  | Text    |               |    187 |

## 4.1.8.3  GenericFinancialIdentification1

Definition: Information related to an identification of a financial institution.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text    |               |    158 |
|      | SchemeName <SchmeNm>       | [0..1]  |         |               |    158 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    158 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    158 |
|      | Issuer <Issr>              | [0..1]  | Text    |               |    158 |

## 4.1.8.3.1  Identification &lt;Id&gt;

Presence:

[1..1]

Definition:

Unique and unambiguous identification of a person.

Datatype:

"Max35Text" on page 256

## 4.1.8.3.2  SchemeName &lt;SchmeNm&gt;

Presence:

[0..1]

Definition:

Name of the identification scheme.

## SchemeName &lt;SchmeNm&gt; contains one of the following FinancialIdentificationSchemeName1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    158 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    158 |

## 4.1.8.3.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Name of the identification scheme, in a coded form as published in an external list.

Datatype: "ExternalFinancialInstitutionIdentification1Code" on page 242

## 4.1.8.3.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Name of the identification scheme, in a free text form.

Datatype:

"Max35Text" on page 256

## 4.1.8.3.3  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Entity that assigns the identification.

Datatype:

"Max35Text" on page 256

## 4.1.9 Frequency

## 4.1.9.1  Frequency36Choice

Definition: Choice of format for a frequency, for example, the frequency of payment.

| Or   | MessageElement <XML Tag>   | Mult.   | Type     |   Page |
|------|----------------------------|---------|----------|--------|
| {Or  | Type <Tp>                  | [1..1]  | CodeSet  |    159 |
| Or   | Period <Prd>               | [1..1]  |          |    159 |
|      | Type <Tp>                  | [1..1]  | CodeSet  |    160 |
|      | CountPerPeriod <CntPerPrd> | [1..1]  | Quantity |    160 |
| Or}  | PointInTime <PtInTm>       | [1..1]  |          |    160 |
|      | Type <Tp>                  | [1..1]  | CodeSet  |    160 |
|      | PointInTime <PtInTm>       | [1..1]  | Text     |    161 |

## 4.1.9.1.1  Type &lt;Tp&gt;

Presence: [1..1]

Definition:

Specifies a frequency in terms of a specified period type.

Datatype: "Frequency6Code" on page 245

| CodeName   | Name        | Definition                                                 |
|------------|-------------|------------------------------------------------------------|
| YEAR       | Annual      | Event takes place every year or once a year.               |
| MNTH       | Monthly     | Event takes place every month or once a month.             |
| QURT       | Quarterly   | Event takes place every three months or four times a year. |
| MIAN       | SemiAnnual  | Event takes place every six months or two times a year.    |
| WEEK       | Weekly      | Event takes place once a week.                             |
| DAIL       | Daily       | Event takes place every day.                               |
| ADHO       | Adhoc       | Event takes place on request or as necessary.              |
| INDA       | IntraDay    | Event takes place several times a day.                     |
| FRTN       | Fortnightly | Event takes place every two weeks.                         |

## 4.1.9.1.2  Period &lt;Prd&gt;

Presence: [1..1]

Definition: Specifies a frequency in terms of a count per period within a specified period type.

Period &lt;Prd&gt; contains the following FrequencyPeriod1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type     | Constr. No.   |   Page |
|------|----------------------------|---------|----------|---------------|--------|
|      | Type <Tp>                  | [1..1]  | CodeSet  |               |    160 |
|      | CountPerPeriod <CntPerPrd> | [1..1]  | Quantity |               |    160 |

## 4.1.9.1.2.1  Type &lt;Tp&gt;

Presence:

[1..1]

Definition:

Period for which the number of instructions are to be created and processed.

Datatype:

"Frequency6Code" on page 245

| CodeName   | Name        | Definition                                                 |
|------------|-------------|------------------------------------------------------------|
| YEAR       | Annual      | Event takes place every year or once a year.               |
| MNTH       | Monthly     | Event takes place every month or once a month.             |
| QURT       | Quarterly   | Event takes place every three months or four times a year. |
| MIAN       | SemiAnnual  | Event takes place every six months or two times a year.    |
| WEEK       | Weekly      | Event takes place once a week.                             |
| DAIL       | Daily       | Event takes place every day.                               |
| ADHO       | Adhoc       | Event takes place on request or as necessary.              |
| INDA       | IntraDay    | Event takes place several times a day.                     |
| FRTN       | Fortnightly | Event takes place every two weeks.                         |

## 4.1.9.1.2.2  CountPerPeriod &lt;CntPerPrd&gt;

Presence:

[1..1]

Definition:

Number of instructions to be created and processed during the specified period.

Datatype:

"DecimalNumber" on page 252

## 4.1.9.1.3  PointInTime &lt;PtInTm&gt;

Presence:

[1..1]

Definition: Specifies a frequency in terms of an exact point in time or moment within a specified period type.

## PointInTime &lt;PtInTm&gt; contains the following FrequencyAndMoment1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                  | [1..1]  | CodeSet |               |    160 |
|      | PointInTime <PtInTm>       | [1..1]  | Text    |               |    161 |

## 4.1.9.1.3.1  Type &lt;Tp&gt;

Presence:

[1..1]

Definition:

Period for which the number of instructions are to be created and processed.

Datatype:

"Frequency6Code" on page 245

| CodeName   | Name        | Definition                                                 |
|------------|-------------|------------------------------------------------------------|
| YEAR       | Annual      | Event takes place every year or once a year.               |
| MNTH       | Monthly     | Event takes place every month or once a month.             |
| QURT       | Quarterly   | Event takes place every three months or four times a year. |
| MIAN       | SemiAnnual  | Event takes place every six months or two times a year.    |
| WEEK       | Weekly      | Event takes place once a week.                             |
| DAIL       | Daily       | Event takes place every day.                               |
| ADHO       | Adhoc       | Event takes place on request or as necessary.              |
| INDA       | IntraDay    | Event takes place several times a day.                     |
| FRTN       | Fortnightly | Event takes place every two weeks.                         |

## 4.1.9.1.3.2  PointInTime &lt;PtInTm&gt;

Presence:

[1..1]

Definition: Further information on the exact point in time the event should take place.

Datatype:

"Exact2NumericText" on page 253

## 4.1.10 Identification Information

## 4.1.10.1  GenericIdentification1

Definition: Information related to an identification, for example party identification or account identification.

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    161 |
|      | SchemeName <SchmeNm>       | [0..1]  | Text   |               |    161 |
|      | Issuer <Issr>              | [0..1]  | Text   |               |    162 |

## 4.1.10.1.1  Identification &lt;Id&gt;

Presence:

[1..1]

Definition:

Identification assigned by an institution.

Datatype: "Max35Text" on page 256

## 4.1.10.1.2  SchemeName &lt;SchmeNm&gt;

Presence:

[0..1]

Definition:

Name of the identification scheme.

Datatype:

"Max35Text" on page 256

## 4.1.10.1.3  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Entity that assigns the identification.

Datatype: "Max35Text" on page 256

## 4.1.10.2  PaymentIdentification6

Definition: Provides further means of referencing a payment transaction.

| Or   | MessageElement <XML Tag>            | Mult.   | Type          | Constr. No.   |   Page |
|------|-------------------------------------|---------|---------------|---------------|--------|
|      | InstructionIdentification <InstrId> | [0..1]  | Text          |               |    162 |
|      | EndToEndIdentification <EndToEndId> | [1..1]  | Text          |               |    162 |
|      | UETR <UETR>                         | [0..1]  | IdentifierSet |               |    162 |

## 4.1.10.2.1  InstructionIdentification &lt;InstrId&gt;

Presence: [0..1]

Definition: Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.

Usage: The instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.

Datatype: "Max35Text" on page 256

## 4.1.10.2.2  EndToEndIdentification &lt;EndToEndId&gt;

Presence: [1..1]

Definition: Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.

Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.

Datatype: "Max35Text" on page 256

## 4.1.10.2.3  UETR &lt;UETR&gt;

Presence:

[0..1]

Definition: Universally unique identifier to provide an end-to-end reference of a payment transaction.

Datatype:

"UUIDv4Identifier" on page 252

## 4.1.10.3  GenericIdentification30

Definition: Information related to an identification, for example, party identification or account identification.

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    163 |
|      | Issuer <Issr>              | [1..1]  | Text   |               |    163 |
|      | SchemeName <SchmeNm>       | [0..1]  | Text   |               |    163 |

## 4.1.10.3.1  Identification &lt;Id&gt;

Presence:

[1..1]

Definition: Proprietary information, often a code, issued by the data source scheme issuer.

Datatype:

"Exact4AlphaNumericText" on page 253

## 4.1.10.3.2  Issuer &lt;Issr&gt;

Presence:

[1..1]

Definition:

Entity that assigns the identification.

Datatype:

"Max35Text" on page 256

## 4.1.10.3.3  SchemeName &lt;SchmeNm&gt;

Presence:

[0..1]

Definition:

Short textual description of the scheme.

Datatype:

"Max35Text" on page 256

## 4.1.10.4  GenericIdentification3

Definition: Information related to an identification, for example, party identification or account identification.

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    163 |
|      | Issuer <Issr>              | [0..1]  | Text   |               |    163 |

## 4.1.10.4.1  Identification &lt;Id&gt;

Presence:

[1..1]

Definition: Name or number assigned by an entity to enable recognition of that entity, for example, account identifier.

Datatype: "Max35Text" on page 256

## 4.1.10.4.2  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Entity that assigns the identification.

Datatype:

"Max35Text" on page 256

## 4.1.11 Mandate

## 4.1.11.1  MandateClassification1Choice

Definition: Specifies the high level purpose of the instruction based on a set of pre-defined categories.

Usage: This is used by the initiating party to provide information concerning the processing of the payment. It is likely to trigger special processing by any of the agents involved in the payment chain.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    164 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    164 |

## 4.1.11.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Category purpose, as published in an external category purpose code list.

Datatype: "MandateClassification1Code" on page 246

| CodeName   | Name       | Definition                             |
|------------|------------|----------------------------------------|
| FIXE       | Fixed      | Direct debit amount is fixed.          |
| USGB       | UsageBased | Direct debit amount is based on usage. |
| VARI       | Variable   | Direct debit amount is variable.       |

## 4.1.11.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Category purpose, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 4.1.11.2  MandateTypeInformation2

Definition: Set of elements used to further detail the information related to the type of payment.

| Or   | MessageElement <XML Tag>    | Mult.   | Type    |   Page |
|------|-----------------------------|---------|---------|--------|
|      | ServiceLevel <SvcLvl>       | [0..1]  |         |    165 |
| {Or  | Code <Cd>                   | [1..1]  | CodeSet |    165 |
| Or}  | Proprietary <Prtry>         | [1..1]  | Text    |    165 |
|      | LocalInstrument <LclInstrm> | [0..1]  |         |    165 |
| {Or  | Code <Cd>                   | [1..1]  | CodeSet |    166 |
| Or}  | Proprietary <Prtry>         | [1..1]  | Text    |    166 |
|      | CategoryPurpose <CtgyPurp>  | [0..1]  |         |    166 |
| {Or  | Code <Cd>                   | [1..1]  | CodeSet |    166 |
| Or}  | Proprietary <Prtry>         | [1..1]  | Text    |    166 |
|      | Classification <Clssfctn>   | [0..1]  | ±       |    166 |

## 4.1.11.2.1  ServiceLevel &lt;SvcLvl&gt;

Presence:

[0..1]

Definition: Agreement under which or rules under which the mandate resides.

ServiceLevel &lt;SvcLvl&gt; contains one of the following ServiceLevel8Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    165 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    165 |

## 4.1.11.2.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Specifies a pre-agreed service or level of service between the parties, as published in an external service level code list.

Datatype: "ExternalServiceLevel1Code" on page 245

## 4.1.11.2.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition: Specifies a pre-agreed service or level of service between the parties, as a proprietary code.

Datatype: "Max35Text" on page 256

## 4.1.11.2.2  LocalInstrument &lt;LclInstrm&gt;

Presence:

[0..1]

Definition: User community specific instrument.

Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.

## LocalInstrument &lt;LclInstrm&gt; contains one of the following LocalInstrument2Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    166 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    166 |

## 4.1.11.2.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Specifies the local instrument, as published in an external local instrument code list.

Datatype:

"ExternalLocalInstrument1Code" on page 243

## 4.1.11.2.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Specifies the local instrument, as a proprietary code.

Datatype:

"Max35Text" on page 256

## 4.1.11.2.3  CategoryPurpose &lt;CtgyPurp&gt;

Presence:

[0..1]

Definition: Specifies the high level purpose of the mandate based on a set of pre-defined categories.

CategoryPurpose &lt;CtgyPurp&gt; contains one of the following CategoryPurpose1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    166 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    166 |

## 4.1.11.2.3.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Category purpose, as published in an external category purpose code list.

Datatype:

"ExternalCategoryPurpose1Code" on page 240

## 4.1.11.2.3.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Category purpose, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 4.1.11.2.4  Classification &lt;Clssfctn&gt;

Presence:

[0..1]

Definition:

Type of direct debit instruction.

Classification &lt;Clssfctn&gt; contains one of the following elements (see "MandateClassification1Choice" on page 164 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    164 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    164 |

## 4.1.12 Miscellaneous

## 4.1.12.1  SupplementaryData1

Definition: Additional information that can not be captured in the structured fields and/or any other specific block.

| Or   | MessageElement <XML Tag>   | Mult.   | Type              | Constr. No.   |   Page |
|------|----------------------------|---------|-------------------|---------------|--------|
|      | PlaceAndName <PlcAndNm>    | [0..1]  | Text              |               |    167 |
|      | Envelope <Envlp>           | [1..1]  | (External Schema) |               |    167 |

## Constraints

## · SupplementaryDataRule

This component may not be used without the explicit approval of a SEG and submission to the RA of ISO 20022 compliant structure(s) to be used in the Envelope element.

## 4.1.12.1.1  PlaceAndName &lt;PlcAndNm&gt;

Presence: [0..1]

Definition: Unambiguous reference to the location where the supplementary data must be inserted in the message instance.

In the case of XML, this is expressed by a valid XPath.

Datatype: "Max350Text" on page 255

## 4.1.12.1.2  Envelope &lt;Envlp&gt;

Presence: [1..1]

Definition: Technical element wrapping the supplementary data.

Type: (External Schema)

Technical component that contains the validated supplementary data information. This technical envelope allows to segregate the supplementary data information from any other information.

## 4.1.12.2  Purpose2Choice

Definition: Specifies the underlying reason for the payment transaction.

Usage: Purpose is used by the end-customers, that is initiating party, (ultimate) debtor, (ultimate) creditor to provide information concerning the nature of the payment. Purpose is a content element, which is not used for processing by any of the agents involved in the payment chain.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    168 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    168 |

## 4.1.12.2.1  Code &lt;Cd&gt;

Presence: [1..1]

Definition: Underlying reason for the payment transaction, as published in an external purpose code list.

Datatype: "ExternalPurpose1Code" on page 245

## 4.1.12.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Purpose, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 4.1.12.3  NumberOfTransactionsPerStatus5

Definition: Set of elements used to provide detailed information on the number of transactions that are reported with a specific transaction status.

| Or   | MessageElement <XML Tag>                   | Mult.   | Type     | Constr. No.   |   Page |
|------|--------------------------------------------|---------|----------|---------------|--------|
|      | DetailedNumberOfTransactions <DtldNbOfTxs> | [1..1]  | Text     |               |    168 |
|      | DetailedStatus <DtldSts>                   | [1..1]  | CodeSet  |               |    168 |
|      | DetailedControlSum <DtldCtrlSum>           | [0..1]  | Quantity |               |    168 |

## 4.1.12.3.1  DetailedNumberOfTransactions &lt;DtldNbOfTxs&gt;

Presence:

[1..1]

Definition: Number of individual transactions contained in the message, detailed per status.

Datatype: "Max15NumericText" on page 254

## 4.1.12.3.2  DetailedStatus &lt;DtldSts&gt;

Presence: [1..1]

Definition: Common transaction status for all individual transactions reported.

Datatype:

"ExternalPaymentTransactionStatus1Code" on page 244

## 4.1.12.3.3  DetailedControlSum &lt;DtldCtrlSum&gt;

Presence: [0..1]

Definition: Total of all individual amounts included in the message, irrespective of currencies, detailed per status.

Datatype:

"DecimalNumber" on page 252

## 4.1.13 Party Identification

## 4.1.13.1  PartyIdentification272

Definition: Specifies the identification of a person or an organisation.

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 4.1.13.1.1  Name &lt;Nm&gt;

Presence: [0..1]

Definition: Name by which a party is known and which is usually used to identify that party.

Datatype: "Max140Text" on page 254

## 4.1.13.1.2  PostalAddress &lt;PstlAdr&gt;

Presence: [0..1]

Definition: Information that locates and identifies a specific address, as defined by postal services.

PostalAddress &lt;PstlAdr&gt; contains the following elements (see "PostalAddress27" on page 184 for details)

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | AddressType <AdrTp>              | [0..1]  |         |               |    184 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>              | [1..1]  | ±       |               |    185 |
|      | CareOf <CareOf>                  | [0..1]  | Text    |               |    185 |
|      | Department <Dept>                | [0..1]  | Text    |               |    185 |
|      | SubDepartment <SubDept>          | [0..1]  | Text    |               |    185 |
|      | StreetName <StrtNm>              | [0..1]  | Text    |               |    186 |
|      | BuildingNumber <BldgNb>          | [0..1]  | Text    |               |    186 |
|      | BuildingName <BldgNm>            | [0..1]  | Text    |               |    186 |
|      | Floor <Flr>                      | [0..1]  | Text    |               |    186 |
|      | UnitNumber <UnitNb>              | [0..1]  | Text    |               |    186 |
|      | PostBox <PstBx>                  | [0..1]  | Text    |               |    186 |
|      | Room <Room>                      | [0..1]  | Text    |               |    186 |
|      | PostCode <PstCd>                 | [0..1]  | Text    |               |    186 |
|      | TownName <TwnNm>                 | [0..1]  | Text    |               |    187 |
|      | TownLocationName <TwnLctnNm>     | [0..1]  | Text    |               |    187 |
|      | DistrictName <DstrctNm>          | [0..1]  | Text    |               |    187 |
|      | CountrySubDivision <CtrySubDvsn> | [0..1]  | Text    |               |    187 |
|      | Country <Ctry>                   | [0..1]  | CodeSet | C12           |    187 |
|      | AddressLine <AdrLine>            | [0..7]  | Text    |               |    187 |

## 4.1.13.1.3  Identification &lt;Id&gt;

Presence:

[0..1]

Definition:

Unique and unambiguous identification of a party.

Identification &lt;Id&gt; contains one of the following Party52Choice elements

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |

## 4.1.13.1.3.1  OrganisationIdentification &lt;OrgId&gt;

Presence: [1..1]

Definition:

Unique and unambiguous way to identify an organisation.

## OrganisationIdentification &lt;OrgId&gt; contains the following OrganisationIdentification39 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type          |   Page |
|------|----------------------------|---------|---------------|--------|
|      | AnyBIC <AnyBIC>            | [0..1]  | IdentifierSet |    172 |
|      | LEI <LEI>                  | [0..1]  | IdentifierSet |    172 |
|      | Other <Othr>               | [0..*]  |               |    172 |
|      | Identification <Id>        | [1..1]  | Text          |    173 |
|      | SchemeName <SchmeNm>       | [0..1]  |               |    173 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet       |    173 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text          |    173 |
|      | Issuer <Issr>              | [0..1]  | Text          |    173 |

## 4.1.13.1.3.1.1  AnyBIC &lt;AnyBIC&gt;

Presence:

[0..1]

Definition:

Business identification code of the organisation.

Impacted by:

C3 "AnyBIC"

Datatype:

"AnyBICDec2014Identifier" on page 251

## Constraints

## · AnyBIC

Only a valid Business identifier code is allowed. Business identifier codes for financial or nonfinancial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consists of eight (8) or eleven (11) contiguous characters.

## 4.1.13.1.3.1.2  LEI &lt;LEI&gt;

Presence:

[0..1]

Definition:

Legal entity identification as an alternate identification for a party.

Datatype:

"LEIIdentifier" on page 252

## 4.1.13.1.3.1.3  Other &lt;Othr&gt;

Presence:

[0..*]

Definition: Unique identification of an organisation, as assigned by an institution, using an identification scheme.

## Other &lt;Othr&gt; contains the following GenericOrganisationIdentification3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text    |               |    173 |
|      | SchemeName <SchmeNm>       | [0..1]  |         |               |    173 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    173 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    173 |
|      | Issuer <Issr>              | [0..1]  | Text    |               |    173 |

## 4.1.13.1.3.1.3.1  Identification &lt;Id&gt;

Presence:

[1..1]

Definition:

Identification assigned by an institution.

Datatype:

"Max256Text" on page 255

## 4.1.13.1.3.1.3.2  SchemeName &lt;SchmeNm&gt;

Presence:

[0..1]

Definition:

Name of the identification scheme.

SchemeName &lt;SchmeNm&gt; contains one of the following

## OrganisationIdentificationSchemeName1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    173 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    173 |

## 4.1.13.1.3.1.3.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Name of the identification scheme, in a coded form as published in an external list.

Datatype: "ExternalOrganisationIdentification1Code" on page 243

## 4.1.13.1.3.1.3.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Name of the identification scheme, in a free text form.

Datatype:

"Max35Text" on page 256

## 4.1.13.1.3.1.3.3  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Entity that assigns the identification.

Datatype:

"Max35Text" on page 256

## 4.1.13.1.3.2  PrivateIdentification &lt;PrvtId&gt;

Presence:

[1..1]

Definition: Unique and unambiguous identification of a person, for example a passport.

## PrivateIdentification &lt;PrvtId&gt; contains the following PersonIdentification18 elements

| Or   | MessageElement <XML Tag>              | Mult.   | Type    |   Page |
|------|---------------------------------------|---------|---------|--------|
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |         |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date    |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text    |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text    |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet |    175 |
|      | Other <Othr>                          | [0..*]  |         |    175 |
|      | Identification <Id>                   | [1..1]  | Text    |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |         |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text    |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text    |    176 |

## 4.1.13.1.3.2.1  DateAndPlaceOfBirth &lt;DtAndPlcOfBirth&gt;

Presence:

[0..1]

Definition:

Date and place of birth of a person.

## DateAndPlaceOfBirth &lt;DtAndPlcOfBirth&gt; contains the following DateAndPlaceOfBirth1 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
|      | BirthDate <BirthDt>           | [1..1]  | Date    |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth> | [0..1]  | Text    |               |    174 |
|      | CityOfBirth <CityOfBirth>     | [1..1]  | Text    |               |    175 |
|      | CountryOfBirth <CtryOfBirth>  | [1..1]  | CodeSet | C12           |    175 |

## 4.1.13.1.3.2.1.1  BirthDate &lt;BirthDt&gt;

Presence:

[1..1]

Definition:

Date on which a person is born.

Datatype: "ISODate" on page 250

## 4.1.13.1.3.2.1.2  ProvinceOfBirth &lt;PrvcOfBirth&gt;

Presence:

[0..1]

Definition:

Province where a person was born.

Datatype:

"Max35Text" on page 256

## 4.1.13.1.3.2.1.3  CityOfBirth &lt;CityOfBirth&gt;

Presence:

[1..1]

Definition:

City where a person was born.

Datatype:

"Max35Text" on page 256

## 4.1.13.1.3.2.1.4  CountryOfBirth &lt;CtryOfBirth&gt;

Presence:

[1..1]

Definition:

Country where a person was born.

Impacted by:

C12 "Country"

Datatype:

"CountryCode" on page 239

## Constraints

## · Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## 4.1.13.1.3.2.2  Other &lt;Othr&gt;

Presence:

[0..*]

Definition: Unique identification of a person, as assigned by an institution, using an identification scheme.

Other &lt;Othr&gt; contains the following GenericPersonIdentification2 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text    |               |    175 |
|      | SchemeName <SchmeNm>       | [0..1]  |         |               |    175 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    176 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    176 |
|      | Issuer <Issr>              | [0..1]  | Text    |               |    176 |

## 4.1.13.1.3.2.2.1  Identification &lt;Id&gt;

Presence:

[1..1]

Definition:

Unique and unambiguous identification of a person.

Datatype:

"Max256Text" on page 255

## 4.1.13.1.3.2.2.2  SchemeName &lt;SchmeNm&gt;

Presence:

[0..1]

Definition:

Name of the identification scheme.

## SchemeName &lt;SchmeNm&gt; contains one of the following PersonIdentificationSchemeName1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    176 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    176 |

## 4.1.13.1.3.2.2.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Name of the identification scheme, in a coded form as published in an external list.

Datatype:

"ExternalPersonIdentification1Code" on page 244

## 4.1.13.1.3.2.2.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Name of the identification scheme, in a free text form.

Datatype:

"Max35Text" on page 256

## 4.1.13.1.3.2.2.3  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Entity that assigns the identification.

Datatype:

"Max35Text" on page 256

## 4.1.13.1.4  CountryOfResidence &lt;CtryOfRes&gt;

Presence:

[0..1]

Definition: Country in which a person resides (the place of a person's home). In the case of a company, it is the country from which the affairs of that company are directed.

Impacted by:

C12 "Country"

Datatype:

"CountryCode" on page 239

## Constraints

## · Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## 4.1.13.1.5  ContactDetails &lt;CtctDtls&gt;

Presence:

[0..1]

Definition:

Set of elements used to indicate how to contact the party.

ContactDetails &lt;CtctDtls&gt; contains the following elements (see "Contact13" on page 180 for details)

| Or   | MessageElement <XML Tag>    | Mult.   | Type    |   Page |
|------|-----------------------------|---------|---------|--------|
|      | NamePrefix <NmPrfx>         | [0..1]  | CodeSet |    181 |
|      | Name <Nm>                   | [0..1]  | Text    |    181 |
|      | PhoneNumber <PhneNb>        | [0..1]  | Text    |    181 |
|      | MobileNumber <MobNb>        | [0..1]  | Text    |    182 |
|      | FaxNumber <FaxNb>           | [0..1]  | Text    |    182 |
|      | URLAddress <URLAdr>         | [0..1]  | Text    |    182 |
|      | EmailAddress <EmailAdr>     | [0..1]  | Text    |    182 |
|      | EmailPurpose <EmailPurp>    | [0..1]  | Text    |    182 |
|      | JobTitle <JobTitl>          | [0..1]  | Text    |    182 |
|      | Responsibility <Rspnsblty>  | [0..1]  | Text    |    182 |
|      | Department <Dept>           | [0..1]  | Text    |    182 |
|      | Other <Othr>                | [0..*]  |         |    183 |
|      | ChannelType <ChanlTp>       | [1..1]  | Text    |    183 |
|      | Identification <Id>         | [0..1]  | Text    |    183 |
|      | PreferredMethod <PrefrdMtd> | [0..1]  | CodeSet |    183 |

## 4.1.14 Payment

## 4.1.14.1  InstructionForCreditorAgent3

Definition: Further information related to the processing of the payment instruction that may need to be acted upon by the creditor's agent. The instruction may relate to a level of service, or may be an instruction that has to be executed by the creditor's agent, or may be information required by the creditor's agent.

| Or   | MessageElement <XML Tag>          | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------|---------|---------|---------------|--------|
|      | Code <Cd>                         | [0..1]  | CodeSet |               |    177 |
|      | InstructionInformation <InstrInf> | [0..1]  | Text    |               |    178 |

## 4.1.14.1.1  Code &lt;Cd&gt;

Presence: [0..1]

Definition: Coded information related to the processing of the payment instruction, provided by the initiating party, and intended for the creditor's agent.

Datatype: "ExternalCreditorAgentInstruction1Code" on page 241

## 4.1.14.1.2  InstructionInformation &lt;InstrInf&gt;

Presence: [0..1]

Definition: Further information complementing the coded instruction or instruction to the creditor's agent that is bilaterally agreed or specific to a user community.

Datatype: "Max140Text" on page 254

## 4.1.15 Payment Type

## 4.1.15.1  PaymentTypeInformation29

Definition: Provides further details of the type of payment.

| Or   | MessageElement <XML Tag>        | Mult.   | Type    |   Page |
|------|---------------------------------|---------|---------|--------|
|      | InstructionPriority <InstrPrty> | [0..1]  | CodeSet |    178 |
|      | ServiceLevel <SvcLvl>           | [0..*]  |         |    178 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | LocalInstrument <LclInstrm>     | [0..1]  |         |    179 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    179 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    179 |
|      | SequenceType <SeqTp>            | [0..1]  | CodeSet |    179 |
|      | CategoryPurpose <CtgyPurp>      | [0..1]  |         |    180 |
| {Or  | Code <Cd>                       | [1..1]  | CodeSet |    180 |
| Or}  | Proprietary <Prtry>             | [1..1]  | Text    |    180 |

## 4.1.15.1.1  InstructionPriority &lt;InstrPrty&gt;

Presence: [0..1]

Definition: Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.

Datatype: "Priority2Code" on page 248

| CodeName   | Name   | Definition                |
|------------|--------|---------------------------|
| HIGH       | High   | Priority level is high.   |
| NORM       | Normal | Priority level is normal. |

## 4.1.15.1.2  ServiceLevel &lt;SvcLvl&gt;

Presence: [0..*]

Definition: Agreement under which or rules under which the transaction should be processed.

## ServiceLevel &lt;SvcLvl&gt; contains one of the following ServiceLevel8Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    179 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    179 |

## 4.1.15.1.2.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Specifies a pre-agreed service or level of service between the parties, as published in an external service level code list.

Datatype: "ExternalServiceLevel1Code" on page 245

## 4.1.15.1.2.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Specifies a pre-agreed service or level of service between the parties, as a proprietary code.

Datatype: "Max35Text" on page 256

## 4.1.15.1.3  LocalInstrument &lt;LclInstrm&gt;

Presence:

[0..1]

Definition:

User community specific instrument.

Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.

LocalInstrument &lt;LclInstrm&gt; contains one of the following LocalInstrument2Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    179 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    179 |

## 4.1.15.1.3.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Specifies the local instrument, as published in an external local instrument code list.

Datatype:

"ExternalLocalInstrument1Code" on page 243

## 4.1.15.1.3.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Specifies the local instrument, as a proprietary code.

Datatype: "Max35Text" on page 256

## 4.1.15.1.4  SequenceType &lt;SeqTp&gt;

Presence:

[0..1]

Definition: Identifies the direct debit sequence, such as first, recurrent, final or one-off.

Datatype: "SequenceType3Code" on page 249

| CodeName   | Name        | Definition                                                                                                                         |
|------------|-------------|------------------------------------------------------------------------------------------------------------------------------------|
| FRST       | First       | First collection of a series of direct debit instructions.                                                                         |
| RCUR       | Recurring   | Direct debit instruction where the debtor's authorisation is used for regular direct debit transactions initiated by the creditor. |
| FNAL       | Final       | Final collection of a series of direct debit instructions.                                                                         |
| OOFF       | OneOff      | Direct debit instruction where the debtor's authorisation is used to initiate one single direct debit transaction.                 |
| RPRE       | Represented | Collection used to re-present previously reversed or returned direct debit transactions.                                           |

## 4.1.15.1.5  CategoryPurpose &lt;CtgyPurp&gt;

Presence: [0..1]

Definition: Specifies the high level purpose of the instruction based on a set of pre-defined categories.

Usage: This is used by the initiating party to provide information concerning the processing of the payment. It is likely to trigger special processing by any of the agents involved in the payment chain.

## CategoryPurpose &lt;CtgyPurp&gt; contains one of the following CategoryPurpose1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    180 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    180 |

## 4.1.15.1.5.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Category purpose, as published in an external category purpose code list.

Datatype: "ExternalCategoryPurpose1Code" on page 240

## 4.1.15.1.5.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Category purpose, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 4.1.16 Person Identification

## 4.1.16.1  Contact13

Definition: Specifies the details of the contact person.

| Or   | MessageElement <XML Tag>    | Mult.   | Type    |   Page |
|------|-----------------------------|---------|---------|--------|
|      | NamePrefix <NmPrfx>         | [0..1]  | CodeSet |    181 |
|      | Name <Nm>                   | [0..1]  | Text    |    181 |
|      | PhoneNumber <PhneNb>        | [0..1]  | Text    |    181 |
|      | MobileNumber <MobNb>        | [0..1]  | Text    |    182 |
|      | FaxNumber <FaxNb>           | [0..1]  | Text    |    182 |
|      | URLAddress <URLAdr>         | [0..1]  | Text    |    182 |
|      | EmailAddress <EmailAdr>     | [0..1]  | Text    |    182 |
|      | EmailPurpose <EmailPurp>    | [0..1]  | Text    |    182 |
|      | JobTitle <JobTitl>          | [0..1]  | Text    |    182 |
|      | Responsibility <Rspnsblty>  | [0..1]  | Text    |    182 |
|      | Department <Dept>           | [0..1]  | Text    |    182 |
|      | Other <Othr>                | [0..*]  |         |    183 |
|      | ChannelType <ChanlTp>       | [1..1]  | Text    |    183 |
|      | Identification <Id>         | [0..1]  | Text    |    183 |
|      | PreferredMethod <PrefrdMtd> | [0..1]  | CodeSet |    183 |

## 4.1.16.1.1  NamePrefix &lt;NmPrfx&gt;

Presence:

[0..1]

Definition:

Specifies the terms used to formally address a person.

Datatype: "NamePrefix2Code" on page 246

| CodeName   | Name          | Definition                                  |
|------------|---------------|---------------------------------------------|
| DOCT       | Doctor        | Title of the person is Doctor or Dr.        |
| MADM       | Madam         | Title of the person is Madam.               |
| MISS       | Miss          | Title of the person is Miss.                |
| MIST       | Mister        | Title of the person is Mister or Mr.        |
| MIKS       | GenderNeutral | Title of the person is gender neutral (Mx). |

## 4.1.16.1.2  Name &lt;Nm&gt;

Presence:

[0..1]

Definition:

Name by which a party is known and which is usually used to identify that party.

Datatype: "Max140Text" on page 254

## 4.1.16.1.3  PhoneNumber &lt;PhneNb&gt;

Presence: [0..1]

Definition: Collection of information that identifies a phone number, as defined by telecom services.

Datatype: "PhoneNumber" on page 256

## 4.1.16.1.4  MobileNumber &lt;MobNb&gt;

Presence:

[0..1]

Definition: Collection of information that identifies a mobile phone number, as defined by telecom services.

Datatype:

"PhoneNumber" on page 256

## 4.1.16.1.5  FaxNumber &lt;FaxNb&gt;

Presence:

[0..1]

Definition:

Collection of information that identifies a FAX number, as defined by telecom services.

Datatype:

"PhoneNumber" on page 256

## 4.1.16.1.6  URLAddress &lt;URLAdr&gt;

Presence:

[0..1]

Definition: Address for the Universal Resource Locator (URL), for example an address used over the www (HTTP) service.

Datatype: "Max2048Text" on page 255

## 4.1.16.1.7  EmailAddress &lt;EmailAdr&gt;

Presence:

[0..1]

Definition:

Address for electronic mail (e-mail).

Datatype:

"Max256Text" on page 255

## 4.1.16.1.8  EmailPurpose &lt;EmailPurp&gt;

Presence:

[0..1]

Definition:

Purpose for which an email address may be used.

Datatype:

"Max35Text" on page 256

## 4.1.16.1.9  JobTitle &lt;JobTitl&gt;

Presence:

[0..1]

Definition:

Title of the function.

Datatype:

"Max35Text" on page 256

## 4.1.16.1.10  Responsibility &lt;Rspnsblty&gt;

Presence:

[0..1]

Definition:

Role of a person in an organisation.

Datatype: "Max35Text" on page 256

## 4.1.16.1.11  Department &lt;Dept&gt;

Presence: [0..1]

Definition:

Identification of a division of a large organisation or building.

Datatype:

"Max70Text" on page 256

## 4.1.16.1.12  Other &lt;Othr&gt;

Presence:

[0..*]

Definition:

Contact details in another form.

## Other &lt;Othr&gt; contains the following OtherContact1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | ChannelType <ChanlTp>      | [1..1]  | Text   |               |    183 |
|      | Identification <Id>        | [0..1]  | Text   |               |    183 |

## 4.1.16.1.12.1  ChannelType &lt;ChanlTp&gt;

Presence:

[1..1]

Definition:

Method used to contact the financial institution's contact for the specific tax region.

Datatype:

"Max4Text" on page 256

## 4.1.16.1.12.2  Identification &lt;Id&gt;

Presence:

[0..1]

Definition:

Communication value such as phone number or email address.

Datatype:

"Max128Text" on page 254

## 4.1.16.1.13  PreferredMethod &lt;PrefrdMtd&gt;

Presence:

[0..1]

Definition:

Preferred method used to reach the contact.

Datatype:

"PreferredContactMethod2Code" on page 247

| CodeName   | Name              | Definition                                                              |
|------------|-------------------|-------------------------------------------------------------------------|
| MAIL       | Email             | Preferred method used to reach the contact is per email.                |
| FAXX       | Fax               | Preferred method used to reach the contact is per fax.                  |
| LETT       | Letter            | Preferred method used to reach the contact is per letter.               |
| CELL       | MobileOrCellPhone | Preferred method used to reach the contact is per mobile or cell phone. |
| ONLI       | Online            | Preferred method used to reach the contact is online.                   |
| PHON       | Phone             | Preferred method used to reach the contact is per phone.                |

## 4.1.17 Postal Address

## 4.1.17.1  PostalAddress27

Definition: Information that locates and identifies a specific address, as defined by postal services.

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | AddressType <AdrTp>              | [0..1]  |         |               |    184 |
| {Or  | Code <Cd>                        | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>              | [1..1]  | ±       |               |    185 |
|      | CareOf <CareOf>                  | [0..1]  | Text    |               |    185 |
|      | Department <Dept>                | [0..1]  | Text    |               |    185 |
|      | SubDepartment <SubDept>          | [0..1]  | Text    |               |    185 |
|      | StreetName <StrtNm>              | [0..1]  | Text    |               |    186 |
|      | BuildingNumber <BldgNb>          | [0..1]  | Text    |               |    186 |
|      | BuildingName <BldgNm>            | [0..1]  | Text    |               |    186 |
|      | Floor <Flr>                      | [0..1]  | Text    |               |    186 |
|      | UnitNumber <UnitNb>              | [0..1]  | Text    |               |    186 |
|      | PostBox <PstBx>                  | [0..1]  | Text    |               |    186 |
|      | Room <Room>                      | [0..1]  | Text    |               |    186 |
|      | PostCode <PstCd>                 | [0..1]  | Text    |               |    186 |
|      | TownName <TwnNm>                 | [0..1]  | Text    |               |    187 |
|      | TownLocationName <TwnLctnNm>     | [0..1]  | Text    |               |    187 |
|      | DistrictName <DstrctNm>          | [0..1]  | Text    |               |    187 |
|      | CountrySubDivision <CtrySubDvsn> | [0..1]  | Text    |               |    187 |
|      | Country <Ctry>                   | [0..1]  | CodeSet | C12           |    187 |
|      | AddressLine <AdrLine>            | [0..7]  | Text    |               |    187 |

## 4.1.17.1.1  AddressType &lt;AdrTp&gt;

Presence:

[0..1]

Definition:

Identifies the nature of the postal address.

AddressType &lt;AdrTp&gt; contains one of the following AddressType3Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    185 |
| Or}  | Proprietary <Prtry>        | [1..1]  | ±       |               |    185 |

## 4.1.17.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Type of address expressed as a code.

Datatype:

"AddressType2Code" on page 236

| CodeName   | Name        | Definition                                                 |
|------------|-------------|------------------------------------------------------------|
| ADDR       | Postal      | Address is the complete postal address.                    |
| PBOX       | POBox       | Address is a postal office (PO) box.                       |
| HOME       | Residential | Address is the home address.                               |
| BIZZ       | Business    | Address is the business address.                           |
| MLTO       | MailTo      | Address is the address to which mail is sent.              |
| DLVY       | DeliveryTo  | Address is the address to which delivery is to take place. |

## 4.1.17.1.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Type of address expressed as a proprietary code.

Proprietary &lt;Prtry&gt; contains the following elements (see "GenericIdentification30" on page 162 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Identification <Id>        | [1..1]  | Text   |               |    163 |
|      | Issuer <Issr>              | [1..1]  | Text   |               |    163 |
|      | SchemeName <SchmeNm>       | [0..1]  | Text   |               |    163 |

## 4.1.17.1.2  CareOf &lt;CareOf&gt;

Presence:

[0..1]

Definition: Identifies an addressee that is accepting the correspondence for the intended recipient. Using care of ensures the correspondence reaches the right recipient rather than getting returned to the sender.

Datatype:

"Max140Text" on page 254

## 4.1.17.1.3  Department &lt;Dept&gt;

Presence:

[0..1]

Definition:

Identification of a division of a large organisation or building.

Datatype:

"Max70Text" on page 256

## 4.1.17.1.4  SubDepartment &lt;SubDept&gt;

Presence:

[0..1]

Definition:

Identification of a sub-division of a large organisation or building.

Datatype:

"Max70Text" on page 256

## 4.1.17.1.5  StreetName &lt;StrtNm&gt;

Presence:

[0..1]

Definition:

Name of a street or thoroughfare.

Datatype:

"Max140Text" on page 254

## 4.1.17.1.6  BuildingNumber &lt;BldgNb&gt;

Presence:

[0..1]

Definition:

Number that identifies the position of a building on a street.

Datatype:

"Max16Text" on page 255

## 4.1.17.1.7  BuildingName &lt;BldgNm&gt;

Presence:

[0..1]

Definition:

Name of the building or house.

Datatype:

"Max140Text" on page 254

## 4.1.17.1.8  Floor &lt;Flr&gt;

Presence:

[0..1]

Definition:

Floor or storey within a building.

Datatype:

"Max70Text" on page 256

## 4.1.17.1.9  UnitNumber &lt;UnitNb&gt;

Presence:

[0..1]

Definition:

Identifies a flat or dwelling within the building.

Datatype:

"Max16Text" on page 255

## 4.1.17.1.10  PostBox &lt;PstBx&gt;

Presence:

[0..1]

Definition: Numbered box in a post office, assigned to a person or organisation, where letters are kept until called for.

Datatype:

"Max16Text" on page 255

## 4.1.17.1.11  Room &lt;Room&gt;

Presence:

[0..1]

Definition:

Building room number.

Datatype:

"Max70Text" on page 256

## 4.1.17.1.12  PostCode &lt;PstCd&gt;

Presence:

[0..1]

Definition: Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.

Datatype:

"Max16Text" on page 255

## 4.1.17.1.13  TownName &lt;TwnNm&gt;

Presence:

[0..1]

Definition:

Name of a built-up area, with defined boundaries, and a local government.

Datatype: "Max140Text" on page 254

## 4.1.17.1.14  TownLocationName &lt;TwnLctnNm&gt;

Presence:

[0..1]

Definition:

Specific location name within the town.

Datatype:

"Max140Text" on page 254

## 4.1.17.1.15  DistrictName &lt;DstrctNm&gt;

Presence:

[0..1]

Definition:

Identifies a subdivision within a country sub-division.

Datatype: "Max140Text" on page 254

## 4.1.17.1.16  CountrySubDivision &lt;CtrySubDvsn&gt;

Presence:

[0..1]

Definition:

Identifies a subdivision of a country such as state, region, county.

Datatype: "Max35Text" on page 256

## 4.1.17.1.17  Country &lt;Ctry&gt;

Presence:

[0..1]

Definition:

Nation with its own government.

Impacted by:

C12 "Country"

Datatype:

"CountryCode" on page 239

## Constraints

## · Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## 4.1.17.1.18  AddressLine &lt;AdrLine&gt;

Presence:

[0..7]

Definition: Information that locates and identifies a specific address, as defined by postal services, presented in free format text.

Datatype: "Max70Text" on page 256

## 4.1.18 Regulatory Reporting

## 4.1.18.1  RegulatoryReporting3

Definition: Information needed due to regulatory and/or statutory requirements.

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | DebitCreditReportingIndicator <DbtCdtRptgInd> | [0..1]  | CodeSet |               |    188 |
|      | Authority <Authrty>                           | [0..1]  |         |               |    188 |
|      | Name <Nm>                                     | [0..1]  | Text    |               |    188 |
|      | Country <Ctry>                                | [0..1]  | CodeSet | C12           |    189 |
|      | Details <Dtls>                                | [0..*]  |         |               |    189 |
|      | Type <Tp>                                     | [0..1]  | Text    |               |    189 |
|      | Date <Dt>                                     | [0..1]  | Date    |               |    189 |
|      | Country <Ctry>                                | [0..1]  | CodeSet | C12           |    189 |
|      | Code <Cd>                                     | [0..1]  | Text    |               |    190 |
|      | Amount <Amt>                                  | [0..1]  | Amount  | C2, C16       |    190 |
|      | Information <Inf>                             | [0..*]  | Text    |               |    190 |

## 4.1.18.1.1  DebitCreditReportingIndicator &lt;DbtCdtRptgInd&gt;

Presence: [0..1]

Definition: Identifies whether the regulatory reporting information applies to the debit side, to the credit side or to both debit and credit sides of the transaction.

Datatype: "RegulatoryReportingType1Code" on page 248

| CodeName   | Name   | Definition                                                     |
|------------|--------|----------------------------------------------------------------|
| CRED       | Credit | Regulatory information applies to the credit side.             |
| DEBT       | Debit  | Regulatory information applies to the debit side.              |
| BOTH       | Both   | Regulatory information applies to both credit and debit sides. |

## 4.1.18.1.2  Authority &lt;Authrty&gt;

Presence:

[0..1]

Definition:

Entity requiring the regulatory reporting information.

Authority &lt;Authrty&gt; contains the following RegulatoryAuthority2 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Name <Nm>                  | [0..1]  | Text    |               |    188 |
|      | Country <Ctry>             | [0..1]  | CodeSet | C12           |    189 |

## 4.1.18.1.2.1  Name &lt;Nm&gt;

Presence:

[0..1]

Definition: Name of the entity requiring the regulatory reporting information.

## Datatype: "Max140Text" on page 254

## 4.1.18.1.2.2  Country &lt;Ctry&gt;

Presence:

[0..1]

Definition:

Country of the entity that requires the regulatory reporting information.

Impacted by:

C12 "Country"

Datatype:

"CountryCode" on page 239

## Constraints

## · Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## 4.1.18.1.3  Details &lt;Dtls&gt;

Presence:

Definition:

[0..*]

Set of elements used to provide details on the regulatory reporting information.

## Details &lt;Dtls&gt; contains the following StructuredRegulatoryReporting3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                  | [0..1]  | Text    |               |    189 |
|      | Date <Dt>                  | [0..1]  | Date    |               |    189 |
|      | Country <Ctry>             | [0..1]  | CodeSet | C12           |    189 |
|      | Code <Cd>                  | [0..1]  | Text    |               |    190 |
|      | Amount <Amt>               | [0..1]  | Amount  | C2, C16       |    190 |
|      | Information <Inf>          | [0..*]  | Text    |               |    190 |

## 4.1.18.1.3.1  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Specifies the type of the information supplied in the regulatory reporting details.

Datatype:

"Max35Text" on page 256

## 4.1.18.1.3.2  Date &lt;Dt&gt;

Presence:

[0..1]

Definition:

Date related to the specified type of regulatory reporting details.

Datatype:

"ISODate" on page 250

## 4.1.18.1.3.3  Country &lt;Ctry&gt;

Presence:

[0..1]

Definition:

Country related to the specified type of regulatory reporting details.

Impacted by:

C12 "Country"

Datatype:

"CountryCode" on page 239

## Constraints

## · Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## 4.1.18.1.3.4  Code &lt;Cd&gt;

Presence:

[0..1]

Definition: Specifies the nature, purpose, and reason for the transaction to be reported for regulatory and statutory requirements in a coded form.

Datatype: "Max10Text" on page 254

## 4.1.18.1.3.5  Amount &lt;Amt&gt;

Presence:

[0..1]

Definition:

Amount of money to be reported for regulatory and statutory requirements.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.18.1.3.6  Information &lt;Inf&gt;

Presence:

[0..*]

Definition: Additional details that cater for specific domestic regulatory requirements.

Datatype:

"Max35Text" on page 256

## 4.1.19 Remittance

## 4.1.19.1  RemittanceInformation22

Definition: Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system.

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Unstructured <Ustrd>       | [0..*]  | Text   |               |    191 |
|      | Structured <Strd>          | [0..*]  | ±      |               |    191 |

## 4.1.19.1.1  Unstructured &lt;Ustrd&gt;

Presence: [0..*]

Definition: Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.

Datatype: "Max140Text" on page 254

## 4.1.19.1.2  Structured &lt;Strd&gt;

Presence: [0..*]

Definition: Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in a structured form.

## Structured &lt;Strd&gt; contains the following elements (see "StructuredRemittanceInformation18" on page 195 for details)

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | ReferredDocumentInformation <RfrdDocInf>      | [0..*]  |         |               |    199 |
|      | Type <Tp>                                     | [0..1]  |         |               |    201 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    201 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    201 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    201 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    201 |
|      | Number <Nb>                                   | [0..1]  | Text    |               |    202 |
|      | RelatedDate <RltdDt>                          | [0..1]  |         |               |    202 |
|      | Type <Tp>                                     | [1..1]  |         |               |    202 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    202 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    202 |
|      | Date <Dt>                                     | [1..1]  | Date    |               |    202 |
|      | LineDetails <LineDtls>                        | [0..*]  |         |               |    203 |
|      | Identification <Id>                           | [1..*]  |         |               |    203 |
|      | Type <Tp>                                     | [0..1]  |         |               |    204 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    204 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    204 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    204 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    205 |
|      | Number <Nb>                                   | [0..1]  | Text    |               |    205 |
|      | RelatedDate <RltdDt>                          | [0..1]  | Date    |               |    205 |
|      | Description <Desc>                            | [0..1]  | Text    |               |    205 |
|      | Amount <Amt>                                  | [0..1]  |         | C24           |    205 |
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    206 |
|      | Type <Tp>                                     | [1..1]  |         |               |    206 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    207 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    208 |
|      | Reason <Rsn>                                  | [0..1]  | Text    |               |    208 |
|      | AdditionalInformation <AddtlInf>              | [0..1]  | Text    |               |    208 |
|      | ReferredDocumentAmount <RfrdDocAmt>           | [0..1]  |         | C24           |    208 |
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    209 |
|      | Type <Tp>                                     | [1..1]  |         |               |    209 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    210 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    210 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    210 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    210 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    210 |
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    211 |
|      | Reason <Rsn>                                  | [0..1]  | Text    |               |    211 |
|      | AdditionalInformation <AddtlInf>              | [0..1]  | Text    |               |    211 |
|      | CreditorReferenceInformation <CdtrRefInf>     | [0..1]  |         |               |    211 |
|      | Type <Tp>                                     | [0..1]  |         |               |    212 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    212 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    212 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    212 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    213 |
|      | Reference <Ref>                               | [0..1]  | Text    |               |    213 |
|      | Invoicer <Invcr>                              | [0..1]  | ±       |               |    213 |
|      | Invoicee <Invcee>                             | [0..1]  | ±       |               |    214 |
|      | TaxRemittance <TaxRmt>                        | [0..1]  |         |               |    215 |
|      | Creditor <Cdtr>                               | [0..1]  | ±       |               |    217 |
|      | Debtor <Dbtr>                                 | [0..1]  | ±       |               |    217 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±       |               |    217 |
|      | AdministrationZone <AdmstnZone>               | [0..1]  | Text    |               |    218 |
|      | ReferenceNumber <RefNb>                       | [0..1]  | Text    |               |    218 |
|      | Method <Mtd>                                  | [0..1]  | Text    |               |    218 |
|      | TotalTaxableBaseAmount <TtlTaxblBaseAmt>      | [0..1]  | Amount  | C2, C16       |    218 |

| Or   | MessageElement <XML Tag>           | Mult.   | Type     | Constr. No.   |   Page |
|------|------------------------------------|---------|----------|---------------|--------|
|      | TotalTaxAmount <TtlTaxAmt>         | [0..1]  | Amount   | C2, C16       |    219 |
|      | Date <Dt>                          | [0..1]  | Date     |               |    219 |
|      | SequenceNumber <SeqNb>             | [0..1]  | Quantity |               |    219 |
|      | Record <Rcrd>                      | [0..*]  |          |               |    219 |
|      | Type <Tp>                          | [0..1]  | Text     |               |    220 |
|      | Category <Ctgy>                    | [0..1]  | Text     |               |    220 |
|      | CategoryDetails <CtgyDtls>         | [0..1]  | Text     |               |    220 |
|      | DebtorStatus <DbtrSts>             | [0..1]  | Text     |               |    221 |
|      | CertificateIdentification <CertId> | [0..1]  | Text     |               |    221 |
|      | FormsCode <FrmsCd>                 | [0..1]  | Text     |               |    221 |
|      | Period <Prd>                       | [0..1]  |          |               |    221 |
|      | Year <Yr>                          | [0..1]  | Year     |               |    221 |
|      | Type <Tp>                          | [0..1]  | CodeSet  |               |    221 |
|      | FromToDate <FrToDt>                | [0..1]  | ±        |               |    222 |
|      | TaxAmount <TaxAmt>                 | [0..1]  |          |               |    223 |
|      | Rate <Rate>                        | [0..1]  | Rate     |               |    223 |
|      | TaxableBaseAmount <TaxblBaseAmt>   | [0..1]  | Amount   | C2, C16       |    223 |
|      | TotalAmount <TtlAmt>               | [0..1]  | Amount   | C2, C16       |    223 |
|      | Details <Dtls>                     | [0..*]  |          |               |    224 |
|      | Period <Prd>                       | [0..1]  |          |               |    224 |
|      | Year <Yr>                          | [0..1]  | Year     |               |    224 |
|      | Type <Tp>                          | [0..1]  | CodeSet  |               |    225 |
|      | FromToDate <FrToDt>                | [0..1]  | ±        |               |    225 |
|      | Amount <Amt>                       | [1..1]  | Amount   | C2, C16       |    226 |
|      | AdditionalInformation <AddtlInf>   | [0..1]  | Text     |               |    226 |
|      | GarnishmentRemittance <GrnshmtRmt> | [0..1]  |          |               |    226 |
|      | Type <Tp>                          | [1..1]  |          |               |    227 |
|      | CodeOrProprietary <CdOrPrtry>      | [1..1]  |          |               |    227 |
| {Or  | Code <Cd>                          | [1..1]  | CodeSet  |               |    228 |
| Or}  | Proprietary <Prtry>                | [1..1]  | Text     |               |    228 |
|      | Issuer <Issr>                      | [0..1]  | Text     |               |    228 |

| Or   | MessageElement <XML Tag>                            | Mult.   | Type      | Constr. No.   |   Page |
|------|-----------------------------------------------------|---------|-----------|---------------|--------|
|      | Garnishee <Grnshee>                                 | [0..1]  | ±         |               |    228 |
|      | GarnishmentAdministrator <GrnshmtAdmstr>            | [0..1]  | ±         |               |    229 |
|      | ReferenceNumber <RefNb>                             | [0..1]  | Text      |               |    230 |
|      | Date <Dt>                                           | [0..1]  | Date      |               |    231 |
|      | RemittedAmount <RmtdAmt>                            | [0..1]  | Amount    | C2, C16       |    231 |
|      | FamilyMedicalInsuranceIndicator <FmlyMdclInsrncInd> | [0..1]  | Indicator |               |    231 |
|      | EmployeeTerminationIndicator <MplyeeTermntnInd>     | [0..1]  | Indicator |               |    231 |
|      | AdditionalRemittanceInformation <AddtlRmtInf>       | [0..3]  | Text      |               |    231 |

## 4.1.19.2  StructuredRemittanceInformation18

Definition: Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in a structured form.

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | ReferredDocumentInformation <RfrdDocInf>      | [0..*]  |         |               |    199 |
|      | Type <Tp>                                     | [0..1]  |         |               |    201 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    201 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    201 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    201 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    201 |
|      | Number <Nb>                                   | [0..1]  | Text    |               |    202 |
|      | RelatedDate <RltdDt>                          | [0..1]  |         |               |    202 |
|      | Type <Tp>                                     | [1..1]  |         |               |    202 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    202 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    202 |
|      | Date <Dt>                                     | [1..1]  | Date    |               |    202 |
|      | LineDetails <LineDtls>                        | [0..*]  |         |               |    203 |
|      | Identification <Id>                           | [1..*]  |         |               |    203 |
|      | Type <Tp>                                     | [0..1]  |         |               |    204 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    204 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    204 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    204 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    205 |
|      | Number <Nb>                                   | [0..1]  | Text    |               |    205 |
|      | RelatedDate <RltdDt>                          | [0..1]  | Date    |               |    205 |
|      | Description <Desc>                            | [0..1]  | Text    |               |    205 |
|      | Amount <Amt>                                  | [0..1]  |         | C24           |    205 |
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    206 |
|      | Type <Tp>                                     | [1..1]  |         |               |    206 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    207 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    208 |

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | Reason <Rsn>                                  | [0..1]  | Text    |               |    208 |
|      | AdditionalInformation <AddtlInf>              | [0..1]  | Text    |               |    208 |
|      | ReferredDocumentAmount <RfrdDocAmt>           | [0..1]  |         | C24           |    208 |
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    209 |
|      | Type <Tp>                                     | [1..1]  |         |               |    209 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    210 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    210 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    210 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    210 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    210 |
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    211 |
|      | Reason <Rsn>                                  | [0..1]  | Text    |               |    211 |
|      | AdditionalInformation <AddtlInf>              | [0..1]  | Text    |               |    211 |
|      | CreditorReferenceInformation <CdtrRefInf>     | [0..1]  |         |               |    211 |
|      | Type <Tp>                                     | [0..1]  |         |               |    212 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    212 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    212 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    212 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    213 |
|      | Reference <Ref>                               | [0..1]  | Text    |               |    213 |
|      | Invoicer <Invcr>                              | [0..1]  | ±       |               |    213 |
|      | Invoicee <Invcee>                             | [0..1]  | ±       |               |    214 |
|      | TaxRemittance <TaxRmt>                        | [0..1]  |         |               |    215 |
|      | Creditor <Cdtr>                               | [0..1]  | ±       |               |    217 |
|      | Debtor <Dbtr>                                 | [0..1]  | ±       |               |    217 |
|      | UltimateDebtor <UltmtDbtr>                    | [0..1]  | ±       |               |    217 |
|      | AdministrationZone <AdmstnZone>               | [0..1]  | Text    |               |    218 |
|      | ReferenceNumber <RefNb>                       | [0..1]  | Text    |               |    218 |
|      | Method <Mtd>                                  | [0..1]  | Text    |               |    218 |
|      | TotalTaxableBaseAmount <TtlTaxblBaseAmt>      | [0..1]  | Amount  | C2, C16       |    218 |
|      | TotalTaxAmount <TtlTaxAmt>                    | [0..1]  | Amount  | C2, C16       |    219 |

| Or   | MessageElement <XML Tag>           | Mult.   | Type     | Constr. No.   |   Page |
|------|------------------------------------|---------|----------|---------------|--------|
|      | Date <Dt>                          | [0..1]  | Date     |               |    219 |
|      | SequenceNumber <SeqNb>             | [0..1]  | Quantity |               |    219 |
|      | Record <Rcrd>                      | [0..*]  |          |               |    219 |
|      | Type <Tp>                          | [0..1]  | Text     |               |    220 |
|      | Category <Ctgy>                    | [0..1]  | Text     |               |    220 |
|      | CategoryDetails <CtgyDtls>         | [0..1]  | Text     |               |    220 |
|      | DebtorStatus <DbtrSts>             | [0..1]  | Text     |               |    221 |
|      | CertificateIdentification <CertId> | [0..1]  | Text     |               |    221 |
|      | FormsCode <FrmsCd>                 | [0..1]  | Text     |               |    221 |
|      | Period <Prd>                       | [0..1]  |          |               |    221 |
|      | Year <Yr>                          | [0..1]  | Year     |               |    221 |
|      | Type <Tp>                          | [0..1]  | CodeSet  |               |    221 |
|      | FromToDate <FrToDt>                | [0..1]  | ±        |               |    222 |
|      | TaxAmount <TaxAmt>                 | [0..1]  |          |               |    223 |
|      | Rate <Rate>                        | [0..1]  | Rate     |               |    223 |
|      | TaxableBaseAmount <TaxblBaseAmt>   | [0..1]  | Amount   | C2, C16       |    223 |
|      | TotalAmount <TtlAmt>               | [0..1]  | Amount   | C2, C16       |    223 |
|      | Details <Dtls>                     | [0..*]  |          |               |    224 |
|      | Period <Prd>                       | [0..1]  |          |               |    224 |
|      | Year <Yr>                          | [0..1]  | Year     |               |    224 |
|      | Type <Tp>                          | [0..1]  | CodeSet  |               |    225 |
|      | FromToDate <FrToDt>                | [0..1]  | ±        |               |    225 |
|      | Amount <Amt>                       | [1..1]  | Amount   | C2, C16       |    226 |
|      | AdditionalInformation <AddtlInf>   | [0..1]  | Text     |               |    226 |
|      | GarnishmentRemittance <GrnshmtRmt> | [0..1]  |          |               |    226 |
|      | Type <Tp>                          | [1..1]  |          |               |    227 |
|      | CodeOrProprietary <CdOrPrtry>      | [1..1]  |          |               |    227 |
| {Or  | Code <Cd>                          | [1..1]  | CodeSet  |               |    228 |
| Or}  | Proprietary <Prtry>                | [1..1]  | Text     |               |    228 |
|      | Issuer <Issr>                      | [0..1]  | Text     |               |    228 |
|      | Garnishee <Grnshee>                | [0..1]  | ±        |               |    228 |

| Or   | MessageElement <XML Tag>                            | Mult.   | Type      | Constr. No.   |   Page |
|------|-----------------------------------------------------|---------|-----------|---------------|--------|
|      | GarnishmentAdministrator <GrnshmtAdmstr>            | [0..1]  | ±         |               |    229 |
|      | ReferenceNumber <RefNb>                             | [0..1]  | Text      |               |    230 |
|      | Date <Dt>                                           | [0..1]  | Date      |               |    231 |
|      | RemittedAmount <RmtdAmt>                            | [0..1]  | Amount    | C2, C16       |    231 |
|      | FamilyMedicalInsuranceIndicator <FmlyMdclInsrncInd> | [0..1]  | Indicator |               |    231 |
|      | EmployeeTerminationIndicator <MplyeeTermntnInd>     | [0..1]  | Indicator |               |    231 |
|      | AdditionalRemittanceInformation <AddtlRmtInf>       | [0..3]  | Text      |               |    231 |

## 4.1.19.2.1  ReferredDocumentInformation &lt;RfrdDocInf&gt;

Presence: [0..*]

Definition: Provides the identification and the content of the referred document.

## ReferredDocumentInformation &lt;RfrdDocInf&gt; contains the following ReferredDocumentInformation8 elements

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                                     | [0..1]  |         |               |    201 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    201 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    201 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    201 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    201 |
|      | Number <Nb>                                   | [0..1]  | Text    |               |    202 |
|      | RelatedDate <RltdDt>                          | [0..1]  |         |               |    202 |
|      | Type <Tp>                                     | [1..1]  |         |               |    202 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    202 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    202 |
|      | Date <Dt>                                     | [1..1]  | Date    |               |    202 |
|      | LineDetails <LineDtls>                        | [0..*]  |         |               |    203 |
|      | Identification <Id>                           | [1..*]  |         |               |    203 |
|      | Type <Tp>                                     | [0..1]  |         |               |    204 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    204 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    204 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    204 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    205 |
|      | Number <Nb>                                   | [0..1]  | Text    |               |    205 |
|      | RelatedDate <RltdDt>                          | [0..1]  | Date    |               |    205 |
|      | Description <Desc>                            | [0..1]  | Text    |               |    205 |
|      | Amount <Amt>                                  | [0..1]  |         | C24           |    205 |
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    206 |
|      | Type <Tp>                                     | [1..1]  |         |               |    206 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    207 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    208 |

| Or   | MessageElement <XML Tag>         | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------------|---------|--------|---------------|--------|
|      | Reason <Rsn>                     | [0..1]  | Text   |               |    208 |
|      | AdditionalInformation <AddtlInf> | [0..1]  | Text   |               |    208 |

## 4.1.19.2.1.1  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Specifies the type of referred document.

## Type &lt;Tp&gt; contains the following DocumentType1 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
|      | CodeOrProprietary <CdOrPrtry> | [1..1]  |         |               |    201 |
| {Or  | Code <Cd>                     | [1..1]  | CodeSet |               |    201 |
| Or}  | Proprietary <Prtry>           | [1..1]  | Text    |               |    201 |
|      | Issuer <Issr>                 | [0..1]  | Text    |               |    201 |

## 4.1.19.2.1.1.1  CodeOrProprietary &lt;CdOrPrtry&gt;

Presence:

[1..1]

Definition:

Coded or proprietary format referred document type.

## CodeOrProprietary &lt;CdOrPrtry&gt; contains one of the following DocumentType2Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    201 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    201 |

## 4.1.19.2.1.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Type of remittance document, as published in an external document type code set.

Datatype:

"ExternalDocumentType1Code" on page 242

## 4.1.19.2.1.1.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Type of remittance document, in a proprietary form.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.1.2  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Identification of the issuer of the reference document type.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.2  Number &lt;Nb&gt;

Presence:

[0..1]

Definition:

Unique and unambiguous identification of the referred document.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.3  RelatedDate &lt;RltdDt&gt;

Presence:

[0..1]

Definition:

Date and date type associated with the referred document.

## RelatedDate &lt;RltdDt&gt; contains the following DateAndType1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                  | [1..1]  |         |               |    202 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    202 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    202 |
|      | Date <Dt>                  | [1..1]  | Date    |               |    202 |

## 4.1.19.2.1.3.1  Type &lt;Tp&gt;

Presence:

[1..1]

Definition:

Type of date associated with the referred document.

Type &lt;Tp&gt; contains one of the following DateType2Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    202 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    202 |

## 4.1.19.2.1.3.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Specifies the date type, as published in an external date type code set.

Datatype:

"ExternalDateType1Code" on page 241

## 4.1.19.2.1.3.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Specifies the date type, in a free-text form.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.3.2  Date &lt;Dt&gt;

Presence:

[1..1]

Definition:

Date associated with the referred document.

Datatype:

"ISODate" on page 250

## 4.1.19.2.1.4  LineDetails &lt;LineDtls&gt;

Presence:

[0..*]

Definition:

Set of elements used to provide the content of the referred document line.

## LineDetails &lt;LineDtls&gt; contains the following DocumentLineInformation2 elements

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | Identification <Id>                           | [1..*]  |         |               |    203 |
|      | Type <Tp>                                     | [0..1]  |         |               |    204 |
|      | CodeOrProprietary <CdOrPrtry>                 | [1..1]  |         |               |    204 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    204 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    204 |
|      | Issuer <Issr>                                 | [0..1]  | Text    |               |    205 |
|      | Number <Nb>                                   | [0..1]  | Text    |               |    205 |
|      | RelatedDate <RltdDt>                          | [0..1]  | Date    |               |    205 |
|      | Description <Desc>                            | [0..1]  | Text    |               |    205 |
|      | Amount <Amt>                                  | [0..1]  |         | C24           |    205 |
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    206 |
|      | Type <Tp>                                     | [1..1]  |         |               |    206 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    207 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    208 |
|      | Reason <Rsn>                                  | [0..1]  | Text    |               |    208 |
|      | AdditionalInformation <AddtlInf>              | [0..1]  | Text    |               |    208 |

## 4.1.19.2.1.4.1  Identification &lt;Id&gt;

Presence:

[1..*]

Definition:

Provides identification of the document line.

## Identification &lt;Id&gt; contains the following DocumentLineIdentification1 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    |   Page |
|------|-------------------------------|---------|---------|--------|
|      | Type <Tp>                     | [0..1]  |         |    204 |
|      | CodeOrProprietary <CdOrPrtry> | [1..1]  |         |    204 |
| {Or  | Code <Cd>                     | [1..1]  | CodeSet |    204 |
| Or}  | Proprietary <Prtry>           | [1..1]  | Text    |    204 |
|      | Issuer <Issr>                 | [0..1]  | Text    |    205 |
|      | Number <Nb>                   | [0..1]  | Text    |    205 |
|      | RelatedDate <RltdDt>          | [0..1]  | Date    |    205 |

## 4.1.19.2.1.4.1.1  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Specifies the type of referred document line identification.

## Type &lt;Tp&gt; contains the following DocumentLineType1 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
|      | CodeOrProprietary <CdOrPrtry> | [1..1]  |         |               |    204 |
| {Or  | Code <Cd>                     | [1..1]  | CodeSet |               |    204 |
| Or}  | Proprietary <Prtry>           | [1..1]  | Text    |               |    204 |
|      | Issuer <Issr>                 | [0..1]  | Text    |               |    205 |

## 4.1.19.2.1.4.1.1.1  CodeOrProprietary &lt;CdOrPrtry&gt;

Presence:

[1..1]

Definition:

Provides the type details of the referred document line identification.

## CodeOrProprietary &lt;CdOrPrtry&gt; contains one of the following DocumentLineType1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    204 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    204 |

## 4.1.19.2.1.4.1.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Line identification type in a coded form.

Datatype:

"ExternalDocumentLineType1Code" on page 242

## 4.1.19.2.1.4.1.1.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Proprietary identification of the type of the remittance document.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.4.1.1.2  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Identification of the issuer of the reference document line identificationtype.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.4.1.2  Number &lt;Nb&gt;

Presence:

[0..1]

Definition:

Identification of the type specified for the referred document line.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.4.1.3  RelatedDate &lt;RltdDt&gt;

Presence:

[0..1]

Definition:

Date associated with the referred document line.

Datatype:

"ISODate" on page 250

## 4.1.19.2.1.4.2  Description &lt;Desc&gt;

Presence:

[0..1]

Definition:

Description associated with the document line.

Datatype:

"Max2048Text" on page 255

## 4.1.19.2.1.4.3  Amount &lt;Amt&gt;

Presence:

[0..1]

Definition:

Provides details on the amounts of the document line.

Impacted by:

C24 "RemittanceAmountAndTypeGuideline"

## Amount &lt;Amt&gt; contains the following RemittanceAmount4 elements

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    206 |
|      | Type <Tp>                                     | [1..1]  |         |               |    206 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    207 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    207 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    207 |
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    208 |
|      | Reason <Rsn>                                  | [0..1]  | Text    |               |    208 |
|      | AdditionalInformation <AddtlInf>              | [0..1]  | Text    |               |    208 |

## Constraints

## · RemittanceAmountAndTypeGuideline

If Type/Code is equal to CREN, DUPA or REMI for RemittanceAmountAndType, RemittanceAmountAndType must not be repeated.

## 4.1.19.2.1.4.3.1  RemittanceAmountAndType &lt;RmtAmtAndTp&gt;

Presence:

[0..*]

Definition:

Type and amount of money for the referred document.

## RemittanceAmountAndType &lt;RmtAmtAndTp&gt; contains the following DocumentAmount1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                  | [1..1]  |         |               |    206 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    207 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    207 |
|      | Amount <Amt>               | [1..1]  | Amount  | C2, C16       |    207 |

## 4.1.19.2.1.4.3.1.1  Type &lt;Tp&gt;

Presence:

[1..1]

Definition:

Defines the type of amount.

## Type &lt;Tp&gt; contains one of the following DocumentAmountType1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    207 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    207 |

## 4.1.19.2.1.4.3.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Specifies the amount type, as published in an external referred amount code set.

Datatype:

"ExternalDocumentAmountType1Code" on page 241

## 4.1.19.2.1.4.3.1.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Specifies the amount type, in a free-text form.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.1.4.3.1.2  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Amount of money for the referred document.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.1.4.3.2  AdjustmentAmountAndReason &lt;AdjstmntAmtAndRsn&gt;

Presence:

[0..*]

Definition:

Specifies detailed information on the amount and reason of the adjustment.

## AdjustmentAmountAndReason &lt;AdjstmntAmtAndRsn&gt; contains the following DocumentAdjustment1 elements

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | Amount <Amt>                     | [1..1]  | Amount  | C2, C16       |    207 |
|      | CreditDebitIndicator <CdtDbtInd> | [0..1]  | CodeSet |               |    208 |
|      | Reason <Rsn>                     | [0..1]  | Text    |               |    208 |
|      | AdditionalInformation <AddtlInf> | [0..1]  | Text    |               |    208 |

## 4.1.19.2.1.4.3.2.1  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition: Amount of money of the document adjustment.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.1.4.3.2.2  CreditDebitIndicator &lt;CdtDbtInd&gt;

Presence:

[0..1]

Definition:

Specifies whether the adjustment must be subtracted or added to the total amount.

Datatype:

"CreditDebitCode" on page 239

| CodeName   | Name   | Definition                |
|------------|--------|---------------------------|
| CRDT       | Credit | Operation is an increase. |
| DBIT       | Debit  | Operation is a decrease.  |

## 4.1.19.2.1.4.3.2.3  Reason &lt;Rsn&gt;

Presence:

[0..1]

Definition:

Specifies the reason for the adjustment.

Datatype:

"Max4Text" on page 256

## 4.1.19.2.1.4.3.2.4  AdditionalInformation &lt;AddtlInf&gt;

Presence:

[0..1]

Definition:

Provides further details on the document adjustment.

Datatype:

"Max140Text" on page 254

## 4.1.19.2.2  ReferredDocumentAmount &lt;RfrdDocAmt&gt;

Presence:

[0..1]

Definition:

Provides details on the amounts of the referred document.

Impacted by:

C24 "RemittanceAmountAndTypeGuideline"

## ReferredDocumentAmount &lt;RfrdDocAmt&gt; contains the following RemittanceAmount4 elements

| Or   | MessageElement <XML Tag>                      | Mult.   | Type    | Constr. No.   |   Page |
|------|-----------------------------------------------|---------|---------|---------------|--------|
|      | RemittanceAmountAndType <RmtAmtAndTp>         | [0..*]  |         |               |    209 |
|      | Type <Tp>                                     | [1..1]  |         |               |    209 |
| {Or  | Code <Cd>                                     | [1..1]  | CodeSet |               |    210 |
| Or}  | Proprietary <Prtry>                           | [1..1]  | Text    |               |    210 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    210 |
|      | AdjustmentAmountAndReason <AdjstmntAmtAndRsn> | [0..*]  |         |               |    210 |
|      | Amount <Amt>                                  | [1..1]  | Amount  | C2, C16       |    210 |
|      | CreditDebitIndicator <CdtDbtInd>              | [0..1]  | CodeSet |               |    211 |
|      | Reason <Rsn>                                  | [0..1]  | Text    |               |    211 |
|      | AdditionalInformation <AddtlInf>              | [0..1]  | Text    |               |    211 |

## Constraints

## · RemittanceAmountAndTypeGuideline

If Type/Code is equal to CREN, DUPA or REMI for RemittanceAmountAndType, RemittanceAmountAndType must not be repeated.

## 4.1.19.2.2.1  RemittanceAmountAndType &lt;RmtAmtAndTp&gt;

Presence:

[0..*]

Definition:

Type and amount of money for the referred document.

## RemittanceAmountAndType &lt;RmtAmtAndTp&gt; contains the following DocumentAmount1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                  | [1..1]  |         |               |    209 |
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    210 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    210 |
|      | Amount <Amt>               | [1..1]  | Amount  | C2, C16       |    210 |

## 4.1.19.2.2.1.1  Type &lt;Tp&gt;

Presence:

[1..1]

Definition:

Defines the type of amount.

## Type &lt;Tp&gt; contains one of the following DocumentAmountType1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    210 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    210 |

## 4.1.19.2.2.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Specifies the amount type, as published in an external referred amount code set.

Datatype:

"ExternalDocumentAmountType1Code" on page 241

## 4.1.19.2.2.1.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Specifies the amount type, in a free-text form.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.2.1.2  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Amount of money for the referred document.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.2.2  AdjustmentAmountAndReason &lt;AdjstmntAmtAndRsn&gt;

Presence:

[0..*]

Definition:

Specifies detailed information on the amount and reason of the adjustment.

## AdjustmentAmountAndReason &lt;AdjstmntAmtAndRsn&gt; contains the following DocumentAdjustment1 elements

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | Amount <Amt>                     | [1..1]  | Amount  | C2, C16       |    210 |
|      | CreditDebitIndicator <CdtDbtInd> | [0..1]  | CodeSet |               |    211 |
|      | Reason <Rsn>                     | [0..1]  | Text    |               |    211 |
|      | AdditionalInformation <AddtlInf> | [0..1]  | Text    |               |    211 |

## 4.1.19.2.2.2.1  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition: Amount of money of the document adjustment.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.2.2.2  CreditDebitIndicator &lt;CdtDbtInd&gt;

Presence:

[0..1]

Definition:

Specifies whether the adjustment must be subtracted or added to the total amount.

Datatype:

"CreditDebitCode" on page 239

| CodeName   | Name   | Definition                |
|------------|--------|---------------------------|
| CRDT       | Credit | Operation is an increase. |
| DBIT       | Debit  | Operation is a decrease.  |

## 4.1.19.2.2.2.3  Reason &lt;Rsn&gt;

Presence:

[0..1]

Definition:

Specifies the reason for the adjustment.

Datatype:

"Max4Text" on page 256

## 4.1.19.2.2.2.4  AdditionalInformation &lt;AddtlInf&gt;

Presence:

[0..1]

Definition:

Provides further details on the document adjustment.

Datatype:

"Max140Text" on page 254

## 4.1.19.2.3  CreditorReferenceInformation &lt;CdtrRefInf&gt;

Presence:

[0..1]

Definition: Reference information provided by the creditor to allow the identification of the underlying documents.

CreditorReferenceInformation &lt;CdtrRefInf&gt; contains the following CreditorReferenceInformation3 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    |   Page |
|------|-------------------------------|---------|---------|--------|
|      | Type <Tp>                     | [0..1]  |         |    212 |
|      | CodeOrProprietary <CdOrPrtry> | [1..1]  |         |    212 |
| {Or  | Code <Cd>                     | [1..1]  | CodeSet |    212 |
| Or}  | Proprietary <Prtry>           | [1..1]  | Text    |    212 |
|      | Issuer <Issr>                 | [0..1]  | Text    |    213 |
|      | Reference <Ref>               | [0..1]  | Text    |    213 |

## 4.1.19.2.3.1  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Specifies the type of creditor reference.

Type &lt;Tp&gt; contains the following CreditorReferenceType3 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
|      | CodeOrProprietary <CdOrPrtry> | [1..1]  |         |               |    212 |
| {Or  | Code <Cd>                     | [1..1]  | CodeSet |               |    212 |
| Or}  | Proprietary <Prtry>           | [1..1]  | Text    |               |    212 |
|      | Issuer <Issr>                 | [0..1]  | Text    |               |    213 |

## 4.1.19.2.3.1.1  CodeOrProprietary &lt;CdOrPrtry&gt;

Presence:

[1..1]

Definition: Coded or proprietary format creditor reference type.

## CodeOrProprietary &lt;CdOrPrtry&gt; contains one of the following CreditorReferenceType2Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    212 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    212 |

## 4.1.19.2.3.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Type of creditor reference, as published in an external creditor reference type code set.

Datatype: "ExternalCreditorReferenceType1Code" on page 241

## 4.1.19.2.3.1.1.2  Proprietary &lt;Prtry&gt;

Presence: [1..1]

Definition: Type of creditor reference, in a proprietary form.

Datatype: "Max35Text" on page 256

## 4.1.19.2.3.1.2  Issuer &lt;Issr&gt;

Presence: [0..1]

Definition: Entity that assigns the credit reference type.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.3.2  Reference &lt;Ref&gt;

Presence: [0..1]

Definition: Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.

Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.

If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.

Datatype: "Max35Text" on page 256

## 4.1.19.2.4  Invoicer &lt;Invcr&gt;

Presence: [0..1]

Definition: Identification of the organisation issuing the invoice, when it is different from the creditor or ultimate creditor.

Invoicer &lt;Invcr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 4.1.19.2.5  Invoicee &lt;Invcee&gt;

Presence: [0..1]

Definition: Identification of the party to whom an invoice is issued, when it is different from the debtor or ultimate debtor.

Invoicee &lt;Invcee&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 4.1.19.2.6  TaxRemittance &lt;TaxRmt&gt;

Presence: [0..1]

Definition: Provides remittance information about a payment made for tax-related purposes.

## TaxRemittance &lt;TaxRmt&gt; contains the following TaxData1 elements

| Or   | MessageElement <XML Tag>                 | Mult.   | Type     | Constr. No.   |   Page |
|------|------------------------------------------|---------|----------|---------------|--------|
|      | Creditor <Cdtr>                          | [0..1]  | ±        |               |    217 |
|      | Debtor <Dbtr>                            | [0..1]  | ±        |               |    217 |
|      | UltimateDebtor <UltmtDbtr>               | [0..1]  | ±        |               |    217 |
|      | AdministrationZone <AdmstnZone>          | [0..1]  | Text     |               |    218 |
|      | ReferenceNumber <RefNb>                  | [0..1]  | Text     |               |    218 |
|      | Method <Mtd>                             | [0..1]  | Text     |               |    218 |
|      | TotalTaxableBaseAmount <TtlTaxblBaseAmt> | [0..1]  | Amount   | C2, C16       |    218 |
|      | TotalTaxAmount <TtlTaxAmt>               | [0..1]  | Amount   | C2, C16       |    219 |
|      | Date <Dt>                                | [0..1]  | Date     |               |    219 |
|      | SequenceNumber <SeqNb>                   | [0..1]  | Quantity |               |    219 |
|      | Record <Rcrd>                            | [0..*]  |          |               |    219 |
|      | Type <Tp>                                | [0..1]  | Text     |               |    220 |
|      | Category <Ctgy>                          | [0..1]  | Text     |               |    220 |
|      | CategoryDetails <CtgyDtls>               | [0..1]  | Text     |               |    220 |
|      | DebtorStatus <DbtrSts>                   | [0..1]  | Text     |               |    221 |
|      | CertificateIdentification <CertId>       | [0..1]  | Text     |               |    221 |
|      | FormsCode <FrmsCd>                       | [0..1]  | Text     |               |    221 |
|      | Period <Prd>                             | [0..1]  |          |               |    221 |
|      | Year <Yr>                                | [0..1]  | Year     |               |    221 |
|      | Type <Tp>                                | [0..1]  | CodeSet  |               |    221 |
|      | FromToDate <FrToDt>                      | [0..1]  | ±        |               |    222 |
|      | TaxAmount <TaxAmt>                       | [0..1]  |          |               |    223 |
|      | Rate <Rate>                              | [0..1]  | Rate     |               |    223 |
|      | TaxableBaseAmount <TaxblBaseAmt>         | [0..1]  | Amount   | C2, C16       |    223 |
|      | TotalAmount <TtlAmt>                     | [0..1]  | Amount   | C2, C16       |    223 |
|      | Details <Dtls>                           | [0..*]  |          |               |    224 |
|      | Period <Prd>                             | [0..1]  |          |               |    224 |
|      | Year <Yr>                                | [0..1]  | Year     |               |    224 |
|      | Type <Tp>                                | [0..1]  | CodeSet  |               |    225 |
|      | FromToDate <FrToDt>                      | [0..1]  | ±        |               |    225 |
|      | Amount <Amt>                             | [1..1]  | Amount   | C2, C16       |    226 |

| Or   | MessageElement <XML Tag>         | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------------|---------|--------|---------------|--------|
|      | AdditionalInformation <AddtlInf> | [0..1]  | Text   |               |    226 |

## 4.1.19.2.6.1  Creditor &lt;Cdtr&gt;

Presence:

[0..1]

Definition:

Party on the credit side of the transaction to which the tax applies.

Creditor &lt;Cdtr&gt; contains the following elements (see "TaxParty1" on page 232 for details)

| Or   | MessageElement <XML Tag>            | Mult.   | Type   | Constr. No.   |   Page |
|------|-------------------------------------|---------|--------|---------------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |               |    232 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |               |    232 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |               |    233 |

## 4.1.19.2.6.2  Debtor &lt;Dbtr&gt;

Presence:

[0..1]

Definition: Party on the debit side of the transaction to which the tax applies.

Debtor &lt;Dbtr&gt; contains the following elements (see "TaxParty2" on page 233 for details)

| Or   | MessageElement <XML Tag>            | Mult.   | Type   |   Page |
|------|-------------------------------------|---------|--------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |    233 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |    233 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |    233 |
|      | Authorisation <Authstn>             | [0..1]  |        |    233 |
|      | Title <Titl>                        | [0..1]  | Text   |    234 |
|      | Name <Nm>                           | [0..1]  | Text   |    234 |

## 4.1.19.2.6.3  UltimateDebtor &lt;UltmtDbtr&gt;

Presence:

[0..1]

Definition: Ultimate party that owes an amount of money to the (ultimate) creditor, in this case, to the taxing authority.

UltimateDebtor &lt;UltmtDbtr&gt; contains the following elements (see "TaxParty2" on page 233 for details)

| Or   | MessageElement <XML Tag>            | Mult.   | Type   |   Page |
|------|-------------------------------------|---------|--------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |    233 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |    233 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |    233 |
|      | Authorisation <Authstn>             | [0..1]  |        |    233 |
|      | Title <Titl>                        | [0..1]  | Text   |    234 |
|      | Name <Nm>                           | [0..1]  | Text   |    234 |

## 4.1.19.2.6.4  AdministrationZone &lt;AdmstnZone&gt;

Presence:

[0..1]

Definition:

Territorial part of a country to which the tax payment is related.

Datatype: "Max35Text" on page 256

## 4.1.19.2.6.5  ReferenceNumber &lt;RefNb&gt;

Presence:

[0..1]

Definition:

Tax reference information that is specific to a taxing agency.

Datatype:

"Max140Text" on page 254

## 4.1.19.2.6.6  Method &lt;Mtd&gt;

Presence:

[0..1]

Definition: Method used to indicate the underlying business or how the tax is paid.

Datatype: "Max35Text" on page 256

## 4.1.19.2.6.7  TotalTaxableBaseAmount &lt;TtlTaxblBaseAmt&gt;

Presence:

[0..1]

Definition:

Total amount of money on which the tax is based.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.6.8  TotalTaxAmount &lt;TtlTaxAmt&gt;

Presence:

[0..1]

Definition:

Total amount of money as result of the calculation of the tax.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.6.9  Date &lt;Dt&gt;

Presence:

[0..1]

Definition:

Date by which tax is due.

Datatype:

"ISODate" on page 250

## 4.1.19.2.6.10  SequenceNumber &lt;SeqNb&gt;

Presence:

[0..1]

Definition:

Sequential number of the tax report.

Datatype:

"Number" on page 253

## 4.1.19.2.6.11  Record &lt;Rcrd&gt;

Presence:

[0..*]

Definition:

Record of tax details.

## Record &lt;Rcrd&gt; contains the following TaxRecord3 elements

| Or   | MessageElement <XML Tag>           | Mult.   | Type    | Constr. No.   |   Page |
|------|------------------------------------|---------|---------|---------------|--------|
|      | Type <Tp>                          | [0..1]  | Text    |               |    220 |
|      | Category <Ctgy>                    | [0..1]  | Text    |               |    220 |
|      | CategoryDetails <CtgyDtls>         | [0..1]  | Text    |               |    220 |
|      | DebtorStatus <DbtrSts>             | [0..1]  | Text    |               |    221 |
|      | CertificateIdentification <CertId> | [0..1]  | Text    |               |    221 |
|      | FormsCode <FrmsCd>                 | [0..1]  | Text    |               |    221 |
|      | Period <Prd>                       | [0..1]  |         |               |    221 |
|      | Year <Yr>                          | [0..1]  | Year    |               |    221 |
|      | Type <Tp>                          | [0..1]  | CodeSet |               |    221 |
|      | FromToDate <FrToDt>                | [0..1]  | ±       |               |    222 |
|      | TaxAmount <TaxAmt>                 | [0..1]  |         |               |    223 |
|      | Rate <Rate>                        | [0..1]  | Rate    |               |    223 |
|      | TaxableBaseAmount <TaxblBaseAmt>   | [0..1]  | Amount  | C2, C16       |    223 |
|      | TotalAmount <TtlAmt>               | [0..1]  | Amount  | C2, C16       |    223 |
|      | Details <Dtls>                     | [0..*]  |         |               |    224 |
|      | Period <Prd>                       | [0..1]  |         |               |    224 |
|      | Year <Yr>                          | [0..1]  | Year    |               |    224 |
|      | Type <Tp>                          | [0..1]  | CodeSet |               |    225 |
|      | FromToDate <FrToDt>                | [0..1]  | ±       |               |    225 |
|      | Amount <Amt>                       | [1..1]  | Amount  | C2, C16       |    226 |
|      | AdditionalInformation <AddtlInf>   | [0..1]  | Text    |               |    226 |

## 4.1.19.2.6.11.1  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

High level code to identify the type of tax details.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.6.11.2  Category &lt;Ctgy&gt;

Presence:

[0..1]

Definition:

Specifies the tax code as published by the tax authority.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.6.11.3  CategoryDetails &lt;CtgyDtls&gt;

Presence: [0..1]

Definition: Provides further details of the category tax code.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.6.11.4  DebtorStatus &lt;DbtrSts&gt;

Presence:

[0..1]

Definition: Code provided by local authority to identify the status of the party that has drawn up the settlement document.

Datatype: "Max35Text" on page 256

## 4.1.19.2.6.11.5  CertificateIdentification &lt;CertId&gt;

Presence:

[0..1]

Definition:

Identification number of the tax report as assigned by the taxing authority.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.6.11.6  FormsCode &lt;FrmsCd&gt;

Presence:

[0..1]

Definition:

Identifies, in a coded form, on which template the tax report is to be provided.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.6.11.7  Period &lt;Prd&gt;

Presence:

[0..1]

Definition: Set of elements used to provide details on the period of time related to the tax payment.

## Period &lt;Prd&gt; contains the following TaxPeriod3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Year <Yr>                  | [0..1]  | Year    |               |    221 |
|      | Type <Tp>                  | [0..1]  | CodeSet |               |    221 |
|      | FromToDate <FrToDt>        | [0..1]  | ±       |               |    222 |

## 4.1.19.2.6.11.7.1  Year &lt;Yr&gt;

Presence:

[0..1]

Definition:

Year related to the tax payment.

Datatype:

"ISOYear" on page 256

## 4.1.19.2.6.11.7.2  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Identification of the period related to the tax payment.

Datatype: "TaxRecordPeriod1Code" on page 249

| CodeName   | Name       | Definition                                        |
|------------|------------|---------------------------------------------------|
| MM01       | FirstMonth | Tax is related to the second month of the period. |

| CodeName   | Name          | Definition                                          |
|------------|---------------|-----------------------------------------------------|
| MM02       | SecondMonth   | Tax is related to the first month of the period.    |
| MM03       | ThirdMonth    | Tax is related to the third month of the period.    |
| MM04       | FourthMonth   | Tax is related to the fourth month of the period.   |
| MM05       | FifthMonth    | Tax is related to the fifth month of the period.    |
| MM06       | SixthMonth    | Tax is related to the sixth month of the period.    |
| MM07       | SeventhMonth  | Tax is related to the seventh month of the period.  |
| MM08       | EighthMonth   | Tax is related to the eighth month of the period.   |
| MM09       | NinthMonth    | Tax is related to the ninth month of the period.    |
| MM10       | TenthMonth    | Tax is related to the tenth month of the period.    |
| MM11       | EleventhMonth | Tax is related to the eleventh month of the period. |
| MM12       | TwelfthMonth  | Tax is related to the twelfth month of the period.  |
| QTR1       | FirstQuarter  | Tax is related to the first quarter of the period.  |
| QTR2       | SecondQuarter | Tax is related to the second quarter of the period. |
| QTR3       | ThirdQuarter  | Tax is related to the third quarter of the period.  |
| QTR4       | FourthQuarter | Tax is related to the forth quarter of the period.  |
| HLF1       | FirstHalf     | Tax is related to the first half of the period.     |
| HLF2       | SecondHalf    | Tax is related to the second half of the period.    |

## 4.1.19.2.6.11.7.3  FromToDate &lt;FrToDt&gt;

Presence: [0..1]

Definition:

Range of time between a start date and an end date for which the tax report is provided.

FromToDate &lt;FrToDt&gt; contains the following elements (see "DatePeriod2" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | FromDate <FrDt>            | [1..1]  | Date   |               |    148 |
|      | ToDate <ToDt>              | [1..1]  | Date   |               |    148 |

## 4.1.19.2.6.11.8  TaxAmount &lt;TaxAmt&gt;

Presence:

[0..1]

Definition:

Set of elements used to provide information on the amount of the tax record.

## TaxAmount &lt;TaxAmt&gt; contains the following TaxAmount3 elements

| Or   | MessageElement <XML Tag>         | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------------|---------|---------|---------------|--------|
|      | Rate <Rate>                      | [0..1]  | Rate    |               |    223 |
|      | TaxableBaseAmount <TaxblBaseAmt> | [0..1]  | Amount  | C2, C16       |    223 |
|      | TotalAmount <TtlAmt>             | [0..1]  | Amount  | C2, C16       |    223 |
|      | Details <Dtls>                   | [0..*]  |         |               |    224 |
|      | Period <Prd>                     | [0..1]  |         |               |    224 |
|      | Year <Yr>                        | [0..1]  | Year    |               |    224 |
|      | Type <Tp>                        | [0..1]  | CodeSet |               |    225 |
|      | FromToDate <FrToDt>              | [0..1]  | ±       |               |    225 |
|      | Amount <Amt>                     | [1..1]  | Amount  | C2, C16       |    226 |

## 4.1.19.2.6.11.8.1  Rate &lt;Rate&gt;

Presence:

[0..1]

Definition:

Rate used to calculate the tax.

Datatype:

"PercentageRate" on page 253

## 4.1.19.2.6.11.8.2  TaxableBaseAmount &lt;TaxblBaseAmt&gt;

Presence:

[0..1]

Definition:

Amount of money on which the tax is based.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.6.11.8.3  TotalAmount &lt;TtlAmt&gt;

Presence: [0..1]

Definition:

Total amount that is the result of the calculation of the tax for the record.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.6.11.8.4  Details &lt;Dtls&gt;

Presence:

[0..*]

Definition:

Set of elements used to provide details on the tax period and amount.

Details &lt;Dtls&gt; contains the following TaxRecordDetails3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Period <Prd>               | [0..1]  |         |               |    224 |
|      | Year <Yr>                  | [0..1]  | Year    |               |    224 |
|      | Type <Tp>                  | [0..1]  | CodeSet |               |    225 |
|      | FromToDate <FrToDt>        | [0..1]  | ±       |               |    225 |
|      | Amount <Amt>               | [1..1]  | Amount  | C2, C16       |    226 |

## 4.1.19.2.6.11.8.4.1  Period &lt;Prd&gt;

Presence:

[0..1]

Definition:

Set of elements used to provide details on the period of time related to the tax payment.

Period &lt;Prd&gt; contains the following TaxPeriod3 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
|      | Year <Yr>                  | [0..1]  | Year    |               |    224 |
|      | Type <Tp>                  | [0..1]  | CodeSet |               |    225 |
|      | FromToDate <FrToDt>        | [0..1]  | ±       |               |    225 |

## 4.1.19.2.6.11.8.4.1.1  Year &lt;Yr&gt;

Presence:

[0..1]

Definition:

Year related to the tax payment.

Datatype: "ISOYear" on page 256

## 4.1.19.2.6.11.8.4.1.2  Type &lt;Tp&gt;

Presence:

[0..1]

Definition:

Identification of the period related to the tax payment.

Datatype:

"TaxRecordPeriod1Code" on page 249

| CodeName   | Name          | Definition                                          |
|------------|---------------|-----------------------------------------------------|
| MM01       | FirstMonth    | Tax is related to the second month of the period.   |
| MM02       | SecondMonth   | Tax is related to the first month of the period.    |
| MM03       | ThirdMonth    | Tax is related to the third month of the period.    |
| MM04       | FourthMonth   | Tax is related to the fourth month of the period.   |
| MM05       | FifthMonth    | Tax is related to the fifth month of the period.    |
| MM06       | SixthMonth    | Tax is related to the sixth month of the period.    |
| MM07       | SeventhMonth  | Tax is related to the seventh month of the period.  |
| MM08       | EighthMonth   | Tax is related to the eighth month of the period.   |
| MM09       | NinthMonth    | Tax is related to the ninth month of the period.    |
| MM10       | TenthMonth    | Tax is related to the tenth month of the period.    |
| MM11       | EleventhMonth | Tax is related to the eleventh month of the period. |
| MM12       | TwelfthMonth  | Tax is related to the twelfth month of the period.  |
| QTR1       | FirstQuarter  | Tax is related to the first quarter of the period.  |
| QTR2       | SecondQuarter | Tax is related to the second quarter of the period. |
| QTR3       | ThirdQuarter  | Tax is related to the third quarter of the period.  |
| QTR4       | FourthQuarter | Tax is related to the forth quarter of the period.  |
| HLF1       | FirstHalf     | Tax is related to the first half of the period.     |
| HLF2       | SecondHalf    | Tax is related to the second half of the period.    |

## 4.1.19.2.6.11.8.4.1.3  FromToDate &lt;FrToDt&gt;

Presence: [0..1]

Definition: Range of time between a start date and an end date for which the tax report is provided.

FromToDate &lt;FrToDt&gt; contains the following elements (see "DatePeriod2" on page 148 for details)

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | FromDate <FrDt>            | [1..1]  | Date   |               |    148 |
|      | ToDate <ToDt>              | [1..1]  | Date   |               |    148 |

## 4.1.19.2.6.11.8.4.2  Amount &lt;Amt&gt;

Presence:

[1..1]

Definition:

Underlying tax amount related to the specified period.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.6.11.9  AdditionalInformation &lt;AddtlInf&gt;

Presence:

[0..1]

Definition:

Further details of the tax record.

Datatype:

"Max140Text" on page 254

## 4.1.19.2.7  GarnishmentRemittance &lt;GrnshmtRmt&gt;

Presence:

[0..1]

Definition: Provides remittance information about a payment for garnishment-related purposes.

GarnishmentRemittance &lt;GrnshmtRmt&gt; contains the following Garnishment4 elements

| Or   | MessageElement <XML Tag>                            | Mult.   | Type      | Constr. No.   |   Page |
|------|-----------------------------------------------------|---------|-----------|---------------|--------|
|      | Type <Tp>                                           | [1..1]  |           |               |    227 |
|      | CodeOrProprietary <CdOrPrtry>                       | [1..1]  |           |               |    227 |
| {Or  | Code <Cd>                                           | [1..1]  | CodeSet   |               |    228 |
| Or}  | Proprietary <Prtry>                                 | [1..1]  | Text      |               |    228 |
|      | Issuer <Issr>                                       | [0..1]  | Text      |               |    228 |
|      | Garnishee <Grnshee>                                 | [0..1]  | ±         |               |    228 |
|      | GarnishmentAdministrator <GrnshmtAdmstr>            | [0..1]  | ±         |               |    229 |
|      | ReferenceNumber <RefNb>                             | [0..1]  | Text      |               |    230 |
|      | Date <Dt>                                           | [0..1]  | Date      |               |    231 |
|      | RemittedAmount <RmtdAmt>                            | [0..1]  | Amount    | C2, C16       |    231 |
|      | FamilyMedicalInsuranceIndicator <FmlyMdclInsrncInd> | [0..1]  | Indicator |               |    231 |
|      | EmployeeTerminationIndicator <MplyeeTermntnInd>     | [0..1]  | Indicator |               |    231 |

## 4.1.19.2.7.1  Type &lt;Tp&gt;

Presence: [1..1]

Definition:

Specifies the type of garnishment.

Type &lt;Tp&gt; contains the following GarnishmentType1 elements

| Or   | MessageElement <XML Tag>      | Mult.   | Type    | Constr. No.   |   Page |
|------|-------------------------------|---------|---------|---------------|--------|
|      | CodeOrProprietary <CdOrPrtry> | [1..1]  |         |               |    227 |
| {Or  | Code <Cd>                     | [1..1]  | CodeSet |               |    228 |
| Or}  | Proprietary <Prtry>           | [1..1]  | Text    |               |    228 |
|      | Issuer <Issr>                 | [0..1]  | Text    |               |    228 |

## 4.1.19.2.7.1.1  CodeOrProprietary &lt;CdOrPrtry&gt;

Presence:

[1..1]

Definition:

Provides the type details of the garnishment.

## CodeOrProprietary &lt;CdOrPrtry&gt; contains one of the following GarnishmentType1Choice elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    228 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    228 |

## 4.1.19.2.7.1.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition:

Garnishment type in a coded form.

Would suggest this to be an External Code List to contain:

GNCS    Garnishment from a third party payer for Child Support

GNDP    Garnishment from a Direct Payer for Child Support

GTPP     Garnishment from a third party payer to taxing agency.

Datatype:

"ExternalGarnishmentType1Code" on page 243

## 4.1.19.2.7.1.1.2  Proprietary &lt;Prtry&gt;

Presence:

[1..1]

Definition:

Proprietary identification of the type of garnishment.

Datatype:

"Max35Text" on page 256

## 4.1.19.2.7.1.2  Issuer &lt;Issr&gt;

Presence:

[0..1]

Definition:

Identification of the issuer of the garnishment type.

Datatype: "Max35Text" on page 256

## 4.1.19.2.7.2  Garnishee &lt;Grnshee&gt;

Presence:

[0..1]

Definition: Ultimate party that owes an amount of money to the (ultimate) creditor, in this case, to the garnisher.

Garnishee &lt;Grnshee&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 4.1.19.2.7.3  GarnishmentAdministrator &lt;GrnshmtAdmstr&gt;

Presence: [0..1]

Definition: Party on the credit side of the transaction who administers the garnishment on behalf of the ultimate beneficiary.

## GarnishmentAdministrator &lt;GrnshmtAdmstr&gt; contains the following elements (see "PartyIdentification272" on page 169 for details)

| Or   | MessageElement <XML Tag>              | Mult.   | Type          | Constr. No.   |   Page |
|------|---------------------------------------|---------|---------------|---------------|--------|
|      | Name <Nm>                             | [0..1]  | Text          |               |    169 |
|      | PostalAddress <PstlAdr>               | [0..1]  | ±             |               |    170 |
|      | Identification <Id>                   | [0..1]  |               |               |    170 |
| {Or  | OrganisationIdentification <OrgId>    | [1..1]  |               |               |    171 |
|      | AnyBIC <AnyBIC>                       | [0..1]  | IdentifierSet | C3            |    172 |
|      | LEI <LEI>                             | [0..1]  | IdentifierSet |               |    172 |
|      | Other <Othr>                          | [0..*]  |               |               |    172 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    173 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    173 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    173 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    173 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    173 |
| Or}  | PrivateIdentification <PrvtId>        | [1..1]  |               |               |    173 |
|      | DateAndPlaceOfBirth <DtAndPlcOfBirth> | [0..1]  |               |               |    174 |
|      | BirthDate <BirthDt>                   | [1..1]  | Date          |               |    174 |
|      | ProvinceOfBirth <PrvcOfBirth>         | [0..1]  | Text          |               |    174 |
|      | CityOfBirth <CityOfBirth>             | [1..1]  | Text          |               |    175 |
|      | CountryOfBirth <CtryOfBirth>          | [1..1]  | CodeSet       | C12           |    175 |
|      | Other <Othr>                          | [0..*]  |               |               |    175 |
|      | Identification <Id>                   | [1..1]  | Text          |               |    175 |
|      | SchemeName <SchmeNm>                  | [0..1]  |               |               |    175 |
| {Or  | Code <Cd>                             | [1..1]  | CodeSet       |               |    176 |
| Or}  | Proprietary <Prtry>                   | [1..1]  | Text          |               |    176 |
|      | Issuer <Issr>                         | [0..1]  | Text          |               |    176 |
|      | CountryOfResidence <CtryOfRes>        | [0..1]  | CodeSet       | C12           |    176 |
|      | ContactDetails <CtctDtls>             | [0..1]  | ±             |               |    176 |

## 4.1.19.2.7.4  ReferenceNumber &lt;RefNb&gt;

Presence: [0..1]

Definition: Reference information that is specific to the agency receiving the garnishment.

Datatype:

"Max140Text" on page 254

## 4.1.19.2.7.5  Date &lt;Dt&gt;

Presence:

[0..1]

Definition:

Date of payment which garnishment was taken from.

Datatype:

"ISODate" on page 250

## 4.1.19.2.7.6  RemittedAmount &lt;RmtdAmt&gt;

Presence:

[0..1]

Definition:

Amount of money remitted for the referred document.

Impacted by:

C2 "ActiveOrHistoricCurrency", C16 "CurrencyAmount"

Datatype:

"ActiveOrHistoricCurrencyAndAmount" on page 234

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.1.19.2.7.7  FamilyMedicalInsuranceIndicator &lt;FmlyMdclInsrncInd&gt;

Presence:

[0..1]

Definition: Indicates if the person to whom the garnishment applies (that is, the ultimate debtor) has family medical insurance coverage available.

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 4.1.19.2.7.8  EmployeeTerminationIndicator &lt;MplyeeTermntnInd&gt;

Presence: [0..1]

Definition: Indicates if the employment of the person to whom the garnishment applies (that is, the ultimate debtor) has been terminated.

Datatype: One of the following values must be used (see "TrueFalseIndicator" on page 252):

- Meaning When True: True
- Meaning When False: False

## 4.1.19.2.8  AdditionalRemittanceInformation &lt;AddtlRmtInf&gt;

Presence:

[0..3]

Definition:

Additional information, in free text form, to complement the structured remittance information.

Datatype: "Max140Text" on page 254

## 4.1.20 System Identification

## 4.1.20.1  ClearingSystemIdentification2Choice

Definition: Choice of a clearing system identifier.

| Or   | MessageElement <XML Tag>   | Mult.   | Type    | Constr. No.   |   Page |
|------|----------------------------|---------|---------|---------------|--------|
| {Or  | Code <Cd>                  | [1..1]  | CodeSet |               |    232 |
| Or}  | Proprietary <Prtry>        | [1..1]  | Text    |               |    232 |

## 4.1.20.1.1  Code &lt;Cd&gt;

Presence:

[1..1]

Definition: Identification of a clearing system, in a coded form as published in an external list.

Datatype: "ExternalClearingSystemIdentification1Code" on page 240

## 4.1.20.1.2  Proprietary &lt;Prtry&gt;

Presence: [1..1]

Definition: Identification code for a clearing system, that has not yet been identified in the list of clearing systems.

Datatype: "Max35Text" on page 256

## 4.1.21 Tax

## 4.1.21.1  TaxParty1

Definition: Details about the entity involved in the tax paid or to be paid.

| Or   | MessageElement <XML Tag>            | Mult.   | Type   | Constr. No.   |   Page |
|------|-------------------------------------|---------|--------|---------------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |               |    232 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |               |    232 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |               |    233 |

## 4.1.21.1.1  TaxIdentification &lt;TaxId&gt;

Presence:

[0..1]

Definition: Tax identification number of the creditor.

Datatype:

"Max35Text" on page 256

## 4.1.21.1.2  RegistrationIdentification &lt;RegnId&gt;

Presence:

[0..1]

Definition: Unique identification, as assigned by an organisation, to unambiguously identify a party.

Datatype: "Max35Text" on page 256

## 4.1.21.1.3  TaxType &lt;TaxTp&gt;

Presence:

[0..1]

Definition:

Type of tax payer.

Datatype:

"Max35Text" on page 256

## 4.1.21.2  TaxParty2

Definition: Details about the entity involved in the tax paid or to be paid.

| Or   | MessageElement <XML Tag>            | Mult.   | Type   |   Page |
|------|-------------------------------------|---------|--------|--------|
|      | TaxIdentification <TaxId>           | [0..1]  | Text   |    233 |
|      | RegistrationIdentification <RegnId> | [0..1]  | Text   |    233 |
|      | TaxType <TaxTp>                     | [0..1]  | Text   |    233 |
|      | Authorisation <Authstn>             | [0..1]  |        |    233 |
|      | Title <Titl>                        | [0..1]  | Text   |    234 |
|      | Name <Nm>                           | [0..1]  | Text   |    234 |

## 4.1.21.2.1  TaxIdentification &lt;TaxId&gt;

Presence:

[0..1]

Definition:

Tax identification number of the debtor.

Datatype:

"Max35Text" on page 256

## 4.1.21.2.2  RegistrationIdentification &lt;RegnId&gt;

Presence:

[0..1]

Definition: Unique identification, as assigned by an organisation, to unambiguously identify a party.

Datatype: "Max35Text" on page 256

## 4.1.21.2.3  TaxType &lt;TaxTp&gt;

Presence:

[0..1]

Definition:

Type of tax payer.

Datatype:

"Max35Text" on page 256

## 4.1.21.2.4  Authorisation &lt;Authstn&gt;

Presence:

[0..1]

Definition:

Details of the authorised tax paying party.

Authorisation &lt;Authstn&gt; contains the following TaxAuthorisation1 elements

| Or   | MessageElement <XML Tag>   | Mult.   | Type   | Constr. No.   |   Page |
|------|----------------------------|---------|--------|---------------|--------|
|      | Title <Titl>               | [0..1]  | Text   |               |    234 |
|      | Name <Nm>                  | [0..1]  | Text   |               |    234 |

## 4.1.21.2.4.1  Title &lt;Titl&gt;

Presence:

[0..1]

Definition:

Title or position of debtor or the debtor's authorised representative.

Datatype:

"Max35Text" on page 256

## 4.1.21.2.4.2  Name &lt;Nm&gt;

Presence:

[0..1]

Definition:

Name of the debtor or the debtor's authorised representative.

Datatype:

"Max140Text" on page 254

## 4.2 Message Datatypes

## 4.2.1 Amount

## 4.2.1.1  ActiveCurrencyAndAmount

Definition: A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.

Type: Amount

This data type contains the following XML attribute:

| Name     | Attribute XML Name   | Datatype                         |
|----------|----------------------|----------------------------------|
| Currency | Ccy                  | "ActiveCurrencyCode" on page 236 |

## Format

| minInclusive   |   0 |
|----------------|-----|
| totalDigits    |  18 |
| fractionDigits |   5 |

## Constraints

## · ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.2.1.2  ActiveOrHistoricCurrencyAndAmount

Definition: A number of monetary units specified in an active or a historic currency where the unit of currency is explicit and compliant with ISO 4217.

## Type: Amount

This data type contains the following XML attribute:

| Name     | Attribute XML Name   | Datatype                                   |
|----------|----------------------|--------------------------------------------|
| Currency | Ccy                  | "ActiveOrHistoricCurrencyCode" on page 236 |

## Format

| minInclusive   |   0 |
|----------------|-----|
| totalDigits    |  18 |
| fractionDigits |   5 |

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## · CurrencyAmount

The number of fractional digits (or minor unit of currency) must comply with ISO 4217.

Note: The decimal separator is a dot.

## 4.2.2 Binary

## 4.2.2.1  Max10KBinary

Definition:

Binary data of 10K maximum.

Type:

Binary

## Format

minLength

1

maxLength

10240

## 4.2.2.2  Max10MbBinary

Definition:

Binary data of 10 megabytes (10 Mb) maximum.

Type:

Binary

## Format

minLength

1

maxLength

10485760

## 4.2.3 CodeSet

## 4.2.3.1  ActiveCurrencyCode

Definition: A code allocated to a currency by a Maintenance Agency under an international identification scheme as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".

Type: CodeSet

## Format

pattern

[A-Z]{3,3}

## Constraints

## · ActiveCurrency

The currency code must be a valid active currency code, not yet withdrawn on the day the message containing the currency is exchanged. Valid active currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and are not yet withdrawn on the day the message containing the Currency is exchanged.

## 4.2.3.2  ActiveOrHistoricCurrencyCode

Definition: A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".

Type: CodeSet

## Format

pattern

[A-Z]{3,3}

## Constraints

## · ActiveOrHistoricCurrency

The Currency Code must be registered, or have already been registered. Valid active or historic currency codes are registered with the ISO 4217 Maintenance Agency, consist of three (3) contiguous letters, and may be or not be withdrawn on the day the message containing the Currency is exchanged.

## 4.2.3.3  AddressType2Code

Definition: Specifies the type of address.

Type: CodeSet

| CodeName   | Name        | Definition                              |
|------------|-------------|-----------------------------------------|
| ADDR       | Postal      | Address is the complete postal address. |
| PBOX       | POBox       | Address is a postal office (PO) box.    |
| HOME       | Residential | Address is the home address.            |
| BIZZ       | Business    | Address is the business address.        |

| CodeName   | Name       | Definition                                                 |
|------------|------------|------------------------------------------------------------|
| MLTO       | MailTo     | Address is the address to which mail is sent.              |
| DLVY       | DeliveryTo | Address is the address to which delivery is to take place. |

## 4.2.3.4  AdviceType1Code

Definition: Specifies the type of advice to provide back in the report.

Type: CodeSet

| CodeName   | Name                 | Definition                                       |
|------------|----------------------|--------------------------------------------------|
| ADWD       | AdviceWithDetails    | Advice with transaction details is requested.    |
| ADND       | AdviceWithoutDetails | Advice without transaction details is requested. |

## 4.2.3.5  ChargeBearerType1Code

Definition: Specifies which party(ies) will pay charges due for processing of the instruction.

Type: CodeSet

| CodeName   | Name                  | Definition                                                                                                                                                                                                                                                                                                                                                                     |
|------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEBT       | BorneByDebtor         | All transaction charges are to be borne by the debtor.                                                                                                                                                                                                                                                                                                                         |
| CRED       | BorneByCreditor       | All transaction charges are to be borne by the creditor.                                                                                                                                                                                                                                                                                                                       |
| SHAR       | Shared                | In a credit transfer context, means that transaction charges on the sender side are to be borne by the debtor, transaction charges on the receiver side are to be borne by the creditor. In a direct debit context, means that transaction charges on the sender side are to be borne by the creditor, transaction charges on the receiver side are to be borne by the debtor. |
| SLEV       | FollowingServiceLevel | Charges are to be applied following the rules agreed in the service level and/or scheme.                                                                                                                                                                                                                                                                                       |

## 4.2.3.6  ChequeDelivery1Code

Definition: Specifies the method to be used in delivering a cheque to a party.

Type: CodeSet

| CodeName   | Name           | Definition                                              |
|------------|----------------|---------------------------------------------------------|
| MLDB       | MailToDebtor   | Cheque is to be sent through mail services to debtor.   |
| MLCD       | MailToCreditor | Cheque is to be sent through mail services to creditor. |

| CodeName   | Name                       | Definition                                                               |
|------------|----------------------------|--------------------------------------------------------------------------|
| MLFA       | MailToFinalAgent           | Cheque is to be sent through mail services to creditor agent.            |
| CRDB       | CourierToDebtor            | Cheque is to be sent through courier services to debtor.                 |
| CRCD       | CourierToCreditor          | Cheque is to be sent through courier services to creditor.               |
| CRFA       | CourierToFinalAgent        | Cheque is to be sent through courier services to creditor agent.         |
| PUDB       | PickUpByDebtor             | Cheque will be picked up by the debtor.                                  |
| PUCD       | PickUpByCreditor           | Cheque will be picked up by the creditor.                                |
| PUFA       | PickUpByFinalAgent         | Cheque will be picked up by the creditor agent.                          |
| RGDB       | RegisteredMailToDebtor     | Cheque is to be sent through registered mail services to debtor.         |
| RGCD       | RegisteredMailToCreditor   | Cheque is to be sent through registered mail services to creditor.       |
| RGFA       | RegisteredMailToFinalAgent | Cheque is to be sent through registered mail services to creditor agent. |

## 4.2.3.7  ChequeType2Code

Definition: Specifies the type of cheque.

Type: CodeSet

| CodeName   | Name                    | Definition                                                                                                                                                                                                                                                                                   |
|------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CCHQ       | CustomerCheque          | Cheque drawn on the account of the debtor, and debited on the debtor's account when the cheque is cashed. Synonym is 'corporate cheque'.                                                                                                                                                     |
| CCCH       | CertifiedCustomerCheque | Cheque drawn on the account of the debtor, and debited on the debtor's account when the cheque is cashed. The financial institution prints and certifies the cheque, guaranteeing the payment.                                                                                               |
| BCHQ       | BankCheque              | Cheque drawn on the account of the debtor's financial institution, which is debited on the debtor's account when the cheque is issued.These cheques are printed by the debtor's financial institution and payment is guaranteed by the financial institution. Synonym is 'cashier's cheque'. |
| DRFT       | Draft                   | A guaranteed bank cheque with a future value date (do not pay before], which in commercial terms is a 'negotiatable instrument': the beneficiary can receive early payment from any bank under subtraction of a discount. The ordering customer's account is debited on value date.          |

| CodeName   | Name            | Definition                                                                                                                                                                                                                                                               |
|------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ELDR       | ElectronicDraft | An instrument with a future value date (do not pay before], which in commercial terms is a 'negotiatable instrument': the beneficiary can receive early payment from any bank under subtraction of a discount. The ordering customer's account is debited on value date. |

## 4.2.3.8  CountryCode

Definition: Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

Type: CodeSet

| Format   |            |
|----------|------------|
| pattern  | [A-Z]{2,2} |

## Constraints

## · Country

The code is checked against the list of country names obtained from the United Nations (ISO 3166, Alpha-2 code).

## 4.2.3.9  CreditDebitCode

Definition: Specifies if an operation is an increase or a decrease.

Type: CodeSet

| CodeName   | Name   | Definition                |
|------------|--------|---------------------------|
| CRDT       | Credit | Operation is an increase. |
| DBIT       | Debit  | Operation is a decrease.  |

## 4.2.3.10  ExternalAccountIdentification1Code

Definition: Specifies the external account identification scheme name code in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

| minLength   |   1 |
|-------------|-----|
| maxLength   |   4 |

## 4.2.3.11  ExternalCashAccountType1Code

Definition: Specifies the nature, or use, of the cash account in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.12  ExternalCategoryPurpose1Code

Definition: Specifies the category purpose, as published in an external category purpose code list.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.13  ExternalChargeType1Code

Definition: Specifies the nature, or use, of the charges in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type:

CodeSet

## Format

| minLength   |   1 |
|-------------|-----|
| maxLength   |   4 |

## 4.2.3.14  ExternalClearingSystemIdentification1Code

Definition: Specifies the clearing system identification code, as published in an external clearing system identification code list.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

| minLength   |   1 |
|-------------|-----|
| maxLength   |   5 |

## 4.2.3.15  ExternalCreditorAgentInstruction1Code

Definition: Specifies further instructions concerning the processing of a payment instruction, as provided to the creditor agent.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.16  ExternalCreditorReferenceType1Code

Definition: Specifies the type of creditor reference as published in an external creditor reference type code set.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.17  ExternalDateType1Code

Definition: Defines the type of date, as published in an external date type code list.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.18  ExternalDocumentAmountType1Code

Definition: Specifies the nature, or use, of the amount, as published in an external document amount type code set.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength

4

## 4.2.3.19  ExternalDocumentFormat1Code

Definition: Specifies the external document format code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.20  ExternalDocumentLineType1Code

Definition: Specifies the document line type as published in an external document type code list.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.21  ExternalDocumentType1Code

Definition: Specifies the document type as published in an external document type code list.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.22  ExternalFinancialInstitutionIdentification1Code

Definition: Specifies the external financial institution identification scheme name code in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.23  ExternalGarnishmentType1Code

Definition: Specifies the garnishment type as published in an external document type code list.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.24  ExternalLocalInstrument1Code

Definition: Specifies the external local instrument code in the format of character string with a maximum length of 35 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 35

## 4.2.3.25  ExternalMandateSetupReason1Code

Definition: Specifies the external mandate setup reason code in the format of character string with a maximum length of 4 characters.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.26  ExternalOrganisationIdentification1Code

Definition: Specifies the external organisation identification scheme name code in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

| minLength   |   1 |
|-------------|-----|
| maxLength   |   4 |

## 4.2.3.27  ExternalPaymentGroupStatus1Code

Definition: Specifies the status of a group of payment instructions, as published in an external payment group status code set.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.28  ExternalPaymentTransactionStatus1Code

Definition: Specifies the status of an individual payment instructions, as published in an external payment transaction status code set.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.29  ExternalPersonIdentification1Code

Definition: Specifies the external person identification scheme name code in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.30  ExternalProxyAccountType1Code

Definition: Specifies the external proxy account type code, as published in the proxy account type external code set.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength

4

## 4.2.3.31  ExternalPurpose1Code

Definition: Specifies the external purpose code in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type:

CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.32  ExternalServiceLevel1Code

Definition: Specifies the external service level code in the format of character string with a maximum length of 4 characters.

The list of valid codes is an external code list published separately.

External code sets can be downloaded from www.iso20022.org.

Type:

CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.33  ExternalStatusReason1Code

Definition: Specifies the status reason, as published in an external status reason code list.

External code sets can be downloaded from www.iso20022.org.

Type: CodeSet

## Format

minLength 1

maxLength 4

## 4.2.3.34  Frequency6Code

Definition: Specifies the regularity of an event.

Type:

CodeSet

| CodeName   | Name        | Definition                                                 |
|------------|-------------|------------------------------------------------------------|
| YEAR       | Annual      | Event takes place every year or once a year.               |
| MNTH       | Monthly     | Event takes place every month or once a month.             |
| QURT       | Quarterly   | Event takes place every three months or four times a year. |
| MIAN       | SemiAnnual  | Event takes place every six months or two times a year.    |
| WEEK       | Weekly      | Event takes place once a week.                             |
| DAIL       | Daily       | Event takes place every day.                               |
| ADHO       | Adhoc       | Event takes place on request or as necessary.              |
| INDA       | IntraDay    | Event takes place several times a day.                     |
| FRTN       | Fortnightly | Event takes place every two weeks.                         |

## 4.2.3.35  LanguageCode

Definition:

Specifies a language.

Type:

CodeSet

## Constraints

- ValidationByTable

Must be a valid terrestrial language.

## 4.2.3.36  MandateClassification1Code

Definition: Specifies the type of direct debit amount, such as fixed or variable.

Type: CodeSet

| CodeName   | Name       | Definition                             |
|------------|------------|----------------------------------------|
| FIXE       | Fixed      | Direct debit amount is fixed.          |
| USGB       | UsageBased | Direct debit amount is based on usage. |
| VARI       | Variable   | Direct debit amount is variable.       |

## 4.2.3.37  NamePrefix2Code

Definition: Specifies the terms used to formally address a person.

Type: CodeSet

| CodeName   | Name   | Definition                           |
|------------|--------|--------------------------------------|
| DOCT       | Doctor | Title of the person is Doctor or Dr. |
| MADM       | Madam  | Title of the person is Madam.        |
| MISS       | Miss   | Title of the person is Miss.         |
| MIST       | Mister | Title of the person is Mister or Mr. |

| CodeName   | Name          | Definition                                  |
|------------|---------------|---------------------------------------------|
| MIKS       | GenderNeutral | Title of the person is gender neutral (Mx). |

## 4.2.3.38  PaymentMethod4Code

Definition: Specifies the transfer method that will be used to transfer an amount of money.

Type: CodeSet

| CodeName   | Name           | Definition                                                                                                                              |
|------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| CHK        | Cheque         | Written order to a bank to pay a certain amount of money from one person to another person.                                             |
| TRF        | CreditTransfer | Transfer of an amount of money in the books of the account servicer.                                                                    |
| DD         | DirectDebit    | Collection of an amount of money from the debtor's bank account by the creditor. The amount of money and dates of collections may vary. |
| TRA        | TransferAdvice | Transfer of an amount of money in the books of the account servicer. An advice should be sent back to the account owner.                |

## 4.2.3.39  PaymentMethod7Code

Definition: Specifies the transfer method that will be used to transfer the cash.

Type: CodeSet

| CodeName   | Name           | Definition                                                                                  |
|------------|----------------|---------------------------------------------------------------------------------------------|
| CHK        | Cheque         | Written order to a bank to pay a certain amount of money from one person to another person. |
| TRF        | CreditTransfer | Transfer of an amount of money in the books of the account servicer.                        |

## 4.2.3.40  PreferredContactMethod2Code

Definition: Preferred method used to reach the individual contact within an organisation.

Type: CodeSet

| CodeName   | Name              | Definition                                                              |
|------------|-------------------|-------------------------------------------------------------------------|
| MAIL       | Email             | Preferred method used to reach the contact is per email.                |
| FAXX       | Fax               | Preferred method used to reach the contact is per fax.                  |
| LETT       | Letter            | Preferred method used to reach the contact is per letter.               |
| CELL       | MobileOrCellPhone | Preferred method used to reach the contact is per mobile or cell phone. |

| CodeName   | Name   | Definition                                               |
|------------|--------|----------------------------------------------------------|
| ONLI       | Online | Preferred method used to reach the contact is online.    |
| PHON       | Phone  | Preferred method used to reach the contact is per phone. |

## 4.2.3.41  Priority2Code

Definition: Specifies the priority level of an event.

Type: CodeSet

| CodeName   | Name   | Definition                |
|------------|--------|---------------------------|
| HIGH       | High   | Priority level is high.   |
| NORM       | Normal | Priority level is normal. |

## 4.2.3.42  RegulatoryReportingType1Code

Definition: Identifies whether the regulatory reporting information applies to the debit side, to the credit side or to both debit and credit sides of the transaction.

Type: CodeSet

| CodeName   | Name   | Definition                                                     |
|------------|--------|----------------------------------------------------------------|
| CRED       | Credit | Regulatory information applies to the credit side.             |
| DEBT       | Debit  | Regulatory information applies to the debit side.              |
| BOTH       | Both   | Regulatory information applies to both credit and debit sides. |

## 4.2.3.43  RemittanceLocationMethod2Code

Definition: Specifies the method used to deliver the remittance advice information.

Type: CodeSet

| CodeName   | Name                      | Definition                                                                                                                                                                                                                                                                                                                                          |
|------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FAXI       | Fax                       | Remittance advice information must be faxed.                                                                                                                                                                                                                                                                                                        |
| EDIC       | ElectronicDataInterchange | Remittance advice information must be sent through Electronic Data Interchange (EDI).                                                                                                                                                                                                                                                               |
| URID       | UniformResourceIdentifier | Remittance advice information needs to be sent to a Uniform Resource Identifier (URI). URI is a compact string of characters that uniquely identify an abstract or physical resource. URI's are the super-set of identifiers, such as URLs, email addresses, ftp sites, etc, and as such, provide the syntax for all of the identification schemes. |
| EMAL       | EMail                     | Remittance advice information must be sent through e-mail.                                                                                                                                                                                                                                                                                          |

| CodeName   | Name   | Definition                                                                                    |
|------------|--------|-----------------------------------------------------------------------------------------------|
| POST       | Post   | Remittance advice information must be sent through postal services.                           |
| SMSM       | SMS    | Remittance advice information must be sent through by phone as a short message service (SMS). |

## 4.2.3.44  SequenceType3Code

Definition: Specifies the type of the current transaction that belongs to a sequence of transactions.

Type: CodeSet

| CodeName   | Name        | Definition                                                                                                                         |
|------------|-------------|------------------------------------------------------------------------------------------------------------------------------------|
| FRST       | First       | First collection of a series of direct debit instructions.                                                                         |
| RCUR       | Recurring   | Direct debit instruction where the debtor's authorisation is used for regular direct debit transactions initiated by the creditor. |
| FNAL       | Final       | Final collection of a series of direct debit instructions.                                                                         |
| OOFF       | OneOff      | Direct debit instruction where the debtor's authorisation is used to initiate one single direct debit transaction.                 |
| RPRE       | Represented | Collection used to re-present previously reversed or returned direct debit transactions.                                           |

## 4.2.3.45  TaxRecordPeriod1Code

Definition: Specifies the period related to the tax payment.

Type: CodeSet

| CodeName   | Name         | Definition                                         |
|------------|--------------|----------------------------------------------------|
| MM01       | FirstMonth   | Tax is related to the second month of the period.  |
| MM02       | SecondMonth  | Tax is related to the first month of the period.   |
| MM03       | ThirdMonth   | Tax is related to the third month of the period.   |
| MM04       | FourthMonth  | Tax is related to the fourth month of the period.  |
| MM05       | FifthMonth   | Tax is related to the fifth month of the period.   |
| MM06       | SixthMonth   | Tax is related to the sixth month of the period.   |
| MM07       | SeventhMonth | Tax is related to the seventh month of the period. |
| MM08       | EighthMonth  | Tax is related to the eighth month of the period.  |

| CodeName   | Name          | Definition                                          |
|------------|---------------|-----------------------------------------------------|
| MM09       | NinthMonth    | Tax is related to the ninth month of the period.    |
| MM10       | TenthMonth    | Tax is related to the tenth month of the period.    |
| MM11       | EleventhMonth | Tax is related to the eleventh month of the period. |
| MM12       | TwelfthMonth  | Tax is related to the twelfth month of the period.  |
| QTR1       | FirstQuarter  | Tax is related to the first quarter of the period.  |
| QTR2       | SecondQuarter | Tax is related to the second quarter of the period. |
| QTR3       | ThirdQuarter  | Tax is related to the third quarter of the period.  |
| QTR4       | FourthQuarter | Tax is related to the forth quarter of the period.  |
| HLF1       | FirstHalf     | Tax is related to the first half of the period.     |
| HLF2       | SecondHalf    | Tax is related to the second half of the period.    |

## 4.2.4 Date

## 4.2.4.1  ISODate

Definition: A particular point in the progression of time in a calendar year expressed in the YYYY-MMDD format. This representation is defined in "XML Schema Part 2: Datatypes Second Edition - W3C Recommendation 28 October 2004" which is aligned with ISO 8601.

Type: Date

## 4.2.5 DateTime

## 4.2.5.1  ISODateTime

Definition: A particular point in the progression of time defined by a mandatory date and a mandatory time component, expressed in either UTC time format (YYYY-MM-DDThh:mm:ss.sssZ), local time with UTC offset format (YYYY-MM-DDThh:mm:ss.sss+/-hh:mm), or local time format (YYYY-MMDDThh:mm:ss.sss). These representations are defined in "XML Schema Part 2: Datatypes Second Edition - W3C Recommendation 28 October 2004" which is aligned with ISO 8601.

Note on the time format:

1) beginning / end of calendar day

00:00:00 = the beginning of a calendar day

24:00:00 = the end of a calendar day

- 2) fractions of second in time format

Decimal fractions of seconds may be included. In this case, the involved parties shall agree on the maximum number of digits that are allowed.

Type: DateTime

## 4.2.6 IdentifierSet

## 4.2.6.1  AnyBICDec2014Identifier

Definition: Code allocated to a financial or non-financial institution by the ISO 9362 Registration Authority, as described in ISO 9362: 2014 - "Banking - Banking telecommunication messages Business identifier code (BIC)".

Type: IdentifierSet

Identification scheme:

SWIFT; AnyBICIdentifier

## Format

pattern

[A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}([A-Z0-9]{3,3}){0,1}

## Constraints

## · AnyBIC

Only a valid Business identifier code is allowed. Business identifier codes for financial or nonfinancial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consists of eight (8) or eleven (11) contiguous characters.

## 4.2.6.2  BICFIDec2014Identifier

Definition: Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362: 2014 - "Banking - Banking telecommunication messages - Business identifier code (BIC)".

Type:

IdentifierSet

Identification scheme: SWIFT; BICIdentifier

## Format

pattern

## Constraints

- BICFI

Valid BICs for financial institutions are registered and published by the ISO 9362 Registration Authority in the ISO directory of BICs, and consist of eight (8) or eleven (11) contiguous characters.

## 4.2.6.3  IBAN2007Identifier

Definition: The International Bank Account Number is a code used internationally by financial institutions to uniquely identify the account of a customer at a financial institution as described in the 2007 edition of the ISO 13616 standard "Banking and related financial services - International Bank Account Number (IBAN)" and replaced by the more recent edition of the standard.

Type: IdentifierSet

Identification scheme: National Banking Association; International Bank Account Number (ISO 13616)

[A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}([A-Z0-9]{3,3}){0,1}

## Format

pattern

## Constraints

## · IBAN

A valid IBAN consists of all three of the following components: Country Code, check digits and BBAN.

## 4.2.6.4  LEIIdentifier

Definition: Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".

Type:

IdentifierSet

Identification scheme:

Global LEI System; LEIIdentifier

## Format

pattern

[A-Z0-9]{18,18}[0-9]{2,2}

## 4.2.6.5  UUIDv4Identifier

Definition: Universally Unique IDentifier (UUID) version 4, as described in IETC RFC 4122 "Universally Unique IDentifier (UUID) URN Namespace".

Type:

IdentifierSet

Identification scheme: RFC4122; UUIDv4

## Format

pattern

[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}

## 4.2.7 Indicator

## 4.2.7.1  TrueFalseIndicator

Definition:

A flag indicating a True or False value.

Type: Indicator

Meaning When True: True

Meaning When False: False

## 4.2.8 Quantity

## 4.2.8.1  DecimalNumber

Definition:

Number of objects represented as a decimal number, for example 0.75 or 45.6.

Type:

Quantity

[A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}

## Format

totalDigits

18

fractionDigits

17

## 4.2.8.2  Number

Definition:

Number of objects represented as an integer.

Type:

Quantity

## Format

totalDigits

18

fractionDigits 0

## 4.2.9 Rate

## 4.2.9.1  PercentageRate

Definition: Rate expressed as a percentage, that is, in hundredths, for example, 0.7 is 7/10 of a percent, and 7.0 is 7%.

Type: Rate

## Format

totalDigits

11

fractionDigits

10

baseValue

100.0

## 4.2.10 Text

## 4.2.10.1  Exact2NumericText

Definition: Specifies a numeric string with an exact length of 2 digits.

Type: Text

## Format

pattern

[0-9]{2}

## 4.2.10.2  Exact4AlphaNumericText

Definition:

Specifies an alphanumeric string with a length of 4 characters.

Type: Text

## Format

pattern

[a-zA-Z0-9]{4}

## 4.2.10.3  Max105Text

Definition: Specifies a character string with a maximum length of 105 characters.

Type: Text

## Format

minLength

1

maxLength

105

## 4.2.10.4  Max10Text

Definition:

Specifies a character string with a maximum length of 10 characters.

Type:

Text

## Format

minLength

1

maxLength 10

## 4.2.10.5  Max128Text

Definition: Specifies a character string with a maximum length of 128 characters.

Type:

Text

## Format

minLength

1

maxLength 128

## 4.2.10.6  Max140Text

Definition:

Specifies a character string with a maximum length of 140 characters.

Type: Text

## Format

minLength

1

maxLength

140

## 4.2.10.7  Max15NumericText

Definition: Specifies a numeric string with a maximum length of 15 digits.

Type:

Text

## Format

pattern

[0-9]{1,15}

## 4.2.10.8  Max16Text

Definition: Specifies a character string with a maximum length of 16 characters.

Type: Text

## Format

minLength

1

maxLength 16

## 4.2.10.9  Max2048Text

Definition:

Specifies a character string with a maximum length of 2048 characters.

Type:

Text

## Format

minLength

1

maxLength

2048

## 4.2.10.10  Max256Text

Definition: Specifies a character string with a maximum length of 256 characters.

Type:

Text

## Format

minLength

1

maxLength

256

## 4.2.10.11  Max34Text

Definition:

Specifies a character string with a maximum length of 34 characters.

Type: Text

## Format

minLength

1

maxLength 34

## 4.2.10.12  Max350Text

Definition:

Specifies a character string with a maximum length of 350 characters.

Type:

Text

## Format

minLength

1

maxLength

350

## 4.2.10.13  Max35Text

Definition: Specifies a character string with a maximum length of 35 characters.

Type: Text

## Format

minLength 1

maxLength 35

## 4.2.10.14  Max4Text

Definition: Specifies a character string with a maximum length of 4 characters.

Type: Text

## Format

minLength 1

maxLength 4

## 4.2.10.15  Max70Text

Definition: Specifies a character string with a maximum length of 70characters.

Type: Text

## Format

minLength 1

maxLength 70

## 4.2.10.16  PhoneNumber

Definition: The collection of information which identifies a specific phone or FAX number as defined by telecom services.

It consists of a "+" followed by the country code (from 1 to 3 characters) then a "-" and finally, any combination of numbers, "(", ")", "+" and "-" (up to 30 characters).

Type: Text

Format

pattern

\+[0-9]{1,3}-[0-9()+\-]{1,30}

## 4.2.11 Year

## 4.2.11.1  ISOYear

Definition: Year represented by YYYY (ISO 8601).

Type: Year