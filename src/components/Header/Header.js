import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Navbar className="bg-light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/">Brake-Through </Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					{/* <Navbar.Text>Signed in as: Mark Otto</Navbar.Text> */}
					<Navbar.Text style={{ margin: "10px" }}>
						<Link to="/accountdetails"> Account Details</Link>
					</Navbar.Text>

					<Navbar.Text style={{ margin: "10px" }}>
						{" "}
						<Link to="/">Sign Out</Link>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
