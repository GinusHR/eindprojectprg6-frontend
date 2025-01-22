import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <header>
                <nav className="absolute flex justify-center gap-3.5  top-12 left-[20%]">
                    <Link to={`/`}>Home</Link>
                    <Link to={`/create`}>Create New Product</Link>
                </nav>
            </header>
            <main className="flex justify-center">
                <Outlet/>
            </main>
            <footer className="absolute bottom-0">
                GEMAAKT DOOR GINUS VAN DER ZEE
            </footer>
        </div>
    );
}

export default Layout;