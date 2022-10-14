import React from "react";
import './Nav.css';
import {BrowserRouter, Routes, Route, Switch, Link} from 'react-router-dom';
import $ from 'jquery';

function Nav() {

    const navEnterEvent = () => {
        $("#c").css('display', "flex");
    }

    const navLeaveEvent = () => {
        $("#c").css('display', "none");
    }

    return(
        <div>
            <div onMouseLeave={ navLeaveEvent } 
            onMouseEnter={ navEnterEvent } className="nav">
                <span ><a className="list" href="/view/top">TOP</a></span>
                <span ><a className="list" href="/view/bottom">BOTTOM</a></span>
                <span ><a className="list" href="/view/accessories">ACC</a></span>
                <span ><a className="list" href="/view/beauty">BEAUTY</a></span>
            </div>
            <div id="c">
                <span className="c_list">
                    <p>반팔</p><hr/>
                    <p>긴팔</p><hr/>
                    <p>셔츠</p><hr/>
                </span>
                <span className="c_list">
                    <p>반바지</p><hr/>
                    <p>긴바지</p><hr/>
                    <p>치마</p><hr/>
                </span>
                <span className="c_list">
                    <p>안경</p><hr/>
                    <p>벨트</p><hr/>
                    <p>악세사리</p><hr/>
                </span>
                <span className="c_list">
                    <p>피부</p><hr/>
                    <p>헤어</p><hr/>
                    <p>향수</p><hr/>
                </span>
            </div>
        </div>
    )
}

export default Nav;