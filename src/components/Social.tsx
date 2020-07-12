import React, { Component  } from 'react';
import * as Icons from 'react-icons/fa';
import { Flex,Text,Box,Image } from 'rebass'
import * as Footer from './Footer';

interface Props { links : { name : string, icon : string, link : string }[] }


export default function Social ( props : Props ) {
	
	return <div style={{position: 'relative', width: '50%', marginTop: 20, marginLeft: '25%' }}>
		{
			props.links.map( (p,i) => 
				<Box bg='backgroundActive' className="drop"  style={{borderRadius: 5, cursor: 'pointer', height: 70}} key={i} onClick={() => window.location.href = p.link}>
					<img style={{position: 'absolute', padding: 10, width: 50 }} src={p.icon} />
					<Text 
						color='textActive' 
						fontWeight='bold'
						children={p.name} 
						style={{position: 'absolute', left: 90, width: 340, textAlign: 'center', top: 20}} 
						fontSize={3}
					/>
				</Box>
			)
		}
	</div>
}