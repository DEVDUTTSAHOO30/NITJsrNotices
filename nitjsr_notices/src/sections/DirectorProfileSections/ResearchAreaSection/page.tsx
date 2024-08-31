import { Tab, Typography } from "@mui/material";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
export default function ResearchAreaSection() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <Typography>
        {" "}
        Foundry Technology <br />
        Metal Casting Process <br />
        Forged Powder Metallurgy Components <br />
        Metal and Polymer Metrix Composites
      </Typography>
    </>
  );
}
