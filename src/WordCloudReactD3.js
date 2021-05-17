import React from 'react';
import WordCloud from 'react-d3-cloud';

function WordCloudReactD3() {

    const data = [
        { text: '도와주다', value: 1000 },
        { text: '봇', value: 200 },
        { text: '챗', value: 800 },
        { text: '안내', value: 1000000 },
        { text: '주문', value: 100 },
        { text: '담보', value: 210 },
        { text: '단말', value: 310 },
        { text: '업무', value: 1010 },
        { text: '추가', value: 1000 },
        { text: '실기', value: 100 },
        { text: '신청', value: 1050 },
        { text: '수시', value: 20 },
        { text: '매도', value: 10 },
        { text: '담당자', value: 10 },

      ];
       
      const fontSizeMapper = word => Math.log2(word.value) * 5;
    //   const rotate = word => word.value % 360;

    return (
        <>
             <WordCloud
                data={data}
                fontSizeMapper={fontSizeMapper}
                
             />
        </>
    );
}

export default WordCloudReactD3;