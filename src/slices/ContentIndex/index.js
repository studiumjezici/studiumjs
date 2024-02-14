import { PrismicRichText } from "@/components/PrismicRichText";
import { isFilled } from "@prismicio/client";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.ContentIndexSlice} ContentIndexSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentIndexSlice>} ContentIndexProps
 * @param {ContentIndexProps}
 */
const ContentIndex = async ({ slice }) => {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog_post");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-22 pb-22 md:pt-32 md:pb-32"
    >
      <h1>{slice.primary.heading}</h1>
      {isFilled.richText(slice.primary.description) && (
        <div className="">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost.uid}>{blogPost.data.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default ContentIndex;
