import { atom } from "recoil";

const scrollState = atom({
  key: "scrollState",
  default: "",
});

const scrollBtnState = atom({
  key: "scrollBtnState",
  default: 0,
});

const modalState = atom({
  key: "modalState",
  default: "false",
});

export { scrollState, scrollBtnState, modalState };
