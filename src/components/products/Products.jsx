import React from 'react'
import './Products.css'
import Bhraman from '../../img/bhramanimg.png'

const Products = () => {
  return (
    <div className='card'>
      <div className="pr-browser">
        <div className="pr-circle"></div>
        <div className="pr-circle"></div>
        <div className="pr-circle"></div>
      </div>
<a href="https://vidi-sha.github.io/bhraman/" target='_blank'  rel='noreferrer'>

<img src={Bhraman} alt="" className="bhraman-img"  />

</a>
    </div>
  );
};

export default Products