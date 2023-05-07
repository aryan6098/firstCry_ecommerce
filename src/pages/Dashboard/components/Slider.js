import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";
import img1 from "../../../assets/img1.jpeg";
import img2 from "../../../assets/img2.jpeg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpeg";
const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Caption 1",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Caption 2",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Caption 3",
  },
  {
    src: img4,
    altText: "Slide 3",
    caption: "Caption 3",
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ maxHeight: "400px", width: "100%" }}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={3000}
    >
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CustomCarousel;
