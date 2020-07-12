import React, { Component  } from 'react';
import { Flex,Text,Box,Image } from 'rebass'
import * as Icons from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import * as NavigationState from '../statestore/NavigationState'

interface Props { project: {
	img : string, 
	name: string, 
	text : string, 
	fullText : string, 
	date : string, 
	id : string, 
	tags : string[],
	references : { name : string, email : string, title : string }[],
	link : string
}}


export function referencesPanel ( references : { name : string, email : string, title : string }[]) {
	
	if (references.length == 0 ) return <></>

	return <>
		<Text color="text" fontSize={[1]} marginLeft="20px" marginTop="20px" >{ 'References' }</Text>
		<Box style={{position: 'relative', padding: 20, width: '100%' }} bg="backgroundActive" color="text" className="drop">
			{
				references.map( (r,i) => 
					<Box key={i} >
						<Flex 
							style={{margin: 'auto', width: 'fit-content'}} 
							className="pop" 
							onClick={() => { window.location.href = `mailto:${r.email}` }} >
							<Text color='textActive' fontSize={[4]} marginBottom='5px' px={5} > {r.name} </Text>
							<Text color='text' marginTop="8px" px={5} > {r.title} </Text>		
							<Flex  px={5} > 
								<Icons.FaEnvelope style={{marginTop: 11}} />
								<Text color='text' marginTop="6px" px={1} > {r.email} </Text>	
							</Flex>
						</Flex>
					</Box>
				)
			}
		</Box>
	</>
}


export function projectAtAGlance ( props : Props) {
	let p = props.project

	return <>
		<Text color="text" fontSize={[1]} marginLeft="20px" >{ 'Project At A Glance' }</Text>
		<Box style={{position: 'relative', padding: 20, width: '100%', minHeight: 230 }} bg="backgroundActive" color="text"  className="drop">
			<img src={p.img} width='150px' style={{borderRadius: 5, position: 'absolute'}} />
			{
				props.project.link === '' 
				? <></>
				: 	<Text 
						width='150px' 
						style={{borderRadius: 5, position: 'absolute', top : 190, textAlign: 'center' }} 
						className="pop" 
						onClick={()=>{window.location.href = props.project.link }}>
						Visit Project Page 
					</Text>
			}
			<div style={{marginLeft: 170}}>
				<Text color='textActive' fontSize={[4]} marginBottom='10px'> {p.name} </Text>
				<Text color='text' lineHeight="30px"> {p.text} </Text>
				<Text color='text' lineHeight="30px" style={{marginTop: 15}}> {p.fullText} </Text>
				<div style={{ margin: 'auto', marginTop: 30, width: 'fit-content'}}>
						{ p.tags.map ( (t,i) => 
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
					<Text color='text'>{  p.date }</Text>
				</div>
							
			</div>
		</Box>
	</>
}

export default function ProjectPanel ( props : Props ) {
	let p = props.project

	return <div>
		{ projectAtAGlance( props ) }
		{ referencesPanel( props.project.references ) }
	</div>

}