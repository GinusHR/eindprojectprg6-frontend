import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <header className="h-[12vh] mb-6">
                <div className=" ballsy flex justify-around w-[33vw] p-3">
                    <img src="/Decepticon-Emblem.png" alt="logo" className="h-[10vh] w-[10vw] logo"/>
                    <nav className="flex justify-center gap-3.5">
                        <Link to={`/`}>Home</Link>
                        <Link to={`/create`}>Create New Product</Link>
                    </nav>
                </div>

            </header>
            <main className="flex align-top justify-center w-[100vw]">
                <Outlet/>
            </main>
            <footer className="flex justify-center">

            </footer>
        </div>
    );
}

export default Layout;