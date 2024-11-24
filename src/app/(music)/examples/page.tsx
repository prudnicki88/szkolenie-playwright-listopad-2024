"use client";
import React, { useState } from "react";

const page = (props: Props) => {
  return (
    <div className="d-flex flex-column gap-5">
      <Example3 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
      <Example6 />
    </div>
  );
};

export default page;

type Props = {};

function Example3() {
  const [touched, setTouched] = useState(false);

  return (
    <div className="row">
      <div className="col-5">
        <div className="well">
          {touched && (
            <div className="alert p-5 alert-success">
              Your form has been submitted!
            </div>
          )}
          {!touched && (
            <form
              className="action-form"
              onSubmit={(e) => {
                e.preventDefault();
                setTouched(true);
              }}
            >
              <div className="form-group">
                <label htmlFor="couponCode1" title="HALFOFF">
                  Coupon Code
                </label>
                <input type="text" className="form-control" id="couponCode1" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Example4() {
  const [touched, setTouched] = useState(false);

  return (
    <div className="row my-2">
      <div className="col-xs-5">
        <div className="well">
          <form>
            <div className="form-group">
              <div
                hidden={touched}
                className="form-control"
                onContextMenu={(e) => {
                  e.preventDefault();
                  setTouched(true);
                }}
              >
                Right click to edit
              </div>
              {touched && (
                <input
                  type="text"
                  className="action-input-hidden hidden form-control"
                  value="Right click to edit"
                  autoFocus={true}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
function Example2() {
  const [touched, setTouched] = useState(false);

  return (
    <div className="row my-2">
      <div className="col-xs-5">
        <div className="well">
          <form>
            <div className="form-group">
              <div
                hidden={touched}
                className="form-control"
                onDoubleClick={() => setTouched(true)}
              >
                Double click to edit
              </div>
              {touched && (
                <input
                  type="text"
                  className="action-input-hidden hidden form-control"
                  value="Double click to edit"
                  autoFocus={true}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Example6() {
  const [touched, setTouched] = useState(false);

  return (
    <div className="row my-2">
      <div className="col-xs-5">
        <div className="well">
          <ol className="traversal-breadcrumb breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li className="active">Data</li>
          </ol>
        </div>
      </div>
      <div className="col-xs-5">
        <div className="well">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">14</span>
              Events
            </li>
            <li className="list-group-item">
              <span className="badge traversal-badge">54</span>
              Friends
            </li>
          </ul>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>

      <div className="col-xs-5">
        <div className="well">
          <ul className="traversal-list">
            <li>tabby</li>
            <li>siamese</li>
            <li>persian</li>
            <li>sphynx</li>
            <li>burmese</li>
          </ul>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>

      <div className="col-xs-5">
        <div className="well">
          <ul className="traversal-nav nav nav-tabs">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>
      <div className="col-xs-5">
        <div className="well">
          <nav>
            <ul className="pagination traversal-pagination">
              <li>
                <a href="#">
                  <span>&laquo;</span>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">
                  <span>&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>

      <div className="col-xs-5">
        <div className="well">
          <table className="table traversal-table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jane</td>
                <td>Lane</td>
              </tr>
              <tr>
                <td>2</td>
                <td>John</td>
                <td>Doe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>

      <div className="col-xs-5">
        <div className="well">
          <div className="traversal-buttons">
            <a className="btn btn-default" href="#" role="button">
              Link
            </a>
            <button className="btn btn-default" type="submit">
              Button
            </button>
            <input className="btn btn-default" type="button" value="Input" />
            <input className="btn btn-default" type="submit" value="Submit" />
          </div>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>
      <div className="col-xs-5">
        <div className="well">
          <ul className="healthy-foods">
            <li id="fruits" className="header">
              Fruits
            </li>
            <li>apples</li>
            <li>oranges</li>
            <li>bananas</li>
            <li id="veggies" className="header">
              Vegetables
            </li>
            <li>cucumbers</li>
            <li>carrots</li>
            <li>corn</li>
            <li id="nuts" className="header">
              Nuts
            </li>
            <li>walnuts</li>
            <li>cashews</li>
            <li>almonds</li>
          </ul>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>
      <div className="col-xs-5">
        <div className="well">
          <div className="traversal-disabled">
            <button type="button" className="btn btn-default" disabled={true}>
              Disabled
            </button>
            <button type="button" className="btn btn-default">
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="col-xs-12">
        <hr />
      </div>
    </div>
  );
}

function Example5() {
  const [touched, setTouched] = useState(false);

  return (
    <div className="row my-2">
      {" "}
      <div className="col-xs-5">
        <div className="well">
          <div className="action-checkboxes">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="checkbox1" />
                Checkbox one has value "checkbox1"
              </label>
            </div>
            <div className="checkbox disabled">
              <label>
                <input type="checkbox" value="checkbox2" disabled />
                Checkbox two is disabled
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="checkbox3" />
                Checkbox three has value "checkbox3"
              </label>
            </div>
          </div>

          <hr />

          <div className="action-multiple-checkboxes">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="checkbox1" />
                Checkbox one has value "checkbox1"
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="checkbox2" />
                Checkbox two has value "checkbox2"
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="checkbox3" />
                Checkbox three has value "checkbox3"
              </label>
            </div>
          </div>

          <hr />

          <div className="action-radios">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="radio1"
                />
                Radio one has value "radio1"
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios2"
                  value="radio2"
                />
                Radio two has value "radio2". When checked, it will uncheck
                Radio one.
              </label>
            </div>
            <div className="radio disabled">
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios3"
                  value="radio3"
                  disabled
                />
                Radio three is disabled
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Example1() {
  const [touched, setTouched] = useState(false);

  return (
    <div className="row">
      <div className="col">
        <div className="my-3">
          <form>
            <div className="form-group">
              <label htmlFor="fullName1">Full Name</label>
              <input
                type="text"
                className="form-control action-blur"
                id="fullName1"
                placeholder="Enter your name"
                onBlur={() => setTouched(true)}
              />
            </div>
          </form>
        </div>
        <div className="my-3">
          <form>
            <div className="form-group">
              <label htmlFor="email1">Email address</label>
              <input
                type="email"
                className="form-control action-email"
                id="email1"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Disabled Textarea</label>
              <textarea
                className="form-control action-disabled"
                disabled={!touched}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <ul className="col p-5">
        <li>- type with special character sequences</li>
        <li>- with key modifiers</li>
        <li>- Delay each keypress by 0.1 sec</li>
        <li>- Touch name then fill in textarea</li>
      </ul>
    </div>
  );
}
