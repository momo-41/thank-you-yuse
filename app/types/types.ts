export type MessageCardProps = {
  name: string;
  message: string;
};

export type GalleryRowProps = {
  images: string[];
};

export type GalleryItemProps = {
  src: string;
  width: string;
};

export type GalleryProps = {
  images: string[][];
  id: string;
};
