import { DataInterFace } from "../../home/main/MainHome";
import classes from "./UiCmpStyles.module.css";
interface SwpSliderNavsInterface {
  slides: DataInterFace[];
  setSldrItemIndx: (indx: number) => void;
  sldrItemIndx: number;
}
const SwpSliderPagination = ({
  slides,
  setSldrItemIndx,
  sldrItemIndx,
}: SwpSliderNavsInterface) => {
  return (
    <div className={`row m-0 ${classes.sl_pagination_sec}`}>
      <div className="col-12">
        <div className="row m-0 justify-content-center">
          <ul className={`list-inline ${classes.sl_pagination_indtrs_ul}`}>
            {slides?.map((_, indx) => (
              <li
                className={`list-inline-item ${classes.sl_pagination_indtr_li}`}
              >
                <button
                  onClick={() => setSldrItemIndx(indx)}
                  type="button"
                  className={
                    indx === sldrItemIndx
                      ? `${classes.sl_pagination_indtr_but} ${classes.active}`
                      : classes.sl_pagination_indtr_but
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SwpSliderPagination;
