"use client";

import { motion } from "framer-motion";

import {
    ImagesHeader,
    ImageUploader,
} from "./imageSteps";

export default function ImagesStep() {
    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
            }}
            className="mx-auto flex w-full max-w-7xl flex-col gap-8"
        >
            <ImagesHeader />

            <ImageUploader />
        </motion.section>
    );
}