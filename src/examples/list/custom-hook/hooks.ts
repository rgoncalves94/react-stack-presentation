import { useState } from "react";

const useLists = <T>() => {
  const [data, setData] = useState<T[]>([]);

  const addItemToTheBeginning = (value: T) => () => {
    if (!itemExists(value)) {
      setData([value].concat(data));
    }
  };

  const addItemToTheEnd = (value: T) => () => {
    if (!itemExists(value)) {
      setData(data.concat(value));
    }
  };

  const removeItem = (value: T) => () => {
    setData(data.filter((item) => item !== value));
  };

  const itemExists = (item: T) => data.includes(item);

  return {
    data,
    addItemToTheBeginning,
    addItemToTheEnd,
    removeItem,
    itemExists,
  };
};

export { useLists };
