import React from 'react';
import './Carousel.scss';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
  {
    src: 'https://cdn.ecvol.com/s/www.sagital.com.br/uploads/CONHEcA-OS-NOSSOS-PRODUTOS-PARA-CaES71.png',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: 'https://cdn.ecvol.com/s/www.sagital.com.br/uploads/CONFIRA-AS-NOSSAS-OFERTA2S1.png',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;