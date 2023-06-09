/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ApitureBanking from "..";

/**
 * A request from the service for the user to verify their identity. This contains a challenge ID, the corresponding operation ID, and a list of challenge factors for identity verification. The user must complete one of these challenge factors to satisfy the challenge. This schema defines the attributes in the 401 [Unauthorized problem response](#schema-apiProblem) when the 401 problem type name is `challengeRequired`. See the "Challenge API" for details.
 */
export interface RequiredIdentityChallenge {
    operationId: ApitureBanking.ReadOnlyResourceId;
    challengeId: ApitureBanking.ReadOnlyResourceId;
    /** A list of challenge factors. The user must complete one of these challenge factors. The `labels` in each factor identify one or more channels the user may use, such as a list of email addresses the system may use to send a one-time passcode to the user. ***Note**: The same channel may be used by multiple factors in the array of factors. For example, the user's primary mobile phone number may be used for both an `sms` factor and a `voice` factor. */
    factors: ApitureBanking.ChallengeFactor[];
}
