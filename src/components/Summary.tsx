import React, { Component  } from 'react';
import { Flex,Text,Box,Image } from 'rebass'

interface Props { text : string }

export default function AboutMe ( props : Props ) {
	return <div style={{position: 'relative', width: '100%', marginTop: 20 }}>
		<Text color="text" fontSize={[1]} marginLeft="20px" >about-me</Text>
		<Box style={{position: 'relative', padding: 20, width: '100%', borderRadius: 5 }} bg="backgroundActive" className="drop">
			{
				props.text.split('\n').map ( (t,i) => 
					<Text color='textActive' key={i} margin="5px">{ t }</Text>
			)}
		</Box>
	</div>
}