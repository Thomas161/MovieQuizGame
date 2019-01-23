import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuizMain from './../src/components/AuthorQuizMain';
import Turn from './../src/AuthorQuizMain';
import Enzyme,{shallow,render,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import Images from './../public/images/';

const state = {
  turnData: {
    movies: ['The Abyss','following', 'Con Air', 'They Live' ],
    director: {
      name: 'James Cameron',
      image: '/images/james.jpg',
    },
  },
  highlight: 'none'
}
Enzyme.configure({adapter: new Adapter()});
describe('Testing the ReactDOM', ()=> {
  it('renders without crashing',()=> {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuizMain {...state} onAnswerSelected={()=> {}} />, div);
});
});


//checks logic of whether right / wrong or no answer given
describe('When no answer has been selected', ()=> {
  let wrapper;
  beforeAll(()=> {
wrapper = mount(<AuthorQuizMain {...state} onAnswerSelected={()=> {}}/>);
  });
  it('Should have no background color', ()=> {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
  });
})
describe("When wrong answer selected", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<AuthorQuizMain {...(Object.assign({},state, {highlight: 'wrong'}))} onAnswerSelected={() => {}} />);
  });
  it("Should be red", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("red");
  });
});
describe("When correct answer selected", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<AuthorQuizMain {...(Object.assign({},state, {highlight: 'correct'}))} onAnswerSelected={() => {}} />);
  });
  it("Should be green", () => {
    expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
      "green"
    );
  });
});

//using jest.fn() method we can mock and simulate a user experience

describe('when the right answer is selected', ()=> {
  let wrapper;
  const handleAnswerSelected = jest.fn();
  beforeAll(()=> {
 wrapper = mount(<AuthorQuizMain {...state} onAnswerSelected={handleAnswerSelected} />);
 //using wrapper you can invoke the find() to find the answers
 //this will fail as first answer in mock object above does not have right answer but fourth element is correct
      wrapper.find('.answer').first().simulate('click');
  });
// it('onAnswerSelected should have been called', ()=> {
// expect(handleAnswerSelected).toHaveBeenCalledWith();
// });
it('selected answer should be The Abyss', ()=> {
  expect(handleAnswerSelected).toHaveBeenCalledWith('The Abyss');
});


  });

  describe('Turn Component testing src defined ', ()=>{
   
    it('Turn',()=>{
        const wrapper = shallow( <Turn  /> );

        console.log(wrapper.debug());

        expect(wrapper.find('img src')).toBeDefined();
        
    })

  })









