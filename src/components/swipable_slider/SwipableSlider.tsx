import { useState, useEffect, useCallback } from "react";
import { DataInterFace } from "../home/main/MainHome";
import SwpSliderItem from "./swpslider_item/SwpSliderItem";
import classes from "./SwipableSlider.module.css";
import SwpSliderNavs from "./ui_component/SwpSliderNavs";
import SwpSliderPagination from "./ui_component/SwpSliderPagination";

export interface swipableSliderProps {
  data: { recipes: DataInterFace[] };
  loop?: boolean;
  arrows?: boolean;
  pagination?: boolean;
  autoSliding?: boolean;
  style?: { [key: string]: string };
}

const SwipableSlider = ({
  data,
  style,
  arrows = true,
  pagination = true,
  loop = false,
  autoSliding = false,
}: swipableSliderProps) => {
  const [sldrItemIndx, setSldrItemIndx] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState(autoSliding);
  const [enableloop, setEnableloop] = useState(loop);
  const nxtitemHndlr = useCallback(() => {
    setSldrItemIndx((prvState) => {
      if (enableloop) {
        if (prvState === data?.recipes.length - 1) {
          return 0;
        }
        return prvState + 1;
      } else {
        if (prvState === data?.recipes.length - 1) {
          return prvState;
        }
        return prvState + 1;
      }
    });
  }, [data, enableloop]);
  const prvitemHndlr = () => {
    setSldrItemIndx((prvState) => {
      if (enableloop) {
        if (prvState === 0) {
          return data?.recipes.length - 1;
        }
        return prvState - 1;
      } else {
        if (prvState === 0) {
          return 0;
        }
        return prvState - 1;
      }
    });
  };
  useEffect(() => {
    if (autoSlide) {
      setEnableloop(true);
      const autoScrlTmOut = setTimeout(() => {
        nxtitemHndlr();
      }, 3000);
      return () => clearTimeout(autoScrlTmOut);
    }
  }, [autoSlide, sldrItemIndx, nxtitemHndlr]);

  return (
    <>
      <div
        className={`col-md-12 ${classes.swpsld_mcont}`}
        style={style}
        onMouseEnter={autoSliding ? () => setAutoSlide(false) : undefined}
        onMouseLeave={autoSliding ? () => setAutoSlide(true) : undefined}
      >
        <div className={`row ${classes.swpsld_mrow} m-0`}>
          {data?.recipes.map((prd: DataInterFace) => (
            <div
              key={prd.id}
              className={`col-12 col-md-12 ${classes.slditem_mcont}`}
              style={{ translate: `${-100 * sldrItemIndx}%` }}
            >
              <SwpSliderItem {...prd} />
            </div>
          ))}
        </div>
        {arrows && (
          <SwpSliderNavs
            prvHandler={prvitemHndlr}
            nxtHandlr={nxtitemHndlr}
            haveLoop={enableloop}
            sldrItemIndx={sldrItemIndx}
            sldsLenght={data?.recipes.length}
          />
        )}
        {pagination && (
          <SwpSliderPagination
            setSldrItemIndx={setSldrItemIndx}
            slides={data.recipes}
            sldrItemIndx={sldrItemIndx}
          />
        )}
      </div>
    </>
  );
};
export default SwipableSlider;
