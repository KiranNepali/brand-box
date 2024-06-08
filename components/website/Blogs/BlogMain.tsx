import React from "react";
import BlogHero from "./BlogHero";
import BlogCardsDigest from "./BlogCardsDigest";
import BlogCardsTutorials from "./BlogCardsTutorials";
import BlogDesignTool from "./BlogDesignTools/BlogDesignTool";

type Props = {};

function BlogMain({}: Props) {
  return (
    <div className="w-7/12 relative mx-auto">
      <BlogHero />
      <BlogCardsDigest />
      <BlogDesignTool />
      <BlogCardsTutorials />
    </div>
  );
}

export default BlogMain;
