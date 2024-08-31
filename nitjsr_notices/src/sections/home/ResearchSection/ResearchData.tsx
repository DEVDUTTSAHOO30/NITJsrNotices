// import React, { useState, useEffect, useCallback } from "react";
// import { useParams } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
// import { mainTheme } from "../../../theme/main";
// import { ResetCSS } from "../../../assets/css/style";
// import {
//   GlobalStyle,
//   CharityWrapper,
//   ContentWrapper,
// } from "../../../assets/css/Main/main.style";
// import Sticky from "react-stickynode";
// import { DrawerProvider } from "../../../contexts/DrawerContext";
// import Navbar from "../../../Components/Layout/PagesNavbar";
// import DrawerSection from "../../../Components/Layout/DrawerSection";
// import Footer from "../../../Components/Layout/Footer";
// import { Container } from "react-bootstrap";
// import { getRequest } from "../../../functions/request";
// import RecentResearch from "./RecentResearch";
// import logo from "../../../assets/images/invalid_image.png";
// // import img1 from './images/research/r1.webp';
// // import img2 from './images/research/r2.jpg';
// import { BACKEND_URL } from "../../../assets/Constants";
// const ResearchData = () => {
//   const rid = useParams().researchId;
//   const [research, setResearch] = useState({});
//   const [screen, setScreen] = useState("");
//   // const [imageLink, setImageLink] = useState(["https://ars.els-cdn.com/content/image/1-s2.0-S0032591014005786-gr8.jpg", "https://ars.els-cdn.com/content/image/1-s2.0-S0921883120305513-gr3.jpg", "https://ars.els-cdn.com/content/image/1-s2.0-S0921883120305513-ga1.jpg", "https://ars.els-cdn.com/content/image/1-s2.0-S0921883120305513-gr4.jpg","https://ars.els-cdn.com/content/image/1-s2.0-S2238785420320937-gr3.jpg"])

//   const getResearch = useCallback(async () => {
//     let res = await getRequest(`/publications/view?id=${rid}`);
//     let data = res.data;
//     setResearch(data.result);
//   }, [rid]);

//   useEffect(getResearch, [getResearch]);

//   useEffect(() => {
//     let direction = window.innerWidth > 768 ? "row" : "column";
//     setScreen(direction);
//   }, []);

//   // const getImageLink = (title) =>{
//   //   // let info = title.toString();
//   //   // if(info[0]=='I'){
//   //   //   return imageLink[0];
//   //   // }
//   //   // else if(info[0]=='M'){
//   //   //   return imageLink[1];
//   //   // }
//   //   // else if(info[0]=='L'){
//   //   //   return imageLink[2];
//   //   // }
//   //   // else if(info[0]=='E'){
//   //   //   return imageLink[3];
//   //   // }
//   //   // else {
//   //   //   return imageLink[4];
//   //   // }
//   //   // console.log("this is ===>>>","vv",title);
//   // }

//   return (
//     <ThemeProvider theme={mainTheme}>
//       <ResetCSS />
//       <GlobalStyle />
//       <CharityWrapper>
//         <Sticky top={0} innerZ={9999} activeclassName="sticky-nav-active">
//           <Navbar />
//         </Sticky>
//         <DrawerProvider>
//           <DrawerSection />
//         </DrawerProvider>
//         <ContentWrapper key={rid}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               margin: "30px 0",
//               flexDirection: screen,
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 flexDirection: screen,
//               }}
//             >
//               <div
//                 style={{
//                   width: window.innerWidth > 768 ? "60%" : "100%",
//                   boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
//                   marginBottom: window.innerWidth > 768 ? "" : "50px",
//                   backgroundColor: "rgb(255,255,255)",
//                 }}
//               >
//                 <Container>
//                   <div
//                     style={{
//                       backgroundColor: "rgb(255,255,255)",
//                       textAlign: "center",
//                       padding: "10px 10px",
//                     }}
//                   >
//                     <h2>
//                       <strong>{research.title}</strong>
//                     </h2>
//                     <hr />

//                     <span>
//                       <h4 style={{ color: "red" }}>{research.journal}</h4>
//                       <span style={{ color: "red" }}>({research.authors})</span>
//                     </span>
//                     {/* <p
//                       style={{
//                         textAlign: window.innerWidth > 768 ? "left" : "center",
//                       }}
//                     >
//                       {research.info}
                      
//                     </p> */}
//                     <p
//                       style={{
//                         backgroundColor: "white",
//                         maxWidth: "100%",
//                       }}
//                       dangerouslySetInnerHTML={{
//                         __html: research.info ? research.info : "<span></span>",
//                       }}
//                     ></p>
//                     <img
//                       key={rid}
//                       src={
//                         research?.image
//                           ? `${BACKEND_URL}/${research.image}`
//                           : logo
//                       }
//                       alt=""
//                       style={{
//                         width: "min(100%,30rem)",
//                         marginBottom: "10px",
//                       }}
//                       onError={({ currentTarget }) => {
//                         currentTarget.onerror = null; // prevents looping
//                         currentTarget.src = logo;
//                       }}
//                     />
//                     <p>{research.image_caption}</p>
//                     <p style={{ textAlign: "left" }}>
//                       For more details please refer:{" "}
//                       <a
//                         href={research.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <span style={{ wordWrap: "break-word" }}>
//                           {research.link}
//                         </span>
//                       </a>
//                     </p>
//                   </div>
//                 </Container>
//               </div>
//               <div
//                 style={{
//                   width: window.innerWidth > 768 ? "20%" : "100%",
//                   marginBottom: window.innerWidth > 768 ? "" : "50px",
//                 }}
//               >
//                 <Container>
//                   <div style={{ backgroundColor: "rgb(255,255,255)" }}>
//                     <RecentResearch />
//                   </div>
//                 </Container>
//               </div>
//             </div>
//           </div>
//         </ContentWrapper>

//         <Footer />
//       </CharityWrapper>
//     </ThemeProvider>
//   );
// };

// export default ResearchData;
