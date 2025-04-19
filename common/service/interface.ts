import { LoginInput } from "../lib/zodSchema";

export interface ActionResult {
  errors?: Record<string, string[]>;
  values?: Partial<LoginInput>;
  success?: boolean;
}

export interface ActionState {
  errors?: Record<string, string[]>;
  values?: Partial<LoginInput>;
  success?: boolean;
}
