import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breacrumb from "../Comman/Breacrumb";


class SocialButtons extends Component{
    render(){
        return(
            <div>
                <LeftNav />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breacrumb />
                    <div className="content ml-0 mt-3">
                        <div className="animated fadeIn">
                            <div className="social-buttons">
                                <div className="card icon-text">
                                    <div className="card-header">
                                        <strong>Social Media Buttons</strong>
                                        <small>Usage ex. <code style={{"text-transform":"lowercase"}}>&lt;button className="btn social facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code></small>

                                        <div className="card-actions">
                                            <NavLink to="javascript:;" className="btn-setting"><i className="fa fa-cog"></i></NavLink>
                                            <button className="btn-minimize" type="button" data-toggle="collapse" data-target="" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fa fa-angle-down"></i>
                                            </button>
                                            <NavLink to="javascript:;" className="btn-close"><i className="fa fa-times"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <strong>Size Small
                                            <small>Add this className
                                                <code>.btn-sm</code>
                                            </small>
                                        </strong>

                                        <p className="mt-1">

                                            <button type="button" className="btn btn-sm social facebook" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-facebook"></i>
                                                <span>Facebook</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social twitter" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-twitter"></i>
                                                <span>Twitter</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social linkedin" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-linkedin"></i>
                                                <span>LinkedIn</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social flickr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-flickr"></i>
                                                <span>Flickr</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social tumblr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-tumblr"></i>
                                                <span>Tumblr</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social xing" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-xing"></i>
                                                <span>Xing</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social github" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-github"></i>
                                                <span>Github</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social html5" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-html5"></i>
                                                <span>HTML5</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social openid" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-openid"></i>
                                                <span>OpenID</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social stack-overflow" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-stack-overflow"></i>
                                                <span>StackOverflow</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social css3" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-css3"></i>
                                                <span>CSS3</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social youtube" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-youtube"></i>
                                                <span>YouTube</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social dribbble" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dribbble"></i>
                                                <span>Dribbble</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social google-plus" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-google-plus"></i>
                                                <span>Google+</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social instagram" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-instagram"></i>
                                                <span>Instagram</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social pinterest" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-pinterest"></i>
                                                <span>Pinterest</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social vk" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vk"></i>
                                                <span>VK</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social yahoo" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-yahoo"></i>
                                                <span>Yahoo</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social behance" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-behance"></i>
                                                <span>Behance</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social dropbox" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dropbox"></i>
                                                <span>Dropbox</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social reddit" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-reddit"></i>
                                                <span>Reddit</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social spotify" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-spotify"></i>
                                                <span>Spotify</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social vine" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vine"></i>
                                                <span>Vine</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social foursquare" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-foursquare"></i>
                                                <span>Forsquare</span>
                                            </button>

                                            <button type="button" className="btn btn-sm social vimeo" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vimeo"></i>
                                                <span>Vimeo</span>
                                            </button>

                                        </p>


                                        <strong>Size Normal</strong>

                                        <p className="mt-1">

                                            <button type="button" className="btn social facebook" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-facebook"></i>
                                                <span>Facebook</span>
                                            </button>

                                            <button type="button" className="btn social twitter" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-twitter"></i>
                                                <span>Twitter</span>
                                            </button>

                                            <button type="button" className="btn social linkedin" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-linkedin"></i>
                                                <span>LinkedIn</span>
                                            </button>

                                            <button type="button" className="btn social flickr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-flickr"></i>
                                                <span>Flickr</span>
                                            </button>

                                            <button type="button" className="btn social tumblr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-tumblr"></i>
                                                <span>Tumblr</span>
                                            </button>

                                            <button type="button" className="btn social xing" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-xing"></i>
                                                <span>Xing</span>
                                            </button>

                                            <button type="button" className="btn social github" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-github"></i>
                                                <span>Github</span>
                                            </button>

                                            <button type="button" className="btn social html5" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-html5"></i>
                                                <span>HTML5</span>
                                            </button>

                                            <button type="button" className="btn social openid" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-openid"></i>
                                                <span>OpenID</span>
                                            </button>

                                            <button type="button" className="btn social stack-overflow" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-stack-overflow"></i>
                                                <span>StackOverflow</span>
                                            </button>

                                            <button type="button" className="btn social css3" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-css3"></i>
                                                <span>CSS3</span>
                                            </button>

                                            <button type="button" className="btn social youtube" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-youtube"></i>
                                                <span>YouTube</span>
                                            </button>

                                            <button type="button" className="btn social dribbble" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dribbble"></i>
                                                <span>Dribbble</span>
                                            </button>

                                            <button type="button" className="btn social google-plus" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-google-plus"></i>
                                                <span>Google+</span>
                                            </button>

                                            <button type="button" className="btn social instagram" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-instagram"></i>
                                                <span>Instagram</span>
                                            </button>

                                            <button type="button" className="btn social pinterest" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-pinterest"></i>
                                                <span>Pinterest</span>
                                            </button>

                                            <button type="button" className="btn social vk" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vk"></i>
                                                <span>VK</span>
                                            </button>

                                            <button type="button" className="btn social yahoo" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-yahoo"></i>
                                                <span>Yahoo</span>
                                            </button>

                                            <button type="button" className="btn social behance" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-behance"></i>
                                                <span>Behance</span>
                                            </button>

                                            <button type="button" className="btn social dropbox" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dropbox"></i>
                                                <span>Dropbox</span>
                                            </button>

                                            <button type="button" className="btn social reddit" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-reddit"></i>
                                                <span>Reddit</span>
                                            </button>

                                            <button type="button" className="btn social spotify" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-spotify"></i>
                                                <span>Spotify</span>
                                            </button>

                                            <button type="button" className="btn social vine" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vine"></i>
                                                <span>Vine</span>
                                            </button>

                                            <button type="button" className="btn social foursquare" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-foursquare"></i>
                                                <span>Forsquare</span>
                                            </button>

                                            <button type="button" className="btn social vimeo" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vimeo"></i>
                                                <span>Vimeo</span>
                                            </button>

                                        </p>


                                        <h6>Size Large
                                            <small>Add this className
                                                <code>.btn-lg</code>
                                            </small>
                                        </h6>
                                        <p className="mt-1">
                                            <button type="button" className="btn btn-lg social facebook" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-facebook"></i>
                                                <span>Facebook</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social twitter" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-twitter"></i>
                                                <span>Twitter</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social linkedin" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-linkedin"></i>
                                                <span>LinkedIn</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social flickr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-flickr"></i>
                                                <span>Flickr</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social tumblr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-tumblr"></i>
                                                <span>Tumblr</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social xing" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-xing"></i>
                                                <span>Xing</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social github" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-github"></i>
                                                <span>Github</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social html5" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-html5"></i>
                                                <span>HTML5</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social openid" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-openid"></i>
                                                <span>OpenID</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social stack-overflow" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-stack-overflow"></i>
                                                <span>StackOverflow</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social css3" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-css3"></i>
                                                <span>CSS3</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social youtube" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-youtube"></i>
                                                <span>YouTube</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social dribbble" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dribbble"></i>
                                                <span>Dribbble</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social google-plus" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-google-plus"></i>
                                                <span>Google+</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social instagram" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-instagram"></i>
                                                <span>Instagram</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social pinterest" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-pinterest"></i>
                                                <span>Pinterest</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social vk" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vk"></i>
                                                <span>VK</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social yahoo" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-yahoo"></i>
                                                <span>Yahoo</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social behance" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-behance"></i>
                                                <span>Behance</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social dropbox" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dropbox"></i>
                                                <span>Dropbox</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social reddit" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-reddit"></i>
                                                <span>Reddit</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social spotify" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-spotify"></i>
                                                <span>Spotify</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social vine" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vine"></i>
                                                <span>Vine</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social foursquare" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-foursquare"></i>
                                                <span>Forsquare</span>
                                            </button>

                                            <button type="button" className="btn btn-lg social vimeo" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vimeo"></i>
                                                <span>Vimeo</span>
                                            </button>


                                        </p>
                                    </div>
                                </div>

                                <div className="card only-icon">
                                    <div className="card-header">
                                        <strong>Social Media Buttons</strong>
                                        <small>Usage ex.</small>
                                        <small><code style={{"text-transform":"lowercase"}}>&lt;button className="btn social facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code></small>
                                        <div className="card-actions">
                                            <NavLink to="javascript:;" className="btn-setting"><i className="fa fa-cog"></i></NavLink>
                                            <button className="btn-minimize" type="button" data-toggle="collapse" data-target="" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fa fa-angle-down"></i>
                                            </button>
                                            <NavLink to="javascript:;" className="btn-close"><i className="fa fa-times"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <strong>Size Small
                                            <small>Add this className
                                                <code>.btn-sm</code>
                                            </small>
                                        </strong>

                                        <p className="mt-1">

                                            <button type="button" className="btn btn-sm social facebook" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-facebook"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social twitter" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social linkedin" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-linkedin"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social flickr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-flickr"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social tumblr" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-tumblr"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social xing" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-xing"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social github" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-github"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social html5" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-html5"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social openid" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-openid"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social stack-overflow" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-stack-overflow"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social css3" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-css3"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social youtube" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-youtube"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social dribbble" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dribbble"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social google-plus" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-google-plus"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social instagram" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-instagram"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social pinterest" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-pinterest"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social vk" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vk"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social yahoo" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-yahoo"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social behance" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-behance"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social dropbox" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-dropbox"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social reddit" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-reddit"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social spotify" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-spotify"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social vine" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-vine"></i>
                                            </button>

                                            <button type="button" className="btn btn-sm social foursquare" style={{"margin-bottom": "4px"}}>
                                                <i className="fa fa-foursquare"></i>
                                            </button>

                        <button type="button" className="btn btn-sm social vimeo" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-vimeo"></i>
                        </button>

                    </p>


                    <strong>Size Normal</strong>

                    <p className="mt-1">

                        <button type="button" className="btn social facebook" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-facebook"></i>
                        </button>

                        <button type="button" className="btn social twitter" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-twitter"></i>
                        </button>

                        <button type="button" className="btn social linkedin" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-linkedin"></i>
                        </button>

                        <button type="button" className="btn social flickr" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-flickr"></i>
                        </button>

                        <button type="button" className="btn social tumblr" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-tumblr"></i>
                        </button>

                        <button type="button" className="btn social xing" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-xing"></i>
                        </button>

                        <button type="button" className="btn social github" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-github"></i>
                        </button>

                        <button type="button" className="btn social html5" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-html5"></i>
                        </button>

                        <button type="button" className="btn social openid" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-openid"></i>
                        </button>

                        <button type="button" className="btn social stack-overflow" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-stack-overflow"></i>
                        </button>

                        <button type="button" className="btn social css3" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-css3"></i>
                        </button>

                        <button type="button" className="btn social youtube" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-youtube"></i>
                        </button>

                        <button type="button" className="btn social dribbble" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-dribbble"></i>
                        </button>

                        <button type="button" className="btn social google-plus" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-google-plus"></i>
                        </button>

                        <button type="button" className="btn social instagram" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-instagram"></i>
                        </button>

                        <button type="button" className="btn social pinterest" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-pinterest"></i>
                        </button>

                        <button type="button" className="btn social vk" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-vk"></i>
                        </button>

                        <button type="button" className="btn social yahoo" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-yahoo"></i>
                        </button>

                        <button type="button" className="btn social behance" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-behance"></i>
                        </button>

                        <button type="button" className="btn social dropbox" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-dropbox"></i>
                        </button>

                        <button type="button" className="btn social reddit" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-reddit"></i>
                        </button>

                        <button type="button" className="btn social spotify" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-spotify"></i>
                        </button>

                        <button type="button" className="btn social vine" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-vine"></i>
                        </button>

                        <button type="button" className="btn social foursquare" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-foursquare"></i>
                        </button>

                        <button type="button" className="btn social vimeo" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-vimeo"></i>
                        </button>

                    </p>


                    <h6>Size Large
                        <small>Add this className
                            <code>.btn-lg</code>
                        </small>
                    </h6>
                    <p className="mt-1">
                        <button type="button" className="btn btn-lg social facebook" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-facebook"></i>
                        </button>

                        <button type="button" className="btn btn-lg social twitter" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-lg social linkedin" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-linkedin"></i>
                        </button>

                        <button type="button" className="btn btn-lg social flickr" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-flickr"></i>
                        </button>

                        <button type="button" className="btn btn-lg social tumblr" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-tumblr"></i>
                        </button>

                        <button type="button" className="btn btn-lg social xing" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-xing"></i>
                        </button>

                        <button type="button" className="btn btn-lg social github" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-github"></i>
                        </button>

                        <button type="button" className="btn btn-lg social html5" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-html5"></i>
                        </button>

                        <button type="button" className="btn btn-lg social openid" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-openid"></i>
                        </button>

                        <button type="button" className="btn btn-lg social stack-overflow" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-stack-overflow"></i>
                        </button>

                        <button type="button" className="btn btn-lg social css3" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-css3"></i>
                        </button>

                        <button type="button" className="btn btn-lg social youtube" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-youtube"></i>
                        </button>

                        <button type="button" className="btn btn-lg social dribbble" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-dribbble"></i>
                        </button>

                        <button type="button" className="btn btn-lg social google-plus" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-google-plus"></i>
                        </button>

                        <button type="button" className="btn btn-lg social instagram" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-instagram"></i>
                        </button>

                        <button type="button" className="btn btn-lg social pinterest" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-pinterest"></i>
                        </button>

                        <button type="button" className="btn btn-lg social vk" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-vk"></i>
                        </button>

                        <button type="button" className="btn btn-lg social yahoo" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-yahoo"></i>
                        </button>

                        <button type="button" className="btn btn-lg social behance" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-behance"></i>
                        </button>

                        <button type="button" className="btn btn-lg social dropbox" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-dropbox"></i>
                        </button>

                        <button type="button" className="btn btn-lg social reddit" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-reddit"></i>
                        </button>

                        <button type="button" className="btn btn-lg social spotify" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-spotify"></i>
                        </button>

                        <button type="button" className="btn btn-lg social vine" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-vine"></i>
                        </button>

                        <button type="button" className="btn btn-lg social foursquare" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-foursquare"></i>
                        </button>

                        <button type="button" className="btn btn-lg social vimeo" style={{"margin-bottom": "4px"}}>
                            <i className="fa fa-vimeo"></i>
                        </button>


                    </p>
                </div>
            </div>


            <div className="card only-text">
                <div className="card-header">
                    <strong>Social Media Buttons</strong>
                    <small>Usage ex. <code style={{"text-transform":"lowercase"}}>&lt;button className="btn social facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code></small>

                    <div className="card-actions">
                        <NavLink to="javascript:;" className="btn-setting"><i className="fa fa-cog"></i></NavLink>
                        <button className="btn-minimize" type="button" data-toggle="collapse" data-target="" aria-expanded="false" aria-controls="collapseExample">
                            <i className="fa fa-angle-down"></i>
                        </button>
                        <NavLink to="javascript:;" className="btn-close"><i className="fa fa-times"></i></NavLink>
                    </div>
                </div>
                <div className="card-body">
                    <strong>Size Small
                        <small>Add this className
                            <code>.btn-sm</code>
                        </small>
                    </strong>

                    <p className="mt-1">
                        <button type="button" className="btn btn-sm social facebook" style={{"margin-bottom": "4px"}}>
                            <span>Facebook</span>
                        </button>

                        <button type="button" className="btn btn-sm social twitter" style={{"margin-bottom": "4px"}}>
                            <span>Twitter</span>
                        </button>

                        <button type="button" className="btn btn-sm social linkedin" style={{"margin-bottom": "4px"}}>
                            <span>LinkedIn</span>
                        </button>

                        <button type="button" className="btn btn-sm social flickr" style={{"margin-bottom": "4px"}}>
                            <span>Flickr</span>
                        </button>

                        <button type="button" className="btn btn-sm social tumblr" style={{"margin-bottom": "4px"}}>
                            <span>Tumblr</span>
                        </button>

                        <button type="button" className="btn btn-sm social xing" style={{"margin-bottom": "4px"}}>
                            <span>Xing</span>
                        </button>

                        <button type="button" className="btn btn-sm social github" style={{"margin-bottom": "4px"}}>
                            <span>Github</span>
                        </button>

                        <button type="button" className="btn btn-sm social html5" style={{"margin-bottom": "4px"}}>
                            <span>HTML5</span>
                        </button>

                        <button type="button" className="btn btn-sm social openid" style={{"margin-bottom": "4px"}}>
                            <span>OpenID</span>
                        </button>

                        <button type="button" className="btn btn-sm social stack-overflow" style={{"margin-bottom": "4px"}}>
                            <span>StackOverflow</span>
                        </button>

                        <button type="button" className="btn btn-sm social css3" style={{"margin-bottom": "4px"}}>
                            <span>CSS3</span>
                        </button>

                        <button type="button" className="btn btn-sm social youtube" style={{"margin-bottom": "4px"}}>
                            <span>YouTube</span>
                        </button>

                        <button type="button" className="btn btn-sm social dribbble" style={{"margin-bottom": "4px"}}>
                            <span>Dribbble</span>
                        </button>

                        <button type="button" className="btn btn-sm social google-plus" style={{"margin-bottom": "4px"}}>
                            <span>Google+</span>
                        </button>

                        <button type="button" className="btn btn-sm social instagram" style={{"margin-bottom": "4px"}}>
                            <span>Instagram</span>
                        </button>

                        <button type="button" className="btn btn-sm social pinterest" style={{"margin-bottom": "4px"}}>
                            <span>Pinterest</span>
                        </button>

                        <button type="button" className="btn btn-sm social vk" style={{"margin-bottom": "4px"}}>
                            <span>VK</span>
                        </button>

                        <button type="button" className="btn btn-sm social yahoo" style={{"margin-bottom": "4px"}}>
                            <span>Yahoo</span>
                        </button>

                        <button type="button" className="btn btn-sm social behance" style={{"margin-bottom": "4px"}}>
                            <span>Behance</span>
                        </button>

                        <button type="button" className="btn btn-sm social dropbox" style={{"margin-bottom": "4px"}}>
                            <span>Dropbox</span>
                        </button>

                        <button type="button" className="btn btn-sm social reddit" style={{"margin-bottom": "4px"}}>
                            <span>Reddit</span>
                        </button>

                        <button type="button" className="btn btn-sm social spotify" style={{"margin-bottom": "4px"}}>
                            <span>Spotify</span>
                        </button>

                        <button type="button" className="btn btn-sm social vine" style={{"margin-bottom": "4px"}}>
                            <span>Vine</span>
                        </button>

                        <button type="button" className="btn btn-sm social foursquare" style={{"margin-bottom": "4px"}}>
                            <span>Forsquare</span>
                        </button>

                        <button type="button" className="btn btn-sm social vimeo" style={{"margin-bottom": "4px"}}>
                            <span>Vimeo</span>
                        </button>

                    </p>


                    <strong>Size Normal</strong>

                    <p className="mt-1">

                        <button type="button" className="btn social facebook" style={{"margin-bottom": "4px"}}>
                            <span>Facebook</span>
                        </button>

                        <button type="button" className="btn social twitter" style={{"margin-bottom": "4px"}}>
                            <span>Twitter</span>
                        </button>

                        <button type="button" className="btn social linkedin" style={{"margin-bottom": "4px"}}>
                            <span>LinkedIn</span>
                        </button>

                        <button type="button" className="btn social flickr" style={{"margin-bottom": "4px"}}>
                            <span>Flickr</span>
                        </button>

                        <button type="button" className="btn social tumblr" style={{"margin-bottom": "4px"}}>
                            <span>Tumblr</span>
                        </button>

                        <button type="button" className="btn social xing" style={{"margin-bottom": "4px"}}>
                            <span>Xing</span>
                        </button>

                        <button type="button" className="btn social github" style={{"margin-bottom": "4px"}}>
                            <span>Github</span>
                        </button>

                        <button type="button" className="btn social html5" style={{"margin-bottom": "4px"}}>
                            <span>HTML5</span>
                        </button>

                        <button type="button" className="btn social openid" style={{"margin-bottom": "4px"}}>
                            <span>OpenID</span>
                        </button>

                        <button type="button" className="btn social stack-overflow" style={{"margin-bottom": "4px"}}>
                            <span>StackOverflow</span>
                        </button>

                        <button type="button" className="btn social css3" style={{"margin-bottom": "4px"}}>
                            <span>CSS3</span>
                        </button>

                        <button type="button" className="btn social youtube" style={{"margin-bottom": "4px"}}>
                            <span>YouTube</span>
                        </button>

                        <button type="button" className="btn social dribbble" style={{"margin-bottom": "4px"}}>
                            <span>Dribbble</span>
                        </button>

                        <button type="button" className="btn social google-plus" style={{"margin-bottom": "4px"}}>
                            <span>Google+</span>
                        </button>

                        <button type="button" className="btn social instagram" style={{"margin-bottom": "4px"}}>
                            <span>Instagram</span>
                        </button>

                        <button type="button" className="btn social pinterest" style={{"margin-bottom": "4px"}}>
                            <span>Pinterest</span>
                        </button>

                        <button type="button" className="btn social vk" style={{"margin-bottom": "4px"}}>
                            <span>VK</span>
                        </button>

                        <button type="button" className="btn social yahoo" style={{"margin-bottom": "4px"}}>
                            <span>Yahoo</span>
                        </button>

                        <button type="button" className="btn social behance" style={{"margin-bottom": "4px"}}>
                            <span>Behance</span>
                        </button>

                        <button type="button" className="btn social dropbox" style={{"margin-bottom": "4px"}}>
                            <span>Dropbox</span>
                        </button>

                        <button type="button" className="btn social reddit" style={{"margin-bottom": "4px"}}>
                            <span>Reddit</span>
                        </button>

                        <button type="button" className="btn social spotify" style={{"margin-bottom": "4px"}}>
                            <span>Spotify</span>
                        </button>

                        <button type="button" className="btn social vine" style={{"margin-bottom": "4px"}}>
                            <span>Vine</span>
                        </button>

                        <button type="button" className="btn social foursquare" style={{"margin-bottom": "4px"}}>
                            <span>Forsquare</span>
                        </button>

                        <button type="button" className="btn social vimeo" style={{"margin-bottom": "4px"}}>
                            <span>Vimeo</span>
                        </button>

                    </p>


                    <h6>Size Large
                        <small>Add this className
                            <code>.btn-lg</code>
                        </small>
                    </h6>
                    <p className="mt-1">
                        <button type="button" className="btn btn-lg social facebook" style={{"margin-bottom": "4px"}}>
                            <span>Facebook</span>
                        </button>

                        <button type="button" className="btn btn-lg social twitter" style={{"margin-bottom": "4px"}}>
                            <span>Twitter</span>
                        </button>

                        <button type="button" className="btn btn-lg social linkedin" style={{"margin-bottom": "4px"}}>
                            <span>LinkedIn</span>
                        </button>

                        <button type="button" className="btn btn-lg social flickr" style={{"margin-bottom": "4px"}}>
                            <span>Flickr</span>
                        </button>

                        <button type="button" className="btn btn-lg social tumblr" style={{"margin-bottom": "4px"}}>
                            <span>Tumblr</span>
                        </button>

                        <button type="button" className="btn btn-lg social xing" style={{"margin-bottom": "4px"}}>
                            <span>Xing</span>
                        </button>

                        <button type="button" className="btn btn-lg social github" style={{"margin-bottom": "4px"}}>
                            <span>Github</span>
                        </button>

                        <button type="button" className="btn btn-lg social html5" style={{"margin-bottom": "4px"}}>
                            <span>HTML5</span>
                        </button>

                        <button type="button" className="btn btn-lg social openid" style={{"margin-bottom": "4px"}}>
                            <span>OpenID</span>
                        </button>

                        <button type="button" className="btn btn-lg social stack-overflow" style={{"margin-bottom": "4px"}}>
                            <span>StackOverflow</span>
                        </button>

                        <button type="button" className="btn btn-lg social css3" style={{"margin-bottom": "4px"}}>
                            <span>CSS3</span>
                        </button>

                        <button type="button" className="btn btn-lg social youtube" style={{"margin-bottom": "4px"}}>
                            <span>YouTube</span>
                        </button>

                        <button type="button" className="btn btn-lg social dribbble" style={{"margin-bottom": "4px"}}>
                            <span>Dribbble</span>
                        </button>

                        <button type="button" className="btn btn-lg social google-plus" style={{"margin-bottom": "4px"}}>
                            <span>Google+</span>
                        </button>

                        <button type="button" className="btn btn-lg social instagram" style={{"margin-bottom": "4px"}}>
                            <span>Instagram</span>
                        </button>

                        <button type="button" className="btn btn-lg social pinterest" style={{"margin-bottom": "4px"}}>
                            <span>Pinterest</span>
                        </button>

                        <button type="button" className="btn btn-lg social vk" style={{"margin-bottom": "4px"}}>
                            <span>VK</span>
                        </button>

                        <button type="button" className="btn btn-lg social yahoo" style={{"margin-bottom": "4px"}}>
                            <span>Yahoo</span>
                        </button>

                        <button type="button" className="btn btn-lg social behance" style={{"margin-bottom": "4px"}}>
                            <span>Behance</span>
                        </button>

                        <button type="button" className="btn btn-lg social dropbox" style={{"margin-bottom": "4px"}}>
                            <span>Dropbox</span>
                        </button>

                        <button type="button" className="btn btn-lg social reddit" style={{"margin-bottom": "4px"}}>
                            <span>Reddit</span>
                        </button>

                        <button type="button" className="btn btn-lg social spotify" style={{"margin-bottom": "4px"}}>
                            <span>Spotify</span>
                        </button>

                        <button type="button" className="btn btn-lg social vine" style={{"margin-bottom": "4px"}}>
                            <span>Vine</span>
                        </button>

                        <button type="button" className="btn btn-lg social foursquare" style={{"margin-bottom": "4px"}}>
                            <span>Forsquare</span>
                        </button>

                        <button type="button" className="btn btn-lg social vimeo" style={{"margin-bottom": "4px"}}>
                            <span>Vimeo</span>
                        </button>


                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
                </div>
            </div>
        )
    }
}

export default SocialButtons;