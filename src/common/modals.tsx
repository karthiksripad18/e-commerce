export interface userState {
    userName: string | null;
    token: string | null;
};

export interface productModal {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
};