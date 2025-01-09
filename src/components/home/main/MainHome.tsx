import SwipableSlider from "../../swipable_slider/SwipableSlider";
import { useQuery } from "@tanstack/react-query";
import { getPrdsData } from "../../../lib/util/api";

// export interface dataInterFace {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   tags: string[];
//   brand: string;
//   sk: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: string[];
//   thumbnail: string;
// }
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
  const { data } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getPrdsData("https://dummyjson.com/recipes?limit=8"),
  });
  console.log(data);
  return (
    <div className="container-fluid main_cont">
      <div className="row main_mrow h-100">
        <div className="col-12 main_mcol m-auto">
          <div className="row sld_rowsec justify-content-center">
            <div className="col-8">
              {data && (
                <SwipableSlider data={data} arrows={true} autoSliding={false} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHome;
