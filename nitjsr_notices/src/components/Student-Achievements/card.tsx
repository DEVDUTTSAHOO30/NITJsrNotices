
import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import { Box } from "@mui/material";

export default function CurrentAchvCard({ item }) {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <Box
            sx={{
                transition: "all 0.3s ease-in-out",
                ":hover": {
                    transform: "scale(1.05)",
                },
                maxWidth: "250px",
                height: "100%",
                margin: "auto",
            }}
        >
            <div
                className="achvCard text-center"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // gap: "1rem",
                    margin: "20px",
                }}
            >
                <Image
                    src={item.imageLink}
                    alt="thumb"
                    style={{
                        width: "180px",
                        borderRadius: "50%",
                        height: "230px",
                        marginBottom:"10px"
                    }}
                />
                <h5
                    style={{
                        fontSize: "1.2em",
                        fontWeight: "700",
                        margin:"-0.1px",
                        display:"flex",
                    }}
                >
                    {item.title}
                </h5>
                <Image
                    src={item.desc}
                    alt="thumb"
                    className="thumbnailachImg"
                    style={{
                        width: "200px",
                        height: "40px",
                        marginTop:"10px"
                    }}
                />
            </div>
        </Box>
    );
}
