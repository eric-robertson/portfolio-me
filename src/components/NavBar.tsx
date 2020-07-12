import React from 'react';
import * as NavigationState from '../statestore/NavigationState'
import { Flex,Text,Box,Image } from 'rebass'

interface Props { options : string [], name : string, title : string }

function NavLink ( active : boolean, text : string ){

	let goTo = () => { NavigationState.gotoNavOption( text ) }
	let textStyle = active ? 'textLight' : 'text'
	let background = active ? 'badgeColor' : 'backgroundActive'
	return <Text 
		marginRight='35px' 
		padding='10px'
		color={textStyle} 
		backgroundColor={background}
		style={{cursor: 'pointer', fontWeight: 500, borderRadius: 5 }} 
		onClick={ goTo }
		children={ text }
		className="pop"
	/> 
}

export default function NavBar ( props : Props ) {

	let active = NavigationState.getNavOption();

	return ( 
		<Flex px={2} color='text' bg='backgroundActive' height={150}  >
			<Flex style={{ position: 'absolute', width: 900, left: 'calc(50% - 400px)', height: 70 }}>
				<Text 
					marginTop='25px'
					fontSize={[ 2,3,4 ]}
					children={ props.name } />
				<Text 
					marginLeft='40px'
					marginTop='35px'
					fontSize={[ 1 ]}
					children={ props.title } />
			</Flex>
			<Flex style={{ position: 'absolute', width: 900, left: 'calc(50% - 400px)', top: 100, height: 70 }} >
				{
					props.options.map( (o,i) => <div key={i}> { NavLink( o === active, o ) } </div> )
				}
			</Flex>
		</Flex> 
	)

}