/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ApitureBanking from "..";

/**
 * A reference to a banking product.
 */
export interface ProductReference {
    type: ApitureBanking.ProductType;
    /** The product's product code. Codes are unique to the financial institution. */
    code: string;
    /** A human-readable label for this banking product. */
    label: string;
    /** A human-readable description of this banking product. */
    description: string;
}