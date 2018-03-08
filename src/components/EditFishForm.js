import React from 'react';

class EditFishForm extends React.Component{
  handleChange = (e) => {
    const updatedFish = {
      ...this.props.fish,
      // This finds the target name <input name={} value={}> (computed property names)
      [e.currentTarget.name]: e.currentTarget.value
    }
    // Updates state 2 parents up
    this.props.updateFish(this.props.index, updatedFish)
  }
  render(){
    return(
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
        <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
        <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
        <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
      </div>
    )
  };
}

export default EditFishForm;
