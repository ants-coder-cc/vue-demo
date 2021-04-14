import React from "react";
import { Button , Upload} from "antd";
import "./index.css";
import Test from "./components/Test";
import CommentBox from "./components/comment/CommentBox"
class App extends React.Component {
	constructor(props) {
		console.log("props====>", props);
		super(props);
		this.state = {
			name: "lycqqq",
			count: 0,
		};
	}

	render() {
		return (
			<div>
				{
					<CommentBox></CommentBox>
				/* <Upload>
					<Button>
						 Click to Upload
					</Button>
				</Upload>
				<Button type="primary">Button</Button>
				<Button type="primary" loading>
					Loading
				</Button>
				<Button type="primary">Primary</Button>
				<Button>Default</Button>
				<Button type="dashed">Dashed</Button>
				<h1>{this.state.name}</h1>
				<h1>hello world</h1>
				<Test></Test>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button> */}
			</div>
		);
	}
}

export default App;
