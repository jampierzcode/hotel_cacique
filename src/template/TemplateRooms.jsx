import habPresidencial from "../assets/habitaciones/presidencial.jpeg";
import habIndividual from "../assets/habitaciones/individual.jpg";
import habDoble from "../assets/habitaciones/doble.jpg";
import habTriple from "../assets/habitaciones/triple.png";
import iconCama from "../assets/icons/icon-cama.svg";
import iconDucha from "../assets/icons/icon-ducha.svg";
import iconCheck24h from "../assets/icons/icon-check.svg";
import iconBaño from "../assets/icons/icon-baño.svg";
import iconTv from "../assets/icons/icon-tv.svg";
import iconWifi from "../assets/icons/icon-wifi.svg";
import iconNetflix from "../assets/icons/icon-netflix.svg";
import iconSofa from "../assets/icons/icon-sala.svg";
import iconVentilador from "../assets/icons/icon-ventilador.svg";
import iconTelefono from "../assets/icons/icon-telefono.svg";
import iconJacuzzi from "../assets/icons/icon-tina.svg";
import iconHbo from "../assets/icons/icon-hbo.svg";
import iconIzonorizacion from "../assets/icons/icon-izonorizacion.svg";

//fotos para la galeria
//gallery habitacion individual
import Indivfoto1 from "../assets/gallery/habIndividual/foto1.jpg"
import Indivfoto2 from "../assets/gallery/habIndividual/foto2.jpg"
import Indivfoto3 from "../assets/gallery/habIndividual/foto3.jpg"
import Indivfoto4 from "../assets/gallery/habIndividual/foto4.jpg"
import Indivfoto5 from "../assets/gallery/habIndividual/foto5.jpg"
import Indivfoto6 from "../assets/gallery/habIndividual/foto6.jpg"



const TemplateRooms = [
    {
      title: "Presidencial",
      url: "habitación-presidencial",
      img: habPresidencial,
      price: 150,
      description:"Desayuno - Mesa de Estudio - Cama 2 Plazas Con Colchon de Resortes Box Spring - Habitaciones alfombradas y pisos laminados - Baño Privado - Tv LCD Con Cable - Telefono con discado directo. - Agua Caliente y Fria con sistema de Therma y rapiduchas. - Internet WIFI.",
      services: [
        {
            service: iconCama,
            nameService:"1 cama",
        },
        {
            service: iconDucha,
            nameService:"Ducha",
        },
        {
            service: iconCheck24h,
            nameService:"Recepcion 24h",
        },
        {
            service: iconBaño,
            nameService:"Baño",
        },
        {
            service: iconTv,
            nameService:"Television",
        },
        {
            service: iconWifi,
            nameService:"Wifi",
        },
        {
            service: iconNetflix,
            nameService:"Netflix",
        },
        {
            service: iconSofa,
            nameService:"Sala",
        },
        {
            service: iconVentilador,
            nameService:"Ventilador",
        },
        {
            service: iconTelefono,
            nameService:"Telefono",
        },
        {
            service: iconJacuzzi,
            nameService:"Jacuzzi",
        },
        {
            service: iconIzonorizacion,
            nameService:"Izonorizacion",
        },
      ],
      gallery:[
        {
            foto:habPresidencial
        },
        {
            foto:Indivfoto1
        },
        {
            foto:Indivfoto2
        },
        {
            foto:Indivfoto3
        },
        {
            foto:Indivfoto4
        },
        {
            foto:Indivfoto5
        },
        {
            foto:Indivfoto6
        },
      ]
    },

    {
      title: "Individual",
      url: "habitación-individual",
      img: habIndividual,
      price: 80,
      description:"Desayuno - Mesa de Estudio - Cama 2 Plazas Con Colchon de Resortes Box Spring - Habitaciones alfombradas y pisos laminados - Baño Privado - Tv LCD Con Cable - Telefono con discado directo. - Agua Caliente y Fria con sistema de Therma y rapiduchas. - Internet WIFI.",
      services: [
        {
            service: iconCama,
            nameService:"1 cama",
        },
        {
            service: iconDucha,
            nameService:"Ducha",
        },
        {
            service: iconCheck24h,
            nameService:"Recepcion 24h",
        },
        {
            service: iconBaño,
            nameService:"Baño",
        },
        {
            service: iconTv,
            nameService:"Television",
        },
        {
            service: iconWifi,
            nameService:"Wifi",
        },
        {
            service: iconNetflix,
            nameService:"Netflix",
        },
      ],
      gallery:[
        {
            foto:habIndividual
        },
        {
            foto:Indivfoto1
        },
        {
            foto:Indivfoto2
        },
        {
            foto:Indivfoto3
        },
        {
            foto:Indivfoto4
        },
        {
            foto:Indivfoto5
        },
        {
            foto:Indivfoto6
        },
      ]
    },
    
    {
      title: "Doble",
      url: "habitación-doble",
      img: habDoble,
      price: 100,
      description:"Desayuno - Mesa de Estudio - Cama 2 Plazas Con Colchon de Resortes Box Spring - Habitaciones alfombradas y pisos laminados - Baño Privado - Tv LCD Con Cable - Telefono con discado directo. - Agua Caliente y Fria con sistema de Therma y rapiduchas. - Internet WIFI.",
      services: [
        {
            service: iconCama,
            nameService:"2 camas",
        },
        {
            service: iconDucha,
            nameService:"Ducha",
        },
        {
            service: iconCheck24h,
            nameService:"Recepcion 24h",
        },
        {
            service: iconBaño,
            nameService:"Baño",
        },
        {
            service: iconTv,
            nameService:"Television",
        },
        {
            service: iconWifi,
            nameService:"Wifi",
        },
        {
            service: iconNetflix,
            nameService:"Netflix",
        },
      ],
      gallery:[
        {
            foto:habDoble
        },
        {
            foto:Indivfoto1
        },
        {
            foto:Indivfoto2
        },
        {
            foto:Indivfoto3
        },
        {
            foto:Indivfoto4
        },
        {
            foto:Indivfoto5
        },
        {
            foto:Indivfoto6
        },
      ]
    },

    {
      title: "Triple",
      url: "habitación-triple",
      img: habTriple,
      price: 150,
      description:"Desayuno - Mesa de Estudio - Cama 2 Plazas Con Colchon de Resortes Box Spring - Habitaciones alfombradas y pisos laminados - Baño Privado - Tv LCD Con Cable - Telefono con discado directo. - Agua Caliente y Fria con sistema de Therma y rapiduchas. - Internet WIFI.",
      services: [
        {
            service: iconCama,
            nameService:"3 camas",
        },
        {
            service: iconDucha,
            nameService:"Ducha",
        },
        {
            service: iconCheck24h,
            nameService:"Recepcion 24h",
        },
        {
            service: iconBaño,
            nameService:"Baño",
        },
        {
            service: iconTv,
            nameService:"Television",
        },
        {
            service: iconWifi,
            nameService:"Wifi",
        },
        {
            service: iconNetflix,
            nameService:"Netflix",
        },
      ],
      gallery:[
        {
            foto:habTriple
        },
        {
            foto:Indivfoto1
        },
        {
            foto:Indivfoto2
        },
        {
            foto:Indivfoto3
        },
        {
            foto:Indivfoto4
        },
        {
            foto:Indivfoto5
        },
        {
            foto:Indivfoto6
        },
      ]
    },
  ];

  export default TemplateRooms