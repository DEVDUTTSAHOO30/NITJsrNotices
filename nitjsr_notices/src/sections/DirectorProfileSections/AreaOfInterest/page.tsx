import { Tab, Typography } from "@mui/material";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
export default function AreaOfInterest() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <Typography> Area Of Interest</Typography>
    </>
  );
}
