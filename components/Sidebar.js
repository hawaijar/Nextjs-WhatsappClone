import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/chat"
import MoreVertIcon from "@material-ui/icons/MoreVert";

function IconsContainer() {
	return(
		<div>
			<IconButton>
				<ChatIcon />
			</IconButton>
			<IconButton>
				<MoreVertIcon />
			</IconButton>
		</div>
	)
}

const Header = () => {
	return (
		<div className={
			`flex items-center
			sticky bg-white z-20
			justify-between p-1 h-20
			border-b-2 border-gray-100
			`}>
			<Avatar className={'m-2.5 cursor-pointer hover:opacity-80'} />
			<IconsContainer />
		</div>
	);
};

const Container = ({children}) => {
	return (
		<div>
			{children}
		</div>
	);
};

const Sidebar = () => {
	return (
		<div>
			<Container>
				<Header />
			</Container>
		</div>
	);
};

export default Sidebar;
