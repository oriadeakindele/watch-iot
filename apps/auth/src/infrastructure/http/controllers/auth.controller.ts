import { Controller, Get } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  @Get("health")
  health() {
    return { ok: true, service: "auth", message: "Auth route is alive (Phase 0 stub)" };
  }
}
