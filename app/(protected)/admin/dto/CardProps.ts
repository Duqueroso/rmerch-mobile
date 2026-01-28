import { ReactNode } from "react";

export interface CardProps {
  text: string;
  image: ReactNode;
  value?: number;
  style?: any;
  onPress: () => void;
}
