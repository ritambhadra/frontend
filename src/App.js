import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyAccount from "./screens/MyAccount/MyAccount";
import Transaction from "./screens/Transaction/Transaction";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<LandingPage />} exact />
					<Route path="/accountdetails" element={<MyAccount />} />
					<Route path="/transaction" element={<Transaction />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
