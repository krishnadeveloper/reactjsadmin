import React from "react"
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breacrumb from "../Comman/Breacrumb";

export default ()=>{
    return(
        <React.Fragment>
            <LeftNav />
            <div className="right-panel" id="right-panel">
                <Header />
                <Breacrumb />
                <div className="content mt-3">
                <div className="animated fadeIn">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong className="card-title">Credit Card</strong>
                        </div>
                        <div className="card-body">
                            <div id="pay-invoice">
                            <div className="card-body">
                                <div className="card-title">
                                <h3 className="text-center">Pay Invoice</h3>
                                </div>
                                <hr/>
                                <form action="" method="post" novalidate="novalidate">
                                <div className="form-group text-center">
                                    <ul className="list-inline">
                                    <li className="list-inline-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                                    </ul>
                                </div>
                                <div className="form-group">
                                    <label for="cc-payment" className="control-label mb-1">Payment amount</label>
                                    <input id="cc-pament" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" value="100.00"/>
                                </div>
                                <div className="form-group has-success">
                                    <label for="cc-name" className="control-label mb-1">Name on card</label>
                                    <input id="cc-name" name="cc-name" type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error"/>
                                    <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                </div>
                                <div className="form-group">
                                    <label for="cc-number" className="control-label mb-1">Card number</label>
                                    <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" value="" data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autocomplete="cc-number"/>
                                    <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                    <div className="form-group">
                                        <label for="cc-exp" className="control-label mb-1">Expiration</label>
                                        <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" value="" data-val="true" data-val-required="Please enter the card expiration" data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" autocomplete="cc-exp"/>
                                        <span className="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                                    </div>
                                    </div>
                                    <div className="col-6">
                                    <label for="x_card_code" className="control-label mb-1">Security code</label>
                                    <div className="input-group">
                                        <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" value="" data-val="true" data-val-required="Please enter the security code" data-val-cc-cvc="Please enter a valid security code" autocomplete="off"/>
                                        <div className="input-group-addon">
                                        <span className="fa fa-question-circle fa-lg" data-toggle="popover" data-container="body" data-html="true" data-title="Security Code"
                                        data-content="<div className='text-center one-card'>The 3 digit code on back of the card..<div className='visa-mc-cvc-preview'></div></div>"
                                        data-trigger="hover"></span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                    <i className="fa fa-lock fa-lg"></i>&nbsp;
                                    <span id="payment-button-amount">Pay $100.00</span>
                                    <span id="payment-button-sending" style={{display:"none"}}>Sending…</span>
                                    </button>
                                </div>
                                </form>
                            </div>
                            </div>

                        </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header"><strong>Company</strong><small> Form</small></div>
                        <div className="card-body card-block">
                            <div className="form-group"><label for="company" className=" form-control-label">Company</label><input type="text" id="company" placeholder="Enter your company name" className="form-control"/></div>
                            <div className="form-group"><label for="vat" className=" form-control-label">VAT</label><input type="text" id="vat" placeholder="DE1234567890" className="form-control"/></div>
                            <div className="form-group"><label for="street" className=" form-control-label">Street</label><input type="text" id="street" placeholder="Enter street name" className="form-control"/></div>
                            <div className="row form-group">
                            <div className="col-8">
                                <div className="form-group"><label for="city" className=" form-control-label">City</label><input type="text" id="city" placeholder="Enter your city" className="form-control"/></div>
                            </div>
                            <div className="col-8">
                                <div className="form-group"><label for="postal-code" className=" form-control-label">Postal Code</label><input type="text" id="postal-code" placeholder="Postal Code" className="form-control"/></div>
                            </div>
                            </div>
                            <div className="form-group"><label for="country" className=" form-control-label">Country</label><input type="text" id="country" placeholder="Country name" className="form-control"/></div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong>Basic Form</strong> Elements
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-md-3"><label className=" form-control-label">Static</label></div>
                                <div className="col-12 col-md-9">
                                <p className="form-control-static">Username</p>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="text-input" className=" form-control-label">Text Input</label></div>
                                <div className="col-12 col-md-9"><input type="text" id="text-input" name="text-input" placeholder="Text" className="form-control"/><small className="form-text text-muted">This is a help text</small></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="email-input" className=" form-control-label">Email Input</label></div>
                                <div className="col-12 col-md-9"><input type="email" id="email-input" name="email-input" placeholder="Enter Email" className="form-control"/><small className="help-block form-text">Please enter your email</small></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="password-input" className=" form-control-label">Password</label></div>
                                <div className="col-12 col-md-9"><input type="password" id="password-input" name="password-input" placeholder="Password" className="form-control"/><small className="help-block form-text">Please enter a complex password</small></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="disabled-input" className=" form-control-label">Disabled Input</label></div>
                                <div className="col-12 col-md-9"><input type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled="" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="textarea-input" className=" form-control-label">Textarea</label></div>
                                <div className="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Content..." className="form-control"></textarea></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="select" className=" form-control-label">Select</label></div>
                                <div className="col-12 col-md-9">
                                <select name="select" id="select" className="form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="selectLg" className=" form-control-label">Select Large</label></div>
                                <div className="col-12 col-md-9">
                                <select name="selectLg" id="selectLg" className="form-control-lg form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="selectSm" className=" form-control-label">Select Small</label></div>
                                <div className="col-12 col-md-9">
                                <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                    <option value="4">Option #4</option>
                                    <option value="5">Option #5</option>
                                </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="disabledSelect" className=" form-control-label">Disabled Select</label></div>
                                <div className="col-12 col-md-9">
                                <select name="disabledSelect" id="disabledSelect" disabled="" className="form-control">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Multiple select</label></div>
                                <div className="col col-md-9">
                                <select name="multiple-select" id="multiple-select" multiple="" className="form-control">
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                    <option value="4">Option #4</option>
                                    <option value="5">Option #5</option>
                                    <option value="6">Option #6</option>
                                    <option value="7">Option #7</option>
                                    <option value="8">Option #8</option>
                                    <option value="9">Option #9</option>
                                    <option value="10">Option #10</option>
                                </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label className=" form-control-label">Radios</label></div>
                                <div className="col col-md-9">
                                <div className="form-check">
                                    <div className="radio">
                                    <label for="radio1" className="form-check-label ">
                                        <input type="radio" id="radio1" name="radios" value="option1" className="form-check-input"/>Option 1
                                    </label>
                                    </div>
                                    <div className="radio">
                                    <label for="radio2" className="form-check-label ">
                                        <input type="radio" id="radio2" name="radios" value="option2" className="form-check-input"/>Option 2
                                    </label>
                                    </div>
                                    <div className="radio">
                                    <label for="radio3" className="form-check-label ">
                                        <input type="radio" id="radio3" name="radios" value="option3" className="form-check-input"/>Option 3
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label className=" form-control-label">Inline Radios</label></div>
                                <div className="col col-md-9">
                                <div className="form-check-inline form-check">
                                    <label for="inline-radio1" className="form-check-label ">
                                    <input type="radio" id="inline-radio1" name="inline-radios" value="option1" className="form-check-input"/>One
                                    </label>
                                    <label for="inline-radio2" className="form-check-label ">
                                    <input type="radio" id="inline-radio2" name="inline-radios" value="option2" className="form-check-input"/>Two
                                    </label>
                                    <label for="inline-radio3" className="form-check-label ">
                                    <input type="radio" id="inline-radio3" name="inline-radios" value="option3" className="form-check-input"/>Three
                                    </label>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label className=" form-control-label">Checkboxes</label></div>
                                <div className="col col-md-9">
                                <div className="form-check">
                                    <div className="checkbox">
                                    <label for="checkbox1" className="form-check-label ">
                                        <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" className="form-check-input"/>Option 1
                                    </label>
                                    </div>
                                    <div className="checkbox">
                                    <label for="checkbox2" className="form-check-label ">
                                        <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" className="form-check-input"/> Option 2
                                    </label>
                                    </div>
                                    <div className="checkbox">
                                    <label for="checkbox3" className="form-check-label ">
                                        <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" className="form-check-input"/> Option 3
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label className=" form-control-label">Inline Checkboxes</label></div>
                                <div className="col col-md-9">
                                <div className="form-check-inline form-check">
                                    <label for="inline-checkbox1" className="form-check-label ">
                                    <input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" className="form-check-input"/>One
                                    </label>
                                    <label for="inline-checkbox2" className="form-check-label ">
                                    <input type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" className="form-check-input"/>Two
                                    </label>
                                    <label for="inline-checkbox3" className="form-check-label ">
                                    <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" className="form-check-input"/>Three
                                    </label>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="file-input" className=" form-control-label">File input</label></div>
                                <div className="col-12 col-md-9"><input type="file" id="file-input" name="file-input" className="form-control-file"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="file-multiple-input" className=" form-control-label">Multiple File input</label></div>
                                <div className="col-12 col-md-9"><input type="file" id="file-multiple-input" name="file-multiple-input" multiple="" className="form-control-file"/></div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <strong>Inline</strong> Form
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-inline">
                            <div className="form-group"><label for="exampleInputName2" className="pr-1  form-control-label">Name</label><input type="text" id="exampleInputName2" placeholder="Jane Doe" required="" className="form-control"/></div>
                            <div className="form-group"><label for="exampleInputEmail2" className="px-1  form-control-label">Email</label><input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required="" className="form-control"/></div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong>Horizontal</strong> Form
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="hf-email" className=" form-control-label">Email</label></div>
                                <div className="col-12 col-md-9"><input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." className="form-control"/><span className="help-block">Please enter your email</span></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3"><label for="hf-password" className=" form-control-label">Password</label></div>
                                <div className="col-12 col-md-9"><input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." className="form-control"/><span className="help-block">Please enter your password</span></div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <strong>Normal</strong> Form
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="">
                            <div className="form-group"><label for="nf-email" className=" form-control-label">Email</label><input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." className="form-control"/><span className="help-block">Please enter your email</span></div>
                            <div className="form-group"><label for="nf-password" className=" form-control-label">Password</label><input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." className="form-control"/><span className="help-block">Please enter your password</span></div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            Input <strong>Grid</strong>
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-sm-3"><input type="text" placeholder=".col-sm-3" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-4"><input type="text" placeholder=".col-sm-4" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-5"><input type="text" placeholder=".col-sm-5" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-6"><input type="text" placeholder=".col-sm-6" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-7"><input type="text" placeholder=".col-sm-7" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-8"><input type="text" placeholder=".col-sm-8" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-9"><input type="text" placeholder=".col-sm-9" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-10"><input type="text" placeholder=".col-sm-10" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-11"><input type="text" placeholder=".col-sm-11" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-12"><input type="text" placeholder=".col-sm-12" className="form-control"/></div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-user"></i> Login
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            Input <strong>Sizes</strong>
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-sm-5"><label for="input-small" className=" form-control-label">Small Input</label></div>
                                <div className="col col-sm-6"><input type="text" id="input-small" name="input-small" placeholder=".form-control-sm" className="input-sm form-control-sm form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-5"><label for="input-normal" className=" form-control-label">Normal Input</label></div>
                                <div className="col col-sm-6"><input type="text" id="input-normal" name="input-normal" placeholder="Normal" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-sm-5"><label for="input-large" className=" form-control-label">Large Input</label></div>
                                <div className="col col-sm-6"><input type="text" id="input-large" name="input-large" placeholder=".form-control-lg" className="input-lg form-control-lg form-control"/></div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong>Validation states</strong> Form
                        </div>
                        <div className="card-body card-block">
                            <div className="has-success form-group"><label for="inputIsValid" className=" form-control-label">Input is valid</label><input type="text" id="inputIsValid" className="is-valid form-control-success form-control"/></div>
                            <div className="has-warning form-group"><label for="inputIsInvalid" className=" form-control-label">Input is invalid</label><input type="text" id="inputIsInvalid" className="is-invalid form-control"/></div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong>Validation states</strong> with optional icons<em>(deprecated)</em>
                        </div>
                        <div className="card-body card-block">
                            <div className="has-success form-group"><label for="inputSuccess2i" className=" form-control-label">Input with success</label><input type="text" id="inputSuccess2i" className="form-control-success form-control"/></div>
                            <div className="has-warning form-group"><label for="inputWarning2i" className=" form-control-label">Input with warning</label><input type="text" id="inputWarning2i" className="form-control-warning form-control"/></div>
                            <div className="has-danger has-feedback form-group"><label for="inputError2i" className=" form-control-label">Input with error</label><input type="text" id="inputError2i" className="form-control-danger form-control"/></div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong>Icon/Text</strong> Groups
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-user"></i></div>
                                    <input type="text" id="input1-group1" name="input1-group1" placeholder="Username" className="form-control"/>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <input type="email" id="input2-group1" name="input2-group1" placeholder="Email" className="form-control"/>
                                    <div className="input-group-addon"><i className="fa fa-envelope-o"></i></div>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-euro"></i></div>
                                    <input type="text" id="input3-group1" name="input3-group1" placeholder=".." className="form-control"/>
                                    <div className="input-group-addon">.00</div>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong>Buttons</strong> Groups
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <div className="input-group-btn">
                                    <button className="btn btn-primary">
                                        <i className="fa fa-search"></i> Search
                                    </button>
                                    </div>
                                    <input type="text" id="input1-group2" name="input1-group2" placeholder="Username" className="form-control"/>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <input type="email" id="input2-group2" name="input2-group2" placeholder="Email" className="form-control"/>
                                    <div className="input-group-btn"><button className="btn btn-primary">Submit</button></div>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <div className="input-group-btn"><button className="btn btn-primary"><i className="fa fa-facebook"></i></button></div>
                                    <input type="text" id="input3-group2" name="input3-group2" placeholder="Search" className="form-control"/>
                                    <div className="input-group-btn"><button className="btn btn-primary"><i className="fa fa-twitter"></i></button></div>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            <strong>Dropdowns</strong> Groups
                        </div>
                        <div className="card-body card-block">
                            <form className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <div className="input-group-btn">
                                    <div className="btn-group">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Dropdown</button>
                                        <div tabindex="-1" aria-hidden="true" role="menu" className="dropdown-menu">
                                        <button type="button" tabindex="0" className="dropdown-item">Action</button><button type="button" tabindex="0" className="dropdown-item">Another Action</button><button type="button" tabindex="0" className="dropdown-item">Something else here</button>
                                        <div tabindex="-1" className="dropdown-divider"></div>
                                        <button type="button" tabindex="0" className="dropdown-item">Separated link</button>
                                        </div>
                                    </div>
                                    </div>
                                    <input type="text" id="input1-group3" name="input1-group3" placeholder="Username" className="form-control"/>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <input type="email" id="input2-group3" name="input2-group3" placeholder="Email" className="form-control"/>
                                    <div className="input-group-btn">
                                    <div className="btn-group">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Dropdown</button>
                                        <div tabindex="-1" aria-hidden="true" role="menu" className="dropdown-menu">
                                        <button type="button" tabindex="0" className="dropdown-item">Action</button><button type="button" tabindex="0" className="dropdown-item">Another Action</button><button type="button" tabindex="0" className="dropdown-item">Something else here</button>
                                        <div tabindex="-1" className="dropdown-divider"></div>
                                        <button type="button" tabindex="0" className="dropdown-item">Separated link</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-12">
                                <div className="input-group">
                                    <div className="input-group-btn">
                                    <div className="btn-group">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Action</button>
                                        <div tabindex="-1" aria-hidden="true" role="menu" className="dropdown-menu">
                                        <button type="button" tabindex="0" className="dropdown-item">Action</button><button type="button" tabindex="0" className="dropdown-item">Another Action</button><button type="button" tabindex="0" className="dropdown-item">Something else here</button>
                                        <div tabindex="-1" className="dropdown-divider"></div>
                                        <button type="button" tabindex="0" className="dropdown-item">Separated link</button>
                                        </div>
                                    </div>
                                    </div>
                                    <input type="text" id="input3-group3" name="input3-group3" placeholder=".." className="form-control"/>
                                    <div className="input-group-btn">
                                    <div className="btn-group">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Dropdown</button>
                                        <div tabindex="-1" aria-hidden="true" role="menu" className="dropdown-menu">
                                        <button type="button" tabindex="0" className="dropdown-item">Action</button><button type="button" tabindex="0" className="dropdown-item">Another Action</button><button type="button" tabindex="0" className="dropdown-item">Something else here</button>
                                        <div tabindex="-1" className="dropdown-divider"></div>
                                        <button type="button" tabindex="0" className="dropdown-item">Separated link</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="btn btn-danger btn-sm">
                            <i className="fa fa-ban"></i> Reset
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            Use the grid for big devices!
                            <small>
                            <code>.col-lg-*</code><code>.col-md-*</code><code>.col-sm-*</code>
                            </small>
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-md-8"><input type="text" placeholder=".col-md-8" className="form-control"/></div>
                                <div className="col col-md-4"><input type="text" placeholder=".col-md-4" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-7"><input type="text" placeholder=".col-md-7" className="form-control"/></div>
                                <div className="col col-md-5"><input type="text" placeholder=".col-md-5" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-6"><input type="text" placeholder=".col-md-6" className="form-control"/></div>
                                <div className="col col-md-6"><input type="text" placeholder=".col-md-6" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-5"><input type="text" placeholder=".col-md-5" className="form-control"/></div>
                                <div className="col col-md-7"><input type="text" placeholder=".col-md-7" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-4"><input type="text" placeholder=".col-md-4" className="form-control"/></div>
                                <div className="col col-md-8"><input type="text" placeholder=".col-md-8" className="form-control"/></div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer"><button type="submit" className="btn btn-primary btn-sm">Action</button><button className="btn btn-danger btn-sm">Action</button><button className="btn btn-warning btn-sm">Action</button><button className="btn btn-info btn-sm">Action</button><button className="btn btn-success btn-sm">Action</button></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">
                            Input Grid for small devices!<small><code>.col-*</code></small>
                        </div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col-4"><input type="text" placeholder=".col-4" className="form-control"/></div>
                                <div className="col-8"><input type="text" placeholder=".col-8" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-5"><input type="text" placeholder=".col-5" className="form-control"/></div>
                                <div className="col-7"><input type="text" placeholder=".col-7" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-6"><input type="text" placeholder=".col-6" className="form-control"/></div>
                                <div className="col-6"><input type="text" placeholder=".col-6" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-7"><input type="text" placeholder=".col-5" className="form-control"/></div>
                                <div className="col-5"><input type="text" placeholder=".col-5" className="form-control"/></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-8"><input type="text" placeholder=".col-8" className="form-control"/></div>
                                <div className="col-4"><input type="text" placeholder=".col-4" className="form-control"/></div>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer"><button type="submit" className="btn btn-primary btn-sm">Action</button><button className="btn btn-danger btn-sm">Action</button><button className="btn btn-warning btn-sm">Action</button><button className="btn btn-info btn-sm">Action</button><button className="btn btn-success btn-sm">Action</button></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">Example Form</div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="">
                            <div className="form-group">
                                <div className="input-group">
                                <div className="input-group-addon">Username</div>
                                <input type="text" id="username3" name="username3" className="form-control"/>
                                <div className="input-group-addon"><i className="fa fa-user"></i></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <div className="input-group-addon">Email</div>
                                <input type="email" id="email3" name="email3" className="form-control"/>
                                <div className="input-group-addon"><i className="fa fa-envelope"></i></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <div className="input-group-addon">Password</div>
                                <input type="password" id="password3" name="password3" className="form-control"/>
                                <div className="input-group-addon"><i className="fa fa-asterisk"></i></div>
                                </div>
                            </div>
                            <div className="form-actions form-group">
                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">Example Form</div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="">
                            <div className="form-group">
                                <div className="input-group">
                                <input type="text" id="username2" name="username2" placeholder="Username" className="form-control"/>
                                <div className="input-group-addon"><i className="fa fa-user"></i></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <input type="email" id="email2" name="email2" placeholder="Email" className="form-control"/>
                                <div className="input-group-addon"><i className="fa fa-envelope"></i></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <input type="password" id="password2" name="password2" placeholder="Password" className="form-control"/>
                                <div className="input-group-addon"><i className="fa fa-asterisk"></i></div>
                                </div>
                            </div>
                            <div className="form-actions form-group"><button type="submit" className="btn btn-secondary btn-sm">Submit</button></div>
                            </form>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                        <div className="card-header">Example Form</div>
                        <div className="card-body card-block">
                            <form action="" method="post" className="">
                            <div className="form-group">
                                <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-user"></i></div>
                                <input type="text" id="username" name="username" placeholder="Username" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-envelope"></i></div>
                                <input type="email" id="email" name="email" placeholder="Email" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-asterisk"></i></div>
                                <input type="password" id="password" name="password" placeholder="Password" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-actions form-group"><button type="submit" className="btn btn-success btn-sm">Submit</button></div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}