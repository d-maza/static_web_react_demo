import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: require('../../assets/img/tartacumple.jpeg'),
    altText: 'imagen 1',
    caption: 'cumpleaños'
  },
  {
    src: require('../../assets/img/tartacumple3.jpeg'),
    altText: 'imagen 2',
    caption: 'cumpleaños 2'
  },
  {
    src: require('../../assets/img/tartacumpleaños2.jpeg'),
    altText: 'imagen 3',
    caption: 'cumpleños 3'
  }
];
const Carrusel = (props) =>{
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating (true)}
          onExited={() => setAnimating (false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" height="650px"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
}
  
export default Carrusel;