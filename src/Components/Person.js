import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.person={
            FullName: 'Oumaya Rgayg', 
            Bio : '24yo, studying at GoMyCode',
            Profession: 'FullStack Web Developper',
            Img: "https://thumbs.dreamstime.com/b/astrology-card-zodiac-sign-leo-beautiful-woman-portrait-decorative-watercolor-background-pattern-fire-element-vector-216826675.jpg",
        }

        this.state={count:0}
    }
    componentDidMount() {
        setInterval(() => {
            this.setState(prevState=>({
                count: prevState.count+1
            }))
        },1000)
    }
        
    render() {
        return (
        <div>
            <h2> {this.person.FullName} </h2>
            <h2> {this.person.Bio} </h2>
            <h2> {this.person.Profession} </h2>
            <h2> {this.state.count} </h2>
            <img style={{width:"560px"}} src={this.person.Img} alt='img' />
        </div>
        )
    }
}
