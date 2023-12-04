//VideoList.tsx
import { useState, useEffect } from "preact/hooks";
import "./style.css";
import { getVideoList, getProductName } from "./getter";

interface YouTubeSearchResult {
  kind: string; // "youtube#searchListResponse"
  etag: string; // "1Gi3uz1EPxfkmW8DCcZxzjjk580"
  nextPageToken: string; // "CAUQAA"
  regionCode: string; // "ID"
  pageInfo: {
    totalResults: number; // 1000000
    resultsPerPage: number; // 5
  };
  items: [
    {
      kind: string; // "youtube#searchResult"
      etag: string; // "1Gi3uz1EPxfkmW8DCcZxzjjk580"
      id: {
        kind: string; // "youtube#video"
        videoId: string; // "LJNcW9-2I-s"
      };
      snippet: {
        publishedAt: string; // "2022-05-07T13:19:05Z"
        channelId: string; // "UCBcCMgDlFR0SQi5reBcReUw"
        title: string; // "BELI KONSOL GAMEBOY ADVANCE VERSI SPESIAL! - Nintendo Gameboy Advace SP 101 di Tahun 2022"
        description: string; // "Kali ini unboxing dan membahas sebuah perangkat gaming handheld dari Nintendo versi lawas namun ini versi spesialnya, yaitu ..."
        thumbnails: {
          default: {
            url: string; // "https://i.ytimg.com/vi/LJNcW9-2I-s/default.jpg"
            width: number; // 120
            height: number; // 90
          };
          medium: {
            url: string; // "https://i.ytimg.com/vi/LJNcW9-2I-s/mqdefault.jpg"
            width: number; // 320
            height: number; // 180
          };
          high: {
            url: string; // "https://i.ytimg.com/vi/LJNcW9-2I-s/hqdefault.jpg"
            width: number; // 480
            height: number; // 360
          };
        };
        channelTitle: string; // "ErDev"
        liveBroadcastContent: string; // "none"
        publishTime: string; // "2022-05-07T13:19:05Z"
      };
    }
  ];
}
interface VideoListProps {
  mode: string;
}


const VideoList = (props: VideoListProps) => {
  const { mode } = props;
  const [videoList, setVideoList] = useState<YouTubeSearchResult>();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log("useEffect");
    async function fetchAPI() {
      console.log("fetchAPI");
      const productName = getProductName();
      console.log(productName);
      const videoData = await getVideoList(productName);
      setVideoList(videoData);
      console.log(videoData);
      console.log("fetchAPI end");
    }

    fetchAPI();
  }, []);

  return (
    <div id="watchBeforeBuy" class="w-50 my-12">
      <button
        onClick={toggleDropdown}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="!text-white !font-bold w-full !bg-blue-700 hover:!bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg !text-sm px-5 py-2.5 !text-center inline-flex items-center justify-center dark:!bg-blue-600 dark:hover:!bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        WATCH BEFORE BUY 🚀
        <svg
          class={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? "transform rotate-180" : ""} transition-all`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        class={`${
          isDropdownOpen ? "" : "hidden"
        } overflow-hidden z-10 shadow-md !bg-gray-200 p-5 rounded-md`}
      >
        {videoList?.items.length > 0 ? (
         <div>
           <p className="!text-black !text-center !text-lg !font-light mb-5">
          Showing {videoList?.items.length} review videos 👇
        </p>
       <div className={`max-h-[50vh] h-fit overflow-auto flex ${mode == 'potrait'? 'flex-col': 'flex-row'}`}>
       {videoList?.items.map((item) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            target="_blank"
          >
            <div
              style={{
                backgroundImage: `url(${item.snippet.thumbnails.high.url})`,
              }}
              className={`rounded-md !bg-pulse    cursor-pointer  shadow-md ${mode === 'potrait'? 'h-24 hover:h-32 mb-5': 'h-48 hover:h-56 mx-5 w-72' } !bg-cover !bg-center !bg-no-repeat  transition-all   flex justify-center items-center`}
            >
              {" "}
              <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50 hover:!bg-blue-600/30  hover:backdrop-brightness-75 rounded-md">
                <p className="!text-white !text-clip !text-center break-words !font-bold">
                  <p class="!font-extrabold !text-sm">
                    {item.snippet.title}
                  </p>
                </p>
              </div>
            </div>
          </a>
        ))}
       </div>
          </div>
        ): (
          <p className="!text-black !text-center !font-light text-lg">
          No review videos found 😢 <br></br> <span className="font-light text-sm"> if you think this is a mistakes <span className="underline hover:cursor-pointer">(contact us)</span></span>
        </p>
        )}
      </div>
    </div>
  );
};

export default VideoList;
