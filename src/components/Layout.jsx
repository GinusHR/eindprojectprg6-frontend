import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <header className="h-[12vh] mb-6 flex  justify-start">
                <img src="/Decepticon-Emblem.png" alt="logo" className="h-[10vh] w-[10vw]"/>
                <nav className="flex justify-center gap-3.5">
                    <Link to={`/`}>Home</Link>
                    <Link to={`/create`}>Create New Product</Link>
                </nav>
            </header>
            <main className="flex align-top justify-center w-[100vw]">
                <Outlet/>
            </main>
            <footer className="flex justify-center">
                GEMAAKT DOOR GINUS VAN DER ZEE
            </footer>
        </div>
    );
}

export default Layout;