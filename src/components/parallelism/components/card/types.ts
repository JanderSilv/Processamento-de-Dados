// types
import { StaticImageData } from "next/image";

export interface CardProps {
  color?: string;
  title?: string;
  subtitle?: string;
  banner?: StaticImageData;
  onClick?(): void;
}

export interface ContainerProps {
  color?: string;
}
