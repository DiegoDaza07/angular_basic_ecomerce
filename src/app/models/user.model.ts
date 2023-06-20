
export interface User {
        id?: string,
        name: string,
        surnames: string,
        document: number,
        email: string,
        phone: number,
        password: string,
};

export interface userLogin {
        email: string,
        password: string,
}