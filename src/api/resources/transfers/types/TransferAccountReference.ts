/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ApitureApi } from "@fern-api/apiture";

/**
 * A reference to a banking account used within an account to account transfer. This object may be set from an account's `account.reference` object.
 */
export interface TransferAccountReference {
    id: ApitureApi.ResourceId;
    /** The human-readable label for this account. This is either the `nickname` (if assigned for the current customer), or the `product.label` concatenated with the `maskedNumber`. */
    label?: string;
    type?: ApitureApi.ProductType;
    location?: ApitureApi.AccountLocation;
}
