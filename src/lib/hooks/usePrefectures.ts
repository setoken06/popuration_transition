import { useState, useEffect } from "react";
import { getPrefectures } from "../api/resas";

type Prefectures = [{ prefCode: number; prefName: string }];

const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefectures | null>(null);

  useEffect(() => {
    getPrefectures().then(({ data }) => {
      setPrefectures(data.result);
    });
  }, []);

  return prefectures;
};

export default usePrefectures;
