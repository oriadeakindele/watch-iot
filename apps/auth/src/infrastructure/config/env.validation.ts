import * as Joi from "joi";

export function validateEnv(config: Record<string, unknown>) {
  const schema = Joi.object({
    NODE_ENV: Joi.string().valid("development", "test", "production").default("development"),
    PORT: Joi.number().port().default(3001),
    APP_NAME: Joi.string().default("watch-iot"),
  });

  const { error, value } = schema.validate(config, { allowUnknown: true, abortEarly: false });
  if (error) {
    throw new Error(`Invalid environment variables:\n${error.message}`);
  }
  return value;
}
