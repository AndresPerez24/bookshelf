import React, { Component } from 'react';
import logo from './img/logo.png';
import book from './img/book.png';
import './styles/main.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="header">
					<div className="header__logo">
						<img src={logo} alt="logo"/>
					</div>
					<div className="header__search">
						<h1 className="header__title">Bookshelf</h1>
						<input className="header__input" type="text" placeholder="Search"/>
					</div>
					<div className="header__login">
						<p className="header__name">Andres Perez</p>
						<span className="header__circle">
							<img src="" alt=""/>
						</span>
					</div>
				</header>
				
				<div className="flex">
					<div className="sb-left">
						<ul className="sb-left__list uppercase ">
							Main
							<li className="sb-left__list-item">Quito</li>
							<li className="sb-left__list-item">Cartagena</li>
							<li className="sb-left__list-item">Medellin</li>
						</ul>
						<ul className="sb-left__list">New Releases</ul>
						<ul className="sb-left__list uppercase ">
							Your books
							<li className="sb-left__list-item">Readings</li>
							<li className="sb-left__list-item">History</li>
							<li className="sb-left__list-item">Read Later</li>
							<li className="sb-left__list-item">Favorites</li>
						</ul>
					</div>
					<div className="content">
						<div className="container">
							<div className="flex justify-content-space-between  align-items-center">
								<h2 className="content__title">New Releases</h2>
								<div className="filters flex">
									<p className="content__filter content__filter--line">Release Date</p>
									<p className="content__filter">Papularity</p>
								</div>
								<p className="content__th">th-list</p>
							</div>
							<div className="flex flex-wrap">
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
								<div className="content__item">
									<img src={book} alt=""/>
									<p className="content__book-title">Euphoria</p>
									<h3 className="content__author">Lily King</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="sb-right">
						<ul className="sb-right__list uppercase">
							Most read books
							<li className="sb-right__list-item">1. How google works</li>
							<li className="sb-right__list-item">1. How google works</li>
							<li className="sb-right__list-item">1. How google works</li>
							<li className="sb-right__list-item">1. How google works</li>
							<li className="sb-right__list-item">1. How google works</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
