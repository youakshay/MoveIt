const NavBar = () => {

    return(
        <>
            <div className="z-10 w-full h-12 border">
                <div className="flex flex-row gap-4 p-2 text-black border border-gray-400 group">
                        <ul><a  className="hover:text-blue-500">Home</a></ul>
                        <ul><a className="hover:text-blue-500">Contact Us</a></ul>
                        <ul><a className="hover:text-blue-500">About Us</a></ul>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default NavBar;