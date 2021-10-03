import React from "react";

interface State {
  input: string;
  tasks: string[];
}

class TodoList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: "",
      tasks: [],
    };
  }

  appendTask = (task: string) => () => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(task),
      input: "",
    }));
  };

  prependTask = (task: string) => () => {
    this.setState((prevState) => ({
      tasks: [task].concat(prevState.tasks),
      input: "",
    }));
  };

  removeTask = (task: string) => () => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((currentTask) => currentTask !== task),
      };
    });
  };

  render() {
    return (
      <main>
        <h1>Tarefas (Classes)</h1>

        <input
          type="text"
          value={this.state.input}
          onChange={(event) => this.setState({ input: event.target.value })}
        />

        <button
          disabled={!this.state.input}
          type="button"
          onClick={this.prependTask(this.state.input)}
        >
          adicionar ao inicio
        </button>
        <button
          disabled={!this.state.input}
          type="button"
          onClick={this.appendTask(this.state.input)}
        >
          adicionar ao final
        </button>

        <br />

        <ul>
          {this.state.tasks.map((task) => (
            <li key={task}>
              {task}
              <button type="button" onClick={this.removeTask(task)}>
                remover
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export { TodoList as TodoListClasses };
