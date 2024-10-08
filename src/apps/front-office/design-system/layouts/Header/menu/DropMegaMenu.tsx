import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import URLS from "apps/front-office/utils/urls";
import bannerMenu from "assets/images/banner-menu.png";
import { megaDropMenu } from "../constant/bottomHeaderData";

const DropMegaMenu = () => {
  return (
    <div className="hidden absolute left-0 container mt-5 p-9 z-10 w-full group-hover:flex justify-between bg-white rounded-xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      {megaDropMenu.map((megaDropHeader, index) => (
        <div key={megaDropHeader.title + index}>
          <h2 className="text-xl text-primary font-bold mb-4">
            {megaDropHeader.title}
          </h2>
          <ul className="flex flex-col gap-y-2.5 ">
            {megaDropHeader.items.map((item, idx) => (
              <li
                key={item.name + idx}
                className="text-slate-400 hover:underline hover:text-black">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="w-[500px] h-[320px] relative">
        <Link to={URLS.shop}>
          <img src={bannerMenu} alt="" className="" />
          <div className="absolute top-10 left-8">
            <h4 className="text-slate-400 text-lg mb-2">{trans("hotDeals")}</h4>
            <h3 className="text-slate-800 text-2xl mb-4">
              {trans("donotMiss")}
              <br />
              {trans("trending")}
            </h3>
            <h3 className="text-2xl text-[#81B13D] mb-6">{`${trans("saveTo")} 50%`}</h3>
            <Button className="text-center text-sm bg-primary text-white rounded-full">
              {trans("shopNow")}
            </Button>
          </div>
          <div className="absolute top-12 right-8 text-center">
            <h3 className="w-20 h-20 flex justify-center items-center bg-yellow-400 rounded-full text-xl">
              25%
              <br />
              {trans("off")}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DropMegaMenu;
