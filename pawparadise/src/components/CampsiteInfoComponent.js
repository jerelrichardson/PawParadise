import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {

        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                                                                    {/* good of key here */}
                    {comments.map(comments => <div className="p-1" key={comments.id}> 
                    {comments.text}<br></br>
                    -- {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</div>)}
                </div>
            );
        } else {
            return (
                // could write an empty <div /> like this too
                <div>

                </div>
            );
        }
    }

    render () {
         // you can also set this.props.campsite to a variable and use that in your render methods
        // e.g. let selectedSite = this.props.campsite, 
        // then pass it to this.renderCampsite(selectedSite)
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        } else {
            return (
                <div>

                </div>
            );
        }
    }
}

export default CampsiteInfo