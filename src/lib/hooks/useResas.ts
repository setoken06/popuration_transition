import { useState, useEffect, useCallback } from "react";
import { getPrefectures, getComposition } from "../api/resas";

export type Prefecture = { prefCode: number; prefName: string };

export type Composition = { name: string; data: number[] };

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[] | null>(null);

  useEffect(() => {
    getPrefectures().then(({ data }: any) => {
      setPrefectures(data.result);
    });
  }, []);

  return prefectures;
};

export const useComposition = () => {
  const [compositions, setCompositions] = useState<Composition[] | null>(null);

  const updataCompositions = useCallback(
    (id: number, prefName: string): void => {
      if (compositions) {
        if (compositions.find(item => item.name === prefName)) {
          const nextCompositions = compositions.filter(
            item => item.name !== prefName
          );

          setCompositions(nextCompositions);
        } else {
          getComposition(id).then(({ data }: any) => {
            let tmp: any[] = [];
            data.result.data[0].data.map((item: any) => {
              tmp.push(item.value);
            });

            setCompositions([...compositions, { name: prefName, data: tmp }]);
          });
        }
      } else {
        getComposition(id).then(({ data }: any) => {
          let tmp: any[] = [];
          data.result.data[0].data.map((item: any) => {
            tmp.push(item.value);
          });

          setCompositions([{ name: prefName, data: tmp }]);
        });
      }
    },
    [compositions]
  );

  return { compositions, updataCompositions };
};
