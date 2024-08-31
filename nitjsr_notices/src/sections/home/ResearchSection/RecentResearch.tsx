// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getRequest } from "../../../functions/request";
// import logo from "../../../assets/images/invalid_image.png";

// const RecentResearch = () => {
//   const [researchData, setResearchData] = useState();
//   const [imageLink] = useState(["https://ars.els-cdn.com/content/image/1-s2.0-S0032591014005786-gr8.jpg", "https://ars.els-cdn.com/content/image/1-s2.0-S0921883120305513-gr3.jpg", "https://ars.els-cdn.com/content/image/1-s2.0-S0921883120305513-ga1.jpg", "https://ars.els-cdn.com/content/image/1-s2.0-S0921883120305513-gr4.jpg"])

//   useEffect(() => {
//     const getResearchData = async () => {
//       let res = await getRequest("/publications/recent");
//       let data = res.data;
//       setResearchData(data);
//     };
//     getResearchData();
//   }, []);
//   return (
//     <ul style={{ boxShadow: "0 1rem 3rem rgba(0,0,0,.175)" }}>
//       <li>
//         <h3
//           style={{
//             color: "#444",
//             fontSize: "20px",
//             fontWeight: "400",
//             borderBottom: "1px solid #eee",
//             margin: "2px",
//             backgroundColor: "rgb(255,255,255)",
//             padding: "19px 15px",
//           }}
//         >
//           Recent Research
//         </h3>
//       </li>
//       {researchData
//         ? researchData.result.map((data, i) => {
//           return (
//             <li key={i}>
//               <Link
//                 to={`/researchData/${data.id}`}
//                 style={{
//                   borderBottom: "1px solid #eee",
//                   display: "flex",
//                   padding: "10px 15px",
//                 }}
//                 onError={({ currentTarget }) => {
//                   currentTarget.onerror = null; // prevents looping
//                   currentTarget.src = logo;
//                 }}
//               >

//                 <img
//                   src={imageLink[i]}
//                   alt=""
//                   style={{
//                     width: "5rem",
//                     height: "3rem",
//                     marginRight: "15px",
//                   }}
//                 />
//                 <h5
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: 400,
//                     lineHeight: "2.1",
//                     textAlign: "left",
//                   }}
//                 >
//                   {data.title}
//                 </h5>
//               </Link>
//             </li>
//           );
//         })
//         : null}
//     </ul>
//   );
// };

// export default RecentResearch;
