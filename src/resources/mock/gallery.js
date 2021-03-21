import { v4 as uuid } from 'uuid';
import images from "../img";

export const galleryMock = [
    {
        id: uuid(),
        title: "Cat",
        src: images.cat,
        tag: "art"
    },
    {
        id: uuid(),
        title: "Doberman",
        src: images.doberman, //"./img/doberman.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "FLCL",
        src: images.flcl, //"./img/flcl.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "FTP",
        src: images.ftp, //"./img/ftp.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "Grime",
        src: images.grime, //./img/grime.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "half",
        src: images.half, //"./img/half.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "Heart",
        src: images.heart, //"./img/heart.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "Nevermore",
        src: images.nevermore, //"./img/nevermore.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "Raven",
        src: images.raven, //"./img/Raven.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "Shiba-Inu",
        src: images.shibe, //"./img/shibe.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "VS",
        src: images.vs, //"./img/star-vs-gif.gif",
        tag: "art"
    },
    {
        id: uuid(),
        title: "VG",
        src: images.vg, //"./img/vg.png",
        tag: "art"
    },
    {
        id: uuid(),
        title: "Weeb shit",
        src: images.weeb, //"./img/weeb-shit.jpg",
        tag: "art"
    },
    {
        id: uuid(),
        title: "C#",
        src: images.cs, //"./img/cs.png",
        tag: "programming"
    },
    {
        id: uuid(),
        title: "Python",
        src: images.python, //"./img/python.png",
        tag: "programming"
    },
    {
        id: uuid(),
        title: "React",
        src: images.react, //"./img/react.png",
        tag: "programming"
    },
    {
        id: uuid(),
        title: "IDK",
        src: images.idk, //"./img/sample.jpg",
        tag: "programming"
    }
]