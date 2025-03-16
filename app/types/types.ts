export type MessageCardProps = {
  name: string;
  message: string;
  year: string;
  nameColor: string;
  lineColor: string;
};
export type Message = {
  id: number;
  year: string;
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

export type YearGridCardProps = {
  yearProps: string;
  nameColor: string;
  lineColor: string;
  messageData: Message[];
};

export type GridCardProps = {
  nameColor: string;
  lineColor: string;
  messageData: Message[];
};
