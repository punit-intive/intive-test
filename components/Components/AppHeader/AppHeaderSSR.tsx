import { getModelMenus, getModelMenusElements } from "@/lib/contentful/api";
import AppHeader from "./AppHeader";
import { draftMode } from "next/headers";


const AppHeaderSSR = async ({ isWhiteMenu }:any) => {
  const {isEnabled} = draftMode();
   const menus = await getModelMenus(isEnabled);
   const menuIds = menus.map((menu: any) => `"${menu.sys.id}"`);
   const menuElements = await getModelMenusElements(menuIds, isEnabled);
   for(const menu of menuElements){
     menu.elements = menu.elements.items;
     menu.elements = menu.elements.map((element: any) =>`"${element.sys.id}"`)
     menu.elements = await getModelMenusElements(menu.elements, isEnabled);
   }

  return (
    <AppHeader menus={menuElements} isWhiteMenu={isWhiteMenu} />
  );
};



export default AppHeaderSSR;
