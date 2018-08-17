import React from "react"
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breacrumb from "../Comman/Breacrumb";

export default () => {
    return (
        <div>
            <LeftNav />
            <div className="right-panel" id="right-panel">
                <Header />
                <Breacrumb />
                <div className="content mt-3">
                    <div className="animated fadeIn">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <i className="mr-2 fa fa-check-square-o"></i>
                                    <strong className="card-title">3d Switch</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-3d switch-primary mr-3"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-3d switch-secondary mr-3"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-3d switch-success mr-3"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-3d switch-warning mr-3"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-3d switch-info mr-3"><input type="checkbox" className="switch-input" defaultChecked="true"/> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-3d switch-danger mr-3"><input type="checkbox" className="switch-input" defaultChecked="true"/> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch Default</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-default switch-primary mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-default switch-secondary mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-default switch-success mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-default switch-warning mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-default switch-info mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                    <label className="switch switch-default switch-danger mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch Default - Pills</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-default switch-pill switch-primary mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-pill switch-secondary mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-pill switch-success mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-pill switch-warning mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-pill switch-info mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-pill switch-danger mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch Outline</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-default switch-primary-outline mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-secondary-outline mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-success-outline mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-warning-outline mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-info-outline mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-danger-outline mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch Outline - Pills</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-default switch-primary-outline switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-secondary-outline switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-success-outline switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-warning-outline switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-info-outline switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-danger-outline switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                </div>
                            </div>
                        </div>




                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch Outline Alternative</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-default switch-primary-outline-alt mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-secondary-outline-alt mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-success-outline-alt mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-warning-outline-alt mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-info-outline-alt mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-danger-outline-alt mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch Outline Alternative - Pills</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-default switch-primary-outline-alt switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-secondary-outline-alt switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-success-outline-alt switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-warning-outline-alt switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-info-outline-alt switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-default switch-danger-outline-alt switch-pill mr-2"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span className="switch-label"></span> <span className="switch-handle"></span></label>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch with Text</strong>
                                </div>
                                <div className="card-body">
                                    <label className="switch switch-text switch-primary"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-secondary"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-success"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-warning"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-info"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-danger"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Switch with Text - Pills</strong>
                                </div>
                                <div className="card-body">

                                    <label className="switch switch-text switch-primary switch-pill"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-secondary switch-pill"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-success switch-pill"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-warning switch-pill"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-info switch-pill"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                    <label className="switch switch-text switch-danger switch-pill"><input type="checkbox" className="switch-input" defaultChecked="true" /> <span data-on="On" data-off="Off" className="switch-label"></span> <span className="switch-handle"></span></label>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title" v-if="headerText">Sizes</strong>
                                </div>
                                <div className="card-body p-0">
                                    <table className="table table-hover table-striped table-align-middle mb-0">
                                        <thead>
                                            <th>Size</th>
                                            <th>Example</th>
                                            <th>CSS Class</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Large
                                                </td>
                                                <td>
                                                    <basix-switch type="3d" variant="primary" size="lg" Checked="true"/>
                                                </td>
                                                <td>
                                                    Add following code <code>size="lg"</code>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Default
                                                </td>
                                                <td>
                                                    <basix-switch type="3d" variant="primary" Checked="true"/>
                                                </td>
                                                <td>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Small
                                                </td>
                                                <td>
                                                    <basix-switch type="3d" variant="primary" size="sm" Checked="true"/>
                                                </td>
                                                <td>
                                                    Add following code <code>size="sm"</code>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Extra small
                                                </td>
                                                <td>
                                                    <basix-switch type="3d" variant="primary" size="xs" Checked="true"/>
                                                </td>
                                                <td>
                                                    Add following code <code>size="xs"</code>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
