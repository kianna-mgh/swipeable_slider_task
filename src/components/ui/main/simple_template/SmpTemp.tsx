import classes from "./SmpTemp.module.css";
interface SmpTempInterface {
  children?: React.ReactNode;
  stylClasses?: string;
}
const SmpTemp = ({ children, stylClasses }: SmpTempInterface) => {
  return (
    <div className={`col-12 ${classes.tmpl_mcol} ${stylClasses}`}>
      <div className={`row m-0  ${stylClasses}`}>{children}</div>
    </div>
  );
};
export default SmpTemp;
