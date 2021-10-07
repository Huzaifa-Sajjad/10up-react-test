const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 8000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1560 },
    items: 4,
  },
  mdDesktop: {
    breakpoint: { max: 1561, min: 1361 },
    items: 4,
  },
  smDesktop: {
    breakpoint: { max: 1366, min: 1200 },
    items: 3,
  },
  smtablet: {
    breakpoint: { max: 1199, min: 768 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 767, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 281 },
    items: 1.35,
  },
  fold: {
    breakpoint: { max: 280, min: 0 },
    items: 1,
  },
};

export default responsive;