import { Box } from "@mui/material";
import Image from "next/image";

type PictureImageProps = {
  src: string;
  width: number;
  height: number;
};

const PictureImage = ({ src, width, height }: PictureImageProps) => (
  <Box
    position="relative"
    overflow="hidden"
    width={{ xs: "calc(100% / 3 - 8px)", md: width }}
    height={{ xs: 150, md: height }}
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

export default PictureImage;
