import { useState } from "react";
import financial from "../assets/img/financial.avif";
import api from "../services/api";
import NewsCard from "./NewsCard";

export default function News() {
  const [visibleCountNews, setVisibleCountNews] = useState(4);
  const [] = usest;

  const loadMoreNews = () => {
    setVisibleCountNews((prev) => prev + 4);

    // if click زیاتر ببینە
    setVisibleCountNews(20);
  };

  return (
    <div className="grid grid-cols-6">
      {/* Left Section */}

      <div className="col-span-6 flex items-center rounded-full overflow-hidden my-5 p-2 bg-linear-to-t from-gray-800 to-indigo-900 w-300 ms-8">
        {/* Fixed Header */}
        <div className="bg-white text-black font-bold p-2 rounded-full w-30">
          سەردێرەکان :
        </div>

        {/* Scrolling Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex whitespace-nowrap"
            style={{
              display: "inline-flex",
              animation: "marquee 60s linear infinite",
            }}
          >
            {api.slice(0, 5).map((item, index) => (
              <span key={item.id} className="text-white mx-6">
                {item.title}
                {index !== api.length - 1 && <span className="mx-4">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-4 ms-10 my-7">
        <div className="flex items-center mb-4 gap-2">
          <h1 className="font-suhayb text-2xl">هەواڵەکان</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-140" />
        </div>

        {/* Content under هەواڵەکان */}
        <div className="space-y-5">
          <img
            src={financial}
            alt="Economic News"
            className="w-150 rounded-lg"
          />
          <p className="text-gray-700 text-lg font-suhayb">
            ئەم هەواڵە دەربارەی بازاڕی جیهانی و گەشەی ئابووریە.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 my-7 shadow-2xl rounded-lg px-4">
        <div className="flex items-center mb-4 gap-2">
          <h1 className="font-suhayb text-2xl">نوێترین</h1>
          <hr className="border-indigo-900 border-2 rounded-2xl w-70" />
        </div>

        {/* Content under نوێترین */}
        {api.slice(0, 4).map((item) => (
          <div className="flex items-center gap-3 my-10">
            <img
              src={item.image}
              alt="Latest News"
              className="w-[130px] rounded-lg"
            />
            <p className="text-gray-700 font-suhayb">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="col-span-6 grid grid-cols-4 gap-6 mx-9">
        {api.slice(6, 6 + visibleCountNews).map((item) => (
          <div key={item.id}>
            <NewsCard
              title={item.title}
              category={item.category}
              image={item.image}
            />
          </div>
        ))}
      </div>

      {visibleCountNews < api.length - 6 && (
        <div className="col-span-6 flex justify-center">
          <h1
            onClick={loadMoreNews}
            className="cursor-pointer w-50 font-suhayb text-center text-2xl my-5 border-2 p-2 rounded-xl border-indigo-700 text-indigo-800 hover:bg-indigo-900 hover:text-white transition-all duration-300"
          >
            زیاتر ببینە
          </h1>
        </div>
      )}
    </div>
  );
}
