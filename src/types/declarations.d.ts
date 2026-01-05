declare module '*.module.css';
declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module 'swiper/react';
declare module 'swiper/modules';
declare module 'swiper/css';
declare module 'swiper/css/pagination'

interface SlideData {
    id: number | string;
    content: React.ReactNode;
}


declare namespace JSX {
    interface IntrinsicElements {
        "lottie-player": any;
    }
}
