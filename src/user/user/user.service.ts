import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


import { Model } from 'mongoose';
import { User } from '../user.model';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
      ) {}
      

      async addUser(user:User) {
        const newUser = new this.userModel(user);
      return  await newUser.save()
      
      }

      async allUsers(){
          return await this.userModel.find().exec();
      }

       
    
       updateUser(user:User,id:string) {
        let a= new this.userModel()
         a= this.userModel.findOneAndUpdate(id,user);
        return a._update;
       
    }

     
   
     
    
      async deleteUser(userId: string) {
        const result = await this.userModel.deleteOne({_id: userId}).exec();
        if (result.n === 0) {
          throw new NotFoundException('Could not find user.');
        }
      }
    
}
