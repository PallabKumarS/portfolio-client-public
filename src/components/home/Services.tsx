"use client";

import Image from "next/image";
import frontEnd from "../../../public/front-end.png";
import backEnd from "../../../public/back-end.png";
import fullStack from "../../../public/full-stack.png";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";

const Services = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-center items-center pb-10">
      {/* first card  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="max-w-[400px] bg-gray-800 h-80">
          <CardHeader className="flex gap-3 justify-center">
            <Image alt="logo fe" src={frontEnd} width={40}></Image>
            <p className="text-xl text-gray-300">Front End Development</p>
          </CardHeader>
          <div className="border-t border-gray-300 dark:border-gray-700 my-4" />
          <CardContent>
            <p className="text-gray-300">
              As a seasoned MERN stack developer, my front-end development
              services are meticulously crafted to elevate web experiences. With
              expertise in ReactJs,NextJs, I specialize in designing responsive
              and intuitive user interfaces, ensuring a seamless journey for
              users across various devices.
            </p>
          </CardContent>
          <div className="border-t border-gray-300 dark:border-gray-700 my-4" />
        </Card>
      </motion.div>

      {/* second card  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="max-w-[400px] bg-gray-800 h-80">
          <CardHeader className="flex gap-3 justify-center">
            <Image alt="logo fe" src={backEnd} width={40}></Image>
            <p className="text-xl text-gray-300">Back End Development</p>
          </CardHeader>
          <div className="border-t border-gray-300 dark:border-gray-700 my-4" />
          <CardContent>
            <p className="text-gray-300">
              As an adept MERN stack developer, my back-end development services
              are tailored for robust and efficient web solutions. Proficient in
              Node.js and Express.js, I specialize in architecturing scalable
              server-side applications that seamlessly handle data flow and
              enhance overall system performance. Leveraging MongoDB for
              database design and management, I ensure optimal data integrity
              and integration with the front-end.
            </p>
          </CardContent>
          <div className="border-t border-gray-300 dark:border-gray-700 my-4" />
        </Card>
      </motion.div>

      {/* third card  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="max-w-[400px] bg-gray-800 h-80">
          <CardHeader className="flex gap-3 justify-center">
            <Image alt="logo fe" src={fullStack} width={40}></Image>
            <p className="text-xl text-gray-300">Full Stack Development</p>
          </CardHeader>
          <div className="border-t border-gray-300 dark:border-gray-700 my-4" />
          <CardContent>
            <p className="text-gray-300">
              As a seasoned full-stack web developer proficient in the MERN
              stack, I offer end-to-end solutions that seamlessly integrate
              front-end and back-end technologies, ensuring comprehensive and
              dynamic web experiences.
            </p>
          </CardContent>
          <div className="border-t border-gray-300 dark:border-gray-700 my-4" />
        </Card>
      </motion.div>
    </div>
  );
};

export default Services;
