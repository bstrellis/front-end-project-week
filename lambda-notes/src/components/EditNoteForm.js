import React from 'react';
    
class EditNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: this.props.expandedNote.title,
            bodyText: this.props.expandedNote.text
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className='editNoteForm'>
                <input type='text' onChange={this.changeHandler} name='titleText' value={this.state.titleText} />
                <input type='text' onChange={this.changeHandler} name='bodyText' value={this.state.bodyText} />
                <div >Update</div>
            </div>
        )
    }
}

export default EditNoteForm;