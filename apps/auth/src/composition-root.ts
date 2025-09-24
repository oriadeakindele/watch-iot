// src/composition-root.ts
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import envConfig from "./infrastructure/config/.env.config";
import { validateEnv } from "./infrastructure/config/.env.validation";
import { AuthController } from "./infrastructure/http/controllers/auth.controller";
import { TenantsController } from "./infrastructure/http/controllers/tenant.controller";

@Module({
  imports: [
    // Loads .env and makes process.env available
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
      validate: validateEnv,
      cache: true,
      expandVariables: true,
    }),
  ],
  controllers: [
    // Phase 0: stub controllers only
    AuthController,
    TenantsController,
  ],
  providers: [],
})
export class AppModule {}
