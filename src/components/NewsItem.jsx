import React from "react";

function NewsItem({ data }) {
  const { title, urlToImage, description, author, publishedAt } = data;

  return (
    <div className="flex flex-col overflow-hidden border-2 border-white rounded-md w-full mb-8">
      <div className="h-48 overflow-hidden">
        <img
          src={urlToImage}
          alt="news"
          className="object-cover w-full h-full hover:scale-110 hover:duration-200"
        />
      </div>

      <h2 className="text-white">{title}</h2>

      <p className="text-white">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span className="text-white">{author}</span>
          <span className="text-white">{publishedAt}</span>
        </div>

        <button className="text-white">Read More</button>
      </div>
    </div>
  );
}

export default NewsItem;
