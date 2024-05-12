import React from "react";
import MainScreen from "../../components/MainScreen";
import accountData from "../../Data/accountData";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const MyAccount = () => {
	return (
		<MainScreen title="Welcome Back Mark Otto">
			{accountData.map((accountData) => (
				<Accordion defaultActiveKey={["0"]} alwaysOpen>
					<Row
						style={{
							padding: "5px",
							marginLeft: "5px",
							fontSize: "25px",
						}}
					>
						<Col sm={8}>
							{`No. of Linked Account: `}{" "}
							{accountData.linkedAccountNo}{" "}
						</Col>
						<Col sm={4}>
							{`Coustomer Id: `} {accountData._id}
						</Col>
					</Row>
					<Accordion.Item eventKey="0" variant="link">
						<Card
							style={{
								padding: "10px",
								borderRadius: "08px",
								marginTop: "20px",
								marginBottom: "20px",
							}}
						>
							<Accordion.Header>
								<Card.Header
									style={{
										borderRadius: "08px",
									}}
								>
									<span
										style={{
											textDecoration: "none",
											flex: 1,
											cursor: "pointer",
											alignSelf: "center",
											fontSize: "25px",
										}}
									>
										{accountData.account1.acNo}
									</span>
								</Card.Header>
							</Accordion.Header>
							<Accordion.Body>
								<Card.Body>
									<Row>
										<Col md={{ span: 4, offset: 8 }}>
											<Link to="/transaction">
												<h4>
													<span class="badge rounded-pill bg-success">
														Transaction Details
													</span>
												</h4>
											</Link>
										</Col>
									</Row>
									<blockquote className="blockquote mb-0">
										<Row style={{ display: "1" }}>
											<Col sm={8}>
												{`Name: `}
												{
													accountData.account1
														.customerName
												}
											</Col>
											<Col sm={4}>
												{`Available Balance: `}
												{
													accountData.account1
														.availableBalance
												}
											</Col>
										</Row>
										<Row style={{ marginTop: "20px" }}>
											<Col sm={8}>
												{`Branch Name: `}
												{
													accountData.account1
														.branchName
												}
											</Col>
											<Col sm={4}>
												{" "}
												{`Branch Code: `}
												{
													accountData.account1
														.branchCode
												}
											</Col>
										</Row>
									</blockquote>
								</Card.Body>
							</Accordion.Body>
						</Card>
					</Accordion.Item>
					<Accordion.Item eventKey="1" variant="link">
						<Card
							style={{
								padding: "10px",
								borderRadius: "12px",
								marginTop: "20px",
								marginBottom: "20px",
							}}
						>
							<Accordion.Header>
								<Card.Header
									style={{
										display: "flex",
										borderRadius: "08px",
									}}
								>
									<span
										style={{
											textDecoration: "none",
											flex: 1,
											cursor: "pointer",
											alignSelf: "center",
											fontSize: "25px",
										}}
									>
										{accountData.account2.acNo}
									</span>
								</Card.Header>
							</Accordion.Header>
							<Accordion.Body>
								<Card.Body>
									<Row>
										<Col md={{ span: 4, offset: 8 }}>
											<h4>
												<span class="badge rounded-pill bg-success">
													Transaction Details
												</span>
											</h4>
										</Col>
									</Row>
									<blockquote className="blockquote mb-0">
										<Row style={{ display: "1" }}>
											<Col sm={8}>
												{`Name: `}
												{
													accountData.account2
														.customerName
												}
											</Col>
											<Col sm={4}>
												{`Available Balance: `}
												{
													accountData.account2
														.availableBalance
												}
											</Col>
										</Row>
										<Row style={{ marginTop: "20px" }}>
											<Col sm={8}>
												{`Branch Name: `}
												{
													accountData.account2
														.branchName
												}
											</Col>
											<Col sm={4}>
												{" "}
												{`Branch Code: `}
												{
													accountData.account2
														.branchCode
												}
											</Col>
										</Row>
									</blockquote>
								</Card.Body>
							</Accordion.Body>
						</Card>
					</Accordion.Item>
				</Accordion>
			))}
		</MainScreen>
	);
};

export default MyAccount;
