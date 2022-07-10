import React from "react";

export default function useTopOffset(ref) {
  const [topOffset, setTopOffset] = React.useState(null);

  React.useLayoutEffect(() => {
    setTopOffset(ref.getBoundingClientRect())
  }, []);

  return topOffset;
}