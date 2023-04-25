/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ApitureApi } from "@fern-api/apiture";

/**
 * API problem or error, as per [RFC 7807 application/problem+json](https://tools.ietf.org/html/rfc7807).
 *
 * @example
 *     {
 *         id: "3fbad566-be86-4b22-9ba6-3ca99fdc0799",
 *         type: "https://api.apiture.com/errors/accountNotFound/v1.0.0",
 *         title: "Account Not Found",
 *         status: 422,
 *         occurredAt: new Date("2022-04-25T12:42:21.375Z"),
 *         detail: "No account exists at the given account_url",
 *         instance: "https://api.apiture.com/banking/transfers/bb709151-575041fcd617"
 *     }
 */
export interface ApiProblem {
    /**
     * A [URI reference (RFC3986)](https://tools.ietf.org/html/rfc3986) that identifies the problem type. If present, this is the URL of human-readable HTML documentation for the problem type. When this member is not present, its value is assumed to be `"about:blank"`.
     *
     */
    type?: string;
    /**
     * A short, human-readable summary of the problem type. The title is usually the same for all problem with the same `type`.
     *
     */
    title?: string;
    /**
     * The [HTTP status code](https://datatracker.ietf.org/doc/html/rfc7231#section-6) for this occurrence of the problem.
     *
     */
    status?: number;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     *
     */
    detail?: string;
    /**
     * A URI reference that identifies the specific occurrence of the problem. This is the URI of an API resource that the problem is related to, with a unique error correlation ID URI fragment
     *
     */
    instance?: string;
    /** The unique identifier for this problem. This is an immutable opaque string. */
    id?: ApitureApi.ReadOnlyResourceId;
    /** The timestamp when the problem occurred, in [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time `YYYY-MM-DDThh:mm:ss.sssZ` format, UTC. */
    occurredAt?: ApitureApi.ReadOnlyTimestamp;
    /** Optional root-causes if there are multiple problems in the request or API call processing. */
    problems?: ApitureApi.ApiProblem[];
    /** Additional optional attributes related to the problem. This data conforms to the schema associated with the error type. */
    attributes?: Record<string, unknown>;
}
