export interface UserResponse {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result{
    name: string;
    id: number
}