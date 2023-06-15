// const changeAnimation = ({ className, from, to }) => {
//     let arrElement = document.getElementsByClassName(className);
//     if (arrElement) {
//         for (var i = 0; i < arrElement.length; i++) {
//             arrElement[i].classList.toggle(from);
//             arrElement[i].classList.toggle(to);
//         }
//     }
// }

// const formatPrice = (price) => {
//     return Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
//       price
//     );
// }

const PRODUCT_EACH_PAGE = 5;
const COLLECTION_DISPLAY_NUMBER = 5;
const PRODUCT_DISPLAY_NUMBER = 4;
const PRODUCT_SHOW_IN_SEARCH = 3;

export { PRODUCT_EACH_PAGE, COLLECTION_DISPLAY_NUMBER, PRODUCT_DISPLAY_NUMBER, PRODUCT_SHOW_IN_SEARCH }