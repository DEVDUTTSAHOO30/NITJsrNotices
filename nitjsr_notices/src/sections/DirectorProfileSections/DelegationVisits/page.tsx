import { Tab, Typography } from "@mui/material";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
export default function DelegationVisits() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <Typography> Delegation visits</Typography>
    </>
  );
}
