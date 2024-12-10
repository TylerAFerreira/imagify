import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}   
        >
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Générer des image IA</h1>
            <p className="text-gray-500 mb-8">Transformez votre imagination en visuels</p>
            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
                <img src={assets.sample_img_1} className="w-80 xl:w-96 rounded-lg" alt="" />
                <div>
                    <h2 className="text-3xl font-medium max-w-lg mb-4">Le générateur de texte en image alimenté par l'IA</h2>
                    <p className=" text-gray-600 mb-4">
                    Donnez facilement vie à vos idées avec notre générateur d'images IA gratuit. Que vous ayez besoin de visuels époustouflants ou d'images uniques, notre outil transforme votre texte en images accrocheuses en quelques clics. Imaginez-le, décrivez-le et regardez-le prendre vie instantanément.
                    </p>
                    <p className=" text-gray-600">
                    Tapez simplement une invite de texte et notre IA de pointe générera des images de haute qualité en quelques secondes. Des visuels de produits aux conceptions de personnages et aux portraits, même les concepts qui n’existent pas encore peuvent être visualisés sans effort. Propulsées par une technologie d'IA avancée, les possibilités créatives sont illimitées !                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description