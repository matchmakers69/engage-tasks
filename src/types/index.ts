import { ReactNode } from "react";

export type BaseProps<T = ReactNode> = {
  children?: T;
};
