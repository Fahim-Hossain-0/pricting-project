import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const datas = [
    { "name": "Dashboard", "path": "/dashboard/101", "id": 101 },
    { "name": "Profile", "path": "/profile/202", "id": 202 },
    { "name": "Settings", "path": "/settings/303", "id": 303 },
    { "name": "Notifications", "path": "/notifications/404", "id": 404 },
    { "name": "Help Center", "path": "/help-center/505", "id": 505 }
];

const Navbar = () => {
    const links = datas.map(data => (
        <li key={data.id}>
            <a href={data.path} className="hover:text-blue-500">{data.name}</a>
        </li>
    ));
    
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center w-[90%] mx-auto p-4 relative">
            {/* Left: Logo */}
            <h1 className="text-xl font-bold">navBar</h1>

            {/* Middle: Desktop Links */}
            <ul className="hidden md:flex gap-5">
                {links}
            </ul>

            {/* Right: Sign In (Desktop) */}
            <div className="hidden md:block">
                <a href="#" className="hover:text-blue-500">Sign in</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <X size={30} /> : <Menu size={30} />}
            </div>

            {/* Mobile Menu Links */}
            {open && (
                <ul className="absolute top-16 left-0 w-full text-black bg-white shadow-md flex flex-col items-center gap-5 py-5 md:hidden">
                    {links }
                    <li>
                        <a href="#" className="hover:text-blue-500">Sign in</a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
