import React from "react";
import { Avatar, IconButton, Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/chat"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchIcon } from "@heroicons/react/solid";
import styled from 'styled-components'

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
			justify-between p-1 h-[80px]
			border-b-2 border-gray-100
			`}>
			<Avatar className={'m-2.5 cursor-pointer hover:opacity-80'} />
			<IconsContainer />
		</div>
	);
};

const Sidebar = () => {
	return (
		<div>
			<Container>
				{/*Header/Avatar section*/}
				<Header />
				{/*Search/chats section*/}
				<Search className={'flex items-center  rounded-[2px]'}>
					<SearchIcon className={'h-5'} />
					<SearchInput className={'flex-grow'} placeholder={'Search in chats'} />
				</Search>
				{/*Start/chats/button*/}
				<SideBarButton className={'uppercase w-full '}>Start a new chat</SideBarButton>
				{/*User list*/}
			</Container>
		</div>
	);
};

const Container = styled.div``

const Search = styled.div`
	padding: 20px;
`
const SearchInput = styled.input`
	padding-left: 5px;
	outline: none;
`
const SideBarButton = styled(Button)`
	&&& {
	border-top: 1px solid whitesmoke;
	border-bottom: 1px solid whitesmoke;
	}
`

export default Sidebar;
