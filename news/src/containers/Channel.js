import React from "react";
import { connect } from "react-redux";
import { getChannel } from "../actions";

let Channel = ({ channelName, channelString, onClick, active }) => (
  console.log(active),
  (
    <div onClick={onClick} className="col-lg-2 col-md-4 col-sm-6">
      <div
        className="channel-button"
        style={{ backgroundColor: active === channelString ? "yellow" : "" }}
      >
        <p>{channelName}</p>
      </div>
    </div>
  )
);
const mapStateToProps = state => ({ active: state.channel });
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(getChannel(ownProps.channelString));
  }
});

Channel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
export default Channel;
