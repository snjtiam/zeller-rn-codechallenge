export enum Role { Admin="Admin" , Manager= "Manager"}

export type Customer= {
    id: string;
    name: string;
    email: string;
    role: Role;
}