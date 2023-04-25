/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ApitureApi } from "@fern-api/apiture";

/**
 * A transfer's schedule: when the transfer is scheduled, its recurrence properties, and derived credit and debit dates.
 */
export interface TransferItemSchedule extends ApitureApi.TransferSchedule {
    /** The effective date the transfer is scheduled to debit the source account, in `YYYY-MM-DD` [RFC 3339](https://tools.ietf.org/html/rfc3339) `date` format. This is derived from the `scheduledOn` date, based on the financial institution's transfer rules. */
    debitsOn?: string;
    /** The effective the transfer is scheduled to credit the target account, in `YYYY-MM-DD` [RFC 3339](https://tools.ietf.org/html/rfc3339) `date` format. This is derived from the `scheduledOn` date, based on the financial institution's transfer rules. */
    creditsOn?: string;
}