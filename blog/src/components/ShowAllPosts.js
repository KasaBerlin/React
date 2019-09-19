import React from "react";

class ShowAllPosts extends React.Component {
   render() {
    return (
<div>
<h2>Good morning Developers!</h2>
{Object.keys(this.props.items).map(uuid => {
return <div className="post" key={uuid}>
<p className="titel">{this.props.items[uuid].title}</p>
<p className="comment">{this.props.items[uuid].comment}</p>
<p className="userdate">{this.props.items[uuid].user} {this.props.items[uuid].date}</p>
</div>   
})}
</div>
    )}}

export default ShowAllPosts;
