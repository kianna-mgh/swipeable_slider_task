import { DataInterFace } from "../../home/main/MainHome";
import classes from "./SwpSliderItem.module.css";
import IntrscObserver from "../../ui/IntrscObserver";
import { PiBowlFood } from "react-icons/pi";

import { RiTimerLine } from "react-icons/ri";

const SwpSliderItem = ({
  name,
  image,
  cookTimeMinutes,
  cuisine,
  servings,
}: DataInterFace) => {
  return (
    <div className={`col-12 ${classes.prdslitmcol}`}>
      <div className={`row ${classes.prjctslitm_mrow} m-0`}>
        <IntrscObserver
          styleClasses={`col-md-12 imgrvlsl_imgcol imgrvl_btt ${classes.prdslitm_imgcol}`}
          elmType="img"
        >
          <img
            alt={name}
            className={`${classes.prdslitm_img} imgrvl_slitm_img res_img`}
            src={image}
          />
        </IntrscObserver>

        <div className={`col-md-12 ${classes.cndsite_pr_txtmcol} txt_white`}>
          <div className="row m-0">
            <IntrscObserver
              styleClasses="col-md-12 tit_col txt_rvlwrp txt_bx"
              elmType="text"
            >
              <h6
                className={`txt_upstyl mb-0 font30 txt_rvl ${classes.prdSl_tit}`}
              >
                {name}
              </h6>
            </IntrscObserver>

            <div className={`col-md-12 ${classes.cndsite_pr_dtcol} pt-2`}>
              <p className={` mb-2 font16 txt_gray`}>{cuisine}</p>
            </div>
            <div className={`col-md-12  ${classes.cndsite_pr_dtcol}`}>
              <span className={`txt_upstyl font14 gap-3`}>
                <PiBowlFood size={15} fill="white" /> servings {servings}
              </span>
              <span className={` txt_upstyl font14 gap-3`}>
                <RiTimerLine size={15} fill="white" /> {cookTimeMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwpSliderItem;
