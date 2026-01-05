export interface Sticker {
  imageSrc: string;
  title: string;
  description?: string;
  sold: number;
  total: number;
  buyDate?: string;
  isHot?: boolean;
  _id?: string;
}

export type StickerVariant = "large" | "medium" | "small";

export type IsCardDetailsShow = true | false;

export interface SlideData {
  id: string | number;
  content: React.ReactNode;
}

export interface SliderProps {
  slidesData: SlideData[];
  slidesPerView?: number | 1;
  spaceBetween?: number;
  showPagination?: boolean;
  className?: string;
}

export interface FiltersProps {
  data: Array<{
    id: number;
    name: string;
    name_value?: string;
  }>;
  active: number;
  handleFilter?: (id: number, name_value?: string) => void;
}
