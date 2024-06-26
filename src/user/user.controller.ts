import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Patch,
	Put
} from '@nestjs/common'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserDto } from './user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	//@Auth()
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.byId(id)
	}

	//@Auth()
	@HttpCode(200)
	@Put('profile')
	async getNewTokens(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return this.userService.updateProfile(id, dto)
	}

	@HttpCode(200)
	//@Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') id: string,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorite(id, productId)
	}
}
