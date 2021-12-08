import PrimarySearchAppBar from './Navbar'
import Footer from './Footer'




const Layouts =({children})=>{
    return(
        <div className="content">
            <PrimarySearchAppBar/>
            {children}
            <Footer/>
            
        </div>
    )
}

export default Layouts