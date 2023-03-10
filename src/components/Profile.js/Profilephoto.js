
import Card from 'react-bootstrap/Card';

function Profilephoto() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/custom_covers/222x/492229502962312064_1504726910.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Profilephoto;