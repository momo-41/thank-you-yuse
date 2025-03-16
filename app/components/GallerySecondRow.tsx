import { Box } from "@mui/material";
import PictureImage from "./GalleryItem";
import { GalleryRowProps } from "../types/types";

const GallerySecondRow: React.FC<GalleryRowProps> = ({ images }) => {
  return (
    <Box display="flex" gap={1} m={1} flexWrap="nowrap" justifyContent="center">
      {images.slice(0, 4).map((src, index) => (
        <PictureImage
          key={index}
          src={src}
          width={index === 2 ? 400 : 300}
          height={200}
        />
      ))}
    </Box>
  );
};

export default GallerySecondRow;
