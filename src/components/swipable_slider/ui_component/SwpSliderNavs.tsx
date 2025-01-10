import classes from "./UiCmpStyles.module.css";
interface SwpSliderNavsInterface {
  prvHandler: () => void;
  nxtHandlr: () => void;
  haveLoop: boolean;
  sldrItemIndx: number;
  sldsLenght: number;
}
const SwpSliderNavs = ({
  prvHandler,
  nxtHandlr,
  haveLoop,
  sldrItemIndx,
  sldsLenght,
}: SwpSliderNavsInterface) => {
  if (haveLoop) {
    return (
      <div className={`${classes.slbuts_sec}`}>
        <button
          className={`${classes.sl_buts} ${classes.sl_butprv}`}
          onClick={prvHandler}
        >
          <svg viewBox="0 0 40 40" width="40" height="40" focusable="false">
            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
          </svg>
        </button>
        <button
          className={`${classes.sl_buts} ${classes.sl_butnxt}`}
          onClick={nxtHandlr}
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
    );
  }
  return (
    <div className={`${classes.slbuts_sec}`}>
      <button
        className={
          sldrItemIndx === 0
            ? `${classes.sl_buts} ${classes.sl_butprv} ${classes.sl_but_dis}`
            : `${classes.sl_buts} ${classes.sl_butprv}`
        }
        onClick={prvHandler}
        disabled={sldrItemIndx === 0}
      >
        <svg viewBox="0 0 40 40" width="40" height="40" focusable="false">
          <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
        </svg>
      </button>
      <button
        className={
          sldrItemIndx === sldsLenght - 1
            ? `${classes.sl_buts} ${classes.sl_butnxt} ${classes.sl_but_dis}`
            : `${classes.sl_buts} ${classes.sl_butnxt}`
        }
        onClick={nxtHandlr}
        disabled={sldrItemIndx === sldsLenght - 1}
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
  );
};
export default SwpSliderNavs;
