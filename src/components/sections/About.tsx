import Title from '../global/Title'
import { LgWrapper } from '@components/global/Wrappers'
import { styles } from "../../styles";
//icons
import { FaToolbox } from "react-icons/fa6"; 
import { FaHandshake } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import React, { ReactElement } from 'react';
import texts from '../../texts.json'


 type Props = {
   title: string;
   icon: ReactElement;
 };
const IconBox = ({title, icon}: Props) => {
  return (
    <div className='bg-surella-500 text-white w-full h-full flex flex-col justify-center items-center p-6'>
      {React.cloneElement(icon, { className: 'w-16 h-16' })}
      <p className='pt-4 uppercase font-bold text-[18px] tracking-wider'>{title}</p>
    </div>
  );
}

const About = () => {
  const description = texts[0]?.companyDescription;


  return (
    <LgWrapper vertical>
      <div className="bg-white w-full flex-col">
        <Title title='Poznaj Surelle' subtitle='Trochę o nas'></Title>
        <div className='flex xl:flex-row flex-col w-full gap-4'>
          <div className='w-full xl:w-3/5 h-full flex order-2 xl:order-1'>
            <div className='w-full h-full bg-slate-100 font-[400] p-16'>
              <p className={`${styles.aboutText} tracking-wide text-surella-700 leading-relaxed text-justify text-4xl`}>{description}</p>
            </div>
          </div>
          <div className='w-full xl:w-2/5 gap-4 flex flex-col items-center justify-center xl:order-2 order-1'>
            <div className='flex h-full w-full gap-4'>
              <IconBox title='Wycena' icon={<FaToolbox/>}/>
              <IconBox title='Montaż' icon={<FaTools />}/>
            </div>
            <div className='flex h-full w-full gap-4'>
              <IconBox title='Doradztwo' icon={<FaHandshake />}/>
              <IconBox title='Sprzedaż' icon={<FaMoneyCheckDollar />}/>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="flex flex-wrap bg-blue-400 p-8">
        <div className="bg-red-400 h-fit basis-5/12 p-8 text-justify text-sm tracking-wider leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga atque vitae veniam neque! Dignissimos est nemo itaque illo dolores consequatur asperiores at! Ut laudantium adipisci voluptatibus, ipsa a inventore magnam ipsum explicabo ex veritatis reiciendis, eius, necessitatibus deserunt culpa nemo? Neque, porro quisquam? Officia tempore labore enim corrupti velit consectetur voluptatum, quia sequi animi, quos dolor facere facilis nulla veritatis iste atque sed earum error. Magni suscipit sit labore aspernatur ex nemo itaque, omnis unde tempora minus explicabo harum voluptates reprehenderit incidunt possimus ratione temporibus deleniti non maxime commodi aliquid nulla! Aperiam odit consectetur quisquam expedita similique reprehenderit non maxime! Obcaecati cum alias sit, sequi iste reiciendis? Laborum, ipsum sit. Accusantium autem rerum magnam eum cumque velit similique dolore sed labore est hic quisquam, doloremque corrupti, explicabo vitae saepe aperiam voluptas iusto laboriosam a voluptatem recusandae, vel repellat aliquam. Possimus quae eveniet perferendis, recusandae dolore dolorem vitae, fugit voluptates repellat culpa, harum enim magni nobis. Natus ea quo odit a expedita numquam sit architecto dolorum quidem unde veritatis molestiae, suscipit exercitationem magnam? Culpa labore nostrum, sit odit similique ab numquam, et nulla delectus illo id facilis veniam, eius recusandae dolores. Saepe, eaque quas labore earum architecto consectetur enim nemo, sapiente necessitatibus quisquam autem aut odio amet repellendus? Distinctio doloribus minus harum ipsam repudiandae, nisi excepturi eum, labore tenetur voluptatibus perspiciatis eveniet ex sapiente ipsa porro ducimus a facere earum obcaecati officiis ratione animi aliquam unde maiores. Explicabo reiciendis maiores est esse. Nesciunt cupiditate dolores ipsa et dolorum hic possimus minima. Illo, repellendus. Excepturi aut dicta repudiandae asperiores cum unde sed provident expedita earum nemo delectus atque, architecto vitae commodi molestias voluptates enim laborum rerum accusamus ad quidem, error nobis possimus ab. Eos, expedita doloribus! Nihil odio magni fuga numquam! Necessitatibus beatae molestias facere voluptatum velit quisquam nesciunt exercitationem sit.
        </div>
        <div className="bg-green-400 flex flex-wrap basis-7/12 p-8">
            <div className="bg-purple-500 basis-1/2">
              <div className="bg-purple-400"></div>
            </div>
            <div className="bg-purple-600 basis-1/2">
              <div className="bg-purple-400"></div>
            </div>
            <div className="bg-purple-700 basis-1/2">
              <div className="bg-purple-400"></div>
            </div>
            <div className="bg-purple-800 basis-1/2">
              <div className="bg-purple-400"></div>
            </div>
        </div>
      </div> */}
    </LgWrapper>
  )
}

export default About

{/* 
  <motion.div className="border-8 border-red-600 absolute h-full w-full text-white text-center pt-40">Siema</motion.div>
  <motion.div className="border-8 border-blue-600 bg-slate-50 absolute	h-full w-full"
    initial={{ height: '100%' }} 
    animate={{ height: '0%' }} 
    transition={{ delay: 1, duration: 0.8, ease: 'easeInOut' }}>
  </motion.div>
 */}

         {/* <div className='flex flex-row w-full h-fit'>
            <div className='w-1/2 h-full'>
                <p className={`${styles.sectionSubText} text-surella-600 text-left p-8`}>{description}</p>
            </div>
            <div className='w-1/2 grid grid-cols-2 aspect-square place-items-center'>
                  <IconBox title='Doradztwo' icon={<FaToolbox/>}/>
                  <IconBox title='Wycena' icon={<FaHandshake />}/>
                  <IconBox title='Doractwo' icon={<FaTools />}/>
                  <IconBox title='Montaż' icon={<FaShoppingCart />}/>
            </div>
        </div> */}

        // type Props = {
//   title: string;
//   icon: ReactElement;
// };
// const IconBox = ({ title, icon }: Props) => {
//   return (
//     <div className=' flex w-fit h-fit acspect-square items-center justify-center'>
//       <div className='flex flex-col w-28 h-28 bg-surella-500 text-white items-center justify-center p-6'>
//       {React.cloneElement(icon, { className: 'w-10 h-10' })}
//         <p>{title}</p>
//       </div>
//     </div>
//   );
// }
