import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from './prisma.service'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const prismaService = app.get(PrismaService)
	// await prismaService.enableShutDownHooks(app)

	app.setGlobalPrefix('api')
	app.enableCors()
	app.useGlobalPipes(new ValidationPipe())
	await app.listen(4200)
}

bootstrap()
