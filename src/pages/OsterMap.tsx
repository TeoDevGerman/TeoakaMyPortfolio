import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import "../css/oster_map.css"

export default function MyMap() {
    const [locations, setLocations] = useState([
        { lat: 52.52, lng: 13.405, name: "Berlin" },
        { lat: 48.8566, lng: 2.3522, name: "Paris" },
    ]);

    function showSidebar() {
        const sidebar = document.querySelector(".sidebar") as HTMLElement;
        sidebar?.style.setProperty("display", "flex")
    }

    function hideSidebar() {
        const sidebar = document.querySelector(".sidebar") as HTMLElement;
        sidebar?.style.setProperty("display", "none")
    }

    return (
        <>
            <div className="gridContainer">
                <nav>
                    <ul className="sidebar text-primary">
                        <li onClick={hideSidebar}>
                            <a className="bg-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#08244c"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /><path xmlns="http://www.w3.org/2000/svg" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a>
                        </li>
                        <li>
                            <a className="bg-white" href="#">Oster Map</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">teoakaHOME</a>
                        </li>
                        <li className="hideOnMobile">
                            <a href="/ostermap">Oster Map</a>
                        </li>
                        <li className="menu-button" onClick={showSidebar}>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#08244c"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a>
                        </li>
                    </ul>
                </nav>
                <main >
                    <MapContainer center={[50, 10]} zoom={5} style={{ height: '100vh', width: '100%' }} className='map'>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />
                        {locations.map((loc, idx) => (
                            <Marker key={idx} position={[loc.lat, loc.lng]}>
                                <Popup>{loc.name}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                    <button
                        className="addButton"
                        onClick={() => alert("Button clicked!")}
                    >
                        + Add Location
                    </button>

                </main>
                <footer>
                    <ul>
                        <li>
                            hosted by deno
                        </li>
                    </ul>
                </footer>
            </div >
        </>

    );
}
