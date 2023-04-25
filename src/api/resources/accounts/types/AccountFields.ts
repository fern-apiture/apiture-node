/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Apiture } from "@fern-api/apiture";

/**
 * Fragment schema use to build other account schemas.
 */
export interface AccountFields {
    /** The unique identifier for this account resource. This is an immutable opaque string. */
    id: Apiture.ReadOnlyResourceId;
    /** The human-readable label for this account. This is either the `nickname` (if assigned for the current customer), or the `product.label` concatenated with the `maskedNumber`. */
    label: string;
    nickname?: Apiture.AccountNickname;
    maskedNumber: Apiture.MaskedAccountNumber;
    product: Apiture.ProductReference;
    /** Indicates where an account is held. */
    location: Apiture.AccountLocation;
}
