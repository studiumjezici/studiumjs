import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeroServicesSlice} HeroServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroServicesSlice>} HeroServicesProps
 * @param {HeroServicesProps}
 */
const HeroServices = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-colorTertiary  w-full h-[600px] md:h-[700px] p-0 -mt-20 md:mt-10 relative "
    >
      <div className="absolute inset-0   bg-colorPrimary  ">
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          style={{ objectFit: "cover", opacity: ".15" }}
          rel="preload"
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse max-w-[90dvw]  md:max-w-7xl  h-full mx-auto relative md:gap-12">
        <div className="flex flex-col items-start mt-12 justify-center w-full   md:w-3/4 h-full text-white pr-2 md:pr-20 lg:pr-0 relative">
          <div className="absolute w-12 h-12 rounded-full bg-white opacity-10 top-20 -right-0"></div>
          <div className="absolute w-8 h-8 rounded-full bg-white opacity-10 top-16 right-16"></div>
          <h1 className="text-2xl w-[85%] md:w-full md:text-4xl lg:text-5xl leading-normal pb-12 ">
            <PrismicRichText field={slice.primary.heading} />
          </h1>
          <p className="md:text-xl lg:text-2xl font-extralight">
            <PrismicRichText field={slice.primary.body} />
          </p>
          <div className="pt-12">
            <Button
              field={slice.primary.button_link}
              className="bg-colorGlobal hover:bg-transparent hover:text-colorGlobal border-colorGlobal text-white"
            >
              {slice.primary.button_text}
            </Button>
          </div>
        </div>
        <div className=" md:opacity-100 left-10 md:relative  md:w-1/2">
          <div className="z-10 w-auto  absolute right-0 md:left-16 lg:right-10 top-40 flex flex-col justify-center items-center ">
            <div className=" md:block bg-studiumBlueQueen z-10 rounded-full bg-opacity-10 relative">
              <div
                className="w-20 h-20 p-[2px]
         md:w-44 lg:w-96 md:h-44 lg:h-96 rounded-full bg-white/20"
              >
                <div className="relative top-[3px] left-[1px] md:top-[6px] md:left-[3px] lg:top-2  lg:left-2      bg-white w-[96%] h-[96%]  rounded-full overflow-hidden text-studiumBlueKing">
                  <PrismicNextImage
                    field={slice.primary.image}
                    fill
                    style={{ objectFit: "cover", opacity: "1" }}
                    rel="preload"
                  />
                </div>
              </div>
            </div>
            <div className="absolute hidden md:block w-3 h-3  bg-colorGlobal opacity-10 md:opacity-100  left-32 -top-12 z-20 rounded-full"></div>
            <div className="absolute  hidden md:block w-2 h-2  bg-colorGlobal opacity-10 md:opacity-100  left-36 -top-2 z-20 rounded-full"></div>
            <div className="hidden lg:block  absolute w-20 h-20  bg-colorGlobal opacity-10 md:opacity-100 left-52 top-0 rounded-full -z-1"></div>
            <div className="hidden lg:block absolute w-6 h-6  bg-colorGlobal opacity-10 md:opacity-100  left-20 top-2 z-20 rounded-full"></div>
            <div className="absolute w-24 h-24 z-21 bg-colorGlobal opacity-10 md:opacity-100  -left-10 top-24 rounded-full"></div>
            <div className=" flex absolute w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 z-20 bg-colorGlobal opacity-20 md:opacity-100 bg-opacity-100 -left-2 md:-left-24 top-72 rounded-full text-white text-3xl md:text-7xl  flex-col items-center justify-center">
              {/*        <IconComponent />   */}
            </div>
            <div className="absolute  hidden md:block w-16 h-16  bg-colorGlobal opacity-10 md:opacity-100  left-28 -bottom-20 rounded-full"></div>
            <div className="absolute  hidden md:block w-8 h-8  bg-colorGlobal opacity-10 md:opacity-100  left-24 -bottom-36 rounded-full"></div>
            <div className="absolute  hidden md:block w-6 h-6  bg-colorGlobal opacity-10 md:opacity-100  left-20 -bottom-20 rounded-full"></div>
            <div className="absolute w-16 h-16  bg-colorGlobal opacity-10 md:opacity-100   left-6 -bottom-48 z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
