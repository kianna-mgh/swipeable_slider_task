import { useElmObserver } from "../../lib/hooks/customeHooks";
interface IntrscObserverInterface {
  children: React.ReactNode;
  elmType: string;
  styleClasses: string;
}
const IntrscObserver = ({
  children,
  elmType,
  styleClasses,
}: IntrscObserverInterface) => {
  const ref = useElmObserver(0, 0.4, elmType);
  return (
    <div ref={ref} className={styleClasses}>
      {children}
    </div>
  );
};

export default IntrscObserver;
