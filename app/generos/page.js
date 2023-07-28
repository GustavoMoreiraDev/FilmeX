'use client';

import CatProv from "@/context/category";

import Gmain from "@/components/generos/main";
import Sidebar from "@/components/sidebar";
import Glist from "@/components/generos/gList";

export default function Generos() {

    return (
        <>
            <CatProv>
                <Gmain>
                    <Sidebar />
                    <Glist />
                </Gmain>
            </CatProv>
        </>
    );
}
