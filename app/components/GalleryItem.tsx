import { Box } from "@mui/material";
import Image from "next/image";
import { GalleryItemProps } from "../types/types";

const GalleryItem = ({ src, width }: GalleryItemProps) => (
  <Box
    position="relative"
    overflow="hidden"
    width={{ xs: "calc(100% / 3 - 8px)", md: width }}
    height={{ xs: 150, md: 200, xl: 300 }}
  >
    <Image
      src={src}
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
  </Box>
);

export default GalleryItem;
