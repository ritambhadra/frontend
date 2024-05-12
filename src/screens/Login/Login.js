import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		// Check if the username and password are correct
		if (username === "markotto" && password === "password") {
			// Navigate to the home page
			navigate("/accountdetails");
		} else {
			// Display an error message
			alert("Invalid username or password");
		}
	};

	return (
		<Container>
			<div
				class="card border-primary "
				style={{
					maxWidth: "40rem",
					userSelect: "auto",
					margin: "150px auto",
					borderRadius: "12px",
				}}
			>
				<div
					class="card-header"
					style={{
						userSelect: "auto;",
						fontSize: "30px",
						color: "black",
					}}
				>
					Login
				</div>
				<form onSubmit={handleSubmit} style={{ padding: "15px" }}>
					<Form.Group className="mb-2" controlId="formBasicEmail">
						<Form.Label
							style={{ color: "black", fontSize: "25px" }}
						>
							Username
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="username"
							value={username}
							onChange={(event) =>
								setUsername(event.target.value)
							}
							style={{ borderRadius: "12px" }}
						/>
						<Form.Text className="text-muted">
							<p> </p>
							<p>
								We'll never share your details with anyone else.
							</p>
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-4" controlId="formBasicPassword">
						<Form.Label
							style={{ color: "black", fontSize: "25px" }}
						>
							Password
						</Form.Label>
						<Form.Control
							type="password"
							value={password}
							placeholder="password"
							onChange={(e) => setPassword(e.target.value)}
							style={{ borderRadius: "12px" }}
						/>
					</Form.Group>
					<button
						class="btn btn-primary"
						type="submit"
						style={{
							borderRadius: "10px",
							width: "100px",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						Login
					</button>
				</form>
			</div>
		</Container>
	);
};

export default Login;
