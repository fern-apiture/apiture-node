/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { ApitureApi } from "@fern-api/apiture";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Institutions {
    interface Options {
        environment: string;
        acessToken: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
    }
}

export class Institutions {
    constructor(protected readonly options: Institutions.Options) {}

    /**
     * Look up a financial institution by their country code and either [American Bankers Association routing number](https://www.aba.com/about-us/routing-number), by [International Bank Account Number (IBAN)](https://www.ecbs.org/iban.htm), or by [SWIFT Business Identifier Code (BIC) code](https://www.swift.com/standards/data-standards/bic-business-identifier-code). Optionally, include a list of intermediary institutions that may be necessary to complete international wire transfers.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async lookUpInstitutionByLocator(
        request: ApitureApi.LookUpInstitutionByLocatorRequest
    ): Promise<ApitureApi.InstitutionLookupResult> {
        const { locator, locatorType, countryCode, includeIntermediaryInstitutions } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("locator", locator);
        _queryParams.append("locatorType", locatorType);
        _queryParams.append("countryCode", countryCode);
        if (includeIntermediaryInstitutions != null) {
            _queryParams.append("includeIntermediaryInstitutions", includeIntermediaryInstitutions.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "institutionByLocator"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.InstitutionLookupResult.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

    /**
     * Return a transfer schedule list for this institution.
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async listTransferSchedule(
        institutionId: string,
        request: ApitureApi.ListTransferScheduleRequest
    ): Promise<ApitureApi.TransferSchedules> {
        const { startsOn, endsOn, direction, count, frequency } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("startsOn", startsOn);
        if (endsOn != null) {
            _queryParams.append("endsOn", endsOn);
        }

        _queryParams.append("direction", direction);
        if (count != null) {
            _queryParams.append("count", count.toString());
        }

        _queryParams.append("frequency", frequency);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `institutions/${institutionId}/transferSchedule`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.TransferSchedules.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
     * Return daily cutoff times for different money movement processes at a financial institution. Money movement requests (account to account transfers, ACH, wire transfers, etc.) must be submitted before the cutoff time in order for the financial institution to begin processing the request that day. Some [cutoff time types](#schema-cutoffTimeType) may have multiple cutoff times per day. Cutoff times are very slowly changing data. This is a _conditional operation_ when the `If-None-Match` header is used. If the client has a `getCutoffTimes` response and the `ETag` returned from a previous call to this operation, this operation returns a 304 Not Modified when called again if the cutoff times have not changed.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async getCutoffTimes(
        institutionId: string,
        request: ApitureApi.GetCutoffTimesRequest = {}
    ): Promise<ApitureApi.CutoffTimes> {
        const { timeZoneId, ifNoneMatch } = request;
        const _queryParams = new URLSearchParams();
        if (timeZoneId != null) {
            _queryParams.append("timeZoneId", timeZoneId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `institutions/${institutionId}/cutoffTimes`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
                "If-None-Match": ifNoneMatch,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.CutoffTimes.parseOrThrow(_response.body, {
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
     * Return the transfer date restrictions for a date range and transfer parameters. The result is a list of days and dates that the financial institution does not allow scheduling specific types of transfers. This information provides hints to clients, allowing bank customers to select transfer dates from a calendar picker. However, these dates are not strictly enforced; a transfer can still be scheduled to occur on restricted dates but the financial institution may shift the date when funds are drafted to account for holidays, closures, or to adjust based on the risk level of the funding account.
     * @throws {ApitureApi.BadRequest}
     * @throws {ApitureApi.Unauthorized}
     * @throws {ApitureApi.Forbidden}
     * @throws {ApitureApi.NotFound}
     * @throws {ApitureApi.UnprocessableEntity}
     */
    public async getTransferDateRestrictions(
        institutionId: string,
        request: ApitureApi.GetTransferDateRestrictionsRequest = {}
    ): Promise<ApitureApi.TransferDateRestrictions> {
        const { startsOn, endsOn, type: type_, risk } = request;
        const _queryParams = new URLSearchParams();
        if (startsOn != null) {
            _queryParams.append("startsOn", startsOn);
        }

        if (endsOn != null) {
            _queryParams.append("endsOn", endsOn);
        }

        if (type_ != null) {
            _queryParams.append("type", type_);
        }

        if (risk != null) {
            _queryParams.append("risk", risk);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `institutions/${institutionId}/transferDateRestrictions`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "API-Key": await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.TransferDateRestrictions.parseOrThrow(_response.body, {
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