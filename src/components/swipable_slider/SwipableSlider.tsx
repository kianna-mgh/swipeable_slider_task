import { useRef, useState } from "react";
import { DataInterFace } from "../home/main/MainHome";
import SwpSliderItem from "./swpslider_item/SwpSliderItem";
import classes from "./SwipableSlider.module.css";

export interface swipableSliderProps {
  data: { recipes: DataInterFace[] };
  style?: string;
}
// interface SldrContRefType {
//   current: HTMLDivElement;
//   scrollLeft: number;
// }
const SwipableSlider = ({ data, style }: swipableSliderProps) => {
  const [sldrItemIndx, setSldrItemIndx] = useState<number>(0);

  const nxtitemHndlr = () => {
    setSldrItemIndx((prvState) => {
      if (prvState === data?.recipes.length - 1) {
        return 0;
      }
      return prvState + 1;
    });
  };
  const prvitemHndlr = () => {
    setSldrItemIndx((prvState) => {
      if (prvState === 0) {
        return data?.recipes.length - 1;
      }
      return prvState - 1;
    });
  };

  return (
    <>
      <div className={`col-md-12 ${classes.swpsld_mcont}`}>
        <div className={`row ${classes.swpsld_mrow} m-0`}>
          {data?.recipes.map((prd: DataInterFace) => (
            <div
              key={prd.id}
              className={`col-12 col-md-8 ${classes.slditem_mcont}`}
              style={{ translate: `${-100 * sldrItemIndx}%` }}
            >
              <SwpSliderItem {...prd} />
            </div>
          ))}
        </div>
        <div className={`${classes.slbuts_sec}`}>
          <button
            className={`${classes.sl_buts} ${classes.sl_butprv}`}
            onClick={prvitemHndlr}
          >
            <svg viewBox="0 0 40 40" width="40" height="40" focusable="false">
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
          <button
            className={`${classes.sl_buts} ${classes.sl_butnxt}`}
            onClick={nxtitemHndlr}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default SwipableSlider;
