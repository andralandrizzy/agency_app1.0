import React from 'react';
import CarouselStyle from "../styles/Carousel.module.css";
import { Carousel } from "react-bootstrap";
import Image from 'next/image';
import Link from 'next/link';




const CarouselSlider = () => {
    const sliderContents = [
        {
          id: 1,
          text: "Reliable home Care for all senior citizen",
          image: "/images/show1.jpeg",
        },
        {
          id: 2,
          text: "Our services are behond imagination",
          image: "/images/show2.jpeg",
        },
        {
          id: 3,
          text: "We truly care about our customer",
          image: "/images/show3.jpeg",
        }
      ];
      return (
        <Carousel fade className={CarouselStyle.carousel}>
          {sliderContents.map((content, id) => (
            <Carousel.Item key={id}>
              <div className={CarouselStyle.overlay}>
                <Image
                  className={CarouselStyle.img}
                  src={content.image}
                  alt={content.text}
                  layout="fill"
                />
                <Carousel.Caption className={CarouselStyle.caption}>
                  <h1>{content.text}</h1>
                  <Link href="/">
                    <a className={CarouselStyle.btn}>Learn more</a>
                  </Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      );
};

export default CarouselSlider;
