import React from "react";

const Card = ({ writer, profile, spot, image, heart, reply, time }) => {
  return (
    <article className="w-10/12 sm:w-full max-w-lg m-auto bg-white border-2 rounded-xl font-NotoSans">
      <div className="border-b-2 round-b-xl">
        <div className="flex p-2 items-center">
          <img
            className="w-8 h-8 rounded-full object-cover border-2 border-fuchsia-300"
            src={profile}
          />
          <div className="pl-3">
            <p className="text-sm font-bold">{writer}</p>
            <p className="text-xs text-gray-500">{spot}</p>
          </div>
        </div>
        <div className="bg-center bg-contain">
          <img className="w-full" src={image} />
        </div>
        <div className="pt-3 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="true"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div className="p-3 text-xs sm:text-sm">
          <p className="font-bold pb-1">좋아요 {heart}개</p>
          {reply.length != 0
            ? reply.map((v, i) => {
                return (
                  <div className="flex pb-0.5">
                    <p className="font-semibold">{v.name}</p>
                    <p className="pl-2">{v.contents}</p>
                  </div>
                );
              })
            : ""}
          <p className="text-xs py-1 text-gray-500">{time}시간 전</p>
        </div>
      </div>
      <div className="flex p-2.5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pl-1 w-7 h-7 rounded-full object-cover"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="w-11/12 m-auto px-2 py-1">
          <input
            className="w-4/5 text-xs sm:text-sm"
            placeholder={" " + "댓글 달기..."}
          />
          <button className="w-1/5 text-sm sm:text-base text-right font-bold text-blue-500">
            게시
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
