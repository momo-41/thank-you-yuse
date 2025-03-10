import { Box } from "@mui/material";
import Image from "next/image";

type PicturePageProps = {
  image1Src: string;
  image2Src: string;
  image3Src: string;
  image4Src: string;
  image5Src: string;
  image6Src: string;
  image7Src: string;
  image8Src: string;
  image9Src: string;
  image10Src: string;
  image11Src: string;
  image12Src: string;
};

const PicturePage: React.FC<PicturePageProps> = (props) => {
  const {
    image1Src,
    image2Src,
    image3Src,
    image4Src,
    image5Src,
    image6Src,
    image7Src,
    image8Src,
    image9Src,
    image10Src,
    image11Src,
    image12Src,
  } = props;

  const PictureImage = ({
    src,
    width,
    height,
  }: {
    src: string;
    width: number;
    height: number;
  }) => (
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

  return (
    <>
      <Box
        display={{ xs: "none", md: "flex" }}
        flexDirection="column"
        overflow={"hidden"}
      >
        <Box
          display="flex"
          gap={1}
          m={1}
          flexWrap="nowrap"
          justifyContent={"center"}
        >
          <PictureImage src={image1Src} width={400} height={200} />
          <PictureImage src={image2Src} width={300} height={200} />
          <PictureImage src={image3Src} width={300} height={200} />
          <PictureImage src={image4Src} width={300} height={200} />
        </Box>
        <Box
          display="flex"
          gap={1}
          m={1}
          flexWrap="nowrap"
          justifyContent={"center"}
        >
          <PictureImage src={image5Src} width={300} height={200} />
          <PictureImage src={image6Src} width={300} height={200} />
          <PictureImage src={image7Src} width={400} height={200} />
          <PictureImage src={image8Src} width={300} height={200} />
        </Box>
        <Box
          display="flex"
          gap={1}
          m={1}
          flexWrap="nowrap"
          justifyContent={"center"}
        >
          <PictureImage src={image9Src} width={300} height={200} />
          <PictureImage src={image10Src} width={400} height={200} />
          <PictureImage src={image11Src} width={300} height={200} />
          <PictureImage src={image12Src} width={300} height={200} />
        </Box>
      </Box>

      <Box
        display={{ xs: "flex", md: "none" }}
        flexWrap="wrap"
        gap={1}
        m={1}
        justifyContent={"center"}
      >
        <PictureImage src={image1Src} width={400} height={200} />
        <PictureImage src={image2Src} width={300} height={200} />
        <PictureImage src={image3Src} width={300} height={200} />
        <PictureImage src={image4Src} width={300} height={200} />

        <PictureImage src={image5Src} width={300} height={200} />
        <PictureImage src={image6Src} width={300} height={200} />
        <PictureImage src={image7Src} width={400} height={200} />
        <PictureImage src={image8Src} width={300} height={200} />

        <PictureImage src={image9Src} width={300} height={200} />
        <PictureImage src={image10Src} width={400} height={200} />
        <PictureImage src={image11Src} width={300} height={200} />
        <PictureImage src={image12Src} width={300} height={200} />
      </Box>
    </>
  );
};

export default PicturePage;
