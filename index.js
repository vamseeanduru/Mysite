// const handleFirstTab = (e) => {
//   if (e.key === 'Tab') {
//     document.body.classList.add('user-is-tabbing')
//
//     window.removeEventListener('keydown', handleFirstTab)
//     window.addEventListener('mousedown', handleMouseDownOnce)
//   }
//
// }
//
// const handleMouseDownOnce = () => {
//   document.body.classList.remove('user-is-tabbing')
//
//   window.removeEventListener('mousedown', handleMouseDownOnce)
//   window.addEventListener('keydown', handleFirstTab)
// }
//
// window.addEventListener('keydown', handleFirstTab)
//
// const backToTopButton = document.querySelector(".back-to-top");
// let isBackToTopRendered = false;
//
// };
//
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 700) {
//     isBackToTopRendered = true;
//     alterStyles(isBackToTopRendered);
//   } else {
//     isBackToTopRendered = false;
//     alterStyles(isBackToTopRendered);
//   }
// });
