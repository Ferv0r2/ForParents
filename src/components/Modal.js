import React from "react";

const Modal = ({ open, close }) => {
  return (
    <>
      {open ? (
        <div>
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-10">
            <div className="absolute bg-red-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 sm:w-8/12 lg:w-4/12 min-h-halfScreen m-auto p-2 rounded-md animate-show">
              <div className="relative font-GmarketSansMedium pt-16">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold pt-6">
                    비밀번호
                  </p>
                  <div className="text-xl py-3">
                    <p className="py-6">
                      힌트 : 생신 날짜<br></br>( ex. 1월 1일 : 0101 )
                    </p>
                    <div className="relative w-2/3 sm:w-1/3 m-auto items-center">
                      <input
                        className="w-full m-auto text-center text-base py-1 rounded-md"
                        placeholder="비밀번호 입력"
                        onChange={close}
                      />
                      <span className="flex h-3 w-3 absolute top-0 right-0">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                      </span>
                    </div>
                  </div>
                  <img
                    className="w-1/2 my-16 m-auto animate-bounce"
                    src="images/box.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
