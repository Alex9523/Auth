import React, { useRef } from "react";

import { BreakpointsContext } from "context/BreakpointsContext";
import { RefContext } from "context/RefContext";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <BreakpointsContext.Provider  value={{ isMobile: false}}>
      <RefContext.Provider value={ref}>
        {children}
      </RefContext.Provider>
    </BreakpointsContext.Provider>
  );
};
