import { Box } from "@mui/material";
import GalleryItem from "./GalleryItem";
import { GalleryRowProps } from "../types/types";

const GalleryFirstRow: React.FC<GalleryRowProps> = ({ images }) => {
  return (
    <Box width={"100%"}>
      <Box
        display="flex"
        gap={1}
        m={1}
        flexWrap="nowrap"
        justifyContent="center"
      >
        {images.map((src, index) => (
          <GalleryItem
            key={index}
            src={src}
            width={index === 0 ? "31%" : "23%"}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GalleryFirstRow;
