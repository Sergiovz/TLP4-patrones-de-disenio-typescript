import { IHttpClient } from '../interfaces/IHttpClient';

export class FetchAdapter implements IHttpClient {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
}