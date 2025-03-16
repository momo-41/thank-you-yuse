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
