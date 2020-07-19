import React, { useState } from 'react';
import '../css/Movie.css';
import { handleArtist } from "../../redux/actions/artist";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const FimAdd = ({ handleArtist }) => {
	const [formData, setFormData] = useState({
		name: "",
		old: "",
		genre: "",
		start: "",
	});
	let history = useHistory();

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const { name, old, genre, start } = formData;
	const redirectToMovieList = () => {
		history.push(`/add-song`);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleArtist(
			name,
			old,
			genre,
			start,
			redirectToMovieList
		);
	};

	return (
		<div className="container">
			<form onSubmit={(e) => onSubmit(e)}>
				<div className="list-movie">
					<h2>Add Artist</h2>
					<br />
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="name"
							onChange={(e) => onChange(e)}
							value={name}
							name="name"
							required
						/>
					</div>

					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="old"
							onChange={(e) => onChange(e)}
							value={old}
							name="old"
							required
						/>
					</div>
					<div className="form-group">
						<select
							name="genre"
							className="custom-select"
							onChange={(e) => onChange(e)}
							style={{
								marginTop: '0px',
								backgroundColor: "white",
								borderColor: "black"
							}}
						>
							<option value="" holder="true">
								Select Genre
							</option>
							<option value="Solo" selected={genre == 'solo'}>
								Solo
							</option>
							<option value="Band" selected={genre == 'band'}>
								Band
							</option>
						</select>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="start a career"
							onChange={(e) => onChange(e)}
							value={start}
							name="start"
							required
						/>
					</div>

					<div className="form-group">
						<button
							type="submit"
							// className="btn-merah"
							style={{
								width: '10em',
								height: '2em',
								float: 'right',
								position: 'relative',
								backgroundColor: 'red',
								color: 'white',
								fontFamily: 'Product Sans',
								fontSize: 18,
								borderRadius: 4



							}}
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

FimAdd.propTypes = {
	handleArtist: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	artist: state.artist
});

export default connect(mapStateToProps, { handleArtist, })(FimAdd);
