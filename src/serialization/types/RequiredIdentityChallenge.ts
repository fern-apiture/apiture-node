/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ApitureBanking from "../../api";
import * as core from "../../core";

export const RequiredIdentityChallenge: core.serialization.ObjectSchema<
    serializers.RequiredIdentityChallenge.Raw,
    ApitureBanking.RequiredIdentityChallenge
> = core.serialization.object({
    operationId: core.serialization.lazy(async () => (await import("..")).ReadOnlyResourceId),
    challengeId: core.serialization.lazy(async () => (await import("..")).ReadOnlyResourceId),
    factors: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).ChallengeFactor)),
});

export declare namespace RequiredIdentityChallenge {
    interface Raw {
        operationId: serializers.ReadOnlyResourceId.Raw;
        challengeId: serializers.ReadOnlyResourceId.Raw;
        factors: serializers.ChallengeFactor.Raw[];
    }
}
