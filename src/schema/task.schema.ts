import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Users {
   @Prop()
   Username: string;
   @Prop()
   Password: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users);     