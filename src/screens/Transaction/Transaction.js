import React from "react";
import transactionData from "../../Data/transactionData";
import { Container, Table } from "react-bootstrap";

const Transaction = () => {
	return (
		<Container>
			<Table
				style={{
					padding: "10px",
					margin: "10px",
					fontSize: "18px",
					textAlign: "center",
				}}
			>
				<thead>
					<tr class="table-success">
						<th>Sno</th>
						<th>Date</th>
						<th>Description</th>
						<th>Dr/Cr</th>
						<th>Transaction Amount</th>
					</tr>
				</thead>
				<tbody>
					{transactionData.map((transaction, index) => (
						<tr transactionData key={index}>
							<td>{index + 1}</td>
							<td>{transaction[`sNo${index + 1}`].date}</td>
							<td>
								{transaction[`sNo${index + 1}`].description}
							</td>
							<td>{transaction[`sNo${index + 1}`].type}</td>
							<td>
								{
									transaction[`sNo${index + 1}`]
										.transactionAmmount
								}
							</td>
						</tr>
					))}
					{transactionData.map((transaction, index) => (
						<tr transactionData key={index}>
							<td>{index + 2}</td>
							<td>{transaction[`sNo${index + 2}`].date}</td>
							<td>
								{transaction[`sNo${index + 2}`].description}
							</td>
							<td>{transaction[`sNo${index + 2}`].type}</td>
							<td>
								{
									transaction[`sNo${index + 2}`]
										.transactionAmmount
								}
							</td>
						</tr>
					))}
					{transactionData.map((transaction, index) => (
						<tr transactionData key={index}>
							<td>{index + 3}</td>
							<td>{transaction[`sNo${index + 3}`].date}</td>
							<td>
								{transaction[`sNo${index + 3}`].description}
							</td>
							<td>{transaction[`sNo${index + 3}`].type}</td>
							<td>
								{
									transaction[`sNo${index + 3}`]
										.transactionAmmount
								}
							</td>
						</tr>
					))}
					{transactionData.map((transaction, index) => (
						<tr transactionData key={index}>
							<td>{index + 4}</td>
							<td>{transaction[`sNo${index + 4}`].date}</td>
							<td>
								{transaction[`sNo${index + 4}`].description}
							</td>
							<td>{transaction[`sNo${index + 4}`].type}</td>
							<td>
								{
									transaction[`sNo${index + 4}`]
										.transactionAmmount
								}
							</td>
						</tr>
					))}
					{transactionData.map((transaction, index) => (
						<tr transactionData key={index}>
							<td>{index + 5}</td>
							<td>{transaction[`sNo${index + 5}`].date}</td>
							<td>
								{transaction[`sNo${index + 5}`].description}
							</td>
							<td>{transaction[`sNo${index + 5}`].type}</td>
							<td>
								{
									transaction[`sNo${index + 5}`]
										.transactionAmmount
								}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Transaction;
