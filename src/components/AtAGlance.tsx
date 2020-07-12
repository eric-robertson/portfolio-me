import React, { Component  } from 'react';
import * as NavigationState from '../statestore/NavigationState'
import { Flex,Text,Box,Image } from 'rebass'

interface Props { profile : string, name : string, status : string, pills : string[] }

function fancyTextLabel ( value : string, label : string ){

	return <div color='text' style={{display: 'flex', padding: 10}} >
		<Text fontSize={[ 2 ]} marginTop='5px' marginRight='5px'> {`<${label}>`}</Text>
		<Text 
			color='textActive'
			style={{fontWeight: 600}} 
			fontSize={[ 3 ]}
			children={ value } />
		<Text fontSize={[ 2 ]} marginTop='5px' marginLeft='5px' >{`</${label}>`}</Text>
	</div>

}

export default function AtAGlance ( props : Props ) {
	return <div style={{position: 'relative', width: '100%'}}>
		<Text color="text" fontSize={[1]} marginLeft="20px" >at-a-glance</Text>
		<Box style={{position: 'relative', padding: 10, width: '100%', borderRadius: 5 }} bg="backgroundActive" className="drop">
			<img src={props.profile} width='400px' style={{borderRadius: 5}} />
			<Box style={{position: 'absolute', left : 450, width: 450, top : 50, height: 300 }} color='text' >
				{ fancyTextLabel(props.name, 'name') }
				{ fancyTextLabel(props.status, 'status') }
				<div style={{ marginLeft: 10,  marginTop: 90, width: 'fit-content', textAlign: 'left'}}>
					See Some of my expierience by tags: <br/><br/>
					{ props.pills.map ( (t,i) => 
						<Box 
							color='textLight'
							onClick={(evt) => { NavigationState.gotoNavOption(`Projects/${t}`); evt.stopPropagation() } }
							className='pop'
							sx={{ display: 'inline-block', bg: 'badgeColor', px: 2, py: 1, marginLeft: 1, borderRadius: 3, fontSize: 1 }}
							key={i}
							children={t} />
					)}
				</div>
			</Box>
		</Box>
	</div>
}