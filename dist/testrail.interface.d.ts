export interface TestRailOptions {
    domain: string;
    username: string;
    password: string;
    projectId: number;
    planId?: number;
    runId?: number;
}
export declare enum Status {
    Passed = 1,
    Blocked = 2,
    Untested = 3,
    Retest = 4,
    Failed = 5
}
export interface TestRailResult {
    case_id: number;
    run_id: number;
    status_id: Status;
    elapsed: string | null;
    comment?: string;
}