import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

function WordCloud() {
    const words = [
        {
          text: 'told',
          value: 64,
        },
        {
          text: 'mistake',
          value: 60,
        },
        {
          text: 'thought',
          value: 50,
        },
        {
          text: 'bad',
          value: 10,
        },
      ]

    const callbacks = {
        getWordColor: word => word.value > 50 ? "blue" : "red",
        onWordClick: console.log('click'),
        onWordMouseOver: console.log('mouseover'),
        onWordMouseOut: console.log('mouseout'),
        getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    }

    const size = [600, 400];
    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
      };
      
  return (
    <ReactWordcloud words={words} size={size} options={options} callbacks={callbacks} />
  );
}

export default WordCloud;