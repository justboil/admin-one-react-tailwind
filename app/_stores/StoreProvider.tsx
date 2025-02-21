"use client";

import { ReactNode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export default function StoreProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
