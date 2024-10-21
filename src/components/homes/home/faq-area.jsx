import React from 'react';
import Image from 'next/image';
import answer_question_data from '@/src/data/answer-question-data';
import shape_1 from  "@assets/img/support/shape-img.png";
import shape_2 from  "@assets/img/support/shape-bg.png";
import LineArrowTwo from '@/src/svg/line-arrow-2';

const FaqArea = ({data, title}) => {
    return (
        <>
            <section className="tp-support-area tp-support-bg p-relative pb-110 mt-80">
            <div className="container container-large">
               <div className="tp-support-shape">
                  <Image className="shape-1" src={shape_1} alt="theme-pure" />
                  <Image className="shape-2" src={shape_2} alt="theme-pure" />
               </div>
               <div className="row justify-content-center">
                  <div className="col-xxl-8 col-xl-10">
                     <div className="tp-support-title-wrapper text-center">
 
                        <h3 className="tp-section-title">{title[0]} <span className="title-color">{title[1]}</span>
                           <span className="title-center-shape">
                            <LineArrowTwo /> 
                           </span>
                        </h3>
                     </div>

                     <div className="tp-support-faq faq-style-1">
                        <div className="tp-faq-tab-content tp-accordion">
                           <div className="accordion" id="general_accordion">
                            {data.map((item, i) => 
                                <div key={i} className={`accordion-item`}>
                                    <h2 className="accordion-header" id={`heading${i}`}>
                                    <button 
                                    className={`accordion-button ${i === 1 ? "" : "collapsed"}`} 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target={`#collapse${i}`} 
                                    aria-controls={`collapse${i}`}
                                    >
                                        {item.title}
                                    </button>
                                    </h2>
                                    <div 
                                    id={`collapse${i}`} 
                                    className={`accordion-collapse collapse ${i === 1 ? "show" : ""}`} 
                                    aria-labelledby={`heading${i}`} 
                                    data-bs-parent="#general_accordion"
                                    >
                                    <div className="accordion-body">
                                        <p>{item.text}</p>
                                    </div>
                                    </div>
                                </div> 
                            )} 
                            </div> 
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default FaqArea;