import Summary from '../components/Summary';
import TopBar from '../components/TopBar'  

const MainLayout = ({ children }) => {
    return (
        <>
            <TopBar />
            {children}
        </>
    )
}

export default MainLayout;