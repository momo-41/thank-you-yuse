import { Box } from "@mui/material";
import GalleryFirstRow from "./GalleryFirstRow";
import GallerySecondRow from "./GallerySecondRow";
import GalleryThirdRow from "./GalleryThirdRow";
import Image from "next/image";

type GalleryProps = {
  images: string[][];
  id: string;
};

const Gallery: React.FC<GalleryProps> = ({ images, id }) => {
  return (
    <>
      <Box display={{ xs: "none", md: "flex" }} flexDirection="column" id={id}>
        {images.map((group, i) => (
          <Box key={i}>
            <GalleryFirstRow images={group.slice(0, 4)} />
            <GallerySecondRow images={group.slice(4, 8)} />
            <GalleryThirdRow images={group.slice(8, 12)} />
          </Box>
        ))}
      </Box>

      <Box
        display={{ xs: "flex", md: "none" }}
        flexWrap="wrap"
        gap={1}
        m={1}
        justifyContent="center"
        id={id}
      >
        {images.flat().map((image, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            width={"calc(100% / 3 - 8px)"}
            height={150}
          >
            <Image
              src={image}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Gallery;
