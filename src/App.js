import React, { PureComponent } from 'react';
import './App.css';
import css from './talents/css.json';

class App extends PureComponent {
  state = {
    ...css,
    checked: [],
  }

  check = (id) => {
    this.setState({ checked: this.state.checked.concat(id)})
  }

  uncheck = (id) => {
    const checkedWithoutElement = this.state.checked.filter((element => element !== id))
    this.setState({ checked: checkedWithoutElement })
  }

  isChecked = (id) => this.state.checked.includes(id)

  toggle = (id) => {
    if (this.isChecked(id)) {
        this.uncheck(id);
    } else {
        this.check(id);
    }
  }

  render() {
    const { title, talents } = this.state;

    return (
      <div>
        <h1>{title}</h1>
          {
              Object.values(talents).map((talentRow, index) => (
                  <div key={index} className={`row row-${index}`}>
                      <div className="slot slot-a">
                          {talentRow.a &&
                            <div className={`box box-a ${this.isChecked(talentRow.a.id) ? 'active':''}`} onClick={() => this.toggle(talentRow.a.id)}>
                                <p>{talentRow.a.title}</p>
                                <p>{talentRow.a.description}</p>
                            </div>
                          }
                      </div>
                    <div className="slot slot-b">
                        {talentRow.b &&
                        <div className={`box box-b ${this.isChecked(talentRow.b.id) ? 'active':''}`} onClick={() => this.toggle(talentRow.b.id)}>
                          <p>{talentRow.b.title}</p>
                          <p>{talentRow.b.description}</p>
                        </div>
                        }
                    </div>
                    <div className="slot slot-c">
                        {talentRow.c &&
                        <div className={`box box-c ${this.isChecked(talentRow.c.id) ? 'active':''}`} onClick={() => this.toggle(talentRow.c.id)}>
                          <p>{talentRow.c.title}</p>
                          <p>{talentRow.c.description}</p>
                        </div>
                        }
                    </div>
                    <div className="slot slot-d">
                        {talentRow.d &&
                        <div className={`box box-d ${this.isChecked(talentRow.d.id) ? 'active':''}`} onClick={() => this.toggle(talentRow.d.id)}>
                          <p>{talentRow.d.title}</p>
                          <p>{talentRow.d.description}</p>
                        </div>
                        }
                    </div>
                  </div>
              ))
          }
      </div>
    );
  }
}

export default App;
