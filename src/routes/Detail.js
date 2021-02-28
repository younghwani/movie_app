import React from "react";
import "./Detail.css";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
	}
	render() {
		const { location } = this.props;
		if (location.state) {
			return (
				<div className="detail__container">
					<img
						className="detail__poster"
						src={location.state.poster}
						alt={location.state.title}
						title={location.state.title}
					></img>
					<h1 className="detail__title">{location.state.title}</h1>
					<span>made .. </span>
					<span className="detail__year">{location.state.year}</span>
					<p>genre</p>
					<ul className="detail__genres">
						{location.state.genres.map((genre, index) => (
							<li key={index}>{genre}</li>
						))}
					</ul>
					<p>Summary</p>
					<p className="detail__summary">{location.state.summary}</p>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;
