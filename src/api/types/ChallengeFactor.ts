/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ApitureBanking from "..";

/**
 * An challenge factor. See [`requiredIdentityChallenge`](#schema-requiredIdentityChallenge) for multiple examples.
 */
export interface ChallengeFactor {
    type: ApitureBanking.ChallengeFactorType;
    /** A list of text label which identifies the channel(s) though which the user completes the challenge. For an `sms` or `voice` challenge, the only label item is the last four digits of the corresponding phone number. For an `email` challenge, each label is the masked email address. */
    labels?: string[];
    securityQuestions?: ApitureBanking.ChallengeSecurityQuestions;
}