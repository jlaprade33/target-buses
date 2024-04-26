
export function PageHeader(){
    return(
        <div className="h-header">
            {/* Setup a div here with flex for alignment in future header bar items*/}
            <div className="flex m-auto space-between w-4/5">
                <img 
                    className="h-logo w-logo mt-5" 
                    src={'/logo.svg'}
                    alt='logo'
                    id="PageHeader"
                />
            </div>
        </div>
    )
};