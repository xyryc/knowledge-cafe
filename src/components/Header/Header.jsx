import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-11/12 mx-auto py-8 border-b">
      <h1 className="text-3xl text-cyan-500 font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
