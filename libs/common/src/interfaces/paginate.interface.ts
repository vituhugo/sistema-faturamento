export interface Paginate<T> {
    items: T[];
    metadata: {
        page: number;
        perPage: number;
        total: number;
        lastPage: number;
        filter?: Record<string, string>
    }
}