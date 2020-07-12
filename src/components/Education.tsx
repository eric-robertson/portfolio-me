import React, { Component  } from 'react';
import { Flex,Text,Box,Image } from 'rebass'
import * as NavigationState from '../statestore/NavigationState'

interface Education { img : string, name : string, id : string, graduation : string, text : string }
interface Props { education : Education[] }

function educationPanel ( item : Education, key : number ) {
	return <div style={{position: 'relative', width: '100%', marginTop: 20 }} key={key}>
		<Text color="text" fontSize={[1]} marginLeft="20px" >{ item.id }</Text>
		
		<Box style={{position: 'relative', padding: 20, width: '100%', borderRadius: 5, height: 190 }} bg="backgroundActive" className="drop">
			<img src={item.img} width='150px' style={{borderRadius: 5, position: 'absolute'}} />
			<div style={{marginLeft: 170}}>
				<Text color='textActive' fontSize={[4]} marginBottom='10px'> {item.name} </Text>
				<Text color='text'> {item.text} </Text>
				<div style={{position: 'absolute', top : 20, right: 20}}>
					<Text color='text'>{  item.graduation }</Text>
				</div>
				
			</div>
		</Box>
	</div>
}

export default function Education ( props : Props ) {

	return <div style={{position: 'relative', width: '100%', marginTop: 20 }} > 
	 	{ props.education.map ( (i,k) => educationPanel( i, k ) ) }
	</div>
}