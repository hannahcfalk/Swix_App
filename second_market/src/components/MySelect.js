import React from 'react';
import Select from 'react-select';

class MySelect extends React.Component {
  render() {
    const {
      isInvalid
    } = this.props
    
    const customStyles = {
      control: (base, state) => ({
        ...base,
        // state.isFocused can display different borderColor if you need it
        borderColor: isInvalid ?
          '#dc3545' : '#CCCCCC'

      })
    }
    return <Select styles={ customStyles } {...this.props}/>
  }
}

export default MySelect;