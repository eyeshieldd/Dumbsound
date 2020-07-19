import React, { useEffect, useState } from "react";
// import '../css/Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { addSong } from '../../redux/actions/song';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getArtist } from "../../redux/actions/artist";

const AddMusic = ({ addSong, getArtist, artist: { artistAll } }) => {
    useEffect(
        () => {
            getArtist();
        },
        [getArtist]
    );
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        thumbnail: null,
        attache: '',
        artisId: '',
    });
    let history = useHistory();

    const onChange = (event) => {
        const updateForm = { ...formData };
        updateForm[event.target.name] =
            event.target.type === 'file' ? event.target.files[0] : event.target.value;
        setFormData(updateForm);
    };

    const { title, attache, year, thumbnail, artisId } = formData;


    const redirectToMovieList = () => {
        history.push(`/`);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let payload = {};
        payload = {
            title,
            year,
            thumbnail,
            attache,
            artisId,
        };

        addSong(payload, redirectToMovieList);

    };

    const onChangeFiles = (e) => {
        let fileInfo = e.target.files[0];

        let reader = new FileReader();

        if (e.target.files.length === 0) {
            return;
        }

        reader.readAsDataURL(fileInfo);
    };
    return (
        <div className="container">



            <form onSubmit={(e) => onSubmit(e)}>
                <div className="list-movie">
                    <h2>Add Music</h2>
                    <br />
                    <div className="satuline">
                        <div className="form-group">
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Title"
                                style={{
                                    width: '160%'
                                }}
                                onChange={(e) => onChange(e)}
                                value={title}
                                name="title"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="button"
                                onClick={() => {
                                    document
                                        .getElementsByName('thumbnail')[0]
                                        .click();
                                }}
                                className="btn-grey"
                                style={{
                                    width: '40%',
                                    height: '50px',
                                    fontSize: '18px',
                                    textAlign: 'left',
                                    float: 'right'
                                }}
                            >
                                Attach Thumbnail{' '}
                                <div
                                    style={{
                                        float: 'right',
                                        display: 'inline',
                                        fontSize: '20px'
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPaperclip} />
                                </div>
                            </button>
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                onChange={(e) => {
                                    onChange(e);
                                    onChangeFiles(e);
                                }}
                                name="thumbnail"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="custom-input"
                            placeholder="Year"
                            onChange={(e) => onChange(e)}
                            value={year}
                            name="year"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="artisId"
                            className="custom-select"
                            style={{ backgroundColor: "white", borderColor: "black" }}
                            onChange={(e) => {
                                onChange(e);
                            }}
                            required
                        >
                            <option value="">Select Artist</option>
                            {artistAll == null ? (
                                'loading'
                            ) : (
                                    artistAll.map((x) => (
                                        <option value={x.id} key={x.id}>
                                            {x.name}
                                        </option>
                                    ))
                                )}
                        </select>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="custom-input"
                            placeholder="Link /Url"
                            onChange={(e) => onChange(e)}
                            value={attache}
                            name="attache"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
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
        </div >
    );
};

AddMusic.propTypes = {
    addSong: PropTypes.func.isRequired,
    getArtist: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    songs: state.song,
    artist: state.artist
});

export default connect(mapStateToProps, { addSong, getArtist })(AddMusic);