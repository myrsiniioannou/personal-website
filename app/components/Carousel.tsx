"use client";
import Image from "next/image";
import { Carousel as FlowbiteCarousel} from 'flowbite-react';

const Carousel = (props:any) => {
    const {project, images } = props;
    const HTMLCodeprojectImages = images.map((image: string) => (
        <div className="h-full">
                <Image
                    className="object-scale-down"
                    priority={true}
                    alt={image}
                    fill = {true}
                    src={"/portfolio/"+ project + "/" + image}
                />
        </div>
    ))

    return (
        <div className="xl:h-screen h-[50vh]">
            <FlowbiteCarousel className="pb-0" slideInterval={50000} indicators={false}>
                {HTMLCodeprojectImages}
            </FlowbiteCarousel>
        </div>
    )
};

export default Carousel;
