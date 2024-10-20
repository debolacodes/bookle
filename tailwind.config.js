/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
			// Add your custom fonts here
			montserrat: ['Montserrat', 'sans-serif'],
		  },
		colors: {
			transparent: 'transparent',
			'primary': '#F36E26',
			'secondary': '#5FAD56',
			'dark-gray1': '#1f1f1f',
			'dark-gray2': '#282828',
			'dark-gray3':'#404040',
			'dark-gray4':'#575757',
			'light-gray1':'#F5F5F5',
			'light-gray2':'#757688',
			'light-gray3':'#B3B3B3',
			'glow':'#A9FF53',
			'green':'#15AE73',
			'black': '#000000',
			'green':{
			  100:"#5FAD56",
			  200: '#A1CF9B'
			},
			'grey':{
			  100:'#F5F5F5',
			  200:'#333333'
			}
		},
	  },
	}
  }
  
  