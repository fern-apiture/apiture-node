/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Apiture } from "@fern-api/apiture";

export interface GetTransferDateRestrictionsRequest {
    /**
     * The start of the range of dates to include in the response, in `YYYY-MM-DD` [RFC 3339](https://tools.ietf.org/html/rfc3339) date format. While start dates far in the future are allowed, bank holiday schedules are only available for a small number of years ahead. The default is the current date.
     */
    startsOn?: string;
    /**
     * The end of the range of dates to include in the response. in `YYYY-MM-DD` [RFC 3339](https://tools.ietf.org/html/rfc3339) date format. The default is at least one year from the `startOn` date and is limited to a four year interval.
     */
    endsOn?: string;
    /**
     * Describes the type of transfer. This determines what business rules and adjustments to make to the date restrictions. Note ACH transfers (including CTX and PPD), that `Credit` and `Debit` here are relative to the account at the _external_ financial institution.
     */
    type?: Apiture.TransferTypeForDateRestrictions;
    /**
     * The primary account's risk level. This determines what business rules and adjustments to make to the date restrictions. This parameter only applies to ACH credit transfers (funds credited to an external account) and is ignored for others.
     */
    risk?: Apiture.AchAccountRisk;
}
