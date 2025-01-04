import { dataInterFace } from "../../home/main/MainHome";
import classes from "./SwpSliderItem.module.css";
import IntrscObserver from "../../ui/IntrscObserver";
const SwpSliderItem = ({ title, images, category, price }: dataInterFace) => {
  return (
    <div className={`col-12 ${classes.prdslitmcol}`}>
      <div className={`row ${classes.prjctslitm_mrow} m-0`}>
        <div className="col-md-12">
          <div className="row m-0">
            <IntrscObserver
              styleClasses={`col-md-12 imgrvlsl_imgcol imgrvl_btt ${classes.prdslitm_imgcol}`}
              elmType="img"
            >
              <img
                alt={title}
                className={`${classes.prdslitm_img} imgrvl_slitm_img res_img`}
                src={images[0]}
              />
            </IntrscObserver>
          </div>
        </div>
        <div className={`col-md-12 ${classes.cndsite_pr_txtmcol}`}>
          <div className="row m-0">
            <IntrscObserver
              styleClasses="col-md-12 tit_col txt_rvlwrp txt_bx"
              elmType="text"
            >
              <h6
                className={`txt_upstyl mb-0 font18 txt_rvl ${classes.prdSl_tit}`}
              >
                {title}
              </h6>
            </IntrscObserver>

            <div className={`col-md-12 ${classes.cndsite_pr_dtcol} pt-2`}>
              <p className={` mb-2 font13`}>{category}</p>
            </div>
            <div className={`col-md-12 ${classes.cndsite_pr_dtcol}`}>
              <span className={`d-block txt_upstyl font12 `}>$ {price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwpSliderItem;
