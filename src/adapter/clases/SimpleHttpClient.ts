import { IHttpClient } from '../interfaces/IHttpClient';

export class SimpleHttpClient {
    private adapter: IHttpClient;

    constructor(initialAdapter: IHttpClient) {
        this.adapter = initialAdapter;
    }

    setAdapter(adapter: IHttpClient): void {
        this.adapter = adapter;
    }

    async get<T>(url: string): Promise<T> {
        return this.adapter.get<T>(url);
    }
}