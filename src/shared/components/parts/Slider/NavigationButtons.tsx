// import { IconRightArray } from "@/components/ui/icons/svg/IconRightArray";
// import { FC } from "react";
// import "./Slider.css";

// interface INavigationButtons {
//   sliderRef: React.RefObject<any>;
// }

// export const NavigationButtons: FC<INavigationButtons> = ({ sliderRef }) => {
//   const handleNext = () => {
//     if (sliderRef.current && sliderRef.current.swiper) {
//       sliderRef.current.swiper.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (sliderRef.current && sliderRef.current.swiper) {
//       sliderRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <div className="custom-navigation">
//       <button
//         onClick={handlePrev}
//         className="slider-button prev"
//         title={"Предыдущая"}
//         aria-label={"Предыдущая"}
//       >
//         <IconRightArray />
//         <span className={"hidden"}>Предыдущая</span>
//       </button>
//       <button
//         onClick={handleNext}
//         className="slider-button next"
//         title={"Следующая"}
//         aria-label={"Следующая"}
//       >
//         <IconRightArray />
//         <span className={"hidden"}>Следующая</span>
//       </button>
//     </div>
//   );
// };
