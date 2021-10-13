import React from 'react';
// import Particles from 'particlesjs';
import './Home.css';

// window.onload = () => {
//   Particles.init({
//     selector: '.home .background',
//     color: '#CCCCCC',
//     connectParticles: true,
//   });
// };

const scrollText = ['Anson Ng!', 'a Software Developer!'];

class Home extends React.Component {
  constructor() {
    super();
    this.state = { textId: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      const { textId } = this.state;
      this.setState({ textId: (textId + 1) % 2 });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    const { textId } = this.state;

    return (
      <div className="home">
        <div className="title">
          <div>Greetings, I&apos;m</div>
          <div className="scroll-container">
            <div className="scroll-text">
              {scrollText[textId]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
