import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-red'>
            <div className='flex left-side-items'>
                <li style={{fontSize: "30px"}} className='bg-green  pa3 '>Cropx</li>
            </div>
            <div className='flex right-side-items'>
                <li className='pa3'><a href='#'>Dashboard</a></li>
                <li className='pa3'><a href='#'>Test Results</a></li>
            </div>
        </nav>
    )
}

export default Navbar