import { useRef, useState } from "react";
import { dataInterFace } from "../home/main/MainHome";
import SwpSliderItem from "./swpslider_item/SwpSliderItem";
import classes from "./SwipableSlider.module.css";

export interface swipableSliderProps {
  data: { products: dataInterFace[] };
  style?: string;
}
// interface SldrContRefType {
//   current: HTMLDivElement;
//   scrollLeft: number;
// }
const SwipableSlider = ({ data, style }: swipableSliderProps) => {
  const [sldrItemIndx, setSldrItemIndx] = useState<number>(0);
  const [initX, setInitX] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const nxtitemHndlr = () => {
    setSldrItemIndx((prvState) => {
      if (prvState === data?.products.length - 1) {
        return 0;
      }
      return prvState + 1;
    });
  };
  const prvitemHndlr = () => {
    setSldrItemIndx((prvState) => {
      if (prvState === 0) {
        return data?.products.length - 1;
      }
      return prvState - 1;
    });
  };
  const sldrContRef = useRef<HTMLDivElement>(null);
  const onMouseDownHndlr = (e: React.MouseEvent) => {
    setInitX(e.clientX);
    setIsMouseDown(true);
  };
  const onMouseMoveHndlr = (e: React.MouseEvent) => {
    if (!isMouseDown || !sldrContRef.current) return;
    e.preventDefault();
    const updateX = (e.clientX - initX) * 0.115;
    sldrContRef.current.scrollLeft = scrollLeft - updateX;
  };
  const onMouseUpHndlr = () => {
    setIsMouseDown(false);
  };
  const onScrollHndlr = () => {
    setScrollLeft(sldrContRef.current?.scrollLeft || scrollLeft);
  };

  return (
    <>
      <div className={`col-md-12 ${classes.swpsld_mcont}`}>
        <div
          ref={sldrContRef}
          onMouseDown={(e) => {
            onMouseDownHndlr(e);
          }}
          onMouseMove={(e) => {
            onMouseMoveHndlr(e);
          }}
          onMouseUp={onMouseUpHndlr}
          onScroll={onScrollHndlr}
          className={`row ${classes.swpsld_mrow}`}
        >
          {data?.products.map((prd: dataInterFace) => (
            <div
              key={prd.id}
              className={`col-12 col-md-8 ${classes.slditem_mcont}`}
              style={{ translate: `${-100 * sldrItemIndx}%` }}
              //className={`col-12 col-md-8 ${classes.slditem_mcont}`}
              // className={
              //   sldrItemIndx === indx
              //     ? `col-12 col-md-8 ${classes.slditem_mcont_active}`
              //     : `col-12 col-md-8 ${classes.slditem_mcont}`
              // }
            >
              <SwpSliderItem {...prd} />
            </div>
          ))}
        </div>
      </div>
      <div className={`col-md-12 ${classes.slbuts_sec}`}>
        <button className="btn-success" onClick={prvitemHndlr}>
          prv
        </button>
        <button className="btn-primary" onClick={nxtitemHndlr}>
          next
        </button>
      </div>
    </>
  );
};
export default SwipableSlider;
