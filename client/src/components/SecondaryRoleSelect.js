import React from 'react';
import { Field } from 'redux-form';
import bot from '../ranked-positions/Position_Diamond-Bot.png';
import support from '../ranked-positions/Position_Diamond-Support.png';
import mid from '../ranked-positions/Position_Diamond-Mid.png';
import jungle from '../ranked-positions/Position_Diamond-Jungle.png';
import top from '../ranked-positions/Position_Diamond-Top.png';

class SecondaryRoleSelect extends React.Component {
  render() {
    return (
      <div>
        <div className="ui equal width grid">
          <div className="row">
            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={bot}
                alt="bot_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <br />
              <label>
                <Field
                  name="secondaryRole"
                  component="input"
                  type="radio"
                  value="bot"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={support}
                alt="support_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <br />
              <label>
                <Field
                  name="secondaryRole"
                  component="input"
                  type="radio"
                  value="support"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={mid}
                alt="silver_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <br />
              <label>
                <Field
                  name="secondaryRole"
                  component="input"
                  type="radio"
                  value="mid"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={jungle}
                alt="gold_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <br />
              <label>
                <Field
                  name="secondaryRole"
                  component="input"
                  type="radio"
                  value="jungle"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={top}
                alt="diamond_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <br />
              <label>
                <Field
                  name="secondaryRole"
                  component="input"
                  type="radio"
                  value="top"
                />{' '}
              </label>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default SecondaryRoleSelect;
