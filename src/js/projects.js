
import PortafolioImage from '../assets/images/portafolio.jpg';
import BarandalesARH from '../assets/images/arh.jpg';
import FakeStore from '../assets/images/store.jpg';
import DwVideoTube from '../assets/images/dw-videotube.jpg';
const dwTube = '/dw-videotube.exe'

export const Projects = [
    {
        id: 1,
        title: 'Rick and Morty API',
        img: 'https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1572526237662-KHRA3V0X1YKLVCU9E9K0/image-asset.jpeg',
        description: 'Este es un proyecto personal donde puse a prueba mis conocimientos, obtengo los datos desde la API de Rick and Morty para hacer una lista de algunos de los personajes que han aparecido durante la serie.',
        link: 'https://steven-rickandmorty.netlify.app/',
        techs: [
            {
                id: 1,
                name: 'JavaScript',
                icon: 'fab fa-js-square',
                color: 'rgba(252, 207, 50, 1)',
                using: true
            },
            {
                id: 2,
                name: 'React',
                icon: 'fa-brands fa-react',
                color: 'rgba(64, 192, 218, 1)',
                using: false
            },
            {
                id: 3,
                name: 'Vue',
                icon: 'fa-brands fa-vuejs',
                color: 'rgba(82, 186, 107)',
                using: true
            },
            {
                id: 4,
                name: 'Bootstrap',
                icon: 'fa-brands fa-bootstrap',
                color: 'rgba(112, 79, 200, 1)',
                using: true
            },
            {
                id: 5,
                name: 'Responsive Desing',
                icon: 'fa-solid fa-mobile-screen-button',
                color: 'rgba(255,255,255,.5)',
                using: true
            },
        ],
        dw_file: false
    },
    {
        id: 2,
        title: 'FAKE-STORE',
        img: FakeStore,
        description: 'En esta practica puse a prueba mis conocimientos adquridos en React, uso de Hooks useContext, useState, useEffect consumiendo la API fakestoreapi.',
        link: 'https://slg-fakestore.netlify.app',
        techs: [
            {
                id: 1,
                name: 'JavaScript',
                icon: 'fab fa-js-square',
                color: 'rgba(252, 207, 50, 1)',
                using: true
            },
            {
                id: 2,
                name: 'React',
                icon: 'fa-brands fa-react',
                color: 'rgba(64, 192, 218, 1)',
                using: true
            },
            {
                id: 3,
                name: 'Vue',
                icon: 'fa-brands fa-vuejs',
                color: 'rgba(82, 186, 107)',
                using: false
            },
            {
                id: 4,
                name: 'Bootstrap',
                icon: 'fa-brands fa-bootstrap',
                color: 'rgba(112, 79, 200, 1)',
                using: false
            },
            {
                id: 5,
                name: 'Responsive Desing',
                icon: 'fa-solid fa-mobile-screen-button',
                color: 'rgba(255,255,255,.5)',
                using: true
            },
        ],
        dw_file: false
    },
    {
        id: 3,
        title: 'DW-VideTube',
        img: DwVideoTube,
        description: 'Este es un proyecto con fines didacticos que desarrollé en Python usando la biblioteca pytube para descargar videos de YouTube. ¡Siéntete libre de probarlo! Sin embargo, es importante destacar que el propósito es puramente educativo, y el proyecto no respalda la infracción de derechos de autor ni prácticas ilegales. Al descargar o utilizar este software, comprendes y aceptas que no me hago responsable de su uso. ¡Diviértete explorando y aprendiendo!',
        link: dwTube,
        techs: [
            {
                id: 7,
                name: 'Python',
                icon: 'fab fa-python',
                color: 'rgba(252, 233, 97,.8)',
                using: true
            },
        ],
        dw_file: true
    },
    {
        id: 4,
        title: 'Mi Portafolio',
        img: PortafolioImage,
        description: 'Me propuse aprender React JS, asi que con los conocimientos que he adquirido en esta tecnologia decidi aplicarlos en mi portafolio de proyectos, mi portafolio usa la componetizacion, algunos hooks, react-reouter-dom, y otras caracteristicas de la libreria.',
        link: 'https://steven-portafolio.netlify.app/',
        techs: [
            {
                id: 1,
                name: 'JavaScript',
                icon: 'fab fa-js-square',
                color: 'rgba(252, 207, 50, 1)',
                using: true
            },
            {
                id: 2,
                name: 'React',
                icon: 'fa-brands fa-react',
                color: 'rgba(64, 192, 218, 1)',
                using: true
            },
            {
                id: 3,
                name: 'Vue',
                icon: 'fa-brands fa-vuejs',
                color: 'rgba(82, 186, 107)',
                using: false
            },
            {
                id: 4,
                name: 'Bootstrap',
                icon: 'fa-brands fa-bootstrap',
                color: 'rgba(112, 79, 200, 1)',
                using: true
            },
            {
                id: 5,
                name: 'Responsive Desing',
                icon: 'fa-solid fa-mobile-screen-button',
                color: 'rgba(255,255,255,.5)',
                using: true
            },
        ],
        dw_file: false
    },
    {
        id: 5,
        title: 'Barandales ARH',
        img: BarandalesARH,
        description: 'Proyecto en colaboración con un compañero desarrollador Backend, se realizaron los respectivos requerimientos del cliente, para brindarle un servicío de calidad.',
        link: 'https://www.barandalesarh.com.mx/',
        techs: [
            {
                id: 1,
                name: 'JavaScript',
                icon: 'fab fa-js-square',
                color: 'rgba(252, 207, 50, 1)',
                using: true
            },
            {
                id: 2,
                name: 'React',
                icon: 'fa-brands fa-react',
                color: 'rgba(64, 192, 218, 1)',
                using: false
            },
            {
                id: 3,
                name: 'Vue',
                icon: 'fa-brands fa-vuejs',
                color: 'rgba(82, 186, 107)',
                using: true
            },
            {
                id: 4,
                name: 'Laravel',
                icon: 'fab fa-laravel',
                color: 'rgba(255, 114, 84.5)',
                using: true
            },
            {
                id: 5,
                name: 'Bootstrap',
                icon: 'fa-brands fa-bootstrap',
                color: 'rgba(112, 79, 200, 1)',
                using: true
            },
            {
                id: 6,
                name: 'Responsive Desing',
                icon: 'fa-solid fa-mobile-screen-button',
                color: 'rgba(255,255,255,.5)',
                using: true
            },
        ],
        dw_file: false
    }
]