import { AccountLayout } from "@/shared/components/layout/AccountLayout/AccountLayout";
import { type PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return <AccountLayout>{children}</AccountLayout>;
}
