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

export interface FoundationGoals {
    actual_amount: number;
    goal_amount: number;
}

export interface GoalsFromFoundationResponse {
    message: string;
    data: {
        goals: Array<FoundationGoals>;
    };
    status_code: number;
}