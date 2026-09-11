import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', backgroundColor: '#fff0f5', fontFamily: 'sans-serif' }}>
      <Helmet>
        <title>exam-review</title>
      </Helmet>

      <div style={{ backgroundColor: '#ffe4e1', width: '350px', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#c71585' }}>Noreen Tolentino</h2>
          <h4 style={{ margin: 0, color: '#8b008b' }}>Frontend Developer</h4>
        </div>
        <div style={{ padding: '0 20px 20px 20px', color: '#333' }}>
          <p style={{ margin: '0 0 5px 0' }}><strong>Frameworks:</strong></p>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <ul>React</ul>
            
          </ul>
        </div>
        <div style={{ backgroundColor: '#ffb6c1', padding: '10px', textAlign: 'center', fontSize: '14px', color: '#8b008b' }}>
          abc123@gmail.com
        </div>
      </div>
    </div>
  );
};

export default About;