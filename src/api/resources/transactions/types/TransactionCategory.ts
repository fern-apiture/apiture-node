/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Apiture } from "@fern-api/apiture";

/**
 * Representation of transaction category resources.
 */
export interface TransactionCategory extends Apiture.AbstractBody, Apiture.TransactionCategorization {
    type: Apiture.TransactionCategoryType;
}
