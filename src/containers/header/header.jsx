import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dignissimos odio repellendus, vero fugit eveniet nihil dolores incidunt nesciunt aperiam harum alias delectus asperiores sunt consectetur, esse corporis reprehenderit nulla.</p>
        <div className='gpt3__header-content__input'>
        <input type="email" placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>100,000 people requested acess a visit in last 24 hours</p>
        </div>
      </div>
    </div>
  )
}

export default Header