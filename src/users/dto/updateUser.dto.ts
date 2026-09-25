import { CreateUserDto } from "./createUser.dto.js";

import { PartialType } from "@nestjs/mapped-types"

export class updateUserDto extends PartialType(CreateUserDto) {}