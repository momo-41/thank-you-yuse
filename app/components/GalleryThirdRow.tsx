import { Box } from "@mui/material";
<<<<<<< HEAD
import GalleryItem from "./GalleryItem";
=======
import PictureImage from "./GalleryItem";
>>>>>>> origin
import { GalleryRowProps } from "../types/types";

const GalleryThirdRow: React.FC<GalleryRowProps> = ({ images }) => {
  return (
    <Box width={"100%"}>
      <Box
        display="flex"
        gap={1}
        m={1}
        flexWrap="nowrap"
        justifyContent="center"
      >
        {images.slice(0, 4).map((src, index) => (
          <GalleryItem
            key={index}
            src={src}
            width={index === 1 ? "31%" : "23%"}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GalleryThirdRow;
