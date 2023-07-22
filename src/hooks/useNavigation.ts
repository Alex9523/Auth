import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export const useNavigation = (
  navigation: { label: string; link: string }[]
) => {
  const location = useLocation();

  const currentItem = navigation.findIndex((item) => {
    return location.pathname.includes(item.link) && !location.pathname.includes('/login');
  });

  const [selectedIndex, setSelectedIndex] = useState(currentItem);

  useEffect(() => {
    setSelectedIndex(currentItem);
  }, [currentItem]);

  return { selectedIndex };
};
