import React from "react";
import "./LandingPage.css";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<Container>
			<div className="main">
				<Container>
					<Row>
						<div className="intro-text">
							<div>
								<h1 className="title">
                                    Welcome to <br />
                                    Brake-Through: The Future of
									Braking Systems
								</h1>
								<p className="subtitle">
									One Safe place for all your savings.
								</p>
							</div>
							<div className="buttonContainer">
								{/* <Link to="/login">
								<button size="lg" className="landingbutton">
									Login
								</button>
							</Link>
							<Link to="/register">
								<Button>Signup</Button>
							</Link> */}
								<a href="/login">
									<Button
										size="lg"
										variant="primary"
										className="landingbutton"
									>
										Login
									</Button>
								</a>
							</div>
						</div>
					</Row>
				</Container>
			</div>
		</Container>
	);
};

export default LandingPage;
