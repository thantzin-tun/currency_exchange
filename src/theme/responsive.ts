interface Size {
  mobileS: string;
  mobileL: string;
  tabletS: string;
  tabletL: string;
  laptop: string;
  desktop: string;
}

export const size: Size = {
  mobileS: "375px",
  mobileL: "576px",
  tabletS: "768px",
  tabletL: "992px",
  laptop: "1024px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
