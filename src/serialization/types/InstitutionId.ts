/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const InstitutionId: core.serialization.Schema<serializers.InstitutionId.Raw, ApitureBanking.InstitutionId> =
    core.serialization.string();

export declare namespace InstitutionId {
    type Raw = string;
}
