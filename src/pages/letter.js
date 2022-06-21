import React from "react";

const letter = () => {
  return (
    <div className="bg-zinc-100">
      <div className="max-w-3xl m-auto w-10/12 sm:w-full min-h-screen">
        <div className="py-8">
          <div className=" bg-white font-[Bareunbatang] text-sm sm:text-lg rounded-xl">
            <p className="p-6 sm:p-12">To. 부모님</p>
            <p className="px-6 sm:px-12 leading-loose font-[Donoun-Medium]">
              생신 축하드려요. ㅎㅎ<br></br>
              아들이 컴퓨터 관련 학과로써 이제야 증명할 수 있을 것 같네요 ㅋㅋ
              <br></br>
              <br></br>
              여전히 아들은 집에서 지내고 있고, 아직 학생 신분으로 철부지의 삶을
              살고 있어요.<br></br>
              그러던 사이에 부모님도 나이를 드시고, 조금씩 신체적으로 불편을
              호소할 때마다 마음이 아파요.<br></br>
              "내 부모님은 평생 건강할 줄 알았는데"하며 늘 생각했었는데,
              <br></br>
              아빠의 뻐근한 어깨와 엄마의 침침한 눈 이야기를 들으면 눈시울이
              붉어저요. <br></br>
              <br></br>
              제가 할 수 있는 효도는 엄마가 늘 하시던 말씀대로 능력자가 되는 것
              같아요.<br></br>
              아들 스스로도 욕심이 있고, 그만큼 열정과 간절함이 있는 사람이니
              조금만 더 기다려주세요. <br></br>그만큼 대견한 아들이 될 수 있도록
              힘낼 겁니당 ㅎㅎ <br></br>
              항상 아들에게 잘해주려고 노력해주셔서 감사합니다. <br></br>
              <br></br>
              아들은 아직 철이 없지만, 아닌 척 부모님께 항상 감사드리고 있어요.
              <br></br>이 자리에 앉아 이러한 편지를 작성하고 사이트를 만들 수
              있는 것은 전부 부모님의 아낌없는 지원 때문입니다.
              <br></br>
              정말 감사하고 사랑합니다. 생신 축하드려요 :)
            </p>
            <div className="flex py-6 w-full flex-wrap">
              <img
                className="w-4/12 sm:w-2/12 m-auto object-cover"
                src="images/a.jpg"
              />
              <img
                className="w-4/12 sm:w-2/12 m-auto object-cover"
                src="images/b.jpg"
              />
              <img
                className="w-4/12 sm:w-2/12 m-auto object-cover"
                src="images/d.jpg"
              />
              <img
                className="w-4/12 sm:w-2/12 m-auto object-cover"
                src="images/e.jpg"
              />
              <img
                className="w-4/12 sm:w-2/12 m-auto object-cover"
                src="images/f.jpg"
              />
              <img
                className="w-4/12 sm:w-2/12 m-auto object-cover"
                src="images/g.jpg"
              />
            </div>
            <p className="p-6 sm:p-12 text-right">From. 아들래미</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default letter;
