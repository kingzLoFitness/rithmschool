class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Here's a component!</h2>
                <p>Aww yeah.</p>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Here's my first React App!</h1>
                <MyComponent />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
