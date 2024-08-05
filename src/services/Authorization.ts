import { AUTHORIZATION_URL } from './URL_LIST';

export interface AuthorizeResponse {
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        isDisabled: boolean;
    };
    tokens: {
        access: {
            token: string;
        };
        refresh: {
            token: string;
        };
    };
}

export interface AuthorizeProps {
    email: string;
    password: string;
}

export const getIsUserAuth = async ({ email, password }: AuthorizeProps): Promise<AuthorizeResponse> => {
    const URL = AUTHORIZATION_URL.href;
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error(`${response.url}`);
    }

    return response.json() as Promise<AuthorizeResponse>;
};
