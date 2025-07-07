export interface Foundation {
    id: number;
    name: string;
    description: string;
    image_url: string;
    created_at: string;
    deleted_at: string | null;
}

export interface FoundationResponse {
    message: string;
    data: {
        foundations: Array<Foundation>;
    };
    status_code: number;
}