import { Model, model, Schema } from "mongoose";
import {IUser, IUserMethods} from './user.interface';

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true},
  roll: { type: String, required: true },
  password:{ type: String, required: true },
  name: { 
    firstName: { type: String, required: true },
    middleName:{ type: String},
    lastName: { type: String, required: true },
  },
  email: { type: String},
  dateOfBirth: { type: String},
  gender: {type: String, enum: ['male', 'female', 'others']},
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

userSchema.method('fullName', function fullName() {
  return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;