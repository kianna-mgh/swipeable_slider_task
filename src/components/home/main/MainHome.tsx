import SwipableSlider from "../../swipable_slider/SwipableSlider";
import { useQuery } from "@tanstack/react-query";
import { getPrdsData } from "../../../lib/util/api";
import SmpTemp from "../../ui/main/simple_template/SmpTemp";

export interface DataInterFace {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}
const MainHome = () => {
  const { data, isPending } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getPrdsData("https://dummyjson.com/recipes?limit=8"),
  });
  const SliderSec = () => {
    if (isPending) return <SmpTemp stylClasses={"plchldr_anim plchld_col"} />;
    return <SwipableSlider data={data} arrows={true} autoSliding={false} />;
  };
  return (
    <div className="container-fluid main_cont">
      <div className="row main_mrow h-100">
        <div className="col-12 main_mcol m-auto">
          <div className="row sld_rowsec justify-content-center">
            <div className="col-10 col-md-8">
              <SliderSec />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHome;
