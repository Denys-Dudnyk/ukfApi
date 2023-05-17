import { IsEmail, IsString } from 'class-validator'

export class UpdateUserDto {
	email: string

	password?: string

	isAdmin?: boolean
}
