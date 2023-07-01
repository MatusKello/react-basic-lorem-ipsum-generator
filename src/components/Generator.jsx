import { useState } from 'react';
import text from '../data';

const Generator = () => {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count < 0) {
      setParagraphs([]);
    } else if (count > 5) {
      setParagraphs(text.slice(0, count));
    } else {
      setParagraphs(text.slice(0, count));
    }
  };

  return (
    <section className='form-section'>
      <h1>Lorem ipsum generator</h1>
      <form onSubmit={handleSubmit}>
        <label>Paragraph: </label>
        <input
          type='number'
          onChange={(event) => setCount(event.target.value)}
        />
        <input type='submit' value='Generate' />
      </form>
      <div>
        {paragraphs.map((oneParagraph, index) => {
          return <p key={index}>{oneParagraph}</p>;
        })}
      </div>
    </section>
  );
};

export default Generator;
