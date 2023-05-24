/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ApitureBanking from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Accounts {
    interface Options {
        environment?: environments.ApitureBankingEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

export class Accounts {
    constructor(protected readonly options: Accounts.Options) {}

    /**
     * Return a paginated list of the customer's accounts, consisting of internal accounts at this financial institution and accounts at other financial institutions, if any.
     * @throws {@link ApitureBanking.BadRequestError}
     * @throws {@link ApitureBanking.UnauthorizedError}
     * @throws {@link ApitureBanking.ForbiddenError}
     * @throws {@link ApitureBanking.UnprocessableEntityError}
     */
    public async listAccounts(
        request: ApitureBanking.AccountsListAccountsRequest = {}
    ): Promise<ApitureBanking.Accounts> {
        const { productType, location, allows, start, limit } = request;
        const _queryParams = new URLSearchParams();
        if (productType != null) {
            if (Array.isArray(productType)) {
                for (const _item of productType) {
                    _queryParams.append("productType", _item);
                }
            } else {
                _queryParams.append("productType", productType);
            }
        }

        if (location != null) {
            _queryParams.append("location", location);
        }

        if (allows != null) {
            if (Array.isArray(allows)) {
                for (const _item of allows) {
                    _queryParams.append("allows", _item);
                }
            } else {
                _queryParams.append("allows", allows);
            }
        }

        if (start != null) {
            _queryParams.append("start", start);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ApitureBankingEnvironment.Default, "accounts"),
            method: "GET",
            headers: {
                "API-Key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/apiture",
                "X-Fern-SDK-Version": "0.0.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Accounts.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureBanking.BadRequestError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new ApitureBanking.UnauthorizedError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new ApitureBanking.ForbiddenError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new ApitureBanking.UnprocessableEntityError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ApitureBankingError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureBankingError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureBankingTimeoutError();
            case "unknown":
                throw new errors.ApitureBankingError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Return details of the customer's internal account.
     * @throws {@link ApitureBanking.UnauthorizedError}
     * @throws {@link ApitureBanking.ForbiddenError}
     * @throws {@link ApitureBanking.NotFoundError}
     */
    public async getAccount(accountId: ApitureBanking.ResourceId): Promise<ApitureBanking.Account> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ApitureBankingEnvironment.Default,
                `accounts/${await serializers.ResourceId.jsonOrThrow(accountId)}`
            ),
            method: "GET",
            headers: {
                "API-Key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/apiture",
                "X-Fern-SDK-Version": "0.0.6",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Account.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new ApitureBanking.UnauthorizedError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new ApitureBanking.ForbiddenError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new ApitureBanking.NotFoundError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ApitureBankingError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureBankingError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureBankingTimeoutError();
            case "unknown":
                throw new errors.ApitureBankingError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Return a list of the requested internal accounts' balances. The `accounts` query parameter is a list of account IDs which typically comes from the `getAccounts` operation response. The returned list does not include external accounts. The caller must have entitlements to view each account's details, as indicated by a `true` value for `account.allows.view`. Requests to list balances for accounts the user is not allowed to read results in a 403 Forbidden response.
     *
     * The response may be incomplete. Given a `Retry-After` response header, the client can retry the operation after a short delay, requesting only the accounts which are incomplete; see the 202 Accepted response for details.
     * @throws {@link ApitureBanking.UnauthorizedError}
     * @throws {@link ApitureBanking.ForbiddenError}
     * @throws {@link ApitureBanking.UnprocessableEntityError}
     * @throws {@link ApitureBanking.TooManyRequestsError}
     * @throws {@link ApitureBanking.ServiceUnavailableError}
     */
    public async listAccountBalances(
        request: ApitureBanking.AccountsListAccountBalancesRequest = {}
    ): Promise<ApitureBanking.AccountBalances> {
        const { accounts, retryCount } = request;
        const _queryParams = new URLSearchParams();
        if (accounts != null) {
            if (Array.isArray(accounts)) {
                for (const _item of accounts) {
                    _queryParams.append("accounts", _item);
                }
            } else {
                _queryParams.append("accounts", accounts);
            }
        }

        if (retryCount != null) {
            _queryParams.append("retryCount", retryCount.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ApitureBankingEnvironment.Default, "accountBalances"),
            method: "GET",
            headers: {
                "API-Key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/apiture",
                "X-Fern-SDK-Version": "0.0.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AccountBalances.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new ApitureBanking.UnauthorizedError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new ApitureBanking.ForbiddenError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new ApitureBanking.UnprocessableEntityError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new ApitureBanking.TooManyRequestsError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 503:
                    throw new ApitureBanking.ServiceUnavailableError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ApitureBankingError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureBankingError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureBankingTimeoutError();
            case "unknown":
                throw new errors.ApitureBankingError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Return a paginated list of a customer's accounts that are eligible for ACH transfers based on allowed privileges.
     *
     * Optionally, an agent can access a business customer's ACH accounts when acting on behalf of that business customer via the optional `customerId` query parameter.
     * @throws {@link ApitureBanking.BadRequestError}
     * @throws {@link ApitureBanking.UnauthorizedError}
     * @throws {@link ApitureBanking.ForbiddenError}
     * @throws {@link ApitureBanking.UnprocessableEntityError}
     */
    public async listEligibleAchAccounts(
        request: ApitureBanking.AccountsListEligibleAchAccountsRequest
    ): Promise<ApitureBanking.Accounts> {
        const { allows, secCode, customerId, start, limit } = request;
        const _queryParams = new URLSearchParams();
        if (allows != null) {
            if (Array.isArray(allows)) {
                for (const _item of allows) {
                    _queryParams.append("allows", _item);
                }
            } else {
                _queryParams.append("allows", allows);
            }
        }

        _queryParams.append("secCode", secCode);
        if (customerId != null) {
            _queryParams.append("customerId", customerId);
        }

        if (start != null) {
            _queryParams.append("start", start);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ApitureBankingEnvironment.Default,
                "achEligibleAccounts"
            ),
            method: "GET",
            headers: {
                "API-Key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/apiture",
                "X-Fern-SDK-Version": "0.0.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Accounts.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ApitureBanking.BadRequestError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new ApitureBanking.UnauthorizedError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new ApitureBanking.ForbiddenError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new ApitureBanking.UnprocessableEntityError(
                        await serializers.ProblemResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ApitureBankingError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ApitureBankingError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ApitureBankingTimeoutError();
            case "unknown":
                throw new errors.ApitureBankingError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
