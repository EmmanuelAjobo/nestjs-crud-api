import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto.js';
import { updateUserDto } from './dto/updateUser.dto.js';



@Injectable()
export class UsersService {

    // This is a property inside this class
    private users = [
        {
            "id": 1,
            "name": "emma",
            "email": "emma@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 2,
            "name": "john",
            "email": "john@gmail.com",
            "role": "USER"
        },
        {
            "id": 3,
            "name": "rach",
            "email": "rach@gmail.com",
            "role": "ENGINEER"
        },
        {
            "id": 4,
            "name": "jayden",
            "email": "jayden@gmail.com",
            "role": "INTERN"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ROLE') {
        if (role) {
            const roleArr = this.users.filter(user => user.role === "INTERN");

            if(!roleArr.length){
                throw new NotFoundException('User Role not found')
            }

            return roleArr
        }
        return this.users
    }
    

    findOne(id: number) {
        const user = this.users.filter(user => user.id === id);

        if(!user){
            throw new NotFoundException('User not found');
        }

        return user
    }


    create(user: CreateUserDto){
        //Sorting
        const highestID = [...this.users].sort((a, b) => b.id - a.id)[0];

        const newUser = {
            id: highestID.id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id:number, payload: updateUserDto){
        this.users = this.users.map(user => {
            if (user.id === id){
                return {...user, ...payload}
            }
            return user;
        })
        
        return this.findOne(id);
   }


   delete(id: number){
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id); 

        return removedUser;
   }
}