import { Controller, Get } from "@nestjs/common";

@Controller("tenants")
export class TenantsController {
  @Get("health")
  health() {
    return { ok: true, service: "tenants", message: "Tenants route is alive (Phase 0 stub)" };
  }
}
