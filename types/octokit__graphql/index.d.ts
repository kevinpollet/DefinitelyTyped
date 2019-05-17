// Type definitions for @octokit/graphql 2.1
// Project: https://github.com/octokit/graphql.js
// Definitions by: Kevin Pollet <https://github.com/kevinpollet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type HTTPMethod = "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT";

interface RequestHeaders {
    [key: string]: string | number | undefined;
}

interface GraphqlRequestOptions {
    readonly baseUrl?: string;
    readonly headers?: RequestHeaders;
    readonly method?: HTTPMethod;
    readonly query?: string;
    readonly url?: string;
}

interface GraphqlVariables {
    [key: string]: any;
}

interface GraphqlResponse {
    [key: string]: any;
}

interface GraphqlRequest {
    (options?: GraphqlRequestOptions & GraphqlVariables): Promise<GraphqlResponse>;
    (graphql: string, options?: GraphqlRequestOptions & GraphqlVariables): Promise<GraphqlResponse>;

    defaults: (newDefaults?: GraphqlRequestOptions) => GraphqlRequest;
}

export interface GraphqlError extends Error {
    readonly data?: GraphqlResponse;
    readonly errors: Array<{
        readonly extensions?: { [key: string]: any };
        readonly message: string;
        readonly path?: Array<string | number>;
        readonly locations?: Array<{
            line: number;
            column: number;
        }>;
    }>;
    readonly request: GraphqlRequestOptions;
}

declare const request: GraphqlRequest;

export default request;
