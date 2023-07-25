import React from 'react'

export default function About(props) {
  // document.title = "TextUtils - About"
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black', 
  //     backgroundColor:'white',
  // })
  let myStyle = {
    color: props.mode === 'dark'? 'white' : 'black',
    backgroundColor: props.mode === 'dark'? 'rgb(41 76 120)' : 'white'
  }

  return (
    <div className="container my-2" style={{ color: props.mode === 'dark'? 'white' : 'black',}}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <p>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, charcater count and reading time.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <p>TextUtils is a free character counter tool that provides instent character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is sutable for writing test with word/charcter limit.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <p>This word counter software works in any web browser such as Chrome,Firefox,Internet Explorer,safari,opera,Microsoft Edge. It suits to count characters in facebook,blog,books,excel document,pdf document,essays,etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
