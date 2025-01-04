"use client";
import { useRouter } from "next/navigation";
import classes from "./BackBut.module.css";

const BackBut = () => {
  const router = useRouter();
  const backHndlr = () => {
    router.back();
  };
  return (
    <div class={`col-2 ${classes.btn_cuscrvsm}`} onClick={backHndlr}>
      <div class="row m-0 justify-content-center ">
        <div class="col-12 p-0">
          <svg
            class="btn_svg res_img"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            />
            <path
              fill="#ffffff"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default BackBut;
