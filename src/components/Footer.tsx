import React, { Component  } from 'react';
import { Flex,Text,Box,Image } from 'rebass'
import * as Icons from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import * as NavigationState from '../statestore/NavigationState'

interface Props { name : string, title : string, resume : string, email : string }

export function footerOption ( text : string, Icon : IconType, click : any ){
	return <div style={{cursor: 'pointer', margin: 10, position: 'relative'}} onClick={ click } className="pop">
		<Icon style={{display: 'inline-block', position: 'absolute', top: 5, left: 20}} color="#ff3838"/>
		<Text 
			style={{display: 'inline-block'}} 
			textAlign='center'
			width='200px'
			fontSize={[ 1 ]}
			color="textLight"
			children={ text } />
	</div>
}

export default function Footer ( props : Props ) {
	return <Box style={{position: 'relative', padding: 20, width: '100%', marginTop: 20 }} bg="backgroundActive" color="text" className="footer">
		
		<Flex style={{ width: 400, margin: 'auto', height: 50, position: 'relative' }} bg="backgroundActive">
			{ footerOption (props.name, Icons.FaUser, () => { NavigationState.gotoNavOption('About') } )}
			{ footerOption (props.title, Icons.FaBriefcase, () => { NavigationState.gotoNavOption('Acomplishments') } )}
		</Flex>
		
		<Flex style={{ width: 400, margin: 'auto', height: 50, position: 'relative' }} bg="backgroundActive">
			{ footerOption ('Email Me', Icons.FaEnvelope, () => { window.location.href = `mailto:${props.email}` } )}
			{ footerOption ('View Resume', Icons.FaNewspaper, () => { window.location.href = props.resume } )}
		</Flex>
	</Box>
}