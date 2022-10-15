import Carousel from 'react-bootstrap/Carousel';
import {Slider} from './Slider.css'
function slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images2.alphacoders.com/516/516664.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>one piece</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/192590.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>bleach</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper.dog/large/10773322.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>naruto</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper.dog/large/20399504.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>dragon ball</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default slider;