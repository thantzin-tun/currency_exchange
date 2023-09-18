import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./colors";
import { general } from "./general";
import { useThemeStore } from "store";

import {
  mobilefontSize,
  desktopfontsize,
  tabletfontsize,
  fontWeight,
  fontStyle,
} from "./typography";

interface Props {
  children: ReactNode;
}

export const ThemeProviderContext = ({ children }: Props) => {
  const { mode } = useThemeStore();
  const theme = {
    colors: mode == "light" ? lightTheme : darkTheme,
    mobileFontSize: mobilefontSize,
    tabletFontSize: tabletfontsize,
    desktopFontSize: desktopfontsize,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    general: general,
  };
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
