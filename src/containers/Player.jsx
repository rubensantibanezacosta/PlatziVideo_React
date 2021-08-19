import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getVideoSource } from "../actions";
import "../assets/styles/components/Player.scss";
import NotFound from "./NotFound";

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
    hasPlaying?console.log(props.playing.source):
    useEffect(() => {
        props.getVideoSource(id);
    }, [])
    return (
        hasPlaying ? (
            <div className="Player">
                <video controls autoPlay>
                    <source src={props.playing.source} type="video/mp4" />
                </video>
                <div className="Player-return">
                    <button type="button" onClick={() => { props.history.goBack() }}>Regresar</button>
                </div>

            </div>)
            : <NotFound />

    );
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispacthToProps = {
    getVideoSource,
}
export default connect(mapStateToProps, mapDispacthToProps)(Player);