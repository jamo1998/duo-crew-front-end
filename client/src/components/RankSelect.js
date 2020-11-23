import React from 'react';
import { Field, reduxForm } from 'redux-form';
import iron from '../ranked-emblems/Emblem_Iron.png';
import bronze from '../ranked-emblems/Emblem_Bronze.png';
import silver from '../ranked-emblems/Emblem_Silver.png';
import gold from '../ranked-emblems/Emblem_Gold.png';
import platinum from '../ranked-emblems/Emblem_Platinum.png';
import diamond from '../ranked-emblems/Emblem_Diamond.png';
import master from '../ranked-emblems/Emblem_Master.png';
import grandmaster from '../ranked-emblems/Emblem_Grandmaster.png';
import challenger from '../ranked-emblems/Emblem_Challenger.png';

class RankSelect extends React.Component {
  render() {
    return (
      <div>
        <div className="ui equal width grid container">
          <div className="row">
            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={iron}
                alt="Iron_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="iron"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={bronze}
                alt="bronze_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="bronze"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={silver}
                alt="silver_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="silver"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={gold}
                alt="gold_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="gold"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={platinum}
                alt="platinum_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="platinum"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={diamond}
                alt="diamond_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="diamond"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={master}
                alt="master_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="master"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={grandmaster}
                alt="grandmaster_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="grandmaster"
                />{' '}
              </label>
            </div>

            <div className="column" style={{ textAlign: 'center' }}>
              <img
                src={challenger}
                alt="challenger_Emblem"
                style={{ width: 'auto', height: 'auto' }}
              />
              <label>
                <Field
                  name="currentRank"
                  component="input"
                  type="checkbox"
                  value="challenger"
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

export default RankSelect;
