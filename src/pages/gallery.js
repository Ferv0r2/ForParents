import React from "react";
import Card from "components/Card";

const status = [
  {
    writer: "wontae",
    profile: "images/wontae.jpg",
    spot: "광주시청",
    image: "images/passport.jpg",
    heart: 864,
    reply: [
      { name: "wontae", contents: "오늘 여권발급! 첫 여권이당 ㅎㅎ" },
      { name: "santong", contents: "해외 여행 가즈아~" },
      { name: "style1146", contents: "이번에는 반드시..!" },
    ],
    time: 2,
  },
  {
    writer: "yh72",
    profile: "images/dad.png",
    spot: "어느 한 공원",
    image: "images/logo.jpg",
    heart: "1,568",
    reply: [
      { name: "santong", contents: "소중한 곳에서 소중한 사람과.." },
      { name: "style1146", contents: "이 때 참 재밌었어 ㅎㅎ" },
      { name: "wontae", contents: "이거로 로고 만들어도 되겄소" },
    ],
    time: 4,
  },
  {
    writer: "style1146",
    profile: "images/mom.png",
    spot: "밤에도 빛나는 곳",
    image: "images/neon.jpg",
    heart: "16,240",
    reply: [
      { name: "style1146", contents: "밤에도 빛나는 밤이야" },
      { name: "wontae", contents: "이쁜 네온사인" },
      { name: "santong", contents: "사진이 너무 흐리다" },
    ],
    time: 5,
  },
  {
    writer: "style1146",
    profile: "images/mom.png",
    spot: "제주도",
    image: "images/jeju2.jpg",
    heart: "1,341,240",
    reply: [
      { name: "style1146", contents: "좋았던 순간들~ 아쉬워서 한장 더" },
      { name: "santong", contents: "이때보단 머리가 많이 자랐군" },
    ],
    time: 8,
  },
  {
    writer: "style1146",
    profile: "images/mom.png",
    spot: "제주도",
    image: "images/jeju1.jpg",
    heart: "241,240",
    reply: [
      { name: "style1146", contents: "승마하면서 한 컷 ^^" },
      { name: "wontae", contents: "엉덩이가 너무 아파용" },
      { name: "santong", contents: "힘들다 힘들어" },
    ],
    time: 8,
  },
  {
    writer: "yh72",
    profile: "images/dad.png",
    spot: "에버랜드 선",
    image: "images/train.jpg",
    heart: "441,624",
    reply: [
      { name: "yh72", contents: "전철 처음 타는 아들래미" },
      { name: "style1146", contents: "다들 어릴 때고만.." },
    ],
    time: 11,
  },
  {
    writer: "yh72",
    profile: "images/dad.png",
    spot: "절벽",
    image: "images/art.jpg",
    heart: "3,441,624",
    reply: [
      { name: "yh72", contents: "휴~ 겨우 매달렸네" },
      { name: "style1146", contents: "어머 진짜 같아 ㅎㅎ" },
      { name: "wontae", contents: "리얼리티 ㅋㅋㅋ" },
    ],
    time: 13,
  },
  {
    writer: "wontae",
    profile: "images/wontae.jpg",
    spot: "차 안",
    image: "images/car.jpg",
    heart: "111,624",
    reply: [
      { name: "wontae", contents: "차 안에서 한 컷" },
      { name: "style1146", contents: "좋으시네 ^^" },
    ],
    time: 16,
  },
];

const Gallery = () => {
  const cards = status.map((data) => {
    return (
      <article className="py-3 sm:py-6">
        <Card
          writer={data.writer}
          profile={data.profile}
          spot={data.spot}
          image={data.image}
          heart={data.heart}
          reply={data.reply}
          time={data.time}
        />
      </article>
    );
  });
  return (
    <div className="bg-zinc-100">
      <div className="max-w-3xl m-auto w-full min-h-screen">
        <section className="pt-12">{cards}</section>
      </div>
    </div>
  );
};

export default Gallery;
