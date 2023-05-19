import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class Geo {
  @Prop()
  lat: string;

  @Prop()
  lng: string;
}

export class Address {
  @Prop()
  street: string;

  @Prop()
  suite: string;

  @Prop()
  city: string;

  @Prop()
  zipcode: string;

  @Prop({ type: Object, required: false })
  geo: Geo;
}

class Company {
  @Prop()
  name: string;

  @Prop()
  catchPhrase: string;

  @Prop()
  bs: string;
}

@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop({ type: Object, required: false })
  address: Address;

  @Prop()
  phone: string;

  @Prop()
  website: string;

  @Prop({ type: Object, required: false })
  company: Company;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
