import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Todo {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export type TodoDocument = HydratedDocument<Todo>;
export const TodoSchema = SchemaFactory.createForClass(Todo);
