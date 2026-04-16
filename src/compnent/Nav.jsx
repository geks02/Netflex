// import React from "react";
// import bgimg from "../assets/bannerbg.jpg"
// import { useEffect } from "react";

// const Nav = () => {

//   const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "en",
//         autoDisplay: false,
//       },
//       "google_translate_element",
//     );
//   };
//   useEffect(() => {
//     var addScript = document.createElement("script");
//     addScript.setAttribute(
//       "src",
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
//     );
//     document.body.appendChild(addScript);
//     window.googleTranslateElementInit = googleTranslateElementInit;
//   }, []);

//   <div id="google_translate_element"></div>;
//   return (
//     <>
//       <div className="relative h-180 min-w-screen px-32 py-5 bg-black text-white z-10" >
//         <div  className="absolute inset-0 bg-center bg-cover opacity-20 z-0 " style={{backgroundImage:`url(${bgimg})`}}>

//         </div>
//         <div className="parent z-10 relative">
//             <div className="flex justify-between items-center  ">
//           <div className="text-4xl font-bold text-red-600">NETFLEX</div>
//           <div className="flex  ">
//             <div>
//               <select
//                 className="pr-25 border p-1 mr-2 border-gray-500 "
//                 name=""
//                 id="google_translate_element"
//               >
//                 <option className="text-black" value="English">
//                   English
//                 </option>
//                 <option className="text-black" value="Arabic">
//                   Arabic
//                 </option>
//               </select>
//             </div>
//             <button className="bg-red-600 px-5 py-1 rounded">Sign In</button>
//           </div>
//         </div>
//         <div className="py-30 flex flex-col items-center">
//           <div className="text-6xl font-bold w-150 text-center">
//             Unlimited films, series and more
//           </div>
//           <div className="py-5 font-bold text-2xl">
//             Starts at ₹149. Cancel at any time.
//           </div>
//           <p>
//             Ready to watch? Enter your email to create or restart your
//             membership.
//           </p>
//           <div className="py-5">
//             <input className=" border p-2 border-gray-500 pr-30 mr-5" type="text" placeholder="Email Address" />
//             <button className="bg-red-600 p-2 px-5 rounded" >Get Started</button>
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;
// import React, { useEffect } from "react";
// import bgimg from "../assets/bannerbg.jpg";

// const Nav = () => {
//   const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "en",
//         includedLanguages: "en,ar", // Restrict to English and Arabic to match your UI
//         autoDisplay: false,
//       },
//       "google_translate_element"
//     );
//   };

//   useEffect(() => {
//     if (!document.querySelector('script[src*="translate.google.com"]')) {
//       var addScript = document.createElement("script");
//       addScript.setAttribute(
//         "src",
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//       );
//       document.body.appendChild(addScript);
//       window.googleTranslateElementInit = googleTranslateElementInit;
//     }
//   }, []);

//   // Function to handle custom dropdown change
//   const handleLanguageChange = (e) => {
//     const selectedLanguageCode = e.target.value;

//     // Find the hidden Google Translate select element
//     const googleTranslateSelect = document.querySelector(".goog-te-combo");

//     if (googleTranslateSelect) {
//       // Set the hidden select to our chosen language
//       googleTranslateSelect.value = selectedLanguageCode;
//       // Trigger the change event so Google knows to translate the page
//       googleTranslateSelect.dispatchEvent(new Event("change"));
//     }
//   };

//   return (
//     <>
//       {/* Hide the default Google Translate element completely.
//         It still needs to be in the DOM to work, just invisible!
//       */}
//       <div id="google_translate_element" style={{ display: "none" }}></div>

//       <div className="relative h-[45rem] min-w-screen px-32 py-5 bg-black text-white z-10">
//         <div
//           className="absolute inset-0 bg-center bg-cover opacity-20 z-0"
//           style={{ backgroundImage: `url(${bgimg})` }}
//         ></div>

//         <div className="parent z-10 relative">
//           <div className="flex justify-between items-center">
//             <div className="text-4xl font-bold text-red-600">NETFLEX</div>
//             <div className="flex items-center">

//               <div>
//                 {/* Linked the onChange event here */}
//                 <select
//                   className="pr-8 border p-1 mr-2 border-gray-500 bg-transparent text-white"
//                   name="language"
//                   id="languageSelect"
//                   onChange={handleLanguageChange}
//                 >
//                   {/* Values must be the language codes ('en', 'ar') */}
//                   <option className="text-black" value="en">
//                     English
//                   </option>
//                   <option className="text-black" value="ar">
//                     Arabic
//                   </option>
//                 </select>
//               </div>
//               <button className="bg-red-600 px-5 py-1 rounded">Sign In</button>
//             </div>
//           </div>

//           <div className="py-[7.5rem] flex flex-col items-center">
//             <div className="text-6xl font-bold w-[38rem] text-center">
//               Unlimited films, series and more
//             </div>
//             <div className="py-5 font-bold text-2xl">
//               Starts at ₹149. Cancel at any time.
//             </div>
//             <p className="text-lg">
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </p>
//             <div className="py-5 flex w-full justify-center">
//               <input
//                 className="border p-3 border-gray-500 w-96 mr-2 bg-black/50 text-white rounded-sm"
//                 type="email"
//                 placeholder="Email Address"
//               />
//               <button className="bg-red-600 p-3 px-6 rounded-sm text-xl font-bold">
//                 Get Started {'>'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;

import React from "react";
import bgimg from "../assets/bannerbg.jpg";
import LanguageSelector from "./LanguageSelector";

const Nav = () => {
  return (
    <div className="relative h-[45rem] min-w-screen px-32 py-5 bg-black text-white z-10">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 z-0"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>

      <div className="parent z-10 relative">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold text-red-600">NETFLEX</div>
          <div className="flex items-center">
            {/* Ye raha aapka separate kiya hua Translator */}
            <LanguageSelector />

            <button className="bg-red-600 px-5 py-1 rounded">Sign In</button>
          </div>
        </div>

        <div className="py-[7.5rem] flex flex-col items-center">
          <div className="text-6xl font-bold w-[38rem] text-center">
            Unlimited films, series and more
          </div>
          <div className="py-5 font-bold text-2xl">
            Starts at ₹149. Cancel at any time.
          </div>
          <p className="text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="py-5 flex w-full justify-center">
            <input
              className="border p-3 border-gray-500 w-96 mr-2 bg-black/50 text-white rounded-sm"
              type="email"
              placeholder="Email Address"
            />
            <button className="bg-red-600 p-3 px-6 rounded-sm text-xl font-bold">
              Get Started {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
