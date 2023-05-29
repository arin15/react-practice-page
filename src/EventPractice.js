import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message : ''
    }
/*  생성자를 통해서 컴포넌트와 이벤트 메서드를 서로 바인딩 시킴 
    해당 과정이 없으면 메서드 호출시 undefined가 발생한다
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message : e.target.value
        });
    }

    handleClick(e) {
        this.setState({
            message : ''
        });
    }
*/
    /* babel의 transorm-class-properties 문법 사용
       화살표 함수 형태로 메서드를 정의하면 생성자를 통한 bind가 필요없다.
       함수가 추가될 때마다 생성자를 수정해주지 않아서 유지에 용이하다.
    */
    handleChange = (e) => {
        this.setState({
            message : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <input 
                 type='text'
                 name='message'
                 placeholder='아무거나 입력하세요'
                 value={this.state.message}
                 onChange={this.handleChange}
                 ></input>
                 <button onClick={this.handleClick}>확인</button>

            </div>
        );
    }
}

export default EventPractice;