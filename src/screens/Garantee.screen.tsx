import { Guarantee } from "@/shared/components/sections/Guarantee/Guarantee";
import { Breadcrumbs } from "@/shared/components/ui/BreadCrums/BreadCrums";
import { GuaranteeBg } from "@/shared/components/ui/containers/GuaranteeBg/GuaranteeBg";

export const GuaranteeScreen = () => {
  return (
    <GuaranteeBg>
      <Breadcrumbs />
      <Guarantee />
    </GuaranteeBg>
  );
};
