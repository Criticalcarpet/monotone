import {
  ThumbDownIcon,
  ThumbUpIcon
} from "@heroicons/react/outline";
import Moment from "react-moment";

function Comment({ comment }) {
  return (
    <div className="p-3 flex cursor-pointer border-b-2 border-gray border-[#252525]">
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}{" "}
              </span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-[#d9d9d9] mt-0.5 max-w-lg text-[15px] mb-2 sm:text-base">
              {comment?.comment}
            </p>
          </div>
          <div className="stacked">
          <div className="icon group flex-shrink-0">
            <ThumbUpIcon className="h-5 text-[#6e767d] group-hover:text-[#1df07f]" />
          </div>
          <div className="icon group flex-shrink-0">
            <ThumbDownIcon className="h-5 text-[#6e767d] group-hover:text-[#f03d1d]" />
          </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Comment;