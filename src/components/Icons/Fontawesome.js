import React from "react"
import LeftNav from "../Comman/LeftNav"
import Header from "../Comman/Header"
import Breadcrumb from "../Comman/Breacrumb"

export default ()=>{
    return(
        <React.Fragment>
            <LeftNav />
            <div className="right-panel" id="right-panel">
                <Header />
                <Breadcrumb />
                <div className="content mt-3">
                    <div className="animated fadeIn">
                        <div className="card">
                            <div className="card-header">
                                <i className="mr-2 fa fa-align-justify"></i>
                                <strong className="card-title">Font Awesome</strong>
                            </div>
                            <div className="card-body">

                                <div className="fontawesome-icon-list">

                                    <div id="new">
                                        <h2 className="page-header">11 New Icons in 4.0</h2>
                                        <div className="row fontawesome-icon-list">

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-rub"></i> fa-rub</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-ruble"></i> fa-ruble <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-rouble"></i> fa-rouble <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-pagelines"></i> fa-pagelines</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-stack-exchange"></i> fa-stack-exchange</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-wheelchair"></i> fa-wheelchair</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-vimeo-square"></i> fa-vimeo-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-try"></i> fa-try</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-turkish-lira"></i> fa-turkish-lira <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-plus-square-o"></i> fa-plus-square-o</a></div>

                                        </div>
                                    </div>

                                    <section id="web-application">
                                        <h2 className="page-header">Web Application Icons</h2>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-adjust"></i> fa-adjust</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-anchor"></i> fa-anchor</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-archive"></i> fa-archive</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-arrows"></i> fa-arrows</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-arrows-h"></i> fa-arrows-h</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-arrows-v"></i> fa-arrows-v</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-asterisk"></i> fa-asterisk</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-ban"></i> fa-ban</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bar-chart-o"></i> fa-bar-chart-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-barcode"></i> fa-barcode</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bars"></i> fa-bars</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-beer"></i> fa-beer</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bell"></i> fa-bell</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bell-o"></i> fa-bell-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bolt"></i> fa-bolt</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-book"></i> fa-book</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bookmark"></i> fa-bookmark</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bookmark-o"></i> fa-bookmark-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-briefcase"></i> fa-briefcase</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bug"></i> fa-bug</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-building-o"></i> fa-building-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bullhorn"></i> fa-bullhorn</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-bullseye"></i> fa-bullseye</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-calendar"></i> fa-calendar</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-calendar-o"></i> fa-calendar-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-camera"></i> fa-camera</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-camera-retro"></i> fa-camera-retro</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-certificate"></i> fa-certificate</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-check"></i> fa-check</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-check-circle"></i> fa-check-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-check-circle-o"></i> fa-check-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-check-square"></i> fa-check-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-check-square-o"></i> fa-check-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-circle"></i> fa-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-circle-o"></i> fa-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-clock-o"></i> fa-clock-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-cloud"></i> fa-cloud</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-cloud-download"></i> fa-cloud-download</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-cloud-upload"></i> fa-cloud-upload</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-code"></i> fa-code</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-code-fork"></i> fa-code-fork</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-coffee"></i> fa-coffee</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-cog"></i> fa-cog</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-cogs"></i> fa-cogs</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-comment"></i> fa-comment</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-comment-o"></i> fa-comment-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-comments"></i> fa-comments</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-comments-o"></i> fa-comments-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-compass"></i> fa-compass</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-credit-card"></i> fa-credit-card</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-crop"></i> fa-crop</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-crosshairs"></i> fa-crosshairs</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-cutlery"></i> fa-cutlery</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-dashboard"></i> fa-dashboard <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-desktop"></i> fa-desktop</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-download"></i> fa-download</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-edit"></i> fa-edit <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-ellipsis-h"></i> fa-ellipsis-h</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-ellipsis-v"></i> fa-ellipsis-v</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-envelope"></i> fa-envelope</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-envelope-o"></i> fa-envelope-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-eraser"></i> fa-eraser</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-exchange"></i> fa-exchange</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-exclamation"></i> fa-exclamation</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-exclamation-circle"></i> fa-exclamation-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-exclamation-triangle"></i> fa-exclamation-triangle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-external-link"></i> fa-external-link</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-external-link-square"></i> fa-external-link-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-eye"></i> fa-eye</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-eye-slash"></i> fa-eye-slash</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-female"></i> fa-female</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-fighter-jet"></i> fa-fighter-jet</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-film"></i> fa-film</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-filter"></i> fa-filter</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-fire"></i> fa-fire</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-fire-extinguisher"></i> fa-fire-extinguisher</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-flag"></i> fa-flag</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-flag-checkered"></i> fa-flag-checkered</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-flag-o"></i> fa-flag-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-flash"></i> fa-flash <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-flask"></i> fa-flask</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-folder"></i> fa-folder</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-folder-o"></i> fa-folder-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-folder-open"></i> fa-folder-open</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-folder-open-o"></i> fa-folder-open-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-frown-o"></i> fa-frown-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-gamepad"></i> fa-gamepad</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-gavel"></i> fa-gavel</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-gear"></i> fa-gear <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-gears"></i> fa-gears <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-gift"></i> fa-gift</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-glass"></i> fa-glass</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-globe"></i> fa-globe</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-group"></i> fa-group <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-hdd-o"></i> fa-hdd-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-headphones"></i> fa-headphones</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-heart"></i> fa-heart</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-heart-o"></i> fa-heart-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-home"></i> fa-home</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-inbox"></i> fa-inbox</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#"><i className="fa fa-info"></i> fa-info</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#info-circle"><i className="fa fa-info-circle"></i> fa-info-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#key"><i className="fa fa-key"></i> fa-key</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#keyboard-o"><i className="fa fa-keyboard-o"></i> fa-keyboard-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#laptop"><i className="fa fa-laptop"></i> fa-laptop</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#leaf"><i className="fa fa-leaf"></i> fa-leaf</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#gavel"><i className="fa fa-legal"></i> fa-legal <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#lemon-o"><i className="fa fa-lemon-o"></i> fa-lemon-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#level-down"><i className="fa fa-level-down"></i> fa-level-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#level-up"><i className="fa fa-level-up"></i> fa-level-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#lightbulb-o"><i className="fa fa-lightbulb-o"></i> fa-lightbulb-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#location-arrow"><i className="fa fa-location-arrow"></i> fa-location-arrow</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#lock"><i className="fa fa-lock"></i> fa-lock</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#magic"><i className="fa fa-magic"></i> fa-magic</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#magnet"><i className="fa fa-magnet"></i> fa-magnet</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#share"><i className="fa fa-mail-forward"></i> fa-mail-forward <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#reply"><i className="fa fa-mail-reply"></i> fa-mail-reply <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#mail-reply-all"><i className="fa fa-mail-reply-all"></i> fa-mail-reply-all</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#male"><i className="fa fa-male"></i> fa-male</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#map-marker"><i className="fa fa-map-marker"></i> fa-map-marker</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#meh-o"><i className="fa fa-meh-o"></i> fa-meh-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#microphone"><i className="fa fa-microphone"></i> fa-microphone</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#microphone-slash"><i className="fa fa-microphone-slash"></i> fa-microphone-slash</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#minus"><i className="fa fa-minus"></i> fa-minus</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#minus-circle"><i className="fa fa-minus-circle"></i> fa-minus-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#minus-square"><i className="fa fa-minus-square"></i> fa-minus-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#minus-square-o"><i className="fa fa-minus-square-o"></i> fa-minus-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#mobile"><i className="fa fa-mobile"></i> fa-mobile</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#mobile"><i className="fa fa-mobile-phone"></i> fa-mobile-phone <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#money"><i className="fa fa-money"></i> fa-money</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#moon-o"><i className="fa fa-moon-o"></i> fa-moon-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#music"><i className="fa fa-music"></i> fa-music</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#pencil"><i className="fa fa-pencil"></i> fa-pencil</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#pencil-square"><i className="fa fa-pencil-square"></i> fa-pencil-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#pencil-square-o"><i className="fa fa-pencil-square-o"></i> fa-pencil-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#phone"><i className="fa fa-phone"></i> fa-phone</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#phone-square"><i className="fa fa-phone-square"></i> fa-phone-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#picture-o"><i className="fa fa-picture-o"></i> fa-picture-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plane"><i className="fa fa-plane"></i> fa-plane</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plus"><i className="fa fa-plus"></i> fa-plus</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plus-circle"><i className="fa fa-plus-circle"></i> fa-plus-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plus-square"><i className="fa fa-plus-square"></i> fa-plus-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plus-square-o"><i className="fa fa-plus-square-o"></i> fa-plus-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#power-off"><i className="fa fa-power-off"></i> fa-power-off</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#print"><i className="fa fa-print"></i> fa-print</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#puzzle-piece"><i className="fa fa-puzzle-piece"></i> fa-puzzle-piece</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#qrcode"><i className="fa fa-qrcode"></i> fa-qrcode</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#question"><i className="fa fa-question"></i> fa-question</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#question-circle"><i className="fa fa-question-circle"></i> fa-question-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#quote-left"><i className="fa fa-quote-left"></i> fa-quote-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#quote-right"><i className="fa fa-quote-right"></i> fa-quote-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#random"><i className="fa fa-random"></i> fa-random</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#refresh"><i className="fa fa-refresh"></i> fa-refresh</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#reply"><i className="fa fa-reply"></i> fa-reply</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#reply-all"><i className="fa fa-reply-all"></i> fa-reply-all</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#retweet"><i className="fa fa-retweet"></i> fa-retweet</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#road"><i className="fa fa-road"></i> fa-road</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#rocket"><i className="fa fa-rocket"></i> fa-rocket</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#rss"><i className="fa fa-rss"></i> fa-rss</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#rss-square"><i className="fa fa-rss-square"></i> fa-rss-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#search"><i className="fa fa-search"></i> fa-search</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#search-minus"><i className="fa fa-search-minus"></i> fa-search-minus</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#search-plus"><i className="fa fa-search-plus"></i> fa-search-plus</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#share"><i className="fa fa-share"></i> fa-share</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#share-square"><i className="fa fa-share-square"></i> fa-share-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#share-square-o"><i className="fa fa-share-square-o"></i> fa-share-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#shield"><i className="fa fa-shield"></i> fa-shield</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#shopping-cart"><i className="fa fa-shopping-cart"></i> fa-shopping-cart</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sign-in"><i className="fa fa-sign-in"></i> fa-sign-in</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sign-out"><i className="fa fa-sign-out"></i> fa-sign-out</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#signal"><i className="fa fa-signal"></i> fa-signal</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sitemap"><i className="fa fa-sitemap"></i> fa-sitemap</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#smile-o"><i className="fa fa-smile-o"></i> fa-smile-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort"><i className="fa fa-sort"></i> fa-sort</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-alpha-asc"><i className="fa fa-sort-alpha-asc"></i> fa-sort-alpha-asc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-alpha-desc"><i className="fa fa-sort-alpha-desc"></i> fa-sort-alpha-desc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-amount-asc"><i className="fa fa-sort-amount-asc"></i> fa-sort-amount-asc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-amount-desc"><i className="fa fa-sort-amount-desc"></i> fa-sort-amount-desc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-asc"><i className="fa fa-sort-asc"></i> fa-sort-asc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-desc"><i className="fa fa-sort-desc"></i> fa-sort-desc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-asc"><i className="fa fa-sort-down"></i> fa-sort-down <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-numeric-asc"><i className="fa fa-sort-numeric-asc"></i> fa-sort-numeric-asc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-numeric-desc"><i className="fa fa-sort-numeric-desc"></i> fa-sort-numeric-desc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort-desc"><i className="fa fa-sort-up"></i> fa-sort-up <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#spinner"><i className="fa fa-spinner"></i> fa-spinner</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#square"><i className="fa fa-square"></i> fa-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#square-o"><i className="fa fa-square-o"></i> fa-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#star"><i className="fa fa-star"></i> fa-star</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#star-half"><i className="fa fa-star-half"></i> fa-star-half</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#star-half-o"><i className="fa fa-star-half-empty"></i> fa-star-half-empty <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#star-half-o"><i className="fa fa-star-half-full"></i> fa-star-half-full <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#star-half-o"><i className="fa fa-star-half-o"></i> fa-star-half-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#star-o"><i className="fa fa-star-o"></i> fa-star-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#subscript"><i className="fa fa-subscript"></i> fa-subscript</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#suitcase"><i className="fa fa-suitcase"></i> fa-suitcase</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sun-o"><i className="fa fa-sun-o"></i> fa-sun-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#superscript"><i className="fa fa-superscript"></i> fa-superscript</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tablet"><i className="fa fa-tablet"></i> fa-tablet</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tachometer"><i className="fa fa-tachometer"></i> fa-tachometer</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tag"><i className="fa fa-tag"></i> fa-tag</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tags"><i className="fa fa-tags"></i> fa-tags</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tasks"><i className="fa fa-tasks"></i> fa-tasks</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#terminal"><i className="fa fa-terminal"></i> fa-terminal</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#thumb-tack"><i className="fa fa-thumb-tack"></i> fa-thumb-tack</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#thumbs-down"><i className="fa fa-thumbs-down"></i> fa-thumbs-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#thumbs-o-down"><i className="fa fa-thumbs-o-down"></i> fa-thumbs-o-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#thumbs-o-up"><i className="fa fa-thumbs-o-up"></i> fa-thumbs-o-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#thumbs-up"><i className="fa fa-thumbs-up"></i> fa-thumbs-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#ticket"><i className="fa fa-ticket"></i> fa-ticket</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#times"><i className="fa fa-times"></i> fa-times</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#times-circle"><i className="fa fa-times-circle"></i> fa-times-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#times-circle-o"><i className="fa fa-times-circle-o"></i> fa-times-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tint"><i className="fa fa-tint"></i> fa-tint</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-down"><i className="fa fa-toggle-down"></i> fa-toggle-down <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-left"><i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-right"><i className="fa fa-toggle-right"></i> fa-toggle-right <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-up"><i className="fa fa-toggle-up"></i> fa-toggle-up <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#trash-o"><i className="fa fa-trash-o"></i> fa-trash-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#trophy"><i className="fa fa-trophy"></i> fa-trophy</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#truck"><i className="fa fa-truck"></i> fa-truck</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#umbrella"><i className="fa fa-umbrella"></i> fa-umbrella</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#unlock"><i className="fa fa-unlock"></i> fa-unlock</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#unlock-alt"><i className="fa fa-unlock-alt"></i> fa-unlock-alt</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#sort"><i className="fa fa-unsorted"></i> fa-unsorted <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#upload"><i className="fa fa-upload"></i> fa-upload</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#user"><i className="fa fa-user"></i> fa-user</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#users"><i className="fa fa-users"></i> fa-users</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#video-camera"><i className="fa fa-video-camera"></i> fa-video-camera</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#volume-down"><i className="fa fa-volume-down"></i> fa-volume-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#volume-off"><i className="fa fa-volume-off"></i> fa-volume-off</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#volume-up"><i className="fa fa-volume-up"></i> fa-volume-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#exclamation-triangle"><i className="fa fa-warning"></i> fa-warning <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#wheelchair"><i className="fa fa-wheelchair"></i> fa-wheelchair</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#wrench"><i className="fa fa-wrench"></i> fa-wrench</a></div>

                                        </div>

                                    </section>

                                    <section id="form-control">
                                        <h2 className="page-header">Form Control Icons</h2>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#check-square"><i className="fa fa-check-square"></i> fa-check-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#check-square-o"><i className="fa fa-check-square-o"></i> fa-check-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#circle"><i className="fa fa-circle"></i> fa-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#circle-o"><i className="fa fa-circle-o"></i> fa-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#dot-circle-o"><i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#minus-square"><i className="fa fa-minus-square"></i> fa-minus-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#minus-square-o"><i className="fa fa-minus-square-o"></i> fa-minus-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plus-square"><i className="fa fa-plus-square"></i> fa-plus-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plus-square-o"><i className="fa fa-plus-square-o"></i> fa-plus-square-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#square"><i className="fa fa-square"></i> fa-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#square-o"><i className="fa fa-square-o"></i> fa-square-o</a></div>

                                        </div>
                                    </section>

                                    <section id="currency">
                                        <h2 className="page-header">Currency Icons</h2>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#btc"><i className="fa fa-bitcoin"></i> fa-bitcoin <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#btc"><i className="fa fa-btc"></i> fa-btc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#jpy"><i className="fa fa-cny"></i> fa-cny <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#usd"><i className="fa fa-dollar"></i> fa-dollar <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#eur"><i className="fa fa-eur"></i> fa-eur</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#eur"><i className="fa fa-euro"></i> fa-euro <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#gbp"><i className="fa fa-gbp"></i> fa-gbp</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#inr"><i className="fa fa-inr"></i> fa-inr</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#jpy"><i className="fa fa-jpy"></i> fa-jpy</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#krw"><i className="fa fa-krw"></i> fa-krw</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#money"><i className="fa fa-money"></i> fa-money</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#jpy"><i className="fa fa-rmb"></i> fa-rmb <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#rub"><i className="fa fa-rouble"></i> fa-rouble <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#rub"><i className="fa fa-rub"></i> fa-rub</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#rub"><i className="fa fa-ruble"></i> fa-ruble <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#inr"><i className="fa fa-rupee"></i> fa-rupee <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#try"><i className="fa fa-try"></i> fa-try</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#try"><i className="fa fa-turkish-lira"></i> fa-turkish-lira <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#usd"><i className="fa fa-usd"></i> fa-usd</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#krw"><i className="fa fa-won"></i> fa-won <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#jpy"><i className="fa fa-yen"></i> fa-yen <span className="text-muted">(alias)</span></a></div>

                                        </div>

                                    </section>

                                    <section id="text-editor">
                                        <h2 className="page-header">Text Editor Icons</h2>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#align-center"><i className="fa fa-align-center"></i> fa-align-center</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#align-justify"><i className="fa fa-align-justify"></i> fa-align-justify</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#align-left"><i className="fa fa-align-left"></i> fa-align-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#align-right"><i className="fa fa-align-right"></i> fa-align-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#bold"><i className="fa fa-bold"></i> fa-bold</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#link"><i className="fa fa-chain"></i> fa-chain <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chain-broken"><i className="fa fa-chain-broken"></i> fa-chain-broken</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#clipboard"><i className="fa fa-clipboard"></i> fa-clipboard</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#columns"><i className="fa fa-columns"></i> fa-columns</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#files-o"><i className="fa fa-copy"></i> fa-copy <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#scissors"><i className="fa fa-cut"></i> fa-cut <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#outdent"><i className="fa fa-dedent"></i> fa-dedent <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#eraser"><i className="fa fa-eraser"></i> fa-eraser</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#file"><i className="fa fa-file"></i> fa-file</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#file-o"><i className="fa fa-file-o"></i> fa-file-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#file-text"><i className="fa fa-file-text"></i> fa-file-text</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#file-text-o"><i className="fa fa-file-text-o"></i> fa-file-text-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#files-o"><i className="fa fa-files-o"></i> fa-files-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#floppy-o"><i className="fa fa-floppy-o"></i> fa-floppy-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#font"><i className="fa fa-font"></i> fa-font</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#indent"><i className="fa fa-indent"></i> fa-indent</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#italic"><i className="fa fa-italic"></i> fa-italic</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#link"><i className="fa fa-link"></i> fa-link</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#list"><i className="fa fa-list"></i> fa-list</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#list-alt"><i className="fa fa-list-alt"></i> fa-list-alt</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#list-ol"><i className="fa fa-list-ol"></i> fa-list-ol</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#list-ul"><i className="fa fa-list-ul"></i> fa-list-ul</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#outdent"><i className="fa fa-outdent"></i> fa-outdent</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#paperclip"><i className="fa fa-paperclip"></i> fa-paperclip</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#clipboard"><i className="fa fa-paste"></i> fa-paste <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#repeat"><i className="fa fa-repeat"></i> fa-repeat</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#undo"><i className="fa fa-rotate-left"></i> fa-rotate-left <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#repeat"><i className="fa fa-rotate-right"></i> fa-rotate-right <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#floppy-o"><i className="fa fa-save"></i> fa-save <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#scissors"><i className="fa fa-scissors"></i> fa-scissors</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#strikethrough"><i className="fa fa-strikethrough"></i> fa-strikethrough</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#table"><i className="fa fa-table"></i> fa-table</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#text-height"><i className="fa fa-text-height"></i> fa-text-height</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#text-width"><i className="fa fa-text-width"></i> fa-text-width</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#th"><i className="fa fa-th"></i> fa-th</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#th-large"><i className="fa fa-th-large"></i> fa-th-large</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#th-list"><i className="fa fa-th-list"></i> fa-th-list</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#underline"><i className="fa fa-underline"></i> fa-underline</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#undo"><i className="fa fa-undo"></i> fa-undo</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chain-broken"><i className="fa fa-unlink"></i> fa-unlink <span className="text-muted">(alias)</span></a></div>

                                        </div>

                                    </section>

                                    <section id="directional">
                                        <h2 className="page-header">Directional Icons</h2>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-double-down"><i className="fa fa-angle-double-down"></i> fa-angle-double-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-double-left"><i className="fa fa-angle-double-left"></i> fa-angle-double-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-double-right"><i className="fa fa-angle-double-right"></i> fa-angle-double-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-double-up"><i className="fa fa-angle-double-up"></i> fa-angle-double-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-down"><i className="fa fa-angle-down"></i> fa-angle-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-left"><i className="fa fa-angle-left"></i> fa-angle-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-right"><i className="fa fa-angle-right"></i> fa-angle-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#angle-up"><i className="fa fa-angle-up"></i> fa-angle-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-down"><i className="fa fa-arrow-circle-down"></i> fa-arrow-circle-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-left"><i className="fa fa-arrow-circle-left"></i> fa-arrow-circle-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-o-down"><i className="fa fa-arrow-circle-o-down"></i> fa-arrow-circle-o-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-o-left"><i className="fa fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-o-right"><i className="fa fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-o-up"><i className="fa fa-arrow-circle-o-up"></i> fa-arrow-circle-o-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-right"><i className="fa fa-arrow-circle-right"></i> fa-arrow-circle-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-circle-up"><i className="fa fa-arrow-circle-up"></i> fa-arrow-circle-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-down"><i className="fa fa-arrow-down"></i> fa-arrow-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-left"><i className="fa fa-arrow-left"></i> fa-arrow-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-right"><i className="fa fa-arrow-right"></i> fa-arrow-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrow-up"><i className="fa fa-arrow-up"></i> fa-arrow-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrows"><i className="fa fa-arrows"></i> fa-arrows</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrows-alt"><i className="fa fa-arrows-alt"></i> fa-arrows-alt</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrows-h"><i className="fa fa-arrows-h"></i> fa-arrows-h</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrows-v"><i className="fa fa-arrows-v"></i> fa-arrows-v</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-down"><i className="fa fa-caret-down"></i> fa-caret-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-left"><i className="fa fa-caret-left"></i> fa-caret-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-right"><i className="fa fa-caret-right"></i> fa-caret-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-down"><i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-left"><i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-right"><i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-up"><i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-up"><i className="fa fa-caret-up"></i> fa-caret-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-circle-down"><i className="fa fa-chevron-circle-down"></i> fa-chevron-circle-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-circle-left"><i className="fa fa-chevron-circle-left"></i> fa-chevron-circle-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-circle-right"><i className="fa fa-chevron-circle-right"></i> fa-chevron-circle-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-circle-up"><i className="fa fa-chevron-circle-up"></i> fa-chevron-circle-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-down"><i className="fa fa-chevron-down"></i> fa-chevron-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-left"><i className="fa fa-chevron-left"></i> fa-chevron-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-right"><i className="fa fa-chevron-right"></i> fa-chevron-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#chevron-up"><i className="fa fa-chevron-up"></i> fa-chevron-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#hand-o-down"><i className="fa fa-hand-o-down"></i> fa-hand-o-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#hand-o-left"><i className="fa fa-hand-o-left"></i> fa-hand-o-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#hand-o-right"><i className="fa fa-hand-o-right"></i> fa-hand-o-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#hand-o-up"><i className="fa fa-hand-o-up"></i> fa-hand-o-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#long-arrow-down"><i className="fa fa-long-arrow-down"></i> fa-long-arrow-down</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#long-arrow-left"><i className="fa fa-long-arrow-left"></i> fa-long-arrow-left</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#long-arrow-right"><i className="fa fa-long-arrow-right"></i> fa-long-arrow-right</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#long-arrow-up"><i className="fa fa-long-arrow-up"></i> fa-long-arrow-up</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-down"><i className="fa fa-toggle-down"></i> fa-toggle-down <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-left"><i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-right"><i className="fa fa-toggle-right"></i> fa-toggle-right <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#caret-square-o-up"><i className="fa fa-toggle-up"></i> fa-toggle-up <span className="text-muted">(alias)</span></a></div>

                                        </div>

                                    </section>

                                    <section id="video-player">
                                        <h2 className="page-header">Video Player Icons</h2>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#arrows-alt"><i className="fa fa-arrows-alt"></i> fa-arrows-alt</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#backward"><i className="fa fa-backward"></i> fa-backward</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#compress"><i className="fa fa-compress"></i> fa-compress</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#eject"><i className="fa fa-eject"></i> fa-eject</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#expand"><i className="fa fa-expand"></i> fa-expand</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#fast-backward"><i className="fa fa-fast-backward"></i> fa-fast-backward</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#fast-forward"><i className="fa fa-fast-forward"></i> fa-fast-forward</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#forward"><i className="fa fa-forward"></i> fa-forward</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#pause"><i className="fa fa-pause"></i> fa-pause</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#play"><i className="fa fa-play"></i> fa-play</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#play-circle"><i className="fa fa-play-circle"></i> fa-play-circle</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#play-circle-o"><i className="fa fa-play-circle-o"></i> fa-play-circle-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#step-backward"><i className="fa fa-step-backward"></i> fa-step-backward</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#step-forward"><i className="fa fa-step-forward"></i> fa-step-forward</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#stop"><i className="fa fa-stop"></i> fa-stop</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#youtube-play"><i className="fa fa-youtube-play"></i> fa-youtube-play</a></div>

                                        </div>

                                    </section>

                                    <section id="brand">
                                        <h2 className="page-header">Brand Icons</h2>

                                        <div className="alert alert-success">
                                            <ul className="margin-bottom-none padding-left-lg">
                                                <li>All brand icons are trademarks of their respective owners.</li>
                                                <li>The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.</li>
                                            </ul>

                                        </div>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#adn"><i className="fa fa-adn"></i> fa-adn</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#android"><i className="fa fa-android"></i> fa-android</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#apple"><i className="fa fa-apple"></i> fa-apple</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#bitbucket"><i className="fa fa-bitbucket"></i> fa-bitbucket</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#bitbucket-square"><i className="fa fa-bitbucket-square"></i> fa-bitbucket-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#btc"><i className="fa fa-bitcoin"></i> fa-bitcoin <span className="text-muted">(alias)</span></a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#btc"><i className="fa fa-btc"></i> fa-btc</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#css3"><i className="fa fa-css3"></i> fa-css3</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#dribbble"><i className="fa fa-dribbble"></i> fa-dribbble</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#dropbox"><i className="fa fa-dropbox"></i> fa-dropbox</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#facebook"><i className="fa fa-facebook"></i> fa-facebook</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#facebook-square"><i className="fa fa-facebook-square"></i> fa-facebook-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#flickr"><i className="fa fa-flickr"></i> fa-flickr</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#foursquare"><i className="fa fa-foursquare"></i> fa-foursquare</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#github"><i className="fa fa-github"></i> fa-github</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#github-alt"><i className="fa fa-github-alt"></i> fa-github-alt</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#github-square"><i className="fa fa-github-square"></i> fa-github-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#gittip"><i className="fa fa-gittip"></i> fa-gittip</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#google-plus"><i className="fa fa-google-plus"></i> fa-google-plus</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#google-plus-square"><i className="fa fa-google-plus-square"></i> fa-google-plus-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#html5"><i className="fa fa-html5"></i> fa-html5</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#instagram"><i className="fa fa-instagram"></i> fa-instagram</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#linkedin"><i className="fa fa-linkedin"></i> fa-linkedin</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#linkedin-square"><i className="fa fa-linkedin-square"></i> fa-linkedin-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#linux"><i className="fa fa-linux"></i> fa-linux</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#maxcdn"><i className="fa fa-maxcdn"></i> fa-maxcdn</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#pagelines"><i className="fa fa-pagelines"></i> fa-pagelines</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#pinterest"><i className="fa fa-pinterest"></i> fa-pinterest</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#pinterest-square"><i className="fa fa-pinterest-square"></i> fa-pinterest-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#renren"><i className="fa fa-renren"></i> fa-renren</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#skype"><i className="fa fa-skype"></i> fa-skype</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#stack-exchange"><i className="fa fa-stack-exchange"></i> fa-stack-exchange</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#stack-overflow"><i className="fa fa-stack-overflow"></i> fa-stack-overflow</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#trello"><i className="fa fa-trello"></i> fa-trello</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tumblr"><i className="fa fa-tumblr"></i> fa-tumblr</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#tumblr-square"><i className="fa fa-tumblr-square"></i> fa-tumblr-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#twitter"><i className="fa fa-twitter"></i> fa-twitter</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#twitter-square"><i className="fa fa-twitter-square"></i> fa-twitter-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#vimeo-square"><i className="fa fa-vimeo-square"></i> fa-vimeo-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#vk"><i className="fa fa-vk"></i> fa-vk</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#weibo"><i className="fa fa-weibo"></i> fa-weibo</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#windows"><i className="fa fa-windows"></i> fa-windows</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#xing"><i className="fa fa-xing"></i> fa-xing</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#xing-square"><i className="fa fa-xing-square"></i> fa-xing-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#youtube"><i className="fa fa-youtube"></i> fa-youtube</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#youtube-play"><i className="fa fa-youtube-play"></i> fa-youtube-play</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#youtube-square"><i className="fa fa-youtube-square"></i> fa-youtube-square</a></div>

                                        </div>
                                    </section>

                                    <section id="medical">
                                        <h2 className="page-header">Medical Icons</h2>

                                        <div className="row fontawesome-icon-list">



                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#ambulance"><i className="fa fa-ambulance"></i> fa-ambulance</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#h-square"><i className="fa fa-h-square"></i> fa-h-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#hospital-o"><i className="fa fa-hospital-o"></i> fa-hospital-o</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#medkit"><i className="fa fa-medkit"></i> fa-medkit</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#plus-square"><i className="fa fa-plus-square"></i> fa-plus-square</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#stethoscope"><i className="fa fa-stethoscope"></i> fa-stethoscope</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#user-md"><i className="fa fa-user-md"></i> fa-user-md</a></div>

                                            <div className="fa-hover col-lg-3 col-md-6"><a href="#wheelchair"><i className="fa fa-wheelchair"></i> fa-wheelchair</a></div>

                                        </div>

                                    </section>

                                </div>

                            </div>
                        </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}