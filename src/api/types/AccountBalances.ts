/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ApitureBanking from "..";

/**
 * An array of account balances by account ID.
 */
export interface AccountBalances extends ApitureBanking.AbstractBody {
    /** An array of items, one for each of the `?accounts=` in the request, returned in the same order. */
    items: ApitureBanking.AccountBalance[];
}
