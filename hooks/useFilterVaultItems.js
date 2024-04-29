import { useEffect, useState } from "react";

const useFilterVaultItems = (items, keyword, types, industries) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const itemsByKeyword = keyword ? items?.filter(item => item.header.title.toLowerCase().includes(keyword.toLowerCase())) : items;

    const shouldFilterByTypes = !!types && !!types?.length;
    const itemsByTypes = shouldFilterByTypes
      ? itemsByKeyword?.filter(item => types.some(type => (item.vaultType?.codeName ?? "") === type))
      : itemsByKeyword;

    const shouldFilterByIndustries = !!industries && !!industries?.length;
    const itemsByIndustries = shouldFilterByIndustries
      ? itemsByTypes?.filter(item => industries.some(industry => (item.vaultIndudstry?.codeName ?? "") === industry))
      : itemsByTypes;

    setFilteredItems(itemsByIndustries);
  }, [items, keyword, types, industries]);

  return filteredItems;
};

export default useFilterVaultItems;
