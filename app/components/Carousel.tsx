"use client";
import Image from "next/image";
import { Carousel as FlowbiteCarousel } from "flowbite-react";

const Carousel = (props: any) => {
  const { project, images } = props;
  const HTMLCodeprojectImages = images.map((image: string) => (
    <div className="h-full">
      <Image
        className="object-contain"
        priority={true}
        alt={image}
        fill={true}
        src={"/portfolio/" + project + "/" + image}
      />
    </div>
  ));

  return (
      <FlowbiteCarousel
        className="mt-20 h-[100vh]"
        slideInterval={50000}
        indicators={false}
      >
        {HTMLCodeprojectImages}
      </FlowbiteCarousel>
  );
};

export default Carousel;
