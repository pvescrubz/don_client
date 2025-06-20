import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { redirect } from "next/navigation";

const Page = () => {
  return redirect(APP_PAGES.BALANCE.slug);
};

export default Page;
