/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ApitureApi } from "@fern-api/apiture";

/**
 * The current balances of the given account.
 */
export interface AccountBalance {
    id: ApitureApi.ReadOnlyResourceId;
    /** The available balance: the funds available for use. This is the string representation of the exact decimal amount. */
    available?: ApitureApi.CreditOrDebitValue;
    /** The current balance. This is the balance at the end of the previous business day. This is the string representation of the exact decimal amount. */
    current?: ApitureApi.CreditOrDebitValue;
    updatedAt?: ApitureApi.ReadOnlyTimestamp;
    /** The current balance, with posted transactions. This is the string representation of the exact decimal amount. */
    currentWithPending?: ApitureApi.CreditOrDebitValue;
    /** If `true`, the response is incomplete and the client may retry the operation after the `Retry-After` time in order to fetch balances for any incomplete accounts in the `items`. The retry operation should only pass in accounts that are `incomplete`. */
    incomplete: boolean;
}
