import styled from "styled-components";
import { device } from "theme/responsive";

interface TypoProps {
  $font_color?: string;
  $size?: string | number;
  $weight?: string | number;
  $fontFamily?: string;
  $letterSpacing?: number;
}

export const Typo = styled.span<TypoProps>`
  color: ${({ theme: { colors }, $font_color }) =>
    colors[$font_color ?? ""] || $font_color || colors.primaryBlue};

  font-size: ${({ theme: { desktopFontSize }, $size }) =>
    desktopFontSize[$size ?? ""] || $size || desktopFontSize.xl}px;

  font-weight: ${({ theme: { fontWeight }, $weight }) =>
    fontWeight[$weight ?? ""] || $weight || fontWeight.md};
  font-family: ${(props) => props.$fontFamily};

  letter-spacing: ${({ $letterSpacing }) => $letterSpacing}px;

  @media ${device.tabletL} {
    font-size: ${({ theme: { tabletFontSize }, $size }) =>
      tabletFontSize[$size ?? ""] || $size || tabletFontSize.xl}px;
  }

  @media ${device.mobileL} {
    font-size: ${({ theme: { mobileFontSize }, $size }) =>
      mobileFontSize[$size ?? ""] || $size || mobileFontSize.xxl}px;
  }
`;
