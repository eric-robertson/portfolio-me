import React, { Component  } from 'react';
import { ThemeProvider } from 'emotion-theming'
import NavBar from './components/NavBar';
import * as ThemeLoader from './themes/_themeLoader'
import * as NavigationState from './statestore/NavigationState'
import { Flex,Text,Box,Image } from 'rebass'
import AtAGlance from './components/AtAGlance';
import AboutMe from './components/Summary';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Education from './components/Education';
import Social from './components/Social';
import ProjectPanel from './components/ProjectPanel';

import data from './SiteData'

export default class extends Component<{},{}>  {

	constructor ( _ : any ) {
		super ( _ );
		NavigationState.setRerenderCallback( () => { this.forceUpdate() } )
		if ( ! NavigationState.getNavOption() ) NavigationState.gotoNavOption('About')
	}

	getPageContent ( page : string ){
		switch (page){
			case 'About': 
				return <>
					<AtAGlance 
						profile={data.profile}
						name={data.name}
						pills={data.profilePills}
						status={data.status} />
					<AboutMe text={data.aboutMe} />
				</>
			case 'Projects':
				return <>
					<Projects 
						projects={ data.projects }
						filterTag={NavigationState.getNavSubOption() || ''} />

				</>

			case 'Education':
				return <>
					<Education 
						education={ data.acomplishments }
					/>
				</>
			case 'Social':
				return <>
					<Social 
						links={ data.social }
						
					/>
				</>

			case 'View':
				return <>
					<ProjectPanel
						project={ data.projects.filter( p => p.name.toLocaleLowerCase().split(' ').join('-') === NavigationState.getNavSubOption() )[0] } 
					/>
				</>

		} 
	}

	render () {
		return (
			<ThemeProvider theme={ ThemeLoader.loadTheme('Default') }>
				<Box bg='background'>
					<NavBar 
						name={ data.name }
						title={ data.title }
						options={['About', 'Projects', 'Education', 'Social']} />
						
					<Box style={{ width: 900, marginLeft: 'calc(50% - 400px)' , paddingTop: 20 }}>
						{ this.getPageContent( NavigationState.getNavOption() ) }
					</Box>

					<Footer 
						name={ data.name }
						title={ data.title }
						resume={ data.resume }
						email={ data.email }
					/>
				</Box>

			</ThemeProvider>
		)
	}
}

