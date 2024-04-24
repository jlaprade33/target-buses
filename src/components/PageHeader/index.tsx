//constant page header img
const logoImg = "https://www.metrotransit.org/img/MetroTransitLogo.svg";

export function PageHeader(){
    return(
        <div className="h-header">
            {/* Setup a div here with flex for alignemnt and future header bar items*/}
            <div className="flex m-auto space-between w-4/5">
                <img 
                    className="h-logo w-logo mt-4" 
                    src={logoImg}
                    alt='logo'
                />
            </div>
        </div>
    )
};