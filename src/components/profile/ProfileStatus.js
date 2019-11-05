import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode:false
    }
    activateEdit = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    };
    deactivateEdit = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        });
    }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEdit}>{this.props.status || "Поставьте свой статус!"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEdit} value={this.state.status}></input>
                </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;