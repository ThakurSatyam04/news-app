import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title , description , imageUrl , newsUrl} = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}> 
        {/* we can't use inline style so we have to make it an object like this. */}
            <img src= {!imageUrl?"https://images.hindustantimes.com/tech/img/2023/02/07/1600x900/stsci-01gqqpmmf1zczptf7n1t7nqe92-lowres_1675793172700_1675793185946_1675793185946.png":imageUrl} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
