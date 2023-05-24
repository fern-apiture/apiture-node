/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const AccountNickname: core.serialization.Schema<
    serializers.AccountNickname.Raw,
    ApitureBanking.AccountNickname
> = core.serialization.string();

export declare namespace AccountNickname {
    type Raw = string;
}
