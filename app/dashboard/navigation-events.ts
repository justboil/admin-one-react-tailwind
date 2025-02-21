"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
  onRouteChange: () => void;
};

export function NavigationEvents({ onRouteChange }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    // onRouteChange()
    // const url = `${pathname}?${searchParams}`
    console.log(pathname);
    // You can now use the current URL
    // ...
  }, [onRouteChange, pathname]);

  return "...";
}
