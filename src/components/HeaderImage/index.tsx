//constant page header img
const headerImg = "https://www.metrotransit.org/img/nextrip.jpg";

export function HeaderImage(){
    return(
        <img 
            className="w-full h-headerImg bg-no-repeat object-cover text-font-blue font-roboto bg-center" 
            src={headerImg}
            alt='background'
        />
    )
};