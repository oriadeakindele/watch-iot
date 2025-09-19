import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid("development", "test", "production").default("development"),
        AUTH_PORT: Joi.number().default(3001),
        // Add more as your service grows (DB URLs, secrets, etc.)
        // AUTH_DB_URL: Joi.string().uri().required(),
        // JWT_SECRET: Joi.string().min(16).required(),
      }),
    }),
    // Later you’ll add AuthModule, UsersModule, DatabaseModule, etc.
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
