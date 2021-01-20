import React, { Fragment, useState } from 'react'


class CallWindowOpen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_number: "",
            user_name: "",
            user_emaill: ""
        }
        this.onHandlerSubmit = this.onHandlerSubmit.bind(this);
        this.onHandlerClickName = this.onHandlerClickName.bind(this);
        this.onHandlerClickNumber = this.onHandlerClickNumber.bind(this);
        this.onHandlerClickEmail = this.onHandlerClickEmail.bind(this);
        this.CallbackResult = this.CallbackResult.bind(this);
    }

    onHandlerSubmit(e) {
        const payload = {
            user_name: this.state.user_name,
            user_number: this.state.user_number,
            user_email: this.state.user_emaill
        }
        e.preventDefault();
        this.CallbackResult(payload)
    }

    onHandlerClickNumber(event) {
        this.setState({
            user_number: event.currentTarget.value
        })
    }
    onHandlerClickName(event) {
        this.setState({
            user_name: event.currentTarget.value
        })
    }
    onHandlerClickEmail(event) {
        this.setState({
            user_emaill: event.currentTarget.value
        })
    }

    CallbackResult = async (payload) => {
        console.log(payload)
        let response = await fetch("http://127.0.0.1:3001/callback", {
            method: 'post',
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        });
       
    }



    render() {

        return (
            <div className="call-window">
                <div className="callwindow-bg" onClick={this.props.CloseCallwindow} />
                <form method="POST" className="callwindow-form-wrapper" onSubmit={this.onHandlerSubmit}>
                    <h2 className="callwindow__title">Заказать звонок</h2>
                    <input type="text" name="user_name" className="callwindow__input" placeholder="Имя" onInput={this.onHandlerClickName} />
                    <input type="text" name="user_phone" className="callwindow__input" placeholder="Телефон" onInput={this.onHandlerClickNumber} />
                    <input type="text" name="user_email" className="callwindow__input" placeholder="E-mail" onInput={this.onHandlerClickEmail} />
                    <button className="callwindow__btn" type="submit">ОТПРАВИТЬ</button>
                </form>
            </div>
        )

    }

}

export default CallWindowOpen;
