export const jsonImageIterator = (avatar: string) => {
  switch (avatar) {
    case "friend_01":
      return require("@/assets/images/friend_01.png");
    case "friend_02":
      return require("@/assets/images/friend_02.png");
    case "friend_03":
      return require("@/assets/images/friend_03.png");
    case "friend_04":
      return require("@/assets/images/friend_04.png");
    case "friend_05":
      return require("@/assets/images/friend_05.png");
    default:
      break;
  }
};
