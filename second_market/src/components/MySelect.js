import React from 'react';
import Select from 'react-select';

class MySelect extends React.Component {
  render() {
    const {
      isValid
    } = this.props
    
    const customStyles = {
      control: (base, state) => ({
        ...base,
        // state.isFocused can display different borderColor if you need it
        borderColor: state.isFocused ?
          'grey' : isValid ?
          '#a94442' : 'grey',

      })
    }
    return <Select styles={ customStyles } {...this.props}/>
  }
}

export default MySelect;