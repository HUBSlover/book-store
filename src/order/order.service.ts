import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async getAll(userUuid: string) {
		return this.prisma.order.findMany({
			where: {
				userUuid
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	}
}
