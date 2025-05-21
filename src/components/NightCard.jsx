// const NightCard = ({ date, loc, temp, condition, loading, weather }) => {
//   if (loading || !weather) {
//     return (
//       <div className="flex items-center justify-center h-screen text-white">
//         Loading...
//       </div>
//     );
//   }
//   return (
//     <div className="relative">
//       <div className="relative w-[414px] h-[832px] rounded-[48px] bg-[#111827]/75 backdrop-blur-md px-10 py-8 z-20">
//         <div className="flex justify-between items-center">
//           <div>
//             <p className="text-[#9CA3AF] text-lg font-medium"> {date}</p>
//             <p className="text-white text-5xl font-extrabold">{loc}</p>
//           </div>
//           <img src="localization_icon.svg" alt="pin" />
//         </div>

//         <div className="flex justify-center items-center py-10">
//           <img src="moon.png" alt="moon" width={260} height={260} />
//         </div>

//         <div>
//           <p className="text-[144px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[rgba(249,250,251,0)] bg-clip-text text-transparent">
//             {temp}
//           </p>
//           <p className="text-[#777CCE] font-extrabold text-2xl">{condition}</p>
//         </div>

//         <div className="flex justify-between pt-12">
//           <img src="home.svg" alt="home" />
//           <img src="pin.svg" alt="pin" />
//           <img src="heart.svg" alt="heart" />
//           <img src="user.svg" alt="user" />
//         </div>
//       </div>

//       <div className="absolute -right-14 -bottom-12 w-[128px] min-w-[64px] z-10">
//         <img src="purple.svg" alt="purple" className="w-full h-auto" />
//       </div>
//     </div>
//   );
// };

// export default NightCard;
