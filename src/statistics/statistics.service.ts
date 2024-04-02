import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'

@Injectable()
export class StatisticsService {
	constructor(
		private prisma: PrismaService,
		private userSevice: UserService
	) {}

	async getMain(userId: number) {
		const user = await this.userSevice.byId(userId, {
			orders: {
				select: {
					items: {
						select: {
							price: true
						}
					}
				}
			},
			reviews: true
		})

		/* REPLACE WITH SQL */

		return user.orders

		return [
			{
				name: 'Orders',
				value: user.orders.length
			},
			{
				name: 'Reviews',
				value: user.reviews.length
			},
			{
				name: 'Favorites',
				value: user.favorites.length
			},
			{
				name: 'Total amount',
				value: 1000
			}
		]
	}
}
