// import { Menu } from 'lucide';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const datas = [
    {
        "name": "Dashboard",
        "path": "/dashboard/101",
        "id": 101
    },
    {
        "name": "Profile",
        "path": "/profile/202",
        "id": 202
    },
    {
        "name": "Settings",
        "path": "/settings/303",
        "id": 303
    },
    {
        "name": "Notifications",
        "path": "/notifications/404",
        "id": 404
    },
    {
        "name": "Help Center",
        "path": "/help-center/505",
        "id": 505
    }
]

const Navbar = () => {

    const [opne,setOpne]=useState(false)
    return (
        <nav className='flex justify-between mx-auto w-[90%]'>
               <div className='flex'>
              {opne?<X></X>:<Menu></Menu>}
           
               </div>
               <h1 onClick={()=>setOpne(!opne)}>navBar</h1>
            <ul className='flex gap-5'>
                {datas.map(data => (<li key={data.id}><a href={data.path} >{data.name}</a></li>
                ))}
            </ul>
            <div>
                <a href="#">Sign in</a>
            </div>
        </nav>
    );
};

export default Navbar;