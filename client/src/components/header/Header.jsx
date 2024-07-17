import Search from "./Search";
import CustomButton from "./CustomButton";
import Logo from "./Logo";

const Header = () => {


  return (
    <>

      <header className="w-[100%] h-[60px] bg-[#2874F0] px-[100px] shadow-lg fixed top-0 left-0 right-0">
        <div className="max-w-[1170px] h-[100%] mx-auto grid grid-cols-[100px_400px_500px] lg:grid-cols-[100px_auto_500px] items-center">
          <Logo></Logo>
          <Search></Search>
          <CustomButton></CustomButton>
        </div>
      </header>

    </>
  );
};
export default Header;
