import { Route, Routes } from "react-router-dom";
import React from "react";
import "./bootstrap.css";
import "./Style.css";

// Home page
import Nav from "./Components/Nav/Nav";
import Paragraph from "./Components/Paragraph/Paragraph";
import First from "./Components/First/First";
import Second from "./Components/Second/Second";
import Third from "./Components/Third/Third";
import Fourth from "./Components/Fourth/Fourth";
import Fifth from "./Components/Fifth/Fifth";
import Sixth from "./Components/Sixth/Sixth";
import Youtube from "./Components/Youtube/Youtube";
import Footer from "./Components/Footer/Footer";

// Pages
import Iphone from "./Components/Pages/Iphone/iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Music from "./Components/Pages/Music/Music";
import Cart from "./Components/Pages/Cart/Cart";
import Support from "./Components/Pages/Support/Support";
import TV from "./Components/Pages/TV/TV";
import Watch from "./Components/Pages/Watch/Watch";
import Four04 from "./Components/Pages/Four04/Four04";
import Productpage from "./Components/Pages/Productpage/Productpage";

function App() {
	return (
		<div>
		    <Nav />
		    <Routes>
				<Route path="/" element={<><Paragraph /><First/><Second/><Third/><Fourth/><Fifth /><Sixth /><Youtube /></>} />
				<Route path="/mac/" element={<Mac />} />
				<Route path="/iphone/" element={<Iphone />} />
				<Route path="/ipad/" element={<Ipad />} />
				<Route path="/TV/" element={<TV />} />
				<Route path="/Watch/" element={<Watch />} />
				<Route path="/Music/" element={<Music />} />
				<Route path="/Support/" element={<Support />} />
				<Route path="/Cart/" element={<Cart />} />
				<Route path="/iphone/:pid" element={<Productpage />} />
				<Route path="/search/" element={<Four04 />} />
				<Route path="*" element={<Four04 />} />
		    </Routes>
	        <Footer />
		</div>
	);
}

export default App;
