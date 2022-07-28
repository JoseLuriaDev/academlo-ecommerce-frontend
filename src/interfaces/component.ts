import { CSSProperties, ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode;
  className: string;
  style: CSSProperties;
}
