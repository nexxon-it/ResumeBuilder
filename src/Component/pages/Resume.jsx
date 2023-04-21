import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsPhone } from "react-icons/bs";
import { SlGlobe } from "react-icons/sl";
import Tag from "./Tag";
const Resume = () => {
   return (
      <div
         className="border rounded"
         style={{ minHeight: "400px", backgroundColor: "white" }}
      >
         <div className="d-flex justify-content-between p-3 border-bottom">
            <div>
               <h3>Niraj Kumar</h3>
               <p>Full Stack Developer</p>
            </div>
            <div>
               <table>
                  <tbody>
                     <tr>
                        <td style={{ textAlign: "end" }}>9453800108</td>
                        <td style={{ paddingLeft: 10 }}>
                           <BsPhone />
                        </td>
                     </tr>
                     <tr>
                        <td style={{ textAlign: "end" }}>
                           n1r4jkumar@gmail.com
                        </td>
                        <td style={{ paddingLeft: 10 }}>
                           <HiOutlineEnvelope />
                        </td>
                     </tr>
                     <tr>
                        <td style={{ textAlign: "end" }}>
                           C171, New Ashok Nagar, Delhi 110018
                        </td>
                        <td style={{ paddingLeft: 10 }}>
                           <CiLocationOn />
                        </td>
                     </tr>
                     <tr>
                        <td style={{ textAlign: "end" }}>
                           https://nirajkumar.in
                        </td>
                        <td style={{ paddingLeft: 10 }}>
                           <SlGlobe />
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div className="row justify-content-between">
            <div className="col-8 border-end">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
               doloremque facere, sed distinctio accusamus, commodi consectetur
               ipsa ex et, consequuntur qui optio sunt. Ad rem inventore
               repellendus, aperiam at illum atque et, corporis perferendis hic
               minus non ipsam quasi qui fugit, autem pariatur. Libero non
               consequatur nulla officiis harum error sit aliquam molestias enim
               soluta amet ipsa cum dolor dignissimos magnam vel blanditiis
               doloremque, exercitationem cupiditate excepturi voluptas tempore.
               Aperiam, quo fugiat veniam consequatur doloremque amet at libero
               eaque ad porro recusandae facere eum, est quibusdam beatae saepe
               sequi sapiente labore incidunt odit cum iste officia maxime.
               Corporis omnis expedita, aliquam similique non pariatur modi, sit
               eaque molestiae nisi error, asperiores libero atque quas tenetur
               eius. Expedita, suscipit officiis aliquam placeat possimus odio
               harum quo in modi rem beatae tenetur veniam magni fuga incidunt
               et, unde dolor dicta, alias ratione voluptates reiciendis magnam!
               Deleniti itaque mollitia consectetur quod consequuntur magnam
               omnis asperiores voluptate illo nobis facilis, quaerat molestiae
               adipisci accusantium dolorem temporibus illum? Modi ducimus
               voluptatibus repellendus deserunt rem porro quae totam
               accusantium facere nobis alias et aperiam aliquam dicta, nisi
               corrupti, commodi debitis placeat blanditiis est eaque aliquid
               illum voluptates. Nesciunt voluptatum numquam eaque sequi.
               Dolorum maiores eos adipisci.
            </div>
            <div className="col-4">
               <div className="border-bottom mt-2 pb-4">
                  <h4>About</h4>
                  <p className="text-justify">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Enim odit dicta doloremque hic quis vero ipsa quam mollitia
                     soluta voluptas error perferendis deserunt, at atque,
                     veniam dignissimos eum, eius nemo. A nulla, laborum
                     molestiae placeat dolorem dolore sit, fuga optio ut eos
                     incidunt doloremque
                  </p>
               </div>
               <div className="border-bottom mt-4 pb-4">
               <h4>Skills</h4>
                  <Tag
                     tag={['Javascript','ReactJS', 'NextJS', 'Redux', 'TypeScript', 'TailwindCSS']}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Resume;
