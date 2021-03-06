import { Observable } from 'rxjs';
export declare namespace Core {
    /**
     * Response Core Api
     * Core.Response.Data - используется при правильном ответе с данными
     */
    namespace Response {
        export interface Data {
            statusCode: number;
            message: string | Object;
            data: any;
        }
        /**
         * Core.Response.Success - используется при правильном ответе
         */
        export interface Success {
            statusCode: number;
            message: string | Object;
        }
        /**
         * Core.Response.Error - Используется при ошибке
         */
        export interface Error {
            statusCode: number;
            message: string | string[];
            error: string;
        }
        /** Ошибочные данные - объект не найден */
        interface NotFound {
            statusCode: number;
            message: string | string[];
            error: string;
        }
        /** Ошибочные данные - не правильный запрос */
        interface BadRequest {
            statusCode: number;
            message: string | string[];
            error: string;
        }
        export type Answer = Data | Success | Error | NotFound | BadRequest;
        export {};
    }
    namespace Geo {
        interface Location {
            status: string;
            continent: string;
            continentCode: string;
            country: string;
            countryCode: string;
            region: string;
            regionName: string;
            city: string;
            zip: string;
            lat: number;
            lon: number;
            timezone: string;
            currency: string;
            isp: string;
            org: string;
            as: string;
            asname: string;
            reverse: string;
            mobile: boolean;
            proxy: boolean;
            hosting: boolean;
            query: string;
        }
        /**
         * Location data transfer along with mailing address
         */
        interface LocationEmail extends Location {
            email: string;
        }
        interface Address {
            state?: string;
            country?: string;
            region?: string;
            city?: string;
            street?: string;
            zip?: string;
            timezone?: string;
        }
    }
}
export declare namespace Client {
    class ClientProxy {
        send<TResult = any, TInput = any>(pattern: any, data: TInput): Observable<TResult>;
        emit<TResult = any, TInput = any>(pattern: any, data: TInput): Observable<TResult>;
    }
}
export declare class Core {
    private static logger;
    static Core: typeof Core;
    /**
     * Async Response Data
     * @param {String} message
     * @param {any} data
     * @constructor
     */
    static ResponseDataAsync(message: string | Object, data: any): Promise<Core.Response.Answer>;
    static ResponseData(message: string | Object, data: any): Core.Response.Data;
    static ResponseSuccess(message: string | Object, status?: number): Promise<Core.Response.Answer> | Core.Response.Success;
    /**
     * Ошибочное сообщение , любые Exceptions
     * @param message
     * @param status
     * @param errors
     * @constructor
     */
    static ResponseError(message: string | string[], status: number, errors: string): Promise<Core.Response.Answer> | Core.Response.Error;
    static OperationReadMe(path: string, context?: string): string | undefined;
    static SendAndResponse(client: Client.ClientProxy, pattern: string, data: any): Promise<any>;
}
