/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const ProductType: core.serialization.Schema<serializers.ProductType.Raw, ApitureBanking.ProductType> =
    core.serialization.enum_(["savings", "checking", "cd", "ira", "loan", "creditCard"]);

export declare namespace ProductType {
    type Raw = "savings" | "checking" | "cd" | "ira" | "loan" | "creditCard";
}