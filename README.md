# Pictures React App for learning

## Searchbar.js

1. `<input>` tag notes :

- we add a prop onChange and have it like `onChange={this.onInputChange}` but not `onChange={this.onInputChange()}` because we don't want to call `onInputChange` when the component is rendered, instead we want to call it some time in the future

- an alternate way of writing this would be `onChange={{(event) => console.log(event.target.value)}}` as oopposed to using a seperate function on class
- This is an example of uncontrolled form element

- ```jsx
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

- The above example is bad becasue, at any given point we have to go to the DOM of the HTML to get the value of the input, but **not at the react app**

- This is an example of a controlled element

- ```jsx
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

- Here we have the value in the react side ie.., in the state **not on the HTML side**

- This leads to an error, it is very common

- ```jsx

    onFormSubmit(event) {
      event.preventDefault();
      console.log(this.state.term);
    }

  ```

- this is because of the **this** keyword

- ```js
  class Car {
    setDriveSound(sound) {
      this.sound = sound;
    }
    drive() {
      return this.sound;
    }
  }

  const car = new Car();
  car.setDriveSound("vroom");
  car.drive(); // This will print vroom beacuse it is called by instance of the car class

  const drive = car.drive;

  drive(); // this is undefined -->> This is what is happening in our example
  ```

- One way to solve this

- ```js
  class Car {
    constructor() {
      this.drive = this.drive.bind(this); // This produces a new version of the function, this  is fixed with the correct value of THIS
    }
    setDriveSound(sound) {
      this.sound = sound;
    }
    drive() {
      return this.sound;
    }
  }

  const car = new Car();
  car.setDriveSound("vroom");
  car.drive();

  const drive = car.drive;

  drive();
  ```

- Second way is to :

- ```jsx
  onFormSubmit = (event) => { // Making this an arrow function instead of a traditional   function
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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

- Check the file for a third way

2. Passing information from child to parent

   - Props can only send information from parent to child **not** the otehr way around,
   - ```

     ```

   - `<SearchBar onUserSubmit={this.onSearchSubmit} />` the prop can be named anything but jsx element like `frame` cannot be named like anything

   - ```

     ```
