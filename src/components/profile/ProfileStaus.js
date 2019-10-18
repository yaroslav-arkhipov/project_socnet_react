import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode:false
    }
    activateEdit = () => {
        this.setState({
            editMode: true
        })
    };
    deactivateEdit = () => {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEdit}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEdit} value={this.props.status}></input>
                </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;