const isLogin = () => {
  return !!sessionStorage.getItem("accessToken");
};

export default isLogin;
