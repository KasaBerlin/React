import React from "react";
import Channel from "../containers/Channel";

const ChannelField = () => (
  <div className="row">
    <Channel channelName="TECHCRUNCH" channelString="techcrunch" />
    <Channel channelName="WIRED.DE" channelString="wired-de" />
    <Channel channelName="POLYGON" channelString="polygon" />
    <Channel channelName="GRUENDERSZENE" channelString="gruenderszene" />
    <Channel channelName="ARSTECHNICA" channelString="ars-technica" />
    <Channel channelName="REUTERS" channelString="reuters" />
  </div>
);

export default ChannelField;
