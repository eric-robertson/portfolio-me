import React, { Component  } from 'react';
import { Flex,Text,Box,Image } from 'rebass'
import * as NavigationState from '../statestore/NavigationState'

interface Project { img : string, name: string, text : string, date : string, id : string, tags : string[] }
interface Props { projects : Project[], filterTag : string  }

function projectPanel ( item : Project, key : number ) {
	return <div style={{position: 'relative', width: '100%', marginTop: 20, cursor: 'pointer' }} onClick={ () => NavigationState.gotoNavOption(`View/${item.id}`)} key={key}>
		<Text color="text" fontSize={[1]} marginLeft="20px" >{ item.id }</Text>
		
		<Box style={{position: 'relative', padding: 20, width: '100%', borderRadius: 5, height: 190 }} bg="backgroundActive" className="drop">
			<img src={item.img} width='150px' style={{borderRadius: 5, position: 'absolute'}} />
			<div style={{marginLeft: 170}}>
				<Text color='textActive' fontSize={[4]} marginBottom='10px'> {item.name} </Text>
				<Text color='text'> {item.text} </Text>
				<div style={{position: 'absolute', bottom : 20, right: 20}}>
					{ item.tags.map ( (t,i) => 
						<Box 
							color='textLight'
							onClick={(evt) => { NavigationState.gotoNavOption(`Projects/${t}`); evt.stopPropagation() } }
							className='pop'
							sx={{ display: 'inline-block', bg: 'badgeColor', px: 2, py: 1, marginLeft: 1, borderRadius: 3, fontSize: 1 }}
							key={i}
							children={t} />
					)}
				</div>
				<div style={{position: 'absolute', top : 20, right: 20}}>
					<Text color='text'>{  item.date }</Text>
				</div>
				
			</div>
		</Box>
	</div>
}

export default function Projects ( props : Props ) {

	let items = props.projects
		.sort( (a,b) => (a.date < b.date) ? 1 : -1 )
		.filter( i => i.tags.includes( props.filterTag ) || props.filterTag == '')

	return <div style={{position: 'relative', width: '100%', marginTop: 20 }} > 
		{ props.filterTag == ''
			? 	<></>
			: 	<Text color='text' >
					Viewing 
						<Text color='textActive' children={props.filterTag} style={{display: 'inline'}} px='2' fontWeight='bold' /> 
					Projects 
						<Text color='textActive' children={items.length} style={{display: 'inline'}} px='2' fontWeight='bold' /> 
					Results of 
						<Text color='textActive' children={props.projects.length} style={{display: 'inline'}} px='2' fontWeight='bold' /> 
					total 
				</Text>}
	 	{ items.map ( (i,k) => projectPanel( i, k ) ) }
	</div>
}