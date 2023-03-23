import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <input name="name" placeholder="Igor" required />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}

export default Form;
