import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/base.css";
import "./styles/index.css";
// 导入组件
// import TodoHeader from "./components/TodoHeader";
// import TodoMain from "./components/TodoMain";
// import TodoFooter from "./components/TodoFooter";

class App extends Component {
	state = {
		list: [
			{ id: 1, name: "吃饭", done: false },
			{ id: 2, name: "睡觉", done: true },
			{ id: 3, name: "打豆豆", done: false },
		],
		// 有三个值  all  active  completed
		type: "all",
	};
	render() {
		// const { list, type } = this.state;
		return (
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<input
						className="new-todo"
						placeholder="What needs to be done?"
						autoFocus
					/>
				</header>

				<section className="main">
					<input id="toggle-all" className="toggle-all" type="checkbox" />
					<label htmlFor="toggle-all">Mark all as complete</label>
					<ul className="todo-list">
						<li className="completed">
							<div className="view">
								<input className="toggle" type="checkbox" checked />
								<label>Taste JavaScript</label>
								<button className="destroy"></button>
							</div>
							<input className="edit" value="Create a TodoMVC template" />
						</li>
						<li>
							<div className="view">
								<input className="toggle" type="checkbox" />
								<label>Buy a unicorn</label>
								<button className="destroy"></button>
							</div>
							<input className="edit" value="Rule the web" />
						</li>
					</ul>
				</section>

				<footer className="footer">
					<span className="todo-count">
						<strong>0</strong> item left
					</span>

					<ul className="filters">
						<li>
							<a className="selected" href="#/">
								All
							</a>
						</li>
						<li>
							<a href="#/active">Active</a>
						</li>
						<li>
							<a href="#/completed">Completed</a>
						</li>
					</ul>
					<button className="clear-completed">Clear completed</button>
				</footer>
			</section>
		);
	}
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById("root"));
