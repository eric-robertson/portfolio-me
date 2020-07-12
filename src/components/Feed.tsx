import React, { Component  } from 'react';
import { Flex,Text,Box,Image } from 'rebass'

interface Props { feedUpdates : {type : string, date : string, text : string, image : string, link : string } [] }

function projectPostItem () {

}

export default function Feed ( props : Props ) {

	return <div style={{position: 'relative', width: '100%', marginTop: 20 }}>
		<Text color="text" fontSize={[1]} marginLeft="20px" >Feed</Text>

		<Box style={{position: 'relative', padding: 20, width: '100%', borderRadius: 5 }} bg="backgroundActive">
			{
				props.feedUpdates.map( (f,i) => <div key={i} /> )
			}
			lsdfjsdlk
		</Box>

	</div>
}