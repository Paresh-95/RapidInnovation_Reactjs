import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import SkeletonCard from '../components/SkeletonCard';

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setNews(response.data.articles);
        console.log(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.log("Failed to Fetch News Data");
      }
    };

    fetchNews();
  }, []);

  if (loading)
    return (
      <div className="container mx-auto p-4 min-h-[500px]">
        <h1 className="text-3xl font-bold m-7">Loading News...</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      </div>
    );

  return (
    <>
      <div className="container mx-auto p-4 min-h-[500px]">
        <h1 className="text-3xl font-bold m-7">Latest News WorldWide </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {news.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
