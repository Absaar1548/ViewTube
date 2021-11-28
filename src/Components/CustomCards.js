import { Card,Col,Button } from "react-bootstrap";

const CustomCard = ({title,views,uploadAgo,uploadBy,image}) => {
    return( 
        <Col>
        <Card bg = "dark">
            <Card.Img src = {image} variant = "top"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{uploadBy}</Card.Text>
                <Card.Text>{uploadAgo} | {views}</Card.Text>
                <Button variant="danger">Subscribe</Button>
            </Card.Body>
        </Card>
        </Col>
    );
}

export default CustomCard;