import { PrivateGuard } from "@/feature/guards/PrivateGuard";
import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return <PrivateGuard>{children}</PrivateGuard>;
}
