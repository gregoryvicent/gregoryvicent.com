import { StaticImageData } from "next/image";

export default interface ProyectBoxInterface {
    title: string,
    src: StaticImageData,
    alt: string,
    text: string,
    link: string
}