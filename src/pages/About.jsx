import React from 'react';
import AboutImg from ".././assets/AboutImg.jpeg"
const About = () => {
  return (
//     <div className="bg-green-100 min-h-screen flex items-center justify-center">
//       <div className="max-w-2xl p-8 bg-white shadow-md rounded-md flex">
//         <div className="flex-1">
//           <h2 className="text-3xl font-semibold mb-4">About Us</h2>
//           <p className="text-gray-700 mb-4">
//           पिछले १० वर्ष से पर्यावरण संरक्षण को लेकर कार्य कर रहे है ।
// -अभी तक 18000 हज़ार से अधिक स्कूल , कॉलेज , विश्वविद्यालय , गाँव  में  पार्यवरण संरक्षण को लेकर चर्चा किया है । 
// -१० लाख से अधिक युवा साथियों से पर्यावरणसंरक्षण पर संवाद कर चुके है 
// -ढाईलाख से अधिक पौधा रोपण कर चुके है , बिना किसी सरकारी या ग़ैरसरकारी संस्थान के सहयोग से बहुत सारे अभियान को लगातार चला रहे है । 
//           </p>
//           <p className="text-gray-700 mb-4">
//           लेकिन ३ प्रमुख अभियान जिसमे २ पूर्ण हुआ है । १ अभी बाक़ी है 


// जिसको हम  तीन बड़े अभियान के रूप में जानते है ।
// १-  संकल्प125000 के नाम से चलाये अभियान में पूर्वीउत्तर प्रदेश के २४ ज़िले बिहार और नेपाल की यात्रा कर सवा लाख फलदार पौधा लगाया , जिसमे गौशाला , संस्थान , विद्यालय और , गाँव शामिल था , 
//           </p>
//           <p className="text-gray-700 mb-4">
//           पर्यावरण जागरूकता को लेकर पूरे भारत वर्ष की साइकिल से यात्रा किया , 28 राज्य की यात्रा २०००० हज़ार किलो मीटर की यात्रा किया , ३५० से अधिकसमचार पत्रों ने खबर लिखा ,
// ५० से अधिक टीवी चैनल और २० से अधिक रेडियो चैनल ने यात्रा को प्रमुखता दिया , 
// ३ सईबचाओ अभियान , अभी जनवरी से शुरू होने वाला अभियान
//           </p>
//         </div>
//         <div className="flex-1 ml-4">
//           {/* Add your image source and any additional styling here */}
//           <img
//           src={AboutImg}
//             alt="About Us Image"
//             className="w-full h-auto rounded-md"
//           />
//         </div>
//       </div>
//     </div>
<section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
<div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
    <div className="flex flex-wrap ">
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                        About Us
                    </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                पिछले १० वर्ष से पर्यावरण संरक्षण को लेकर कार्य कर रहे है ।
 -अभी तक 18000 हज़ार से अधिक स्कूल , कॉलेज , विश्वविद्यालय , गाँव  में  पार्यवरण संरक्षण को लेकर चर्चा किया है । 
 -१० लाख से अधिक युवा साथियों से पर्यावरणसंरक्षण पर संवाद कर चुके है 
 -ढाईलाख से अधिक पौधा रोपण कर चुके है , बिना किसी सरकारी या ग़ैरसरकारी संस्थान के सहयोग से बहुत सारे अभियान को लगातार चला रहे है ।
 लेकिन ३ प्रमुख अभियान जिसमे २ पूर्ण हुआ है । १ अभी बाक़ी है जिसको हम  तीन बड़े अभियान के रूप में जानते है ।
१-  संकल्प125000 के नाम से चलाये अभियान में पूर्वीउत्तर प्रदेश के २४ ज़िले बिहार और नेपाल की यात्रा कर सवा लाख फलदार पौधा लगाया , जिसमे गौशाला , संस्थान , विद्यालय और , गाँव शामिल था , 
                </p>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                        <div className="p-6 bg-white dark:bg-gray-900">
                            <span className="text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                    fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                    <path
                                        d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                </svg>
                            </span>
                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">2097
                            </p>
                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Projects and Plans</h2>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                        <div className="p-6 bg-white dark:bg-gray-900">
                            <span className="text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                    fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd"
                                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </svg>
                            </span>
                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">3,590
                            </p>
                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Helped people</h2>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                        <div className="p-6 bg-white dark:bg-gray-900">
                            <span className="text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                    fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </span>
                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">74
                            </p>
                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Volunteer</h2>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                        <div className="p-6 bg-white dark:bg-gray-900">
                            <span className="text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                    fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                </svg>
                            </span>
                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">100
                            </p>
                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Timing</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img src={AboutImg} alt=""
               className="relative z-40 object-cover w-full h-full rounded" />
        </div>
    </div>
</div>
</section>
  );
};

export default About;
