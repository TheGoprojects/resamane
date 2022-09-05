import Image from 'next/image'
import React, { useRef } from 'react'
import Imgwrap from '../html/Imgwrap'
import Reserverbtn from './Reserverbtn'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

const Presentation = () => {
  const aboutref = useRef()
  const { scrollYProgress } = useScroll({
    target: aboutref,
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -120])

  const y = useSpring(x, {
    stiffness: 50,
    mass: 0.2,
  })
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 4]), {
    stiffness: 50,
    mass: 0.2,
  })

  return (
    <section className="about" ref={aboutref}>
      <div className="relative pl-[5px] md:pl-[60px]">
        <div className="img h-[340px] md:h-[640px] [clip-path:polygon(3%_0,_100%_0,_100%_100%,_0_100%)] overflow-hidden relative">
          <Imgwrap duration="1">
            <Image
              src="/remove/slide-1-old.png"
              layout="fill"
              alt="slider"
              objectFit="cover"
            />
          </Imgwrap>
        </div>
      </div>

      <div className="bg-[#013C50] py-[60px]  md:pt-[80px] md:pb-[120px] relative">
        <Reserverbtn />
        <div className="container mx-auto relative">
          <motion.div
            style={{ y, rotate }}
            className="absolute -top-[240px] right-10 z-10 hidden md:-block"
          >
            <Image
              src="/icons/shape.svg"
              alt="shape"
              width={110}
              height={451}
            />
          </motion.div>
          <div className="md:w-6/12	mx-auto">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-justify">
                <p>
                  Dans une ville comme Agadir, devenue un grand pôle urbain et
                  universitaire, recevant chaque année des centaines
                  d’étudiantes venant des quatre coins du Royaume, notre
                  résidence vient vous offrir une magique solution de logement
                  tout inclus et avec cela une expérience humaine éminemment
                  enrichissante et absolument singulière qui érige le crédo de
                  la sécurité, la quiétude, le confort, la convivialité, et les
                  belles valeurs du vivre ensemble et de la convivance
                  harmonieuse et joyeuse afin de vous aider à atteindre la
                  réussite dans chaque pas franchi durant votre parcours
                  académique. En effet, notre résidence a été conçue en ayant
                  anticipé tous vos besoins sans rien laisser au hasard afin de
                  favoriser le confort, la satisfaction, l’épanouissement
                  personnel, et la grande réussite du parcours de nos
                  locataires.
                  <br />
                  <br />
                  Nos locaux se distinguent avec brio grâce à l’espace spacieux
                  de leurs chambres et appartements. Notre résidence s’étale sur
                  une superficie globale de 10800 mètres carré et met à votre
                  disposition un total de 425 chambres et 880 lits. Notre
                  résidence propose des espaces de vie où le confort est le
                  maître mot, un lifestyle empreint de convivialité promettant
                  une belle expérience humaine et immersive à sa communauté
                  féminine. Une communauté rassemblée chez nous car nous
                  partageons un objectif commun et une motivation collective :
                  Réussir, exceller et briller de mille feux.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
