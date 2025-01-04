import SwipableSlider from "../../swipable_slider/SwipableSlider";
import { useQuery } from "@tanstack/react-query";
import { getPrdsData } from "../../../lib/util/api";

export interface dataInterFace {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sk: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}
const MainHome = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getPrdsData("https://dummyjson.com/products"),
  });
  console.log(data);
  return (
    <div className="container-fluid main_cont">
      <div className="row main_mrow">
        <div className="col-12 main_mcol">
          <div
            className="row sld_rowsec"
            style={{ color: "white", fontSize: "40px" }}
          >
            <SwipableSlider data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHome;
