/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { ApitureApi } from "@fern-api/apiture";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Transactions {
    interface Options {
        environment: string;
        acessToken: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
    }
}

export class Transactions {
    constructor(protected readonly options: Transactions.Options) {}

    /**
     * Return a [paginated](https://dx.apiture.com/docs/api-documentation/concepts/pagination) collection of transaction history for this internal account. The [`nextPage_url`](https://dx.apiture.com/docs/api-documentation/concepts/links) link in the response, if present, is a pagination link to the next page of transactions for the given filters. This operation returns a 403 Forbidden error if the customer does not have `view` permissions in the `account.allows` object, or a 422 Unprocessable Entity if called on an external account. The default response lists only recent transactions. Normally, this is transactions for the most recent 30 days, although for high-volume accounts, it may be a shorter period.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     * @throws {ApitureApi.TooManyRequests}
     */
    public async listTransactions(
        accountId: string,
        request: ApitureApi.ListTransactionsRequest = {}
    ): Promise<ApitureApi.Transactions> {
        const {
            start,
            limit,
            occurredOn,
            posted,
            category,
            type: type_,
            subtype,
            createdOn,
            postedOn,
            amount,
            retryCount,
        } = request;
        const _queryParams = new URLSearchParams();
        if (start != null) {
            _queryParams.append("start", start);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (occurredOn != null) {
            _queryParams.append("occurredOn", occurredOn);
        }

        if (posted != null) {
            _queryParams.append("posted", posted.toString());
        }

        if (category != null) {
            if (Array.isArray(category)) {
                for (const _item of category) {
                    _queryParams.append("category", _item);
                }
            } else {
                _queryParams.append("category", category);
            }
        }

        if (type_ != null) {
            if (Array.isArray(type_)) {
                for (const _item of type_) {
                    _queryParams.append("type", _item);
                }
            } else {
                _queryParams.append("type", type_);
            }
        }

        if (subtype != null) {
            if (Array.isArray(subtype)) {
                for (const _item of subtype) {
                    _queryParams.append("subtype", _item);
                }
            } else {
                _queryParams.append("subtype", subtype);
            }
        }

        if (createdOn != null) {
            _queryParams.append("createdOn", createdOn);
        }

        if (postedOn != null) {
            _queryParams.append("postedOn", postedOn);
        }

        if (amount != null) {
            _queryParams.append("amount", amount);
        }

        if (retryCount != null) {
            _queryParams.append("retryCount", retryCount.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `accounts/${accountId}/transactions`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.Transactions.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureApi.BadRequest(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new ApitureApi.Unauthorized(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new ApitureApi.Forbidden(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new ApitureApi.NotFound(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 422:
                    throw new ApitureApi.UnprocessableEntity(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new ApitureApi.TooManyRequests(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Return a collection of transaction categories. The response is limited to 1,000 categories. This is a _conditional operation_ when the `If-None-Match` header is used. If the client has a `transactionCategories` response and the `ETag` returned from a previous call, this operation returns a 304 Not Modified if called again when the categories collection has not changed.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async listTransactionCategories(
        request: ApitureApi.ListTransactionCategoriesRequest = {}
    ): Promise<ApitureApi.TransactionCategories> {
        const { ifNoneMatch } = request;
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "transactionCategories"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
                "If-None-Match": ifNoneMatch,
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.TransactionCategories.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureApi.BadRequest(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new ApitureApi.Unauthorized(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new ApitureApi.Forbidden(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 422:
                    throw new ApitureApi.UnprocessableEntity(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.ApitureApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureApiTimeoutError();
            case "unknown":
                throw new errors.ApitureApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.acessToken);
        if (value != null) {
            return `Bearer ${value}`;
        }

        return undefined;
    }
}