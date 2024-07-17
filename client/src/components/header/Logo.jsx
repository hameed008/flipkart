import React from 'react'

const logoUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'

const Logo = () => {
  return (
    <div id="logo-container ml-[10px]">
      <img src={logoUrl} alt="logo" className="w-[80px]"
      />
      <div className="flex justify-center float-start text-[12px]">
        <p className="italic text-white">Explore <span className="text-[#FDE91A]">Plus</span></p>
        <img src={subUrl} alt="sub-logo" className="w-[12px] h-[12px]" />
      </div>
    </div>
  )
}

export default Logo
