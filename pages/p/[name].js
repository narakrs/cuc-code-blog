import Head from 'next/head'
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {
    prop: PropTypes
  }
  render() {
    return (
      <div className="container">
        <Head>
          <title>Code cục súc</title>
          <meta name='description' content="Chỉ là blog của một thằng coder, đã từng là thằng code đù nhưng sau lại trở lại con đường coder thần thánh"></meta>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
          <meta name='viewport' content="width=device-width, initial-sale=1"></meta>
          <meta property="og:title" content="Code cục súc"></meta>
          <meta property="og:type" content="article"></meta>
          <meta property="og:url" content="https://laptrinhcuocsong.com/"></meta>
          <meta property="og:description" content="Chỉ là blog của một thằng coder, đã từng là thằng code đù nhưng sau lại trở lại con đường coder thần thánh"></meta>
          <meta property="og:image" content="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"></meta>
          <meta name="geo.region" content="VN-HN" />
          <meta name="geo.placename" content="Hà Nội" />
          <meta name="geo.position" content="21.024813;105.853297" />
          <meta name="ICBM" content="21.024813, 105.853297" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        </Head>
          <main className="main">
            <div className="header">
              <div className="btn_header">home</div >
              <div className="btn_header">about me</div>
              <div className="btn_header">reactjs</div>
              <div className="btn_header">contact</div>
              <div className="btn_header">community</div>
              <div className="flex_one"></div>
              <input className="inp_search_header" placeholder="search...."></input>
              <div className="btn_search_header">
                  <div className="fa fa-search" style={{color:'white'}}></div>
              </div>
              <div className="btn_header">login</div>
            </div>
          </main>
      </div>
    )
  }
}
