import React from "react";

// components
import Nav from './src/components/Nav';
import Playlist from './src/components/Playlist';
import { CartProvider } from "./src/context/CartContext";

// utils
import { PlaylistProvider } from "./src/context/PlaylistContext"

const wrapRootElement = ({element}) => (
    <PlaylistProvider>
        <CartProvider>
            <Playlist/>     
            <Nav/>
            {element}
        </CartProvider>
    </PlaylistProvider>
);

export { wrapRootElement };