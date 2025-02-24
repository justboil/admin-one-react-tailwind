"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../_stores/hooks";
import { setDarkMode } from "../../_stores/darkModeSlice";

export function OnVisit() {
  const darkMode = useAppSelector((state) => state.darkMode.isEnabled);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (darkMode) {
      dispatch(setDarkMode(false));
    }
  });

  return "...";
}
