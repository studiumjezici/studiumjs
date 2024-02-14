import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function Button({ className, ...props }) {
  return (
    <PrismicNextLink
      className={clsx(
        "border-2 rounded-full py-2 px-5 text-sm md:text-lg font-medium cursor-pointer ",
        className
      )}
      {...props}
    />
  );
}
