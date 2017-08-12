interface Partner {
    name: string;
    coming: boolean;
}

export interface Person {
    name: string;
    isComing: boolean;
    email: string;
    phone: number;
    partner?: Partner;
}
