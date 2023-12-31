import React, { useState } from "react";
import Card from "react-bootstrap/Card"
function Project(props) {
    const currentProject = useState(props)[0].projects;
    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const live = currentProject.live;
    const github = currentProject.github;
    return (
        
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={require(`../../assets/images/${image}`)}
                className="card-image"></Card.Img>
            <Card.Body>
                <Card.Title className="card-title">{name}</Card.Title>
                <Card.Text className="card-text">{description}</Card.Text>
                <Card.Subtitle>
                    <Card.Link href={live} target="_blank">App Link</Card.Link>
                    <br></br>
                    <Card.Link href={github} target="_blank">Github Repo</Card.Link>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default Project;