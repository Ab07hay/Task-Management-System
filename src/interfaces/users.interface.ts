import { Document } from 'mongoose';
export interface IUsers extends Document{
    readonly Username: string;
    readonly Password: number;
}