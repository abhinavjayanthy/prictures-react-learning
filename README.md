# Pictures React App for learning

## Searchbar.js

1.`<input>` tag notes :

- we add a prop onChange and have it like `onChange={this.onInputChange}` but not `onChange={this.onInputChange()}` because we don't want to call `onInputChange` when the component is rendered, instead we want to call it some time in the future
- an alternate way of writing this would be `onChange={{(event) => console.log(event.target.value)}}` as oopposed to using a seperate function on class
- This is an example of uncontrolled form element

```jsx

onInputChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );

```

The above example is bad becasue, at any given point we have to go to the DOM of the HTML to get the value of the input, but **not at the react app**

- This is an example of a controlled element

```jsx
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }

```

Here we have the value in the react side ie.., in the state **not on the HTML side**
