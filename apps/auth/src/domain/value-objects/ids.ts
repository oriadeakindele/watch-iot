declare const __brandUserId: unique symbol;
export type UserId = string & { readonly [__brandUserId]: true };

export function asUserId(uuid: string): UserId {
  if (!isUuid(uuid)) throw new Error("Invalid UUID");
  return uuid as UserId;
}

function isUuid(s: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s);
}
