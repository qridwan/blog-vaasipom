import React from "react";
import FeedImg from "../../Assets/img/feedImg.png";
import FeedCard from "./FeedCard";
const feeds = [
  {
    id: 1,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
  {
    id: 2,
    author: "Krishaan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: "",
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
  {
    id: 3,
    author: "Aadavan",
    title: "The art of writing Create a blog post subtitle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet,adipiscing elit. Dolor sit amet,adipiscing",
    img: FeedImg,
    likes: 529,
    views: 768,
    date: "10th August",
    readTime: "4Min",
    topic: "Science",
  },
];
const Feed = () => {
  return (
    <div>
      {feeds.map((feed) => (
        <FeedCard key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default Feed;
